<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SocioLearn Platform

Application React d'apprentissage sociologique.

## 🚀 Comment mettre en ligne (Hébergement FTP / FileZilla)

L'application ne peut pas être envoyée telle quelle sur un serveur. Vous devez créer la version de production.

1. **Installation** (si ce n'est pas déjà fait) :
   ```bash
   npm install
   ```

2. **Construction (Build)** :
   C'est l'étape cruciale qui transforme le code `.tsx` en code lisible par les navigateurs.
   ```bash
   npm run build
   ```

3. **Déploiement** :
   - Une fois la commande terminée, un dossier **`dist`** apparaît dans votre projet.
   - Ouvrez ce dossier `dist`.
   - Copiez **tout le contenu** (le fichier `index.html` et le dossier `assets`) vers votre serveur FTP (dans `public_html` ou `www`).

**Note Importante :** Ne transférez jamais les fichiers `.tsx`, `node_modules` ou `src` sur le serveur. Uniquement le contenu de `dist`.

## Run Locally

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env`
3. Run the app:
   `npm run dev`