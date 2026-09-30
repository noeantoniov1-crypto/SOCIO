# Scraping des avis Steam — Marvel Rivals (app 2767030)

- **Collecte** : `collecte_avis_steam.py`, API publique `store.steampowered.com/appreviews`, avis en anglais, jusqu'à 400 avis par semaine du 06/12/2024 au 29/09/2026 (échantillon stratifié, 37 990 avis).
- **Pondération** : chaque semaine est pondérée par son volume réel d'avis (`volumes_par_semaine.csv`, population estimée : 303 135 avis).
- **Minimisation** : ni identifiant Steam ni pseudo conservés ; seulement date, vote (recommandé ou non), temps de jeu au moment de l'avis, nombre de votes « utile » et texte.
- **Analyse** : `analyse_avis_steam.py` (repérage par mots-clés) ; résultats dans `resultats_analyse.txt`.
- **Limites** : Steam = PC uniquement ; anglais uniquement ; mots-clés imparfaits ; seuls les joueurs qui écrivent un avis sont représentés.
- Collecte réalisée le 30/09/2026.
