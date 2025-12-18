import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Clé API intégrée
    const API_KEY = "AIzaSyAd9ETWWfoXmY2zo1j4kDM7rQDgvqZtWz4";

    return {
      // "base: './'" force les chemins relatifs pour CSS/JS
      // Cela permet au site de marcher sur n'importe quel sous-dossier FTP
      base: './', 
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Utilise la variable d'environnement si elle existe, sinon utilise la clé fournie
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        emptyOutDir: true, // Vide le dossier dist avant de reconstruire
        sourcemap: false,
        rollupOptions: {
            output: {
                // Organise les fichiers proprement dans dist/assets
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
            }
        }
      }
    };
});