import React, { useEffect } from 'react';

const GoogleTranslateWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
    
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',  // Set your website's default language
        includedLanguages: 'en,es,fr,de,ru,pt',  // Add the languages you want to support
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      }, 'google_translate_element');
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslateWidget;