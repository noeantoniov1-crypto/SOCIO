# Chronologie : communications NetEase × ressenti des joueurs (Steam)

Consultation des sources : 30/09/2026. Avis Steam : échantillon stratifié de 37 990 avis anglais (PC uniquement), pondéré par le volume réel de chaque semaine (voir `scraping_avis_steam/README.md`). Script : `scraping_avis_steam/chrono_avis.py` ; sorties brutes : `scraping_avis_steam/resultats_chrono.txt`.

Fiabilité : A = officiel NetEase ; B = presse reconnue ; C = site tiers ou encyclopédie ; D = forum.

## Méthode

- Chaque événement est classé dans un thème : équilibrage des héros, partie rapide, classé, ou matchmaking (quand il concerne les deux modes).
- Pour chaque événement, on compare les avis des 14 jours avant et des 14 jours après : part d'avis négatifs, et part des avis négatifs qui citent le thème de l'événement (repérage par mots-clés).
- Mots-clés : équilibrage = nerf, buff, OP, meta, power creep, ultimes, triple support… ; partie rapide = quick play, QP, quick match, casual ; classé = ranked, competitive, comp, placement, rank reset, elo ; matchmaking = matchmaking, SBMM, EOMM, rigged, skill gap, stomp.
- Marge d'erreur : environ ±3 points sur la part de négatifs et ±1 à 3 points sur les parts par thème (environ 800 avis par fenêtre). Un écart plus faible n'est pas interprétable.
- Limite principale : une coïncidence dans le temps n'est pas une cause. D'autres choses se passent chaque semaine (nouveau héros, skins, bugs, événements).

## 1. Chronologie des événements et ressenti sur 14 jours

