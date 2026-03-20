const STORAGE_KEY = "vibepress-workspace";
const DEFAULT_HTML = `
  <h2>Welcome to <em>VibePress Studio</em></h2>
  <p>
    Start typing in the visual editor, tweak raw HTML, or jump straight into Markdown.
    Everything stays in sync, so you can paste chaos and export clarity.
  </p>
  <ul>
    <li>Paste from docs or CMS content</li>
    <li>Prettify messy markup with one click</li>
    <li>Export HTML, Markdown, or DOCX on demand</li>
  </ul>
`;

const defaultState = {
  html: DEFAULT_HTML,
  markdown: "",
  mode: "wysiwyg-html",
  soloTarget: "wysiwyg",
  settings: {
    bullet: "-",
    hardBreaks: false,
    fenceCode: true,
  },
  tidy: {
    inlineStyles: true,
    classesIds: true,
  },
};

const deepClone = (value) => JSON.parse(JSON.stringify(value));
let appState = deepClone(defaultState);

const persisted = (() => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.warn("Unable to parse saved workspace", err);
    return null;
  }
})();

if (persisted) {
  appState = {
    ...appState,
    ...persisted,
    settings: { ...appState.settings, ...(persisted.settings || {}) },
  };
}

let wysiwygEditor;
let htmlEditor;
let markdownEditor;
let turndownService;
let isSyncing = false;

const domRefs = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  initTurndown();
  initMarked();
  initEditors();
  initControls();
  initDragAndDrop();
  updateModeUI(appState.mode);
  updateStats();
});

function cacheDom() {
  domRefs.modeButtons = Array.from(document.querySelectorAll(".mode-btn[data-mode]"));
  domRefs.soloSelect = document.getElementById("solo-select");
  domRefs.checkboxGrid = document.querySelectorAll("input[data-clean]");
  domRefs.prettyBtn = document.getElementById("btn-pretty");
  domRefs.stats = {
    wysiwyg: document.getElementById("stat-words-wysiwyg"),
    markdown: document.getElementById("stat-words-markdown"),
    chars: document.getElementById("stat-chars"),
  };
  domRefs.stagePanels = {
    wysiwyg: document.getElementById("wysiwyg-panel"),
    html: document.getElementById("html-panel"),
    markdown: document.getElementById("markdown-panel"),
  };
  domRefs.settingsForm = document.getElementById("settings-form");
  domRefs.bulletSelect = document.getElementById("bullet-select");
  domRefs.hardBreaks = domRefs.settingsForm.querySelector("input[name=hardBreaks]");
  domRefs.fenceCode = domRefs.settingsForm.querySelector("input[name=fenceCode]");
  domRefs.dropZone = document.getElementById("drop-zone");
  domRefs.fileInput = document.getElementById("file-input");
  domRefs.exportHtml = document.getElementById("btn-export-html");
  domRefs.exportMarkdown = document.getElementById("btn-export-markdown");
  domRefs.exportDocx = document.getElementById("btn-export-docx");
}

function initTurndown() {
  if (!window.TurndownService) {
    console.error("Turndown not loaded");
    return;
  }
  turndownService = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: appState.settings.bullet,
    codeBlockStyle: appState.settings.fenceCode ? "fenced" : "indented",
  });
  if (window.turndownPluginGfm?.gfm) {
    turndownService.use(turndownPluginGfm.gfm);
  }
  if (!appState.markdown) {
    appState.markdown = htmlToMarkdown(appState.html);
  }
}

function initMarked() {
  if (!window.marked) return;
  marked.setOptions({
    gfm: true,
    breaks: appState.settings.hardBreaks,
    headerIds: false,
    mangle: false,
  });
}

function initEditors() {
  htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-editor"), {
    mode: "text/html",
    theme: "material-darker",
    lineNumbers: true,
    lineWrapping: true,
    viewportMargin: Infinity,
  });
  htmlEditor.setValue(appState.html);
  htmlEditor.on("change", () => {
    if (isSyncing) return;
    const value = htmlEditor.getValue();
    handleHtmlChange(value);
  });

  markdownEditor = CodeMirror.fromTextArea(document.getElementById("markdown-editor"), {
    mode: "markdown",
    theme: "material-darker",
    lineNumbers: true,
    lineWrapping: true,
    viewportMargin: Infinity,
  });
  markdownEditor.setValue(appState.markdown);
  markdownEditor.on("change", () => {
    if (isSyncing) return;
    const value = markdownEditor.getValue();
    handleMarkdownChange(value);
  });

  tinymce.init({
    selector: "#wysiwyg-editor",
    min_height:700,
    skin: "oxide-dark",
    content_css: "dark",
    menubar: true,
    plugins: "lists link code table advlist autoresize",
    toolbar:
      "undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | link table | code",
    height: 400,
    setup(editor) {
      wysiwygEditor = editor;
      editor.on("init", () => {
        editor.setContent(appState.html);
      });
      editor.on("Change KeyUp SetContent", () => {
        if (isSyncing) return;
        const content = editor.getContent({ format: "html" });
        handleWysiwygChange(content);
      });
    },
  });
}

