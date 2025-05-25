function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'hi,en',
    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
  }, 'google_translate_element');
}

// Fallback re-render logic in case widget doesn't load on mobile
window.addEventListener("load", function () {
  setTimeout(() => {
    const banner = document.querySelector(".goog-te-banner-frame");
    const widget = document.getElementById("google_translate_element");
    if (!banner && (!widget || widget.innerHTML.trim() === "")) {
      googleTranslateElementInit(); // Retry initialization
    }
  }, 1500);
});
