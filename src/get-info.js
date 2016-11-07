
chrome.runtime.sendMessage({
  title:  document.title,
  url:    document.location.href,
  text:   (window.getSelection() && window.getSelection().toString()) || '',
});