function initControls() {
  domRefs.modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      if (mode === "solo") {
        updateModeUI("solo");
      } else {
        updateModeUI(mode);
      }
      appState.mode = mode;
      saveState();
    });
  });

  domRefs.soloSelect.value = appState.soloTarget;
  domRefs.soloSelect.addEventListener("change", (e) => {
    appState.soloTarget = e.target.value;
    if (appState.mode === "solo") {
      updateModeUI("solo");
    }
    saveState();
  });

  domRefs.checkboxGrid.forEach((cb) => {
    const key = cb.dataset.clean;
    cb.checked = appState.tidy?.[key] ?? cb.checked;
    cb.addEventListener("change", () => {
      appState.tidy = {
        ...(appState.tidy || {}),
        [key]: cb.checked,
      };
      saveState();
    });
  });

  domRefs.prettyBtn.addEventListener("click", () => runPretty());

  domRefs.settingsForm.addEventListener("change", (e) => {
    const formData = new FormData(domRefs.settingsForm);
    appState.settings = {
      ...appState.settings,
      bullet: formData.get("bullet"),
      hardBreaks: formData.get("hardBreaks") === "on",
      fenceCode: formData.get("fenceCode") === "on",
    };
    turndownService.setOptions({
      bulletListMarker: appState.settings.bullet,
      codeBlockStyle: appState.settings.fenceCode ? "fenced" : "indented",
    });
    initMarked();
    ingestHtml(appState.html, "settings");
    saveState();
  });

  domRefs.bulletSelect.value = appState.settings.bullet;
  domRefs.hardBreaks.checked = appState.settings.hardBreaks;
  domRefs.fenceCode.checked = appState.settings.fenceCode;

  domRefs.exportHtml.addEventListener("click", () => downloadText(appState.html, "vibepress.html", "text/html"));
  domRefs.exportMarkdown.addEventListener("click", () => downloadText(appState.markdown, "vibepress.md", "text/markdown"));
  domRefs.exportDocx.addEventListener("click", () => exportDocx());
}

function initDragAndDrop() {
  ["dragenter", "dragover", "dragleave", "drop"].forEach((evt) => {
    domRefs.dropZone.addEventListener(evt, (e) => e.preventDefault());
    document.addEventListener(evt, (e) => {
      if (evt === "dragover") e.preventDefault();
    });
  });

  ["dragenter", "dragover"].forEach((evt) => {
    domRefs.dropZone.addEventListener(evt, () => domRefs.dropZone.classList.add("dragover"));
  });
  ["dragleave", "drop"].forEach((evt) => {
    domRefs.dropZone.addEventListener(evt, () => domRefs.dropZone.classList.remove("dragover"));
  });

  domRefs.dropZone.addEventListener("drop", (e) => {
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  });

  domRefs.fileInput.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
      domRefs.fileInput.value = "";
    }
  });
}

function handleWysiwygChange(content) {
  const clean = DOMPurify.sanitize(content, { USE_PROFILES: { html: true } });
  const markdown = htmlToMarkdown(clean);
  syncEditors(() => {
    appState.html = clean;
    appState.markdown = markdown;
    htmlEditor.setValue(clean);
    markdownEditor.setValue(markdown);
  });
  updateStats();
  saveState();
}

function handleHtmlChange(rawHtml) {
  const clean = DOMPurify.sanitize(rawHtml, { USE_PROFILES: { html: true } });
  const markdown = htmlToMarkdown(clean);
  syncEditors(() => {
    appState.html = clean;
    appState.markdown = markdown;
    setWysiwygContent(clean);
    markdownEditor.setValue(markdown);
  });
  updateStats();
  saveState();
}

function handleMarkdownChange(markdown) {
  const html = markdownToHtml(markdown);
  syncEditors(() => {
    appState.markdown = markdown;
    appState.html = html;
    htmlEditor.setValue(html);
    setWysiwygContent(html);
  });
  updateStats();
  saveState();
}

function syncEditors(fn) {
  isSyncing = true;
  try {
    fn();
  } finally {
    isSyncing = false;
  }
}

