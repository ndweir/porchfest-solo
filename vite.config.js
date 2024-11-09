import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    build: {
      outDir: 'build',
    },
    server: {
      proxy: {
        "/api": 'http://localhost:5001',
      }
    },
    plugins: [
      react(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace(
            /%VITE_GOOGLE_MAPS_API_KEY%/g,
            env.VITE_GOOGLE_MAPS_API_KEY
          );
        }
      }
    ],
  };
});