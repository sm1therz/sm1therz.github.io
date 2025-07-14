// service-worker.js
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-navigation requests (e.g., assets)
  if (request.mode !== 'navigate') return;

  // Skip requests that already end in .html or have a file extension
  if (url.pathname.endsWith('.html') || /\.[a-zA-Z0-9]+$/.test(url.pathname)) return;

  // Rewrite request to .html version
  const rewrittenURL = new URL(url.href);
  rewrittenURL.pathname = rewrittenURL.pathname.replace(/\/$/, '') + '.html';

  event.respondWith(fetch(rewrittenURL).catch(() => fetch(request)));
});
