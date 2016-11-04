
window.open(
  `http://seenthis.net/#ajouter=${
    encodeURIComponent(document.title)
  }&url_site=${
    encodeURIComponent(document.location)
  }&extrait=${
    encodeURIComponent(window.getSelection() || '')
  }`
);
