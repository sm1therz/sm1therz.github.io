const initialState = {
  html: '<p><strong>Hello!</strong> Start editing…</p>',
  markdown: '**Hello!** Start editing…',
  mode: localStorage.getItem('mode') || 'wysiwyg-html'
};

const saved = localStorage.getItem('tri-mode');
if (saved) {
  try {
    const parsed = JSON.parse(saved);
    initialState.html = parsed.html || initialState.html;
    initialState.markdown = parsed.markdown || initialState.markdown;
  } catch (err) {
    console.warn('Failed to parse autosave', err);
  }
}

const state = { ...initialState };
let syncLock = false;
let cmHtml, cmMarkdown;
let tinyReady = false;

const statusEl = document.getElementById('status');
const modeToggle = document.getElementById('modeToggle');
const hiddenFile = document.getElementById('hiddenFile');
const cleanChecks = [...document.querySelectorAll('[data-clean]')];
const headingSelect = document.getElementById('headingStyle');
const codeSelect = document.getElementById('codeStyle');
const mdBreaksCheckbox = document.getElementById('mdBreaks');
const linkifyCheckbox = document.getElementById('linkify');

const turndownService = new TurndownService({
  headingStyle: headingSelect.value,
  codeBlockStyle: codeSelect.value,
  emDelimiter: '*',
  strongDelimiter: '**'
});
turndownService.use(turndownPluginGfm.gfm);

let md = window.markdownit({
  html: true,
  linkify: linkifyCheckbox.checked,
  breaks: mdBreaksCheckbox.checked
});

function updateTurndownOptions() {
  turndownService.options.headingStyle = headingSelect.value;
  turndownService.options.codeBlockStyle = codeSelect.value;
  md = window.markdownit({
    html: true,
    linkify: linkifyCheckbox.checked,
    breaks: mdBreaksCheckbox.checked
  });
  pushHtml(state.html); // re-sync derived outputs
}

headingSelect.addEventListener('change', updateTurndownOptions);
codeSelect.addEventListener('change', updateTurndownOptions);
mdBreaksCheckbox.addEventListener('change', updateTurndownOptions);
linkifyCheckbox.addEventListener('change', updateTurndownOptions);

function setStatus(message) {
  statusEl.textContent = message;
  clearTimeout(setStatus._timeout);
  setStatus._timeout = setTimeout(() => (statusEl.textContent = 'Ready'), 2500);
}

function saveState() {
  localStorage.setItem('tri-mode', JSON.stringify({ html: state.html, markdown: state.markdown }));
  localStorage.setItem('mode', state.mode);
}

function sanitize(html) {
  return DOMPurify.sanitize(html, { ADD_ATTR: ['style'] });
}

function applyCleanup(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  cleanChecks.forEach(check => {
    if (!check.checked) return;
    switch (check.dataset.clean) {
      case 'inlineStyles':
        doc.querySelectorAll('[style]').forEach(el => el.removeAttribute('style'));
        break;
      case 'classesIds':
        doc.querySelectorAll('[class]').forEach(el => el.removeAttribute('class'));
        doc.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
        break;
      case 'emptyTags':
        doc.querySelectorAll('*').forEach(el => {
          if (!el.textContent.trim() && !el.children.length) el.remove();
        });
        break;
      case 'nbspSpaces':
        doc.body.innerHTML = doc.body.innerHTML.replace(/(&nbsp;|\s)+/g, ' ');
        break;
      case 'comments':
        const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_COMMENT);
        const toRemove = [];
        while (walker.nextNode()) toRemove.push(walker.currentNode);
        toRemove.forEach(node => node.parentNode.removeChild(node));
        break;
      default:
        break;
    }
  });

  return doc.body.innerHTML;
}

function pushHtml(html) {
  syncLock = true;
  const clean = sanitize(html);
  state.html = clean;
  state.markdown = turndownService.turndown(clean);
  cmHtml && cmHtml.setValue(clean);
  cmMarkdown && cmMarkdown.setValue(state.markdown);
  if (tinyReady) tinymce.get('wysiwyg').setContent(clean);
  saveState();
  syncLock = false;
}

function pushMarkdown(markdown) {
  syncLock = true;
  state.markdown = markdown;
  state.html = sanitize(md.render(markdown));
  cmMarkdown && cmMarkdown.setValue(markdown);
  cmHtml && cmHtml.setValue(state.html);
  if (tinyReady) tinymce.get('wysiwyg').setContent(state.html);
  saveState();
  syncLock = false;
}

