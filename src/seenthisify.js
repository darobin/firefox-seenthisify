
chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript(null, { file: '/get-info.js' });
});
