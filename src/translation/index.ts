import LocalizedStrings from 'react-native-localization';
import english from './en';
import indonesian from './id';

export const strings = new LocalizedStrings({
  id: indonesian,
  en: english,
});

export const changeLaguage = (languageKey: string) => {
  strings.setLanguage(languageKey);
};