function initTiny() {
  tinymce.init({
    selector: '#wysiwyg',
    menubar: true,
    height: '100%',
    branding: false,
    plugins: 'lists table link image code paste wordcount',
    toolbar:
      'undo redo | styles | bold italic underline forecolor | bullist numlist | alignleft aligncenter alignright | table link | removeformat | code',
    setup(editor) {
      editor.on('init', () => {
        tinyReady = true;
        editor.setContent(state.html);
      });
      editor.on('change input undo redo', () => {
        if (syncLock) return;
        syncLock = true;
        const content = sanitize(editor.getContent());
        state.html = content;
        cmHtml.setValue(content);
        state.markdown = turndownService.turndown(content);
        cmMarkdown.setValue(state.markdown);
        saveState();
        syncLock = false;
      });
    }
  });
}

function initCodeMirror() {
  cmHtml = CodeMirror.fromTextArea(document.getElementById('htmlEditor'), {
    mode: 'text/html',
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true
  });
  cmMarkdown = CodeMirror.fromTextArea(document.getElementById('markdownEditor'), {
    mode: 'markdown',
    lineNumbers: true,
    lineWrapping: true
  });

  cmHtml.setValue(state.html);
  cmMarkdown.setValue(state.markdown);

  cmHtml.on('change', () => {
    if (syncLock) return;
    pushHtml(cmHtml.getValue());
  });

  cmMarkdown.on('change', () => {
    if (syncLock) return;
    pushMarkdown(cmMarkdown.getValue());
  });
}

function initSplit() {
  Split(['#paneWysiwyg', '#paneHtml', '#paneMarkdown'], {
    sizes: [33, 33, 34],
    gutterSize: 6,
    minSize: 150,
    snapOffset: 0
  });
}

function updateModeButtons() {
  [...modeToggle.querySelectorAll('button')].forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === state.mode);
  });
}

function applyModeLayout() {
  const layout = {
    'wysiwyg-html': ['flex', 'flex', 'none'],
    'html-markdown': ['none', 'flex', 'flex'],
    'wysiwyg-markdown': ['flex', 'none', 'flex'],
    single: ['flex', 'none', 'none']
  };
  const config = layout[state.mode] || layout['wysiwyg-html'];
  document.getElementById('paneWysiwyg').style.display = config[0];
  document.getElementById('paneHtml').style.display = config[1];
  document.getElementById('paneMarkdown').style.display = config[2];
}

modeToggle.addEventListener('click', e => {
  if (!e.target.dataset.mode) return;
  state.mode = e.target.dataset.mode;
  applyModeLayout();
  updateModeButtons();
  saveState();
});

function bindToolbar() {
  document.getElementById('prettyBtn').addEventListener('click', () => {
    const cleaned = applyCleanup(state.html);
    pushHtml(cleaned);
    setStatus('Pretty pass complete');
  });

  document.getElementById('importHtml').addEventListener('click', () => {
    hiddenFile.accept = '.html,.htm,.txt';
    hiddenFile.click();
  });
  document.getElementById('importDocx').addEventListener('click', () => {
    hiddenFile.accept = '.docx';
    hiddenFile.click();
  });

  hiddenFile.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.name.toLowerCase().endsWith('.docx')) {
      const reader = new FileReader();
      reader.onload = async ev => {
        const arrayBuffer = ev.target.result;
        const result = await window.mammoth.convertToHtml({ arrayBuffer });
        pushHtml(result.value);
        setStatus('DOCX imported');
      };
      reader.readAsArrayBuffer(file);
    } else {
      const reader = new FileReader();
      reader.onload = ev => {
        pushHtml(ev.target.result);
        setStatus('HTML imported');
      };
      reader.readAsText(file);
    }
    e.target.value = '';
  });

  document.getElementById('exportHtml').addEventListener('click', () => {
    downloadFile('document.html', state.html, 'text/html');
  });
  document.getElementById('exportMarkdown').addEventListener('click', () => {
    downloadFile('document.md', state.markdown, 'text/markdown');
  });
  document.getElementById('exportDocx').addEventListener('click', () => {
    const blob = window.htmlDocx.asBlob(state.html);
    downloadBlob('document.docx', blob);
  });
  document.getElementById('plainText').addEventListener('click', () => {
    const text = DOMPurify.sanitize(state.html, { ALLOWED_TAGS: [] });
    downloadFile('document.txt', text, 'text/plain');
  });
  document.getElementById('clearStorage').addEventListener('click', () => {
    localStorage.removeItem('tri-mode');
    setStatus('Autosave cleared');
  });
}

function downloadFile(fileName, content, type) {
  const blob = new Blob([content], { type: `${type};charset=utf-8` });
  downloadBlob(fileName, blob);
}

function downloadBlob(fileName, blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  setStatus('Downloaded');
}

function init() {
  initTiny();
  initCodeMirror();
  initSplit();
  applyModeLayout();
  updateModeButtons();
  bindToolbar();
}

document.addEventListener('DOMContentLoaded', init);
