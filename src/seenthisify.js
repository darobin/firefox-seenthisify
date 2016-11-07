
chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript(null, { file: '/get-info.js' });
});

chrome.runtime.onMessage.addListener(msg => {
  chrome.tabs.create({
    active: true,
    url:    `https://seenthis.net/#ajouter=${
              encodeURIComponent(msg.title)
            }&url_site=${
              encodeURIComponent(msg.url)
            }&extrait=${
              encodeURIComponent(msg.text)
            }`
  });
});
