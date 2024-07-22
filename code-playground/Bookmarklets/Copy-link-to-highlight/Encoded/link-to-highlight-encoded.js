//SOURCE: https://gist.github.com/mimonelu/0880fb5a67f53e952921d281e7a37ee7
(function() {
  const text = getSelection().toString();
  if (text !== '') {
    const textFragmentLink = `${location.href}#:~:text=${encodeURIComponent(text.trim())}`;
    prompt('Text Fragment', textFragmentLink);
  } else {
    alert('No text selected.');
  }
})();