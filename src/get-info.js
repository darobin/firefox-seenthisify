
chrome.runtime.sendMessage({
  title:  document.title,
  url:    document.location,
  text:   window.getSelection() || '',
});
