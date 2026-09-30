# H5 — L'écart d'expérience du genre : dossier complet (version 4)

**Client :** comité de direction de NetEase Games · **Cas :** Marvel Rivals × Data for Business (GBS3) · **Préparé par :** Noé · **Sources consultées les :** 29 et 30/09/2026

**Ce qui change dans la version 4 :**
- **analyse de 303 K avis Steam** (scraping pondéré, section 7) : la part des avis négatifs citant le matchmaking passe de 7 % à 41 %, puis retombe après les placements ;
- **B et O du BODAK** reformulés sur le modèle de la slide 18 (League of Legends), avec un **O vraiment SMART** et sa grille de justification ;
- **matrice ICE notée sur 5** (échelle 1 à 5 alignée sur la matrice P × I de la slide 27) ;
- nouveau contre-argument (« les débutants ne se plaignent pas du matchmaking ») et nouveau KPI de contrôle externe.

Rappel de la version 3 : posture de **conseil au client NetEase**, sans accusation ; MMR en partie rapide (maillon 2b) ; classé sans rôles imposés (maillon 7) ; colonne « existe déjà chez NetEase ? » ; consultant **sous-traitant RGPD** (Art. 28).

Légende : **FAIT** = écrit dans une source lue · **HYPOTHÈSE** = à valider avec les données de NetEase · **RECO** = recommandation · *(extrait)* = source vue seulement en résumé.

---

## 1. Résumé exécutif (pour le comité)

| | |
|---|---|
| **Problème** | Sur Steam (PC), la moyenne mensuelle est passée de 306 K (janvier 2025) à un **plateau de 64 à 90 K** depuis septembre 2025. Dans les avis Steam, la part des négatifs qui citent le matchmaking est passée de **7 % (déc. 2024) à 41 % (août 2025)**, malgré votre démenti EOMM du 12/08/2025. **La défiance fixe le plancher.** |
| **Diagnostic proposé (H5)** | La perception d'injustice vient en grande partie d'un **écart d'expérience** entre vétérans du genre et débutants venus pour la licence Marvel. Trois facteurs l'amplifient : (1) démarrage à froid sans calibrage, surtout en partie rapide ; (2) fourchettes de rang qui s'élargissent quand la population baisse ; (3) liberté de composition exploitée par les joueurs expérimentés. **Cette explication n'implique aucun EOMM : elle est corrigeable.** |
| **Signal encourageant** | Juste après les placements de la S5 (14/11/2025), les plaintes sur le matchmaking tombent à **17 %** des avis négatifs. Le calibrage semble compter (corrélation, pas preuve). |
| **Recommandation** | Un audit d'équité en 30 jours **sur vos données existantes**, puis 3 tests A/B : file réservée aux débutants, garde-fous de rôles aux rangs bas, transparence sur les parties d'entraînement (bots). |
| **Coût** | Faible en collecte : les 10 données prioritaires **existent déjà** dans votre télémétrie. Nouvelles collectes limitées à 2 (question d'onboarding, micro-sondage), sous consentement. |
| **Risque principal** | Des pratiques perçues comme opaques (bots non annoncés, profilage des joueurs qui perdent) : risque de **réputation et de conformité** (RGPD Art. 5 et 22, AI Act Art. 5, mineurs). À encadrer par vous-mêmes, avant qu'on vous le reproche. |

---

## 2. L'hypothèse H5 et sa chaîne causale

> **H5.** Au lancement, Marvel Rivals a attiré en même temps des **vétérans du genre** et des **débutants venus pour la licence**, sans pouvoir les distinguer. Les débutants ont d'abord joué en **partie rapide**, où le MMR est large et non calibré, puis en classé, où tout le monde démarrait en Bronze III jusqu'à la Season 5. Les vétérans ont progressé vite en les écrasant.
> Avec la baisse de population, les fourchettes de rang s'élargissent et les écarts se maintiennent (**H5b**).
> Enfin, la **liberté de composition** fait que l'écart ne porte pas seulement sur le niveau de jeu, mais aussi sur le **savoir tactique** (méta, enchaînement d'ultimes, team-ups).
> Le joueur interprète ces défaites comme un matchmaking truqué.

