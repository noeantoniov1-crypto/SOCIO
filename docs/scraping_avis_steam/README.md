# Scraping des avis Steam — Marvel Rivals (app 2767030)

- **Collecte** : `collecte_avis_steam.py`, API publique `store.steampowered.com/appreviews`, avis en anglais, jusqu'à 400 avis par semaine du 06/12/2024 au 29/09/2026 (échantillon stratifié, 37 990 avis).
- **Pondération** : chaque semaine est pondérée par son volume réel d'avis (`volumes_par_semaine.csv`, population estimée : 303 135 avis).
- **Minimisation** : ni identifiant Steam ni pseudo conservés ; seulement date, vote (recommandé ou non), temps de jeu au moment de l'avis, nombre de votes « utile » et texte.
- **Analyse** : `analyse_avis_steam.py` (repérage par mots-clés) ; résultats dans `resultats_analyse.txt`.
- **Ancienneté des auteurs** : `anciennete_auteurs.py` (répartition pondérée des auteurs par temps de jeu, par trimestre) ; résultats dans `resultats_anciennete_auteurs.txt`. Indice seulement : un jeu plus ancien a mécaniquement des auteurs plus expérimentés.
- **Limites** : Steam = PC uniquement ; anglais uniquement ; mots-clés imparfaits ; seuls les joueurs qui écrivent un avis sont représentés.
- Collecte réalisée le 30/09/2026.
- **Chronologie** : `chrono_avis.py` croise les événements datés de `evenements.csv` (patchs, annonces) avec les avis des 14 jours avant et après, par thème (équilibrage, partie rapide, classé, matchmaking) ; résultats dans `resultats_chrono.txt`, synthèse dans `../H5_chronologie_sources_avis.md`. Usage : `python3 chrono_avis.py sample_en.jsonl mois` ou `python3 chrono_avis.py sample_en.jsonl ev evenements.csv`.
- **Deux derniers mois** : `collecte_2_derniers_mois.py` collecte tous les avis anglais du 01/08/2026 au 29/09/2026 (11 463 avis, collecte exhaustive, pas d'échantillon) ; `analyse_2_derniers_mois.py` les classe en 19 thèmes par mots-clés, avant et après la S10 (11/09/2026) et par temps de jeu ; résultats dans `resultats_2_derniers_mois.txt`. Le fichier brut (`avis_2_derniers_mois.jsonl`, avec le texte des avis) n'est pas versionné.
