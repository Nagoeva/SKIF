import { defineConfig } from 'vite'
import {resolve} from 'path';


// VARS 
export const root = resolve(__dirname, 'public');
export const outDir = resolve(__dirname, 'dist');
export const src = resolve(__dirname, 'src');


// modules
import alias from './modules/viteAlias';
import plugins from './modules/vitePlugins';



export default defineConfig({
	base: '/SKIF/',
  plugins,
  server:{ port: 3030 },
	resolve:{ alias },
	build:{
    outDir,
    minify:true
  },
	css:{
    devSourcemap: true,
    preprocessorOptions: { scss: { additionalData: `@import "@/styles/files/index.scss";` } }
  }
})