| Date | Thème | Événement | Source (fiab.) | % avis négatifs avant → après | % des négatifs citant le thème avant → après | Lecture |
|---|---|---|---|---|---|---|
| 28/12/2024 | Partie rapide | Un joueur montre des bots en partie rapide après 2 défaites | [Dexerto](https://www.dexerto.com/gaming/marvel-rivals-player-proves-devs-snuck-bots-into-quickplay-matches-3016959/) (B/C) | 15,0 → 18,9 | 4,3 → 5,3 | Hausse légère des négatifs ; peu d'avis parlent de la partie rapide. |
| 10/01/2025 | Classé | Lancement S1 | [Wikipedia](https://en.wikipedia.org/wiki/Marvel_Rivals) (C) ; contenu du reset À VÉRIFIER | 18,9 → 16,7 | 8,6 → 12,3 | Le classé est plus cité, sans hausse des négatifs. |
| 11/02/2025 | Classé | Dev Talk Vol.10 : reset de 6 divisions en début de saison, 4 à mi-saison | [Officiel](https://www.marvelrivals.com/devdiaries/20250210/40954_1210988.html) (A) | 17,1 → 21,3 | 11,1 → 10,0 | Hausse des négatifs, mais pas portée par le classé. |
| 21/02/2025 | Équilibrage | S1.5 : nerfs contre le triple support | [Dexerto](https://www.dexerto.com/marvel-rivals/marvel-rivals-season-1-5-killed-triple-support-but-the-new-meta-is-much-worse-3139069/) (B) | 21,3 → 18,0 | 4,6 → 6,9 | L'équilibrage est plus cité (« flying heroes meta »). |
| 17/03/2025 | Partie rapide | Nouveaux joueurs contre des One Above All en partie rapide | [Dexerto](https://www.dexerto.com/marvel-rivals/marvel-rivals-awful-matchmaking-system-is-piting-you-against-top-rank-players-3164207/) (B/C) | 15,7 → 17,3 | 4,1 à 5,5 | Aucun effet visible ; c'est un article, pas un changement du jeu. |
| 11/04/2025 | Équilibrage | Lancement S2 | Wikipedia (C) ; balance post À VÉRIFIER | 21,0 → 20,0 | 7,1 → 4,7 | Stable. Les avis mêlent déjà nerfs et matchmaking. |
| 30/05/2025 | Équilibrage | S2.5 (rework de Jeff d'après les avis) | Wikipedia (C) ; balance post À VÉRIFIER | 30,0 → 31,2 | 11,0 → 10,4 | Le niveau de négatifs a déjà monté (30 %). |
| 11/07/2025 | Équilibrage | S3 : saisons de 2 mois, un héros par mois | [GameSpot](https://www.gamespot.com/articles/marvel-rivals-shortening-seasons-releasing-a-new-hero-every-month/1100-6530612/) (B) | 29,2 → 33,1 | 7,3 → 7,9 | Les négatifs continuent de monter ; l'équilibrage reste secondaire. |
| 08/08/2025 | Classé | S3.5 : taille de groupe limitée selon le rang | [Officiel](https://www.marvelrivals.com/gameupdate/20250801/41548_1251405.html) (A) | 45,9 → 33,9 | 19,0 → 19,4 | Pic de négatifs juste avant (46 %). Le classé est cité par 1 négatif sur 5. |
| 12/08/2025 | Matchmaking | NetEase dément l'EOMM | [X officiel](https://x.com/MarvelRivals/status/1955117077561593877) (A) | 45,9 → 33,9 | 47,6 → 36,4 | Pic : près de la moitié des négatifs parlent du matchmaking. |
| 21/08/2025 | Matchmaking | Vidéo de Zhiyong : la fourchette s'élargit avec l'attente | [X officiel](https://x.com/MarvelRivals/status/1958627668536311945) (A) ; [PC Gamer](https://www.pcgamer.com/games/third-person-shooter/marvel-rivals-devs-transparent-18-minute-breakdown-of-how-ranked-isnt-rigged-fails-to-placate-players-who-hate-losing/) (B) | 36,7 → 38,4 | 38,2 → 37,9 | L'explication officielle ne fait pas baisser les plaintes. |
| 03/09/2025 | Classé | Annonce des placements, repoussés après la S4 | [TheGamer](https://www.thegamer.com/marvel-rivals-season-4-finally-getting-placement-matches/) (B) | 38,5 → 40,5 | 19,4 → 16,6 | Plateau haut. |
| 14/11/2025 | Classé | S5 : 10 matchs de placement ; nouveaux joueurs estimés Silver III | [Officiel](https://www.marvelrivals.com/20251114/41525_1270590.html) (A) | 36,0 → 13,9 | 12,4 → 10,6 | Plus forte baisse de la série (−22 points). Elle n'est pas portée par des avis qui parlent du classé : cause à confirmer. |
| 16/01/2026 | Équilibrage | Lancement S6 | Wikipedia (C) ; balance post À VÉRIFIER | 28,1 → 25,3 | 7,9 → 5,9 | Stable. |
| 17/03/2026 | Équilibrage | Balance post : charge des ultimes −20 % | [Officiel](https://www.marvelrivals.com/balancepost/20260316/41667_1291227.html) (A) | 32,1 → 40,5 | 12,0 → 17,3 | Plus forte réaction liée à l'équilibrage (tanks nerfés, « balance team »). |
| 20/03/2026 | Classé | S7 : placement à la performance individuelle ; 3 bans par équipe | [Officiel](https://www.marvelrivals.com/gameupdate/20260318/41548_1291772.html) (A) | 41,3 → 34,0 | 14,3 → 13,6 | Baisse des négatifs, mais la fenêtre chevauche le patch du 17/03. |
| 15/05/2026 | Équilibrage | Lancement S8 | Wikipedia (C) ; balance post À VÉRIFIER | 38,7 → 35,9 | 5,9 → 7,0 | Stable. |
| 10/07/2026 | Équilibrage | Lancement S9 (buff puis nerf de Psylocke d'après les avis) | Wikipedia (C) ; balance post À VÉRIFIER | 32,6 → 31,2 | 5,8 → 7,1 | Stable. |
| 08/09/2026 | Équilibrage | Balance post : refonte de Scarlet Witch, nerf de l'énergie des stratèges | [Officiel](https://www.marvelrivals.com/20260908/41525_1313334.html) (A) | 34,6 → 37,9 | 6,9 → 8,6 | Hausse légère. |
| 11/09/2026 | Classé | S10 : nouveau système de bans | [Dev Vision Vol. 21](https://www.marvelrivals.com/20260909/41525_1313397.html) (A) ; détail des bans via [Beebom](https://beebom.com/marvel-rivals-season-10-dev-vision/) (B) | 35,3 → 47,5 | 9,5 → 5,6 | Nouveau pic de négatifs (48 %), pas porté par le classé. |
| 17/09/2026 | Partie rapide | Sanctions plus lourdes ; palier de sanction propre à la partie rapide | [Officiel](https://www.marvelrivals.com/announcements/20260917/40955_1314225.html) (A) | 37,0 → 49,7 | 4,8 → 3,6 | Les négatifs restent très hauts ; des avis signalent encore des bots en partie rapide. |

## 2. Ressenti par mois et par thème

Part d'avis négatifs, puis part des avis négatifs qui citent chaque thème (%). Un avis peut citer plusieurs thèmes.

| Mois | % négatifs | Matchmaking | Équilibrage | Partie rapide | Classé | Événement du mois |
|---|---|---|---|---|---|---|
| 12/2024 | 16,1 | 7,4 | 8,0 | 4,4 | 11,7 | Sortie (06/12) ; bots en partie rapide |
| 01/2025 | 18,0 | 10,9 | 4,1 | 5,2 | 10,6 | S1 |
| 02/2025 | 18,9 | 12,1 | 5,3 | 2,6 | 10,2 | Dev Talk reset ; S1.5 anti triple support |
| 03/2025 | 16,4 | 20,3 | 4,3 | 4,9 | 14,6 | Article Dexerto partie rapide |
| 04/2025 | 20,4 | 21,1 | 5,9 | 4,7 | 12,8 | S2 |
| 05/2025 | 28,3 | 29,1 | 9,1 | 5,4 | 19,4 | S2.5 |
| 06/2025 | 31,9 | 27,6 | 9,5 | 5,5 | 12,4 | |
| 07/2025 | 34,6 | 37,0 | 7,3 | 5,9 | 15,6 | S3 (saisons de 2 mois) |
| 08/2025 | 38,5 | 41,0 | 6,6 | 6,8 | 20,1 | S3.5 ; démenti EOMM ; vidéo Zhiyong |
| 09/2025 | 37,8 | 33,9 | 6,9 | 6,1 | 16,7 | Placements annoncés puis repoussés ; S4 |
| 10/2025 | 37,6 | 25,9 | 6,5 | 5,9 | 12,9 | S4.5 |
| 11/2025 | 17,6 | 17,3 | 7,1 | 2,0 | 11,2 | S5 placements |
| 12/2025 | 28,1 | 18,2 | 10,0 | 2,9 | 10,5 | S5.5 |
| 01/2026 | 25,9 | 15,4 | 7,5 | 4,7 | 11,3 | S6 |
| 02/2026 | 27,8 | 15,6 | 14,1 | 4,5 | 11,9 | S6.5 |
| 03/2026 | 37,1 | 13,4 | 14,7 | 5,8 | 12,6 | Ultimes −20 % ; S7 |
| 04/2026 | 36,7 | 14,4 | 6,4 | 4,3 | 11,9 | S7.5 |
| 05/2026 | 37,0 | 14,7 | 6,5 | 4,9 | 10,3 | S8 |
| 06/2026 | 36,9 | 14,2 | 8,7 | 3,9 | 10,8 | S8.5 |
| 07/2026 | 31,9 | 8,8 | 6,2 | 4,1 | 7,4 | S9 |
| 08/2026 | 35,7 | 13,4 | 7,1 | 3,4 | 8,2 | S9.5 |
| 09/2026 | 43,1 | 10,5 | 6,6 | 3,8 | 6,6 | Balance S10 ; S10 ; sanctions |

## 3. Ce que la chronologie montre (FAIT) et ce qu'on peut en tirer (HYPOTHÈSE)

| # | Constat | Statut | Lien avec H5 |
|---|---|---|---|
| 1 | 2025 : le matchmaking passe de 7 % à 41 % des avis négatifs (déc. 2024 → août 2025). L'équilibrage reste entre 4 et 10 %. | FAIT (échantillon Steam) | Soutient H5 : en 2025, la plainte dominante est le matchmaking, pas l'équilibrage. |
| 2 | Le démenti EOMM (12/08/2025) et la vidéo officielle (21/08/2025) ne font pas baisser les plaintes sur le matchmaking dans les 14 jours suivants (38 % → 38 %). | FAIT | Expliquer le système ne suffit pas ; il faut changer le système. |
| 3 | Après les placements de la S5 (14/11/2025), les négatifs chutent de 36 % à 14 %. Les plaintes sur le matchmaking passent de 26 % (oct.) à 17 % (nov.). | FAIT | Cohérent avec le rôle du calibrage (cause A). Corrélation seulement ; à confirmer avec la rétention avant / après (D10). |
| 4 | Depuis 2026, le matchmaking descend à 9-16 % des négatifs, mais la part d'avis négatifs remonte à 36-43 %. | FAIT | Les joueurs qui écrivent se plaignent d'autre chose : voir constats 5 et 6. |
| 5 | Février-mars 2026 : l'équilibrage atteint 14-15 % des négatifs, le plus haut niveau de la série, autour du patch « ultimes −20 % ». | FAIT | L'équilibrage est une cause de mécontentement réelle, mais ponctuelle (retour à 6-9 % dès avril). |
| 6 | Septembre 2026 : 43 % d'avis négatifs sur le mois (pic à 48-50 % après le 11/09), alors que matchmaking, équilibrage, classé et partie rapide sont peu cités. | FAIT | La cause du pic n'est pas identifiée par ces mots-clés : À VÉRIFIER (performance, bots, toxicité, contenu S10 ?). Ne pas l'attribuer à H5 sans preuve. |
| 7 | La partie rapide est citée par 2 à 7 % des négatifs, quel que soit le mois ; aucun changement officiel sur son matchmaking n'a été trouvé. Le seul changement officiel de 2026 (17/09) concerne les sanctions. | FAIT | Les joueurs qui écrivent des avis parlent peu de la partie rapide, alors que c'est là que débutent les nouveaux (cause B et temps 3 de H5). Les avis ne peuvent pas mesurer ce problème ; il faut les données internes (D1, D8). |
| 8 | Les avis de 2026 qui parlent encore de la partie rapide citent les bots (« bots every other quick play match », 17/09/2026) et le besoin d'un mode non classé plus sérieux (24/09/2026). | FAIT (verbatims, anecdotique) | Indice pour la cause B : des bots comblent les parties quand il manque des joueurs. HYPOTHÈSE à tester avec D7. |

## 4. Contre-argument

- Les auteurs d'avis sont surtout des joueurs expérimentés (36-42 % à plus de 200 h depuis mi-2025). Un nouveau joueur qui part vite écrit rarement un avis. La baisse des plaintes sur le matchmaking peut donc refléter un changement de qui écrit, pas une amélioration pour les nouveaux.
- Les mots-clés sont imparfaits : « balance » est parfois employé pour les équipes et non pour les héros ; « comp » peut désigner une composition d'équipe. Les tendances sont plus fiables que les niveaux absolus.
- Plusieurs événements tombent à quelques jours d'intervalle (08/08 et 12/08/2025 ; 17/03 et 20/03/2026 ; 08/09 et 11/09/2026) : leurs fenêtres se chevauchent et on ne peut pas les séparer.

## 5. À vérifier par vous

- Les balance posts des saisons 2, 2.5, 6, 8 et 9 : je n'ai utilisé que la date de lancement de saison (Wikipedia). Le contenu de ces patchs n'est pas vérifié.
- Le système de bans de la S10 (« à partir d'Or 3 ») : vu dans un compte rendu de presse, pas sur la page officielle.
- Les réinitialisations de rang en S10 : un site tiers parle d'une chute de 6 divisions, un autre de placements depuis la S5. Les deux sont en désaccord ; seule la page officielle tranchera.
- Relancer `chrono_avis.py` et capturer la sortie pour l'annexe IA.
