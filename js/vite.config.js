import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: "llm_doc_upload.html"
  },
  root: "../",
  publicDir: "../public",
  build: {
    outDir: "../dist"
  },
});
