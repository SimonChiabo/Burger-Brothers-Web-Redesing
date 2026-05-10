import React, { createContext, useState, useContext, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const t = useCallback((path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      if (value && value[key]) {
        value = value[key];
      } else {
        console.warn(`Translation path "${path}" not found for language "${language}"`);
        return path;
      }
    }
    return value;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