function setWysiwygContent(html) {
  if (!wysiwygEditor) return;
  if (wysiwygEditor.initialized) {
    wysiwygEditor.setContent(html);
  } else {
    const handler = () => {
      wysiwygEditor.off("init", handler);
      wysiwygEditor.setContent(html);
    };
    wysiwygEditor.on("init", handler);
  }
}

function htmlToMarkdown(html) {
  if (!turndownService) return "";
  return turndownService.turndown(html);
}

function markdownToHtml(markdown) {
  if (!window.marked) return markdown;
  return DOMPurify.sanitize(marked.parse(markdown));
}

function ingestHtml(html) {
  const clean = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  const markdown = htmlToMarkdown(clean);
  syncEditors(() => {
    appState.html = clean;
    appState.markdown = markdown;
    htmlEditor?.setValue(clean);
    markdownEditor?.setValue(markdown);
    setWysiwygContent(clean);
  });
  updateStats();
  saveState();
}

function ingestMarkdown(markdown) {
  const html = markdownToHtml(markdown);
  syncEditors(() => {
    appState.markdown = markdown;
    appState.html = html;
    markdownEditor?.setValue(markdown);
    htmlEditor?.setValue(html);
    setWysiwygContent(html);
  });
  updateStats();
  saveState();
}

function updateModeUI(mode) {
  domRefs.modeButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === mode));
  const visibleMap = {
    "wysiwyg-html": ["wysiwyg", "html"],
    "html-markdown": ["html", "markdown"],
    "wysiwyg-markdown": ["wysiwyg", "markdown"],
    solo: [appState.soloTarget || "wysiwyg"],
  };
  const list = visibleMap[mode] || ["wysiwyg", "html"];
  Object.entries(domRefs.stagePanels).forEach(([key, panel]) => {
    panel.classList.toggle("visible", list.includes(key));
  });
}

function runPretty() {
  const options = {};
  domRefs.checkboxGrid.forEach((cb) => {
    if (cb.checked) options[cb.dataset.clean] = true;
  });
  let html = appState.html;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;

  if (options.inlineStyles) {
    wrapper.querySelectorAll("[style]").forEach((el) => el.removeAttribute("style"));
  }
  if (options.classesIds) {
    wrapper.querySelectorAll("[class]").forEach((el) => el.removeAttribute("class"));
    wrapper.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
  }
  if (options.emptyTags) {
    wrapper.querySelectorAll("*").forEach((el) => {
      const isVoid = ["img", "br", "hr", "input"].includes(el.tagName.toLowerCase());
      if (!isVoid && !el.textContent.trim() && !el.children.length) {
        el.remove();
      }
    });
  }
  html = wrapper.innerHTML;
  if (options.nbsp) {
    html = html.replace(/(&nbsp;\s*)+/gi, " ").replace(/\s{2,}/g, " ");
  }
  if (options.comments) {
    html = html.replace(/<!--([\s\S]*?)-->/g, "");
  }
  if (options.aiWatermarks) {
    html = html.replace(/[\u200B-\u200D\uFEFF]/g, "");
  }
  ingestHtml(html);
}

function processFile(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  if (ext === "docx") {
    if (!window.mammoth) {
      alert("Mammoth.js not loaded");
      return;
    }
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      try {
        const result = await mammoth.convertToHtml({ arrayBuffer });
        ingestHtml(result.value);
      } catch (err) {
        console.error(err);
        alert("Unable to convert DOCX file");
      }
    };
    reader.readAsArrayBuffer(file);
  } else {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      if (ext === "md" || ext === "markdown") {
        ingestMarkdown(text);
      } else {
        ingestHtml(text);
      }
    };
    reader.readAsText(file);
  }
}

function downloadText(content, filename, mime) {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  saveAs(blob, filename);
}

function exportDocx() {
  if (!window.htmlDocx) {
    alert("html-docx-js not available");
    return;
  }
  const converted = htmlDocx.asBlob(`<!DOCTYPE html><html><body>${appState.html}</body></html>`);
  saveAs(converted, "vibepress.docx");
}

function updateStats() {
  const temp = document.createElement("div");
  temp.innerHTML = appState.html;
  const text = temp.textContent || "";
  const words = text.trim().split(/\s+/).filter(Boolean);
  domRefs.stats.wysiwyg.textContent = words.length;

  const mdWords = appState.markdown.trim().split(/\s+/).filter(Boolean);
  domRefs.stats.markdown.textContent = mdWords.length;
  domRefs.stats.chars.textContent = text.length;
}

function saveState() {
  const payload = {
    html: appState.html,
    markdown: appState.markdown,
    mode: appState.mode,
    soloTarget: appState.soloTarget,
    settings: appState.settings,
    tidy: appState.tidy,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn("Unable to save workspace", err);
  }
}
