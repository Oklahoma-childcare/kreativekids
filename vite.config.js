import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({ build: { rollupOptions: { input: { home: resolve(import.meta.dirname,'index.html'), about: resolve(import.meta.dirname,'about/index.html'), programs: resolve(import.meta.dirname,'programs/index.html'), faq: resolve(import.meta.dirname,'faq/index.html'), contact: resolve(import.meta.dirname,'contact/index.html') } } } });
