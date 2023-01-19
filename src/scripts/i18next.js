
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
	supportedLngs: ['en', 'ru'],
	fallbackLng: 'ru',
	debug: false,
	detection: {
		order: ['localStorage', 'cookie'],
		caches: ['localStorage', 'cookie']
	},
	interpolation:{
		escapeValue: false
	}
});



export default i18next;