| # | Maillon | Force de la preuve | Appui des avis Steam (§7) | Donnée qui tranche (chez NetEase) |
|---|---|---|---|---|
| 1 | Deux populations arrivent en même temps | Moyenne : vétérans prouvés, part des débutants inconnue | « vétérans / Overwatch / sweat » : 13,9 % des plaintes MM | Courbe de performance sur les 20 premiers matchs ; question d'onboarding |
| 2 | Le classé ne les distingue pas (Bronze III jusqu'à la S5) | **Forte (officiel)** | Plaintes MM : 26 % → 17 % des négatifs juste après la S5 | Écart de score intra-match × ancienneté |
| **2b** | Le démarrage à froid se joue d'abord en **partie rapide** (classé fermé avant le niveau 15, MMR large, sans calibrage) | Moyenne : règles officielles, MMR de la partie rapide non documenté | « partie rapide » : 12,7 % ; « bots » : 10,0 % | Écart de MMR caché en partie rapide × ancienneté ; vitesse de convergence |
| 3 | Les vétérans montent vite et traversent les débutants | Moyenne | « écart de niveau / stomp » : 13,9 % (contre 2,6 % dans l'ensemble des négatifs) | Nombre de matchs pour sortir du Bronze, par profil |
| 4 | Les défaites contre plus fort font partir | **Forte (études)** | — (les partants silencieux n'écrivent pas) | Churn J7 après un match à fort écart |
| 5 | H5b : la baisse de population élargit les écarts | **Forte (officiel, mécanisme)** | Pic des plaintes (juil.-sept. 2025) = creux de population | Largeur de fourchette × joueurs en file |
| 6 | Le jeu s'alourdit (un héros par mois) | Moyenne | — | Héros maîtrisés × ancienneté |
| **7** | Sans rôles imposés, le savoir tactique creuse l'écart et nourrit la perception d'EOMM | **Forte sur les faits**, effet sur le churn à mesurer | « rôles / compositions » : 8,3 % | Composition × résultat × rang ; groupe contre solo |

**Pourquoi des maillons :** chaque maillon se vérifie seul. La chaîne vaut ce que vaut son maillon le plus faible. Chaque maillon fragile donne **une** donnée à extraire (Smart Data), et on peut valider une partie de l'hypothèse sans le reste.

---

## 3. Arbre d'hypothèses

| Hypothèse | Rapport avec H5 | Test qui départage (données NetEase) |
|---|---|---|
| **H1** Matchmaking perçu injuste (EOMM, démenti) | H5 explique la perception **sans EOMM** | Si H5 : écarts plus forts pour les comptes jeunes et quand la population est basse. Si H1 : séries indépendantes de l'ancienneté et de la population. |
| **H1b** Smurfing | Cas particulier de H5 | Comptes jeunes à performance anormale |
| **H2** Fatigue d'équilibrage | Effet additionnel (maillon 6) | Churn aligné sur les patchs, ou sur les séries de défaites ? |
| **H3** Monétisation | Indépendante, **contrôle** | Churn payeurs / non-payeurs × ancienneté × bilan des 10 premiers matchs |
| **H4** Attrition naturelle du genre | **Contrôle** (mois 1 à 3) | Benchmark : The Finals −80 % en 1,5 mois ([Game Rant](https://gamerant.com/the-finals-player-count-decline-steam/)) |

→ Les avis Steam montrent qu'**en 2026, les négatifs restent nombreux (36 à 43 %) mais ne citent plus le matchmaking qu'à 10-15 %** : d'autres causes (H2, H3, performances) prennent le relais. H5 explique surtout la **cassure de 2025**, pas tout le plateau actuel.

---

## 4. Les preuves, maillon par maillon

### Maillon 1 — Deux populations arrivent en même temps

| Donnée | Statut | Source |
|---|---|---|
| **« 45% of players who stopped playing Overwatch 2 in December played Marvel Rivals »** | **FAIT** | Newzoo, *PC & Console Gaming Report 2025*, **p. 24** |
| « Marvel Rivals' launch accounted for 7% of all F2P growth in 2024 » ; Overwatch 2 pèse −8 % | FAIT | idem, p. 24 |
| *Overwatch: Classic* : +12 % d'engagement, puis « a 26% decline […] which **coincided** with the launch of Marvel Rivals » | FAIT | idem, p. 73 |
| « Following the release of Marvel Rivals, Overwatch 2's DAU has returned to pre-launch levels seen with Overwatch 1 » | FAIT | idem, p. 78 |
| Moyennes Steam d'Overwatch 2 : environ 32 K (novembre 2024), puis 25 248 (décembre, −21,7 %) et 19 745 (−21,8 %) | FAIT (PC) | [VGC](https://www.videogameschronicle.com/news/overwatch-2s-average-pc-player-count-has-dropped-39-since-marvel-rivals-was-released/) |
| 10 M de joueurs en 3 jours, 20 M en moins de 2 semaines, 40 M en ~3 mois | FAIT *(extrait)* | [Game World Observer](https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report) |
| Part des débutants du genre | **Inconnue publiquement** ; mesurable par NetEase | — |

⚠️ « **Played** » : ces joueurs ont joué à Marvel Rivals, ce qui ne veut pas dire qu'ils y sont passés. Le titre de TheGamer (« 45 % des joueurs d'Overwatch 2 ont migré ») est une déformation.

### Maillon 2 — Le classé ne les distingue pas

| Donnée | Statut | Source |
|---|---|---|
| Jusqu'à la S4 : pas de placement, tout le monde démarre en **Bronze III** ; classé au niveau 10, puis **15** depuis la S2 | FAIT | [PCGamesN](https://www.pcgamesn.com/marvel-rivals/ranks-competitive) |
| Placements annoncés le 03/09/2025, repoussés après la S4 | FAIT | [TheGamer](https://www.thegamer.com/marvel-rivals-season-4-finally-getting-placement-matches/) |
| **S5 (14/11/2025)** : 10 matchs de placement ; **nouveau joueur = rang estimé Silver III** ; groupes de 3 maximum pendant les placements | **FAIT (officiel)** | [Notes de patch S5](https://www.marvelrivals.com/20251114/41525_1270590.html) |
| Répartition officielle des rangs en S1.5 : joueurs à moins de 5 matchs classés exclus, à cause du « poids écrasant » des joueurs placés en Bronze | FAIT | [PCGamesN](https://www.pcgamesn.com/marvel-rivals/ranks-competitive) |
| Part des avis négatifs citant le matchmaking : **25,9 % (oct. 2025) → 17,3 % (nov. 2025)** | FAIT (notre scraping) | §7 |

→ **HYPOTHÈSE** : depuis la S5, un débutant du genre démarre en Silver III, **au-dessus** des joueurs installés en Bronze. Ses premiers matchs classés pourraient être plus durs qu'avant. **À vérifier par NetEase** : rétention des nouveaux comptes avant et après le 14/11/2025.

### Maillon 2b — La partie rapide, sas d'entrée des débutants

| Donnée | Statut | Source |
|---|---|---|
| **Pas de documentation publique du MMR de la partie rapide.** La vidéo du 21/08/2025 porte sur le classé. | FAIT (absence) | [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking) |
| Critères de matchmaking cités par NetEase : composition, score compétitif, score de base, serveurs, et **rôles habituellement joués** | FAIT (rapporté) | [Gfinity](https://www.gfinityesports.com/article/netease-reveals-the-secret-to-fixing-your-marvel-rivals-losing-streak) |
| La partie rapide « privilégie la vitesse » : « huge skill gaps », « a rookie might find themselves against seasoned veterans » ; exemple d'une équipe face à des One Above All | Presse / verbatims | [Dexerto](https://www.dexerto.com/marvel-rivals/marvel-rivals-awful-matchmaking-system-is-piting-you-against-top-rank-players-3164207/) |
| MMR caché avec des fourchettes plus larges qu'en classé | HYPOTHÈSE (communauté) | [Steam](https://steamcommunity.com/app/2767030/discussions/0/578249962076258316/) |
| **Parties avec bots** après 2 défaites d'affilée (6 bots adverses contre 4 humains et 2 bots alliés), jamais confirmées ni démenties publiquement | HYPOTHÈSE solide (28/12/2024) ; encore signalées en S7 (2026) | [Dexerto](https://www.dexerto.com/gaming/marvel-rivals-player-proves-devs-snuck-bots-into-quickplay-matches-3016959/) · [TheGamer S7](https://www.thegamer.com/marvel-rivals-mixed-reviews-steam-season-7/) |
| Culture « **QP** » : on refuse de changer de rôle en partie rapide | Verbatim | [Dexerto](https://www.dexerto.com/marvel-rivals/marvel-rivals-awful-matchmaking-system-is-piting-you-against-top-rank-players-3164207/) |
| Avis Steam : « a whole team of Bronze players get paired against Celestial/Eternity players. **Needs some kind of SBMM for quickplay** » (06/2025, 906 h) ; « you can have a **bot match even if you're winning** » (07/2026, 817 h, **315 votes utiles**) | Verbatims (notre scraping) | §7 |

→ **Lecture pour le client** : avant le niveau 15, le débutant cumule MMR large, aucun calibrage, vétérans en détente et compositions libres. Si des parties d'entraînement (bots) existent, elles **traitent le symptôme** (le churn après défaite) **sans traiter la cause** (l'écart de niveau). De plus, **non annoncées**, elles créent un risque de réputation.

### Maillon 3 — Les vétérans montent vite

Vidéo de Zhiyong, **21/08/2025** — **FAIT (officiel)**. Sources : [PC Gamer](https://www.pcgamer.com/games/third-person-shooter/marvel-rivals-devs-transparent-18-minute-breakdown-of-how-ranked-isnt-rigged-fails-to-placate-players-who-hate-losing/), [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking).

- La performance est ramenée à 10 minutes et comparée aux **joueurs du même héros au même rang**.
- **Silver : 60 % performance / 40 % résultat ; Celestial : 30 % / 70 %.**
- Points : ±20 à égalité ; +25 / −15 contre plus fort ; +15 / −25 contre plus faible.
- Équipes équilibrées sur la **moyenne** des scores.
- Témoignage de joueur : « Bronze → Silver en ~6 matchs » en dominant ([S21](https://steamcommunity.com/app/2767030/discussions/0/600769761663572886/)).

→ Le système **fonctionne comme prévu** pour un vétéran : il monte vite. Le coût est supporté par les débutants qu'il croise en chemin.

### Maillon 4 — Les défaites font partir

- **Kang, Suh et Kim, *Heliyon*, 2024** (texte intégral lu, [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10839887/)) : ~6 millions de matchs, plus de 262 000 joueurs.
  - **+50 points d'écart de niveau moyen : +10 % de churn** (de 17 % à 18,7 %).
  - Jouer contre plus fort, et subir de grands écarts de niveau, augmente le churn.
  - **Les débutants sont moins sensibles au taux de victoire que les joueurs avancés.**
  - Le jeu étudié propose déjà un match contre une IA après 3 défaites d'affilée.
- **EOMM, EA/UCLA, 2017** *(extrait)* : en série de défaites, le risque de churn est d'environ 5 %, contre 2 à 2,6 % sinon ([arXiv](https://arxiv.org/pdf/1702.06820)).

→ Ce sont des **analogies** (autres jeux). La vraie mesure est dans **vos** données de churn.

### Maillon 5 — H5b : population et fourchettes

| Donnée | Statut | Source |
|---|---|---|
| Si l'attente est trop longue, la fourchette de rang **s'élargit progressivement** ; groupes mélangés (4+1+1 contre 3+2+1) ; « **rank gaps** » reconnus | **FAIT (officiel)** | [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking) |
| S3.5 : groupes de 4 et 6 interdits aux rangs élevés, car ils rendaient le matchmaking trop difficile à équilibrer | FAIT (officiel) | idem |
| Files de 20 minutes et plus au sommet ; comptes « bronze ready » à ~1 $ ; « au moins un smurf par match » chez les débutants | Verbatims | [Steam](https://steamcommunity.com/app/2767030/discussions/0/688618675547317727/) · [S21](https://steamcommunity.com/app/2767030/discussions/0/600769761663572886/) · [FandomWire](https://fandomwire.com/marvel-rivals-feels-great-until-you-run-into-this-one-infuriating-issue-as-a-newcomer/) |
| Avis Steam : « put **Silver, Gold, Plat, and Diamond-Celestial** players in the same match…? In ranked? QP is just as bad » (07/2025, 1 108 h) | Verbatim (notre scraping) | §7 |

### Maillon 6 — Le jeu s'alourdit

Depuis la S3 (11/07/2025) : saisons de 2 mois et **un héros par mois**, contre un tous les ~6 mois sur Overwatch 2 ([GameSpot](https://www.gamespot.com/articles/marvel-rivals-shortening-seasons-releasing-a-new-hero-every-month/1100-6530612/), *extrait*). Plus de 45 héros en février 2026 ([Game Rant](https://gamerant.com/overwatch-steam-player-count-versus-marvel-rivals-comparison-charts/)).

### Maillon 7 — Liberté de composition et savoir tactique

**Votre choix, et votre propre diagnostic :**

| Élément | Statut | Source |
|---|---|---|
| Guangyun Chen : « We believe **no role queue** will lead to a richer gaming experience for everyone », au nom de la liberté d'expérimenter et des team-ups | FAIT | [GamesRadar+](https://www.gamesradar.com/games/third-person-shooter/marvel-rivals-boss-doubles-down-we-believe-no-role-queue-will-lead-to-a-richer-gaming-experience-for-everyone/) · [PC Gamer](https://www.pcgamer.com/games/third-person-shooter/instead-of-role-queue-marvel-rivals-wants-to-trust-players-with-the-epic-responsibility-of-creating-a-functioning-team-by-themselves-well-be-taking-a-little-bit-more-of-a-marvel-inspired-approach/) |
| Zhiyong : une role queue **allongerait l'attente** sans garantir l'équilibre ; le système peut produire des « **imbalanced team roles** » (spécialistes d'un côté, joueur forcé sur un rôle inconnu de l'autre) | FAIT (officiel) | [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking) |
| Conseil officiel face aux séries de défaites : « **apprenez à flex** » | FAIT | [Gfinity](https://www.gfinityesports.com/article/netease-reveals-the-secret-to-fixing-your-marvel-rivals-losing-streak) |
| Bans de héros seulement à partir de **Diamant III** | FAIT | [PCGamesN](https://www.pcgamesn.com/marvel-rivals/ranks-competitive) |

**Les mécaniques exploitées :**

| Période | Mécanique | Constat | Source |
|---|---|---|---|
| S0 → S1 | **Triple Strategist** (rapproché du « GOATS » d'Overwatch) | Enchaînement d'ultimes : Luna Snow (12 s), Loki (12 s), puis un troisième : un combat bloqué **plus de 30 s**. Zhiyong : « **oppressive moments** », « may slow down the game's pace ». | [Dexerto S1.5](https://www.dexerto.com/marvel-rivals/marvel-rivals-season-1-5-killed-triple-support-but-the-new-meta-is-much-worse-3139069/) · [Dexerto, plan des devs](https://www.dexerto.com/marvel-rivals/marvel-rivals-devs-reveal-plan-to-crack-down-on-three-support-meta-3136350/) |
| S1.5 (21/02/2025) | Correctif | Ultimes de soin plus chers ; tanks à bouclier affaiblis | idem |
| Après la S1.5 | **L'abus se déplace** | Combo Storm + Human Torch : « if you […] don't have a hitscanner […] you just lose » ; méta jugé « **much worse for casuals** » | [Dexerto S1.5](https://www.dexerto.com/marvel-rivals/marvel-rivals-season-1-5-killed-triple-support-but-the-new-meta-is-much-worse-3139069/) |
| En continu | Triple tank + triple soin ; **empilement de team-ups** (jusqu'à 3 par équipe, ex. Hela qui ressuscite Loki et Thor) | Efficace contre les équipes non coordonnées | [FandomWire](https://fandomwire.com/marvel-rivals-dps-mains-are-using-the-dumbest-strategy-that-makes-3-heal-3-tank-comp-a-guaranteed-way-to-hit-celestial/) · [PC Gamer](https://www.pcgamer.com/games/third-person-shooter/instead-of-role-queue-marvel-rivals-wants-to-trust-players-with-the-epic-responsibility-of-creating-a-functioning-team-by-themselves-well-be-taking-a-little-bit-more-of-a-marvel-inspired-approach/) |
| 2025 (avis Steam) | Ressenti joueur | « Add a role queue so I don't have to be the only tank with 4 dps and one healer » (07/2025, 122 h) ; « devs vision where everyone have freedom to play any role any time » (08/2025, 335 h, 36 votes utiles) ; « IMMA PUT ON A SHOW back to back with Loki Luna » (08/2025, 191 h) | §7 |
| — | « Plus de 50 % des matchs Diamant en triple Strategist » ; taux de victoire par composition | **Non vérifié** (Reddit, fil Steam) | [rivals.fan](https://rivals.fan/news/marvel-rivals-three-strategist-meta) |

→ **Lecture pour le client** : la liberté de composition est un **choix de design légitime**. Mais **aux rangs bas**, elle avantage structurellement les joueurs expérimentés et coordonnés contre les débutants en solo. Il n'y a pas de bans à ces rangs, et les équipes casual finissent souvent à 4 ou 5 DPS. Perdre contre un combat bloqué 30 secondes **ressemble** à un match truqué : **le méta exploité nourrit la perception d'EOMM**.

---

## 5. La source Newzoo : collecte et fiabilité

### 5.1 Comment Newzoo récolte ses données

```
Joueur ──► relie volontairement ses comptes Steam / PSN / Xbox
            à une application de suivi (ex. PlayTracker)
        ──► import : jeux joués, temps de jeu par jeu,
            date de dernière partie, variation depuis la dernière synchronisation
        ──► pseudonymisation ──► transmission à Newzoo (données dans l'UE)
        ──► filtres de qualité + modèles de correction des biais
        ──► indicateurs agrégés (DAU, MAU, churn et recouvrement entre jeux)
```

| Étape | Ce qu'on sait | Statut | Source |
|---|---|---|---|
| Nature des données | « Raw telemetry data taken from **over 1 million players** within Newzoo's panel of users » | FAIT | Rapport, p. 45 |
| Mesure du passage d'un jeu à l'autre | « Player and spender overlap, acquisition, retention, and **churn between titles** » | FAIT | Rapport, p. 42 |
| Couverture | Steam, PlayStation, Xbox ; 37 marchés **hors Chine et Inde** | FAIT | Rapport, p. 24, 46 à 65 |
| Mécanisme documenté | Comptes Steam / PSN / Xbox reliés à **PlayTracker** : temps de jeu, date de dernière partie, variations | FAIT | [PlayTracker, section B](https://playtracker.net/privacy/) |
| Partage avec Newzoo | « **joint controllers under the GDPR** » ; données pseudonymisées ; résultats agrégés ; base légale : intérêt légitime | FAIT | [PlayTracker, section D](https://playtracker.net/privacy/) |
| PlayTracker est-il **la** source des 45 % ? | **Non prouvé** : partenariat annoncé le 27/05/2025, après le rapport (avril 2025) ; ~60 000 joueurs contre plus d'un million | HYPOTHÈSE | [X @PlayTrackerNet](https://x.com/PlayTrackerNet/status/1927304996393013371) · [WAHL](https://www.wahl.hr/insight/playtracker-enters-strategic-partnership-with-newzoo) |
| « 73 000 joueurs » | C'est le *Global Gamer Study*, un **sondage**, pas le panel de télémétrie | Correction | Rapport, p. 8 |

**Calcul des 45 % (logique déduite) :** panélistes dont le temps de jeu sur Overwatch 2 s'arrête en décembre 2024, puis part d'entre eux ayant au moins 2 heures sur Marvel Rivals.

### 5.2 Comment tester la fiabilité

**A. Contrôles déclarés par Newzoo (p. 45)**
- au moins 2 heures de jeu par titre ;
- au moins 10 joueurs du panel par titre ;
- joueurs présents toute l'année ;
- correction des biais annoncée (via PlayTracker), mais **méthode non publiée** ;
- disclaimer : « may bias toward more engaged and **core** audiences […] most optimistic lens ».

**B. Triangulation que nous avons faite**

| Test | Newzoo | Source indépendante | Verdict |
|---|---|---|---|
| Overwatch 2 recule en décembre 2024 | −26 % d'engagement (p. 73) | SteamDB via VGC : −21,7 % puis −21,8 % | ✅ Cohérent |
| Overwatch 2 revient à ses anciens niveaux | DAU au niveau d'Overwatch 1 (p. 78) | Baisse continue sur Steam | ✅ Cohérent |
| Marvel Rivals est un succès massif en décembre | 7 % de la croissance F2P 2024 (p. 24) | Steam Charts 279 K de moyenne, pic de 642 K ; 40 M de joueurs | ✅ Cohérent |
| Des joueurs Overwatch sont bien arrivés | 45 % (p. 24) | Avis Steam : « vétérans / Overwatch / sweat » dans 11,2 % des négatifs | ✅ Cohérent (qualitatif) |
| Le chiffre de 45 % | p. 24 | Aucune autre source chiffrée | ⚠️ Non recoupable |
| Représentativité des débutants | Panel biaisé vers les joueurs « core » | — | ❌ Faible |

**C. Non testable** : effectif des partants d'Overwatch 2 dans le panel, définition exacte de « stopped playing », autres sources du panel, pondération.

**Verdict :** fiable pour la **tendance** (des vétérans sont arrivés). **Inutilisable** pour mesurer la part des vétérans dans votre base, ou pour conclure quoi que ce soit sur les débutants.

→ **RECO au client** : vous disposez de la mesure exacte en interne (courbe de performance des nouveaux comptes). Newzoo ne sert que de **contexte** dans le diagnostic.

### 5.3 Leçon de minimisation

Newzoo a besoin de comptes liés et de responsables conjoints pour savoir d'où viennent les joueurs. **Vous, non** : votre télémétrie de match suffit à repérer un vétéran. L'historique de jeu externe reste donc **INUTILE** (Art. 5.1.c).

---

## 6. Chronologie Steam Charts × avis × événements

Sources : [Steam Charts](https://steamcharts.com/app/2767030), lu le 29/09/2026 (moyennes mensuelles, **PC uniquement** : Sony et Microsoft ne publient pas leurs chiffres ; pic de référence 642 333) ; avis Steam anglais, notre scraping du 30/09/2026.

| Mois | Moyenne Steam | Variation | % d'avis négatifs | % des négatifs citant le MM | Événement |
|---|---|---|---|---|---|
| Déc. 2024 | 279 402 | — | 16,1 % | **7,4 %** | Lancement ; Bronze III pour tous ; bots signalés (28/12) |
| Janv. 2025 | 306 066 | +9,5 % | 18,0 % | 10,9 % | Pic de 642 333 |
| Fév. – mars 2025 | 228 000 / 144 302 | −25,5 % / −36,7 % | 18,9 % / 16,4 % | 12,1 % / 20,3 % | H4 + H5a ; méta triple Strategist, correctif S1.5 (21/02) |
| Avr. 2025 | 134 118 | −7,1 % | 20,4 % | 21,1 % | S2 ; classé au niveau 15 |
| **Mai – juin 2025** | 102 116 / 79 806 | **−23,9 % / −21,9 %** | 28,3 % / 31,9 % | 29,1 % / 27,6 % | **Cassure anormale** |
| Juil. – août 2025 | 82 825 / 77 502 | +3,8 % / −6,4 % | 34,6 % / 38,5 % | 37,0 % / **41,0 %** | S3 : un héros par mois ; démenti EOMM (12/08) ; vidéo (21/08) |
| Sept. – oct. 2025 | 64 418 / 63 716 | −16,9 % / −1,1 % | 37,8 % / 37,6 % | 33,9 % / 25,9 % | Placements repoussés ; plus bas historique |
| **Nov. 2025** | 65 301 | +2,5 % | **17,6 %** | **17,3 %** | **S5 : placements, Silver III** |
| Déc. 2025 – janv. 2026 | 75 492 / 88 790 | +15,6 % / +17,6 % | 28,1 % / 25,9 % | 18,2 % / 15,4 % | Rebond (corrélation, pas causalité) |
| Fév. 2026 | 81 368 | −8,4 % | 27,8 % | 15,6 % | Relance d'Overwatch |
| Mars – sept. 2026 | 30 derniers jours : 68 566 (−14,4 %) | — | 32 à 43 % | 9 à 15 % | Plateau ; les négatifs portent sur d'autres sujets |

---

## 7. Ce que disent les joueurs : analyse de 303 K avis Steam

### 7.1 Méthode (à décrire dans le livrable, section « Sources, outils »)

| Élément | Choix |
|---|---|
| Source | API publique des avis Steam (`store.steampowered.com/appreviews/2767030`) |
| Périmètre | Avis **en anglais**, du **06/12/2024 au 29/09/2026** |
| Échantillon | **37 990 avis**, jusqu'à 400 par semaine (95 semaines), **pondérés** par le volume réel de chaque semaine. Population estimée : **303 135 avis**, cohérente avec le total affiché par Steam. |
| Variables conservées | Date, vote (recommandé ou non), **temps de jeu au moment de l'avis**, votes « utile », texte |
| **Minimisation (RGPD)** | **Ni identifiant Steam ni pseudo** conservés ; analyse **agrégée** ; citations courtes |
| Analyse | Repérage par mots-clés : matchmaking, EOMM, écart de niveau, débutants, partie rapide, bots, rôles, smurfs |
| Date de collecte | 30/09/2026 |
| Fichiers | `docs/scraping_avis_steam/` : scripts, volumes par semaine, résultats |

### 7.2 Résultats

**a) Le matchmaking est un motif spécifique d'insatisfaction**
- **16,6 %** des avis négatifs parlent du matchmaking, contre **1,5 %** des avis positifs, soit **11 fois plus**.

**b) La plainte suit la chronologie de la cassure, puis retombe après les placements** (voir le tableau du §6)
- **7 % → 41 %** des négatifs entre décembre 2024 et août 2025, sur la période de la cassure.
- **Chute à 17 %** juste après les placements de la S5.
- **C'est une corrélation, pas une preuve**, mais c'est un argument fort pour le maillon 2 : le manque de calibrage compte.
- En 2026, les négatifs restent nombreux, mais pour **d'autres raisons** (le matchmaking ne pèse plus que 10 à 15 %).

**c) Qui se plaint du matchmaking ? Surtout les joueurs expérimentés**

| Temps de jeu au moment de l'avis | Part d'avis négatifs | Part des négatifs qui citent le matchmaking |
|---|---|---|
| 0-10 h | 24,5 % | **2,8 %** (plaintes surtout sur les **performances**, ~17 %) |
| 10-50 h | 14,3 % | 9,2 % |
| 50-200 h | 20,3 % | 18,3 % |
| 200-1 000 h | 37,4 % | **30,2 %** |
| Plus de 1 000 h | 43,1 % | 22,4 % |

**d) Les thèmes des avis négatifs qui citent le matchmaking** (n = 2 346)

| Thème | Part | Dans l'ensemble des négatifs | Lien avec les maillons |
|---|---|---|---|
| EOMM / « rigged » | **35,5 %** | 6,0 % | Perception d'injustice (H1) |
| Classé | 32,8 % | 11,3 % | Maillons 2 et 5 |
| Écart de niveau / stomp | **13,9 %** | 2,6 % | **Maillons 3 et 5** |
| Vétérans / Overwatch / « sweat » | 13,9 % | 11,2 % | Maillon 1 |
| Partie rapide | 12,7 % | 4,5 % | **Maillon 2b** |
| Bots | 10,0 % | 4,2 % | Maillon 2b (parties d'entraînement) |
| Rôles / compositions | 8,3 % | 3,5 % | **Maillon 7** |
| Smurfs | 5,3 % | 1,6 % | H1b |
| Débutants cités explicitement | 3,4 % | 1,3 % | Maillon 1 |

### 7.3 Contre-argument : « les débutants ne se plaignent pas du matchmaking »

Ce ne sont **pas** les débutants qui écrivent qu'ils sont victimes du matchmaking. Deux lectures, à présenter honnêtement :

1. **Biais du survivant** : un débutant écrasé part **sans écrire d'avis**, ou n'identifie pas la cause (« c'est trop dur »). Seuls ceux qui restent assez longtemps pour comprendre le système s'en plaignent. C'est pourquoi la **donnée interne de churn** est indispensable.
2. **L'écart d'expérience est vécu des deux côtés.** Les vétérans se plaignent d'être mis **avec ou contre** des joueurs de niveau très différent. Exemples : « new players and high-ranked veterans often end up in the same team » ; « Healers and casual players ruined this game ». L'**hétérogénéité** est donc bien le cœur du problème : c'est H5, vue depuis l'autre camp.

→ **Conséquence** : H5 ne peut pas être **prouvée** par les avis. Ils prouvent la **perception** et sa chronologie ; la preuve causale est dans la télémétrie de NetEase.

### 7.4 Verbatims représentatifs (extraits courts, sans pseudo)

**Débutants (maillons 1 et 2b)**
- *[07/2025, 5,8 h]* « It is not fun to be put in a lobby with enemies that are in diamond and grandmaster just because I won the previous game, **while I am just trying to learn** »
- *[01/2025, 6,2 h]* « **Third casual match** and I am getting matched against Platinum III players with 58 hs played »
- *[07/2025, 17 h]* « This game is really sweaty and complex. **New players shouldn't even try it** unless they have a lot of friends to voice chat with »
- *[04/2025, 1,6 h]* « pairs new or low-skilled players with highly skilled ones »

**Partie rapide (maillon 2b)**
- *[06/2025, 906 h]* « Matchmaking is horrible for the **casual players in quickplay**, why does a whole team of Bronze players get paired against Celestial/Eternity players. **Needs some kind of SBMM for quickplay** »
- *[07/2025, 198 h]* « Even in quickplay the game just serves you obvious steamrolls (i.e. matching six grandmasters vs one) »

**Hétérogénéité vue par les vétérans (maillon 5)**
- *[10/2025, 1 011 h]* « **New players and high-ranked veterans** often end up in the same team, while smurfing […] »
- *[07/2025, 1 108 h]* « In what world is it a good idea to put **Silver, Gold, Plat, and Diamond-Celestial** players in the same match…? In ranked? QP is just as bad »

**Rôles et compositions (maillon 7)**
- *[08/2025, 335 h, 36 votes utiles]* « devs vision where **everyone have freedom to play any role any time** »
- *[07/2025, 122 h]* « Give us **placement matches** […] Add a **role queue** so I don't have to be the only tank with 4 dps and one healer »
- *[08/2025, 191 h]* « more DPS characters then tanks and healers leads to lovely team comps […] Loki Luna [ultimates] back to back »

**Bots (maillon 2b)**
- *[07/2026, 817 h, 315 votes utiles]* « you can have a **bot match even if you're winning** »
- *[02/2026, 579 h, 53 votes utiles]* « if you play and loose too much the game puts you against bots »

### 7.5 Limites

- **Steam = PC uniquement.** Pas de PS5, PS4 ni Xbox.
- **Anglais uniquement.**
- **Mots-clés imparfaits** : faux positifs et oublis possibles.
- **Échantillon pondéré, pas exhaustif.**
- **Seuls ceux qui écrivent un avis sont représentés** (biais du survivant).
- **Un avis n'est pas une mesure** : c'est de la **perception**, pas de l'iniquité réelle. C'est la distinction « iniquité réelle / perçue » du plan.
- **RGPD** : le texte d'un avis peut contenir des données personnelles, d'où l'analyse agrégée, sans identifiant, et des citations courtes.

---

## 8. BODAK

**Ce que demande la slide 18 :** une **phrase précise par lettre**, qui répond à la question de la lettre, sur le modèle de l'exemple League of Legends.

| Lettre | Question de la slide | Exemple LoL (slide 18) | Forme à reproduire |
|---|---|---|---|
| **B** | Quel problème business résout-on ? | « L'engagement DAU de LoL baisse de 12 % sur les vétérans 3+ ans, malgré une acquisition stable. Cannibalisation par TFT ? » | Fait chiffré + segment + « malgré » + hypothèse en question |
| **O** | Quel objectif mesurable, à quelle échéance ? | « Ramener stickiness DAU/MAU des joueurs 3+ ans à 45 % d'ici la fin de Season 15 » | Ramener + KPI + segment + valeur cible + échéance |
| **D** | Quelles données pour comprendre ET agir ? | « Sessions par titre Riot (LoL, TFT, Valorant), transitions inter-jeux, changements de mode principal » | Liste des données, précises et nommées |
| **A** | Quelle méthode d'analyse ? | « Analyse de cohortes croisées + funnel de switch + interviews joueurs D30-quitters » | Méthodes enchaînées par des « + » |
| **K** | Quels KPIs prouvent le succès ? | « Stickiness LoL, taux de retour post-patch, satisfaction vétérans, revenus battle pass » | 3 à 5 indicateurs nommés |

### 8.1 Notre BODAK

> **Décision à éclairer :** NetEase doit décider s'il modifie l'entrée en jeu de Marvel Rivals (matchmaking des débutants, garde-fous de rôles) face à un plancher d'audience bas et fragile depuis mi-2025.

| Lettre | Phrase |
|---|---|
| **B — Business problem** | « La moyenne Steam de Marvel Rivals baisse de **79 %** entre janvier et octobre 2025 (306 K → 64 K) et plafonne depuis sous 90 K, **malgré 40 M de joueurs acquis en 3 mois**. **Écart d'expérience vétérans / débutants que le matchmaking ne calibre pas ?** » |
| **O — Objective** | « **Ramener à 1,2** le ratio de churn J7 entre les **nouveaux comptes ayant perdu au moins 7 de leurs 10 premiers matchs** et les autres nouveaux comptes, **d'ici le 31/03/2027** (≈ fin de Season 12, calendrier à confirmer). » |
| **D — Data** | « Écart de score et de MMR caché (classé et partie rapide) × ancienneté du compte, largeur de fourchette × joueurs en file, compositions par rôle × résultat × rang, parties avec bots, churn J7 par cohorte, avis Steam agrégés. » |
| **A — Analysis** | « Cohortes avant / après les placements de la S5 + régression du churn J7 sur écart, ancienneté, population et composition (test H1 contre H5) + tests A/B des garde-fous + text mining des avis Steam. » |
| **K — KPIs** | « Ratio de churn J7 des nouveaux comptes perdants, ratio d'écart de score comptes de moins de 30 jours / anciens, attente p90 par rang, part des matchs Bronze-Or avec au moins 4 héros du même rôle, part des avis Steam négatifs citant le matchmaking. » |

### 8.2 Justification de chaque phrase

**B — les chiffres et leur preuve**

| Élément de la phrase | Valeur | Statut | Source |
|---|---|---|---|
| Moyenne Steam janvier 2025 → octobre 2025 | 306 066 → 63 716 (−79 %) | FAIT (PC uniquement, moyenne contre moyenne) | https://steamcharts.com/app/2767030 |
| Plateau depuis | 64 à 89 K de moyenne mensuelle | FAIT | idem |
| Acquisition | 40 M de joueurs en ~3 mois | FAIT *(extrait)* | https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report |
| Hypothèse en question | H5, appuyée par les avis Steam : la part des négatifs citant le matchmaking passe de 7 % à 41 % (déc. 2024 → août 2025) | HYPOTHÈSE | §7 |

⚠️ Le B de la slide cible un **segment** (« vétérans 3+ ans »). Nous ne pouvons pas segmenter publiquement : le segment « nouveaux comptes perdants » apparaît donc dans le **O**. Si NetEase fournit ses données, on pourra réécrire le B sur ce segment (« La rétention J7 des nouveaux comptes baisse de X %… »).

**O — grille SMART**

| Critère | Vérification |
|---|---|
| **S — Spécifique** | Un segment précis (nouveaux comptes perdants), un indicateur précis (churn J7), pas un indicateur générique comme les DAU |
| **M — Mesurable** | Ratio calculable sur la télémétrie de NetEase ; valeur cible chiffrée (1,2) |
| **A — Atteignable** | Leviers testables en 90 jours (file débutants, garde-fous de rôles aux rangs bas, transparence sur les bots). Précédent : les plaintes sur le matchmaking passent de 26 % à 17 % des négatifs juste après les placements de la S5. |
| **R — Pertinent** | Découle directement du B : si l'écart d'expérience fait fuir, c'est chez les nouveaux comptes perdants qu'on le voit |
| **T — Temporel** | 31/03/2027, soit les 6 mois du brief ; numéro de saison à confirmer (saisons de 2 mois depuis la S3) |

*Pourquoi un ratio ?* La valeur de départ interne est inconnue : un ratio est mesurable sans base publique. Quand NetEase fournit la base (par exemple un churn J7 de 60 %), on réécrit comme sur la slide : « Ramener le churn J7 des nouveaux comptes perdants de 60 % à 45 % d'ici la fin de Season 12 ».

**D — chaque donnée sert à comprendre OU à agir** (détail et ICE au §9)

| Donnée | Comprendre (quel maillon) | Agir (quelle décision) |
|---|---|---|
| Écart de score et de MMR × ancienneté | Maillons 2, 2b, 3 | File débutants, file protégée |
| Largeur de fourchette × joueurs en file | Maillon 5 (H5b) | Resserrer ou non la fourchette |
| Compositions × résultat × rang | Maillon 7 | Garde-fous de rôles : à quels rangs |
| Parties avec bots | Maillon 2b | Étiquette « match d'entraînement » |
| Churn J7 par cohorte | Maillon 4 | Mesure du O |
| Avis Steam agrégés | Perception (H1 contre H5) | Contrôle externe du O |

**A — ce que chaque méthode tranche**

| Méthode | Question tranchée |
|---|---|
| Cohortes avant / après la S5 | Le calibrage réduit-il le churn des nouveaux comptes ? |
| Régression du churn J7 | L'écart de niveau explique-t-il le churn mieux que les séries (H5 contre H1) ? |
| Tests A/B des garde-fous | Quel levier fait baisser le ratio du O, et à quel coût d'attente ? |
| Text mining des avis Steam | La perception suit-elle les changements ? |

**K — chaque KPI a un seuil et une action** (détail au §10)

| KPI | Seuil | Rôle |
|---|---|---|
| Ratio de churn J7 des nouveaux comptes perdants | ≤ 1,2 | **KPI du O** |
| Ratio d'écart de score, comptes de moins de 30 jours / anciens | < 1,5 | Cause (écart réel) |
| Attente p90 par rang | < 5 min | **Garde-fou** : un test qui la dépasse est arrêté |
| Part des matchs Bronze-Or avec au moins 4 héros du même rôle | < 20 % | Cause (maillon 7) |
| Part des avis Steam négatifs citant le matchmaking | < 8 % (base : 10,5 % en sept. 2026) | Perception, contrôle externe |

---

## 9. Matrice de collecte (ICE notée sur 5)

**Précision** : le PDF cite « priorisation ICE » (slides 4 et 46) sans en détailler la notation. La seule échelle chiffrée du cours est la matrice risques **P × I notée de 1 à 5** (slide 27). ICE est donc aligné sur la même échelle. **À confirmer avec l'intervenante.**

| Critère | 1 | 3 | 5 |
|---|---|---|---|
| **I — Impact** : poids dans la décision | Contexte seulement | Éclaire une décision secondaire | Tranche la décision centrale (H1 contre H5, garde-fous) |
| **C — Confiance** : la donnée tranche-t-elle vraiment ? | Indirecte, très bruitée | Indicateur partiel | Mesure directe de l'hypothèse |
| **E — Facilité** : coût, délai, conformité | Nouvelle collecte lourde ou sensible | Extraction ou développement modéré | **Existe déjà chez NetEase**, extraction simple |

**Score ICE = moyenne des trois notes, sur 5.** **Règle d'arbitrage** : 4 ou plus → phase 0-30 jours ; de 3 à 3,9 → phase 30-90 jours ; moins de 3 → optionnel.

| Donnée | Décision éclairée | Existe chez NetEase ? | Base légale (portée par NetEase) | Priorité | I | C | E | **ICE /5** | Phase |
|---|---|---|---|---|---|---|---|---|---|
| Largeur de fourchette + attente × joueurs en file | Arbitrer attente contre équité (H5b) | Oui | Intérêt légitime | **INDISPENSABLE** | 5 | 5 | 5 | **5,0** | 0-30 j |
| Écart de score intra-match × ancienneté du compte (classé) | Départager H1 et H5 | Oui (probable) | Contrat / intérêt légitime | **INDISPENSABLE** | 5 | 4 | 5 | **4,7** | 0-30 j |
| Churn J7/J30 par cohorte × bilan des 10 premiers matchs | Mesurer le coût du démarrage à froid (**KPI du O**) | Oui | Intérêt légitime | **INDISPENSABLE** | 5 | 4 | 5 | **4,7** | 0-30 j |
| Composition par équipe (héros par rôle) × résultat × rang | Garde-fous de rôles : à quels rangs ? | Oui | Intérêt légitime | **INDISPENSABLE** | 4 | 5 | 5 | **4,7** | 0-30 j |
| Part de parties d'entraînement (bots) × segment | Transparence et effet réel sur la rétention | Oui (si elles existent) | Intérêt légitime + **test de balance** | **INDISPENSABLE** | 4 | 5 | 5 | **4,7** | 0-30 j |
| Écart de **MMR caché en partie rapide** × ancienneté ; vitesse de convergence | Faut-il une file débutants avant le niveau 15 ? | Oui (probable) | Intérêt légitime | **INDISPENSABLE** | 5 | 4 | 4 | **4,3** | 0-30 j |
| Rétention des nouveaux comptes avant et après la S5 | Garder, ajuster ou étendre les placements | Oui | Intérêt légitime | **INDISPENSABLE** | 4 | 4 | 5 | **4,3** | 0-30 j |
| Groupe contre solo × composition × ancienneté | Les groupes exploitent-ils le méta contre les débutants ? | Oui | Intérêt légitime | **INDISPENSABLE** | 4 | 4 | 5 | **4,3** | 0-30 j |
| Rôle joué × rôle habituel du joueur | Mesurer les « imbalanced team roles » | Oui (utilisé par le matchmaking) | Intérêt légitime | **INDISPENSABLE** | 4 | 4 | 4 | **4,0** | 0-30 j |
| Courbe de performance sur les 20 premiers matchs | Repérer vétérans et smurfs **sans identité** | Oui | Intérêt légitime (anti-triche) | **INDISPENSABLE** | 4 | 4 | 4 | **4,0** | 0-30 j |
| **Avis Steam agrégés** (scraping, sans identifiant) | Suivre la perception ; **KPI de contrôle du O** | Non, mais public et déjà collecté | Intérêt légitime ; données publiques, minimisées | **INDISPENSABLE** | 3 | 3 | 5 | **3,7** | Continu |
| Durée cumulée des ultimes de soin actifs par combat | Détecter les blocages de combat | Oui (à extraire) | Intérêt légitime | **INDISPENSABLE** | 3 | 4 | 3 | **3,3** | 30-90 j |
| Attente simulée avec role queue, par rôle demandé | Chiffrer le coût d'une role queue | Non (simulation) | Intérêt légitime | **INDISPENSABLE** | 4 | 3 | 3 | **3,3** | 30-90 j |
| Micro-sondage post-match sur l'équité perçue (1 match sur 10) | Séparer iniquité réelle et perçue | **Non : nouvelle** | **Consentement** | UTILE | 4 | 3 | 3 | **3,3** | 30-90 j |
| Question d'onboarding « Premier hero shooter ? » (facultative) | Mesurer la part de débutants du genre | **Non : nouvelle** | **Consentement** | UTILE | 3 | 3 | 4 | **3,3** | 30-90 j |
| Héros maîtrisés × ancienneté | Tester le maillon 6 | Oui | Intérêt légitime | UTILE | 2 | 3 | 5 | **3,3** | 30-90 j |
| Benchmark Newzoo (flux entre jeux, agrégé) | Contexte concurrentiel | Non (achat) | Contrat B2B, données agrégées | UTILE (une fois) | 2 | 2 | 3 | **2,3** | Optionnel |
| Historique de jeu individuel sur d'autres titres | — | — | Disproportionné, profilage | **INUTILE** | — | — | — | *non noté* | Écarté |
| N° de téléphone (anti-smurf) | — | — | Disproportionné, contournable | **INUTILE** | — | — | — | *non noté* | Écarté |
| Chat vocal ou texte complet | — | — | Disproportionné | **INUTILE** | — | — | — | *non noté* | Écarté |
| Âge exact pour « profiler » les casuals | — | — | La courbe de performance suffit | **INUTILE** | — | — | — | *non noté* | Écarté |

→ **Arbitrage lisible pour le comité** : les 10 données notées 4 ou plus **existent déjà** dans la télémétrie de NetEase. L'audit des 30 premiers jours ne demande donc **aucune nouvelle collecte**. Les deux collectes nouvelles (sondage, question d'onboarding) arrivent seulement ensuite, et sous consentement. C'est le « Smart Data » du cours appliqué.

---

## 10. KPIs et seuils (à calibrer sur les 30 premiers jours)

| KPI | Seuil | Action |
|---|---|---|
| **Ratio de churn J7 : nouveaux comptes ayant perdu au moins 7 de leurs 10 premiers matchs / autres nouveaux comptes (KPI du O)** | > 1,2 | Calibrage en partie rapide + onboarding |
| Ratio d'écart de score, comptes de moins de 30 jours / plus anciens (classé) | > 1,5 | File protégée pour les nouveaux comptes |
| Écart de MMR médian en partie rapide, comptes sous le niveau 15 | > X (base à mesurer) | File « débutants » jusqu'au niveau 15 |
| Largeur de fourchette quand la population baisse de plus de 20 % sur un mois | > X divisions | Resserrer (+30 s d'attente) et l'annoncer |
| Attente p90 par rang | > 5 min | Élargissement contrôlé et annoncé |
| Part des matchs avec au moins 4 héros du même rôle (Bronze à Or) | > 20 % | Tester le minimum 1 tank et 1 soigneur |
| Écart de taux de victoire entre la meilleure et la pire composition, par rang | > 10 points | Rééquilibrage ciblé |
| Durée médiane des combats bloqués par les ultimes | > 15 s | Ajuster le coût des ultimes |
| Part de parties d'entraînement non annoncées | > 0 % | Étiquette « match d'entraînement » |
| Gain de rétention J7 après la S5 | < 2 points | Revoir le rang estimé Silver III |
| Score d'équité perçue | < 3/5 alors que l'écart réel est normal | Transparence, pas de nouvel algorithme |
| **Part des avis Steam négatifs citant le matchmaking (contrôle externe du O)** | > 8 % (base : 10,5 % en sept. 2026) | Text mining ciblé + communication |
| % d'avis Steam récents positifs | < 70 % | Alerte + text mining |

---

## 11. Conformité et gouvernance

**Cadre contractuel**

| Point | Conséquence |
|---|---|
| NetEase est **responsable de traitement** | Le consultant est **sous-traitant** (RGPD Art. 28) : il faut un **contrat de sous-traitance (DPA)** avant tout accès |
| Accès | Données **pseudonymisées**, agrégées quand c'est possible ; ni identité, ni chat |
| Mineurs (classement T) | Comptes mineurs exclus ou analysés à part |
| Base légale | Portée par NetEase ; le livrable **propose** les tests de balance, NetEase les valide |
| Scraping des avis Steam | Données publiques mais **personnelles** (texte libre) : ni identifiant ni pseudo conservés, analyse agrégée, citations courtes, respect des conditions de Steam |

**Points de vigilance, formulés pour le client**

| Sujet | Risque | Référence |
|---|---|---|
| Classer un joueur vétéran ou débutant d'après son jeu | C'est du **profilage** : intérêt légitime possible si le test de balance est documenté | RGPD Art. 4.4, 6.1.f |
| Sanctions automatiques pour smurfing (faux positifs documentés) | Il faut un **recours humain** | RGPD Art. 22 |
| Parties d'entraînement non annoncées | **Loyauté et transparence** ; risque de réputation | RGPD Art. 5.1.a, 13 |
| Matchmaking optimisé pour l'engagement (R&D EnMatch du Fuxi Lab) | Si c'est un jour déployé : attention aux vulnérabilités, notamment des mineurs | AI Act Art. 5.1.b (depuis le 02/02/2025) |
| Données de benchmark externes | Pseudonymisées donc toujours personnelles : n'acheter que de l'**agrégé** | RGPD Art. 26, considérant 26 |

**Matrice P × I**

| Risque | P | I | Zone | Traitement |
|---|---|---|---|---|
| Collecter l'historique de jeu externe individuel | 3 | 5 | 🔴 | **AVOID** |
| Parties d'entraînement non annoncées révélées publiquement | 4 | 4 | 🔴 / 🟠 | **MITIGATE** : étiquette |
| Faux positifs anti-smurf | 4 | 3 | 🟠 | **MITIGATE** : recours humain |
| Accès du consultant sans DPA | 2 | 5 | 🟠 | **MITIGATE** : DPA avant tout accès |
| Garde-fous de rôles perçus comme une atteinte à l'identité du jeu | 3 | 3 | 🟡 | **MONITOR** : limités aux rangs bas, communiqués |
| Décision prise sur un panel externe biaisé (Newzoo) ou sur des avis (biais du survivant) | 3 | 3 | 🟡 | **MONITOR** : primauté des données internes |
| Ré-identification d'un auteur d'avis cité | 2 | 2 | 🟢 | **MITIGATE** : pas de pseudo, extraits courts |
| Fatigue de sondage | 3 | 2 | 🟡 | **MONITOR** : 1 match sur 10 maximum |
| Refus de la question d'onboarding | 4 | 1 | 🟢 | **ACCEPT** |

---

## 12. Roadmap

| Horizon | Actions |
|---|---|
| **0-30 jours** | DPA NetEase ↔ consultant. Extraction des données existantes (§9, ICE ≥ 4). Audit d'équité : cohortes avant et après la S5, partie rapide avant le niveau 15, compositions par rang, parties d'entraînement. Test H1 contre H5. **Mesure de la base du O.** Implication possible du Fuxi AI Lab. |
| **30-90 jours** | Tests A/B : (1) file débutants en partie rapide jusqu'au niveau 15 ; (2) minimum 1 tank et 1 soigneur aux rangs Bronze à Or ; (3) fourchette plus stricte (+30 s) ; (4) bans dès Or ou Platine ; (5) étiquette « match d'entraînement ». Question d'onboarding et micro-sondage. |
| **90-180 jours (→ 31/03/2027)** | Pilotage par les KPIs du §10. Décision de garder, étendre ou abandonner chaque garde-fou. Page permanente « comment fonctionne le matchmaking », qui prolonge la vidéo du 21/08/2025. Bilan du O. |

**L'arbitrage central, à présenter au comité :** une role queue réduit les abus de composition mais allonge l'attente. Or la population est basse (H5b). → On ne tranche pas par principe : on teste une **version souple aux rangs bas**, avec l'**attente p90** comme KPI de blocage.

---

## 13. Contre-arguments (Q&A face au client)

| Objection probable du comité | Réponse |
|---|---|
| « Nous savons déjà comment fonctionne notre matchmaking. » | Justement : vos données peuvent **valider ou réfuter H5 en 30 jours**. Nous apportons la question et la méthode, pas un verdict. |
| « Le 45 % de Newzoo est biaisé. » | Oui, Newzoo le dit lui-même (p. 45). Il ne sert qu'à la **tendance**. La mesure exacte est **dans votre télémétrie**. |
| « Les avis Steam, ce sont des râleurs. » | Oui : c'est de la **perception**, sur PC et en anglais. Mais sa **chronologie** (7 % → 41 % → 17 % après la S5) colle aux événements du jeu, et la perception est justement ce qui fait partir. |
| « Les débutants ne se plaignent pas du matchmaking. » | Exact (2,8 % des négatifs à moins de 10 h). Deux raisons : ils partent **sans écrire** (biais du survivant), et l'écart est dénoncé **par les vétérans**, qui subissent la même hétérogénéité. Seul votre churn tranche. |
| « Les placements de la S5 ont réglé le problème. » | Ils semblent avoir aidé (plaintes −9 points). Mais pour le classé seulement, et Silver III peut durcir les premiers matchs : c'est **mesurable** avant et après le 14/11/2025. |
| « La liberté de composition, c'est l'ADN du jeu. » | Nous ne la remettons pas en cause. Nous proposons des garde-fous **aux rangs bas uniquement**, là où jouent les débutants. |
| « Une role queue tuerait les files d'attente. » | C'est pourquoi on la **teste** en version souple, avec l'attente p90 comme seuil d'arrêt. |
| « Le jeu n'est pas en échec. » | Exact : vos résultats Q3 2025 le citent positivement ([S26](https://equibles.com/stocks/ntes/calls/2025-q3)). Nous parlons d'un **plancher bas et fragile**, avec un potentiel de reprise mesurable. |
| « Heliyon montre que les débutants sont peu sensibles aux défaites. » | Jeu mobile casual, et l'étude montre que ce sont les **joueurs intermédiaires** qui partent. H5 vise les écarts de niveau, pas seulement les débutants. |

---

## 14. Pitch — diagnostic et recommandation (environ 1 min 30)

> « Votre démenti de l'EOMM était juste, et pourtant la défiance reste. Sur Steam, la part des avis négatifs qui accusent le matchmaking est passée de 7 % à 41 % en huit mois. Notre diagnostic : le problème n'est pas l'algorithme, c'est l'**écart d'expérience**. Selon Newzoo, près de la moitié des joueurs qui ont quitté Overwatch 2 en décembre 2024 ont joué à Marvel Rivals. Ils sont arrivés en même temps que des millions de fans Marvel qui découvraient le genre. Ces débutants passent d'abord par la partie rapide, sans calibrage, puis entraient en classé en Bronze, face à des vétérans et à des compositions qu'ils ne maîtrisent pas. Votre vidéo du 21 août le montre : quand les joueurs manquent, la fourchette s'élargit. Et quand vous avez ajouté les placements, les plaintes sont retombées à 17 %.
> Nous proposons un audit d'équité de 30 jours **sur vos propres données**, puis trois tests : une file débutants, des garde-fous de rôles aux rangs bas, et la transparence sur les parties d'entraînement. Objectif : d'ici le 31 mars 2027, qu'un nouveau joueur qui perd ses premiers matchs ne parte pas plus de 1,2 fois plus souvent que les autres. »

---

## 15. Reste à vérifier

- Vidéo du 21/08/2025 : pondérations exactes ; phrase sur la probabilité des séries (≈ 51 % pour 3 victoires d'affilée, ≈ 83 % pour 3 victoires **ou** 3 défaites).
- Existence réelle et fonctionnement du MMR en partie rapide, et des parties d'entraînement : **question à poser au client**.
- Autres sources du panel Newzoo (privacy@newzoo.com).
- Stats de compositions (« plus de 50 % en Diamant », taux de victoire par composition).
- PDF NetEase de 2020 cité dans [S23] ; « deux jeux » d'EnMatch.
- **Définition de la notation ICE** attendue par l'intervenante (échelle 1-5 choisie par cohérence avec P × I).
- **Échéance du O** en numéro de saison (calendrier NetEase).
- Scraping : relecture manuelle d'un échantillon d'avis classés « matchmaking » pour estimer les faux positifs.
- **Captures à faire :** Newzoo p. 24 et 45 ; PlayTracker sections B et D ; notes de patch S5 ; interview de Chen ; vidéo de Zhiyong (passages sur les rôles et la fourchette) ; Steam Charts ; **sortie du script d'analyse des avis**.

---

## 16. Rapport d'usage IA

| Élément | Verdict |
|---|---|
| Newzoo p. 24, 42, 45, 73 et 78 ; mécanisme PlayTracker ; triangulation SteamDB | **RETENU** (sources lues) |
| Pondérations, fourchette qui s'élargit, « rank gaps », « imbalanced team roles » (vidéo officielle) | **RETENU** |
| Placements S5, Silver III (notes de patch officielles) | **RETENU** |
| Refus de la role queue (Chen), « oppressive moments » (Zhiyong) | **RETENU** |
| Scraping des avis Steam : méthode, pondération, minimisation | **RETENU** — scripts dans `docs/scraping_avis_steam/` : **relancez-les vous-même** et capturez la sortie |
| Chronologie des plaintes (7 % → 41 % → 17 % après la S5) | **RETENU** comme perception, corrélation seulement |
| « Les débutants se plaignent du matchmaking » | **REJETÉ** tel quel (ils se plaignent surtout des performances) ; nuance intégrée (§7.3) |
| MMR caché en partie rapide ; parties d'entraînement | **HYPOTHÈSE**, à valider avec le client |
| O SMART sous forme de ratio | **À DÉCIDER par vous** : ratio, ou valeur absolue si vous posez une base hypothétique clairement signalée |
| ICE sur 5 aligné sur la slide 27 | **À CONFIRMER** avec l'intervenante |
| « Plus de 50 % des matchs Diamant en triple Strategist » ; taux de victoire par composition | **À VÉRIFIER** |
| « PlayTracker = source des 45 % » ; « panel de 73 000 » ; titre de TheGamer ; EnMatch = algorithme de Marvel Rivals ; Goomba Stomp ; fil Reddit « data scientist » | **REJETÉ** |
| Posture client NetEase, colonne « existe chez NetEase », DPA (Art. 28) | **RETENU** (arbitrage à confirmer par vous) |

---

### Sources (consultées les 29 et 30/09/2026)

**NetEase (officiel)**
- [Notes de patch S5](https://www.marvelrivals.com/20251114/41525_1270590.html)
- [X @MarvelRivals, vidéo](https://x.com/MarvelRivals/status/1958627668536311945)
- [Transcript des earnings Q3 2025](https://equibles.com/stocks/ntes/calls/2025-q3)

**Matchmaking et rôles**
- [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking)
- [PC Gamer, vidéo](https://www.pcgamer.com/games/third-person-shooter/marvel-rivals-devs-transparent-18-minute-breakdown-of-how-ranked-isnt-rigged-fails-to-placate-players-who-hate-losing/)
- [Gfinity](https://www.gfinityesports.com/article/netease-reveals-the-secret-to-fixing-your-marvel-rivals-losing-streak)
- [GamesRadar+, role queue](https://www.gamesradar.com/games/third-person-shooter/marvel-rivals-boss-doubles-down-we-believe-no-role-queue-will-lead-to-a-richer-gaming-experience-for-everyone/)
- [PC Gamer, role queue](https://www.pcgamer.com/games/third-person-shooter/instead-of-role-queue-marvel-rivals-wants-to-trust-players-with-the-epic-responsibility-of-creating-a-functioning-team-by-themselves-well-be-taking-a-little-bit-more-of-a-marvel-inspired-approach/)
- [PCGamesN](https://www.pcgamesn.com/marvel-rivals/ranks-competitive)
- [TheGamer, placements](https://www.thegamer.com/marvel-rivals-season-4-finally-getting-placement-matches/)

**Méta et abus**
- [Dexerto, plan des devs](https://www.dexerto.com/marvel-rivals/marvel-rivals-devs-reveal-plan-to-crack-down-on-three-support-meta-3136350/)
- [Dexerto, S1.5](https://www.dexerto.com/marvel-rivals/marvel-rivals-season-1-5-killed-triple-support-but-the-new-meta-is-much-worse-3139069/)
- [rivals.fan](https://rivals.fan/news/marvel-rivals-three-strategist-meta)
- [FandomWire, compositions](https://fandomwire.com/marvel-rivals-dps-mains-are-using-the-dumbest-strategy-that-makes-3-heal-3-tank-comp-a-guaranteed-way-to-hit-celestial/)

**Partie rapide et débutants**
- [Dexerto, partie rapide](https://www.dexerto.com/marvel-rivals/marvel-rivals-awful-matchmaking-system-is-piting-you-against-top-rank-players-3164207/)
- [Dexerto, bots](https://www.dexerto.com/gaming/marvel-rivals-player-proves-devs-snuck-bots-into-quickplay-matches-3016959/)
- [Steam, SBMM en partie rapide](https://steamcommunity.com/app/2767030/discussions/0/578249962076258316/)
- [FandomWire, débutants](https://fandomwire.com/marvel-rivals-feels-great-until-you-run-into-this-one-infuriating-issue-as-a-newcomer/)
- [S21](https://steamcommunity.com/app/2767030/discussions/0/600769761663572886/)
- [TheGamer S7](https://www.thegamer.com/marvel-rivals-mixed-reviews-steam-season-7/)

**Avis joueurs**
- [API publique des avis Steam, Marvel Rivals](https://store.steampowered.com/appreviews/2767030?json=1) — collecte du 30/09/2026, scripts et résultats dans `docs/scraping_avis_steam/`

**Newzoo et collecte**
- Newzoo, *PC & Console Gaming Report 2025* (PDF fourni)
- [PlayTracker, politique de confidentialité](https://playtracker.net/privacy/)
- [WAHL](https://www.wahl.hr/insight/playtracker-enters-strategic-partnership-with-newzoo)
- [VGC](https://www.videogameschronicle.com/news/overwatch-2s-average-pc-player-count-has-dropped-39-since-marvel-rivals-was-released/)

**Fréquentation**
- [Steam Charts](https://steamcharts.com/app/2767030)
- [Game Rant](https://gamerant.com/overwatch-steam-player-count-versus-marvel-rivals-comparison-charts/)

**Études**
- [Heliyon 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10839887/)
- [EOMM 2017](https://arxiv.org/pdf/1702.06820)
- [EnMatch, AAAI 2024](https://ojs.aaai.org/index.php/aaai/article/view/28760)
