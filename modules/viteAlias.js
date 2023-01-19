import {resolve} from 'path';
const src = resolve(__dirname, '../src');


export default {
	'@': resolve(src),
	'@helpers': resolve(src, 'assets/helpers'),
	'@pages': resolve(src, 'pages'),
	'@UI': resolve(src, 'assets/UI'),
	'@contexts': resolve(src, 'assets/contexts'),
	'@hooks': resolve(src, 'assets/hooks'),
	'@layouts': resolve(src, 'assets/layouts'),
	'@assets': resolve(src, 'assets'),
	'@images': resolve(src, 'assets/images'),
	'@icons': resolve(src, 'assets/icons'),
	'@resources': resolve(src, 'assets/resources'),
}
