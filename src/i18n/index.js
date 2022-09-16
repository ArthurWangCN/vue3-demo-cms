import { createI18n } from "vue-i18n";
import EN from './en'
import ZH from './zh'

const messages = {
  en: EN,
  zh: ZH
}

const getLanguage = () => {
  let language = navigator.language.includes('zh') ? 'zh' : 'en';
  localStorage.setItem('language', language);
  return language;
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getLanguage() || 'zh',
  messages: messages
})

export default i18n

