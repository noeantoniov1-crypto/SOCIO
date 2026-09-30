# H5 — Un écart de niveau que le matchmaking ne compense pas : dossier complet (version 5)

**Client :** comité de direction de NetEase Games · **Cas :** Marvel Rivals × Data for Business (GBS3) · **Préparé par :** Noé · **Sources consultées les :** 29 et 30/09/2026

**Ce qui change dans la version 5 :**
- **H5 est racontée en trois temps** : ce qui n'a pas marché (2025), la conséquence (une population filtrée, devenue surtout expérimentée), ce qui ne marche toujours pas (aujourd'hui) ;
- « **vétéran** » ne veut plus dire « ancien joueur d'Overwatch » mais **joueur expérimenté sur Marvel Rivals**. Newzoo devient un simple élément de contexte ;
- **l'audit du MMR de la partie rapide** devient le cœur de la phase 0-30 jours (§11), avec la séparation de deux mécanismes : démarrage à froid et manque de joueurs ;
- **nouvelle donnée** : la répartition des joueurs actifs par ancienneté, mois par mois (D9) ;
- **nouvel indice public** : l'ancienneté des auteurs d'avis Steam, trimestre par trimestre (§9.3) ;
- les fiches de données (D1 à D20) sont classées selon les trois temps.

Légende : **FAIT** = écrit dans une source lue · **HYPOTHÈSE** = à valider avec les données de NetEase · **RECO** = recommandation · *(extrait)* = source vue seulement en résumé.

---

## 1. Résumé exécutif (pour le comité)

| | |
|---|---|
| **Problème** | Sur Steam (PC), la moyenne mensuelle de joueurs simultanés est passée de **279 K le mois de la sortie** (décembre 2024) à un **plateau de 64 à 89 K** depuis septembre 2025, soit **−77 %**, malgré 40 M de joueurs acquis en 3 mois. Dans les avis Steam, la part des négatifs qui citent le matchmaking est passée de **7 % à 41 %** entre décembre 2024 et août 2025. |
| **Ce qui n'a pas marché (2025)** | Des joueurs de tous niveaux sont arrivés en même temps, **sans calibrage** : la partie rapide n'avait pas de mécanisme documenté et le classé faisait démarrer tout le monde en Bronze III jusqu'à la Season 5. Les moins expérimentés ont subi de lourdes défaites face aux plus expérimentés, et ils sont partis. |
| **La conséquence** | Ce départ a **filtré la population** : ceux qui restent sont surtout des joueurs expérimentés. Chez les auteurs d'avis Steam, la part de joueurs à plus de 200 heures passe de 5 % à 36-42 %. |
| **Ce qui ne marche toujours pas (aujourd'hui)** | Un nouveau joueur arrive en partie rapide dans cette population expérimentée. Comme il y a moins de joueurs, le matchmaking **élargit la fourchette de niveau** (mécanisme reconnu par vos équipes). Le nouveau perd lourdement et part à son tour : **la base ne se renouvelle pas**. |
| **Recommandation** | Un **audit du MMR de la partie rapide** en 30 jours sur vos données existantes, pour séparer deux causes : un MMR de départ mal réglé, ou le manque de joueurs. Ensuite, des tests A/B ciblés sur la cause trouvée : file débutants, fourchette resserrée aux heures creuses, garde-fous de rôles aux rangs bas. |
| **Objectif** | D'ici le 31/03/2027 : qu'un nouveau joueur qui perd ses premiers matchs ne parte pas plus de **1,2 fois** plus souvent que les autres. |
| **Coût** | Faible en collecte : les données prioritaires **existent déjà** dans votre télémétrie. Deux nouvelles collectes seulement, plus tard et sous consentement. |
| **Risque principal** | Des pratiques perçues comme opaques (bots non annoncés, élargissement de fourchette caché) : risque de **réputation et de conformité** (RGPD Art. 5 et 22, AI Act Art. 5, mineurs). |

---

## 2. L'hypothèse H5 en trois temps

> **H5.** *Ce qui n'a pas marché* : au lancement, des joueurs de niveaux très différents sont arrivés en même temps. Sans calibrage, les moins expérimentés ont subi de lourdes défaites face aux plus expérimentés, et ils sont partis.
> *La conséquence* : ce départ a filtré la population. Il reste surtout des joueurs expérimentés, qui ont accumulé des centaines d'heures sur Marvel Rivals.
> *Ce qui ne marche toujours pas* : un nouveau joueur arrive aujourd'hui dans cette population expérimentée, d'abord en partie rapide. Faute de joueurs, le matchmaking élargit la fourchette de niveau (**H5b**). Le nouveau perd lourdement et part à son tour : la base ne se renouvelle pas.
> Le joueur interprète ces défaites comme un matchmaking truqué, alors qu'elles viennent d'un écart de niveau que le matchmaking ne compense pas.

### 2.1 Le cercle vicieux

```
            Moins de joueurs en file
                     │
                     ▼
     Fourchette de niveau élargie (H5b)
                     │
                     ▼
 Nouveau joueur face à une population expérimentée
                     │
                     ▼
     Défaites lourdes dès les premiers matchs
                     │
                     ▼
   Le nouveau part ── la base ne se renouvelle pas
                     │
                     └──────► retour en haut
```

### 2.2 La chaîne causale, maillon par maillon

| Temps | # | Maillon | Force de la preuve | Donnée qui tranche (fiche §10.3) |
|---|---|---|---|---|
| **1. Ce qui n'a pas marché** | M1 | Des joueurs de niveaux très différents arrivent en même temps | Moyenne : 40 M de joueurs en 3 mois, dont des joueurs venus d'autres hero shooters (contexte) | D1 |
| | M2 | Aucun calibrage : classé en Bronze III pour tous jusqu'à la S5, partie rapide non documentée | **Forte (officiel)** | D3, D4 |
| | M3 | Les plus expérimentés montent vite en traversant les moins expérimentés | Moyenne (mécanisme officiel) | D4 |
| | M4 | La liberté de composition ajoute un écart **tactique** | **Forte sur les faits** | D5 à D8 |
| | M5 | Les défaites lourdes font partir | **Forte (études)** | D2 |
| **2. La conséquence** | M6 | La population est filtrée : il reste surtout des joueurs expérimentés | Moyenne : logique, et indice public dans les avis (§9.3) | **D9** |
| **3. Ce qui ne marche toujours pas** | M7 | Les nouveaux entrent en partie rapide face à cette population | Moyenne : règles officielles, MMR de la partie rapide non documenté | D11, D12 |
| | M8 | Moins de joueurs → fourchette élargie (H5b) | **Forte (officiel, mécanisme)** | D13 |
| | M9 | Les défaites lourdes font partir les nouveaux (même mécanisme que M5) | À mesurer | **D10 (KPI de l'objectif)** |
| | M10 | Aggravant : le jeu s'alourdit (un héros par mois) | Moyenne | D15 |

**Pourquoi des maillons :** chaque maillon se vérifie seul. La chaîne vaut ce que vaut son maillon le plus faible, et chaque maillon fragile donne **une** donnée à extraire. On peut valider un temps du récit sans les autres.

### 2.3 Deux mécanismes à séparer dans le temps 3

L'écart subi aujourd'hui par un nouveau joueur peut venir de deux causes, dont les solutions diffèrent :

| Mécanisme | Ce qui se passe | Comment le voir | Levier |
|---|---|---|---|
| **A. Démarrage à froid** | Le MMR de départ d'un nouveau compte est mal réglé (par exemple au niveau médian), ou met trop de matchs à trouver le bon niveau | Écart subi par les nouveaux comptes **à population égale** (même heure, même région) | Revoir le MMR de départ, accélérer sa convergence, file débutants |
| **B. Manque de joueurs (H5b)** | Faute de joueurs en file, le système élargit la fourchette | Écart qui **augmente quand la file se vide** (heures creuses, petites régions), quel que soit l'âge du compte | Resserrer la fourchette en acceptant plus d'attente, regrouper des files ou des régions, annoncer l'élargissement |

**Test simple :** comparer l'écart subi par les nouveaux comptes aux heures pleines et aux heures creuses. S'il est élevé tout le temps, c'est surtout A. S'il explose aux heures creuses, c'est surtout B. Les deux peuvent se cumuler.

---

## 3. Arbre d'hypothèses

| Hypothèse | Rapport avec H5 | Test qui départage (données NetEase) |
|---|---|---|
| **H1** Matchmaking perçu comme truqué (EOMM, démenti) | H5 explique la perception **sans EOMM** | Sous H5 : écarts plus forts pour les comptes jeunes et quand la file est vide. Sous H1 : séries indépendantes de l'ancienneté et de la population. |
| **H1b** Smurfing | Aggrave H5 : des joueurs expérimentés sur des comptes neufs | Comptes jeunes à performance anormale (D1) |
| **H2** Fatigue d'équilibrage | Effet additionnel (M10) | Churn aligné sur les patchs, ou sur les défaites lourdes ? |
| **H3** Monétisation | Indépendante, **contrôle** | Churn payeurs / non-payeurs × ancienneté × bilan des premiers matchs |
| **H4** Attrition naturelle du genre | **Contrôle** : explique une partie de la baisse des premiers mois | Benchmark : The Finals −80 % en 1,5 mois ([Game Rant](https://gamerant.com/the-finals-player-count-decline-steam/)) |

→ H5 n'a pas besoin d'expliquer 100 % du déclin. Elle doit montrer que ce mécanisme y a **contribué** en 2025, et qu'il **empêche la reprise** aujourd'hui.

→ En 2026, les avis négatifs restent nombreux (26 à 43 % selon les mois), mais ne citent plus le matchmaking qu'à 9-16 % : d'autres causes (H2, H3, performances techniques) pèsent aussi sur le plateau.

---

## 4. Temps 1 — Ce qui n'a pas marché (2025) : les preuves

### M1 — Des joueurs de niveaux très différents arrivent en même temps

| Donnée | Statut | Source |
|---|---|---|
| 10 M de joueurs en 3 jours, 20 M en moins de 2 semaines, 40 M en ~3 mois | FAIT *(extrait)* | [Game World Observer](https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report) |
| **Contexte** : « 45% of players who stopped playing Overwatch 2 in December played Marvel Rivals » : des joueurs déjà expérimentés dans le genre sont arrivés en même temps que des joueurs venus pour la licence | FAIT (panel biaisé vers les joueurs engagés, §7) | Newzoo, *PC & Console Gaming Report 2025*, p. 24 |
| Moyennes Steam d'Overwatch 2 : environ 32 K (novembre 2024), puis 25 248 (décembre, −21,7 %) et 19 745 (−21,8 %) | FAIT (PC) | [VGC](https://www.videogameschronicle.com/news/overwatch-2s-average-pc-player-count-has-dropped-39-since-marvel-rivals-was-released/) |
| Répartition réelle des niveaux à l'arrivée | **Inconnue publiquement** ; mesurable par NetEase (D1) | — |

⚠️ Newzoo écrit « **played** » (ont joué), pas « switched » (sont passés). Le titre de TheGamer (« 45 % des joueurs d'Overwatch 2 ont migré ») est une déformation. Ce chiffre sert seulement de contexte : la preuve de l'hétérogénéité est dans la télémétrie de NetEase.

### M2 — Aucun calibrage

| Donnée | Statut | Source |
|---|---|---|
| Jusqu'à la S4 : pas de placement, tout le monde démarre en **Bronze III** ; classé au niveau 10, puis **15** depuis la S2 | FAIT | [PCGamesN](https://www.pcgamesn.com/marvel-rivals/ranks-competitive) |
| **Pas de documentation publique du MMR de la partie rapide**, par où passent tous les nouveaux joueurs avant le niveau 15 | FAIT (absence) | [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking) |
| Répartition officielle des rangs en S1.5 : joueurs à moins de 5 matchs classés exclus, à cause du « poids écrasant » des joueurs placés en Bronze | FAIT | [PCGamesN](https://www.pcgamesn.com/marvel-rivals/ranks-competitive) |
| Placements annoncés le 03/09/2025, repoussés après la S4 | FAIT | [TheGamer](https://www.thegamer.com/marvel-rivals-season-4-finally-getting-placement-matches/) |
| **S5 (14/11/2025)** : 10 matchs de placement ; nouveau joueur placé au rang estimé Silver III ; groupes de 3 maximum pendant les placements | **FAIT (officiel)** | [Notes de patch S5](https://www.marvelrivals.com/20251114/41525_1270590.html) |
| Part des avis négatifs citant le matchmaking : **25,9 % (oct. 2025) → 17,3 % (nov. 2025)** | FAIT (notre collecte) | §9 |

→ **Lecture** : les placements de la S5 sont la **correction, par NetEase lui-même, du manque de calibrage** en classé. Ils confirment après coup que ce point posait problème. Juste après leur arrivée, les plaintes sur le matchmaking reculent et la fréquentation rebondit (décembre 2025 – janvier 2026). C'est une corrélation, pas une causalité : **à confirmer** avec la rétention des nouveaux comptes avant et après le 14/11/2025 (D3). Les placements ne couvrent pas la partie rapide.

### M3 — Les plus expérimentés montent vite en traversant les autres

Vidéo de Zhiyong, **21/08/2025** — **FAIT (officiel)**. Sources : [PC Gamer](https://www.pcgamer.com/games/third-person-shooter/marvel-rivals-devs-transparent-18-minute-breakdown-of-how-ranked-isnt-rigged-fails-to-placate-players-who-hate-losing/), [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking).

- La performance est ramenée à 10 minutes de jeu et comparée aux **joueurs du même héros au même rang**.
- **Silver : 60 % performance / 40 % résultat ; Celestial : 30 % / 70 %.**
- Points : ±20 à niveau égal ; +25 / −15 contre plus fort ; +15 / −25 contre plus faible.
- Les équipes sont équilibrées sur la **moyenne** des scores.
- Témoignage de joueur : « Bronze → Silver en ~6 matchs » en dominant ([Steam](https://steamcommunity.com/app/2767030/discussions/0/600769761663572886/)).

→ Le système **fonctionne comme prévu** pour un joueur expérimenté : il monte vite. Le coût est supporté par les joueurs moins expérimentés qu'il croise en chemin.

### M4 — La liberté de composition ajoute un écart tactique

**Le choix de NetEase, et son propre diagnostic :**

| Élément | Statut | Source |
|---|---|---|
| Guangyun Chen : « We believe **no role queue** will lead to a richer gaming experience for everyone » | FAIT | [GamesRadar+](https://www.gamesradar.com/games/third-person-shooter/marvel-rivals-boss-doubles-down-we-believe-no-role-queue-will-lead-to-a-richer-gaming-experience-for-everyone/) · [PC Gamer](https://www.pcgamer.com/games/third-person-shooter/instead-of-role-queue-marvel-rivals-wants-to-trust-players-with-the-epic-responsibility-of-creating-a-functioning-team-by-themselves-well-be-taking-a-little-bit-more-of-a-marvel-inspired-approach/) |
| Zhiyong : une role queue **allongerait l'attente** ; le système peut produire des « **imbalanced team roles** » | FAIT (officiel) | [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking) |
| Conseil officiel face aux séries de défaites : « **apprenez à flex** » | FAIT | [Gfinity](https://www.gfinityesports.com/article/netease-reveals-the-secret-to-fixing-your-marvel-rivals-losing-streak) |
| Bans de héros seulement à partir de **Diamant III** | FAIT | [PCGamesN](https://www.pcgamesn.com/marvel-rivals/ranks-competitive) |

**Les mécaniques exploitées :**

| Période | Mécanique | Constat | Source |
|---|---|---|---|
| S0 → S1 | **Triple Strategist** | Enchaînement d'ultimes : Luna Snow (12 s), Loki (12 s), puis un troisième, soit un combat bloqué **plus de 30 s**. Zhiyong : « **oppressive moments** », « may slow down the game's pace ». | [Dexerto S1.5](https://www.dexerto.com/marvel-rivals/marvel-rivals-season-1-5-killed-triple-support-but-the-new-meta-is-much-worse-3139069/) · [Dexerto, plan des devs](https://www.dexerto.com/marvel-rivals/marvel-rivals-devs-reveal-plan-to-crack-down-on-three-support-meta-3136350/) |
| S1.5 (21/02/2025) | Correctif | Ultimes de soin plus chers ; tanks à bouclier affaiblis | idem |
| Après la S1.5 | **L'abus se déplace** | Combo Storm + Human Torch ; méta jugé « **much worse for casuals** » | [Dexerto S1.5](https://www.dexerto.com/marvel-rivals/marvel-rivals-season-1-5-killed-triple-support-but-the-new-meta-is-much-worse-3139069/) |
| En continu | Triple tank + triple soin ; **empilement de team-ups** | Efficace contre les équipes non coordonnées | [FandomWire](https://fandomwire.com/marvel-rivals-dps-mains-are-using-the-dumbest-strategy-that-makes-3-heal-3-tank-comp-a-guaranteed-way-to-hit-celestial/) |
| 2025 (avis Steam) | Ressenti des joueurs | « Add a role queue so I don't have to be the only tank with 4 dps and one healer » (07/2025, 122 h) | §9 |
| — | « Plus de 50 % des matchs Diamant en triple Strategist » | **Non vérifié** (Reddit, fil Steam) | [rivals.fan](https://rivals.fan/news/marvel-rivals-three-strategist-meta) |

→ **Lecture pour le client** : la liberté de composition est un **choix de design légitime**. Mais aux rangs bas, elle avantage les joueurs expérimentés et coordonnés face aux joueurs moins expérimentés en solo. Perdre un combat bloqué 30 secondes **ressemble** à un match truqué : le méta exploité nourrit la perception d'EOMM.

### M5 — Les défaites lourdes font partir

- **Kang, Suh et Kim, *Heliyon*, 2024** (texte intégral lu, [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10839887/)) : ~6 millions de matchs, plus de 262 000 joueurs.
  - **+50 points d'écart de niveau moyen : +10 % de churn** (de 17 % à 18,7 %).
  - Jouer contre plus fort, et subir de grands écarts de niveau, augmente le churn.
  - Les débutants sont moins sensibles au taux de victoire que les joueurs avancés.
- **EOMM, EA/UCLA, 2017** *(extrait)* : en série de défaites, le risque de churn est d'environ 5 %, contre 2 à 2,6 % sinon ([arXiv](https://arxiv.org/pdf/1702.06820)).

→ Ce sont des **analogies** tirées d'autres jeux. La vraie mesure est dans les données de churn de NetEase (D2 pour 2025, D10 aujourd'hui).

---

## 5. Temps 2 — La conséquence : une population filtrée

### M6 — Il reste surtout des joueurs expérimentés

**Le raisonnement :** l'audience PC passe de 279 K à 64-89 K. Ceux qui restent sont, par définition, ceux qui ont tenu malgré les défaites : surtout des joueurs investis, qui ont accumulé des centaines d'heures. Ce ne sont pas forcément d'anciens joueurs d'Overwatch, mais des joueurs **expérimentés sur Marvel Rivals**.

**Indice public : l'ancienneté des auteurs d'avis Steam** (notre collecte, §9.3)

| Trimestre | Avis à moins de 10 h de jeu | Avis à plus de 200 h de jeu | Temps de jeu médian des auteurs |
|---|---|---|---|
| T4 2024 (sortie le 06/12) | 36,7 % | 5,2 % | 18 h |
| T1 2025 | 18,2 % | 10,8 % | 54 h |
| T2 2025 | 12,6 % | 31,3 % | 109 h |
| T3 2025 | 13,1 % | 41,8 % | 140 h |
| T4 2025 | 16,8 % | 41,6 % | 125 h |
| T1 2026 | 15,8 % | 34,8 % | 91 h |
| T2 2026 | 15,6 % | 40,3 % | 120 h |
| T3 2026 (jusqu'au 29/09) | 15,8 % | 35,9 % | 87 h |

En volume, le nombre estimé d'avis écrits par des joueurs à moins de 10 heures passe d'environ **26 000** au T4 2024 à **2 300 à 3 700 par trimestre** depuis mi-2025, soit environ **9 fois moins**.

→ **Lecture** : la part des auteurs très expérimentés est passée de 5 % à 36-42 % et s'y maintient. Il arrive encore des nouveaux joueurs (environ 16 % des avis), mais **en petit nombre** au sein d'une population expérimentée.

⚠️ **Limites de cet indice** :
- sur un jeu plus ancien, les auteurs d'avis ont **mécaniquement** plus d'heures ;
- au lancement, les joueurs écrivent davantage d'avis ;
- seuls ceux qui écrivent un avis sont représentés, sur PC et en anglais.

C'est un **indice cohérent**, pas une preuve. La mesure exacte est la répartition des joueurs actifs par ancienneté et heures jouées, mois par mois, dans la télémétrie de NetEase (**D9**).

---

## 6. Temps 3 — Ce qui ne marche toujours pas : les preuves

### M7 — Les nouveaux entrent en partie rapide face à cette population

| Donnée | Statut | Source |
|---|---|---|
| Le classé n'est accessible qu'au niveau 15 : un nouveau joueur passe d'abord par la **partie rapide** | FAIT | [PCGamesN](https://www.pcgamesn.com/marvel-rivals/ranks-competitive) |
| **Le MMR de la partie rapide n'est pas documenté publiquement.** La vidéo du 21/08/2025 porte sur le classé. | FAIT (absence) | [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking) |
| Critères de matchmaking cités par NetEase : composition, score compétitif, score de base, serveurs, rôles habituellement joués | FAIT (rapporté) | [Gfinity](https://www.gfinityesports.com/article/netease-reveals-the-secret-to-fixing-your-marvel-rivals-losing-streak) |
| La partie rapide « privilégie la vitesse » : « huge skill gaps », « a rookie might find themselves against seasoned veterans » | Presse / verbatims | [Dexerto](https://www.dexerto.com/marvel-rivals/marvel-rivals-awful-matchmaking-system-is-piting-you-against-top-rank-players-3164207/) |
| MMR caché avec des fourchettes plus larges qu'en classé | HYPOTHÈSE (communauté) | [Steam](https://steamcommunity.com/app/2767030/discussions/0/578249962076258316/) |
| **Parties avec bots** après 2 défaites d'affilée, jamais confirmées ni démenties publiquement | HYPOTHÈSE solide (28/12/2024) ; encore signalées en S7 (2026) | [Dexerto](https://www.dexerto.com/gaming/marvel-rivals-player-proves-devs-snuck-bots-into-quickplay-matches-3016959/) · [TheGamer S7](https://www.thegamer.com/marvel-rivals-mixed-reviews-steam-season-7/) |
| Avis Steam : « a whole team of Bronze players get paired against Celestial/Eternity players. **Needs some kind of SBMM for quickplay** » (06/2025, 906 h) ; « **new players and high-ranked veterans** often end up in the same team » (10/2025, 1 011 h) | Verbatims (notre collecte) | §9 |

### M8 — Moins de joueurs, fourchette élargie (H5b)

| Donnée | Statut | Source |
|---|---|---|
| Si l'attente est trop longue, la fourchette de rang **s'élargit progressivement** ; groupes mélangés (4+1+1 contre 3+2+1) ; « **rank gaps** » reconnus | **FAIT (officiel)** | [Gaming Amigos](https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking) |
| S3.5 : groupes de 4 et 6 interdits aux rangs élevés, car ils rendaient le matchmaking trop difficile à équilibrer | FAIT (officiel) | idem |
| Population PC : 279 K de moyenne en décembre 2024, 68,6 K sur les 30 derniers jours | FAIT | [Steam Charts](https://steamcharts.com/app/2767030) |
| Files de 20 minutes et plus au sommet ; serveur « mort » cité (Tokyo, 04/2025) | Verbatims | [Steam](https://steamcommunity.com/app/2767030/discussions/0/688618675547317727/) · avis Steam |

→ **Point d'attention** : 68 K joueurs simultanés sur PC, sans compter les consoles, ce n'est pas un désert. Le manque de joueurs est sans doute **local** : certaines heures, certaines régions, certaines tranches de niveau. C'est là que l'audit doit le chercher (D13).

→ **Effet structurel** (HYPOTHÈSE) : au lancement, tout le monde était nouveau, donc un nouveau joueur trouvait facilement des adversaires de son niveau. Près de deux ans plus tard, les nouveaux arrivent au compte-gouttes dans une population expérimentée. **Même un MMR bien réglé** manque alors d'adversaires de même niveau et doit élargir la fourchette. C'est un effet du vieillissement d'un jeu service, que le matchmaking doit **compenser activement**.

### M9 — Les défaites lourdes font partir les nouveaux

Même mécanisme que M5, appliqué aux nouveaux joueurs d'aujourd'hui. Aucune donnée publique ne le mesure : c'est **l'indicateur de l'objectif SMART** (D10).

⚠️ Les joueurs à moins de 10 heures citent le matchmaking dans seulement 2,8 % de leurs avis négatifs. Un nouveau joueur écrasé part souvent **sans écrire d'avis**, ou n'identifie pas la cause (« c'est trop dur ») : c'est le biais du survivant (§9.4).

### M10 — Aggravant : le jeu s'alourdit

Depuis la S3 (11/07/2025) : saisons de 2 mois et **un héros par mois**, contre un tous les ~6 mois sur Overwatch 2 ([GameSpot](https://www.gamespot.com/articles/marvel-rivals-shortening-seasons-releasing-a-new-hero-every-month/1100-6530612/), *extrait*). Plus de 45 héros en février 2026 ([Game Rant](https://gamerant.com/overwatch-steam-player-count-versus-marvel-rivals-comparison-charts/)). Un nouveau joueur a de plus en plus à apprendre face à des joueurs qui connaissent déjà tous les héros.

---

## 7. La source Newzoo : collecte et fiabilité (contexte du temps 1)

### 7.1 Comment Newzoo récolte ses données

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
| Mécanisme documenté | Comptes Steam / PSN / Xbox reliés à **PlayTracker** | FAIT | [PlayTracker, section B](https://playtracker.net/privacy/) |
| Partage avec Newzoo | « **joint controllers under the GDPR** » ; données pseudonymisées ; résultats agrégés | FAIT | [PlayTracker, section D](https://playtracker.net/privacy/) |
| PlayTracker est-il **la** source des 45 % ? | **Non prouvé** : partenariat annoncé le 27/05/2025, après le rapport | HYPOTHÈSE | [X @PlayTrackerNet](https://x.com/PlayTrackerNet/status/1927304996393013371) · [WAHL](https://www.wahl.hr/insight/playtracker-enters-strategic-partnership-with-newzoo) |
| « 73 000 joueurs » | C'est le *Global Gamer Study*, un **sondage**, pas le panel de télémétrie | Correction | Rapport, p. 8 |

### 7.2 Fiabilité

| Test | Newzoo | Source indépendante | Verdict |
|---|---|---|---|
| Overwatch 2 recule en décembre 2024 | −26 % d'engagement (p. 73) | SteamDB via VGC : −21,7 % puis −21,8 % | ✅ Cohérent |
| Overwatch 2 revient à ses anciens niveaux | DAU au niveau d'Overwatch 1 (p. 78) | Baisse continue sur Steam | ✅ Cohérent |
| Marvel Rivals est un succès massif en décembre | 7 % de la croissance F2P 2024 (p. 24) | 279 K de moyenne Steam, 40 M de joueurs | ✅ Cohérent |
| Le chiffre de 45 % | p. 24 | Aucune autre source chiffrée | ⚠️ Non recoupable |
| Représentativité | Panel biaisé vers les joueurs « core » (disclaimer p. 45) | — | ❌ Faible |

**Verdict :** fiable pour la **tendance** (des joueurs expérimentés d'autres jeux sont arrivés). Inutilisable pour mesurer quoi que ce soit dans la base de NetEase. Dans la version 5, il ne sert donc que de contexte.

**Leçon de minimisation :** Newzoo a besoin de comptes liés pour savoir d'où viennent les joueurs. NetEase, non : sa télémétrie de match suffit à repérer un joueur expérimenté (D1). L'historique de jeu externe reste **INUTILE** (RGPD Art. 5.1.c).

---

## 8. Chronologie : fréquentation Steam, avis et événements

Sources : [Steam Charts](https://steamcharts.com/app/2767030), lu le 29/09/2026 (moyennes mensuelles de joueurs simultanés, **PC uniquement** ; pic de référence 642 333) ; avis Steam en anglais, notre collecte du 30/09/2026.

| Mois | Moyenne Steam | Variation | % d'avis négatifs | % des négatifs citant le matchmaking | Événement | Temps |
|---|---|---|---|---|---|---|
| Déc. 2024 | 279 402 | — | 16,1 % | **7,4 %** | Sortie (06/12) ; Bronze III pour tous ; bots signalés (28/12) | 1 |
| Janv. 2025 | 306 066 | +9,5 % | 18,0 % | 10,9 % | Pic de 642 333 | 1 |
| Fév. – mars 2025 | 228 000 / 144 302 | −25,5 % / −36,7 % | 18,9 % / 16,4 % | 12,1 % / 20,3 % | Méta triple Strategist, correctif S1.5 (21/02) | 1 |
| Avr. 2025 | 134 118 | −7,1 % | 20,4 % | 21,1 % | S2 ; classé au niveau 15 | 1 |
| **Mai – juin 2025** | 102 116 / 79 806 | **−23,9 % / −21,9 %** | 28,3 % / 31,9 % | 29,1 % / 27,6 % | **Cassure** | 1 → 2 |
| Juil. – août 2025 | 82 825 / 77 502 | +3,8 % / −6,4 % | 34,6 % / 38,5 % | 37,0 % / **41,0 %** | S3 : un héros par mois ; démenti EOMM (12/08) ; vidéo (21/08) | 2 |
| Sept. – oct. 2025 | 64 418 / 63 716 | −16,9 % / −1,1 % | 37,8 % / 37,6 % | 33,9 % / 25,9 % | Placements repoussés ; plus bas historique | 2 |
| **Nov. 2025** | 65 301 | +2,5 % | **17,6 %** | **17,3 %** | **S5 : placements (NetEase corrige le calibrage du classé)** | 3 |
| Déc. 2025 – janv. 2026 | 75 492 / 88 790 | +15,6 % / +17,6 % | 28,1 % / 25,9 % | 18,2 % / 15,4 % | Rebond (corrélation, pas causalité) | 3 |
| Fév. 2026 | 81 368 | −8,4 % | 27,8 % | 15,6 % | Relance d'Overwatch | 3 |
| Mars – sept. 2026 | 30 derniers jours : 68 566 | −14,4 % | 32 à 43 % | 9 à 15 % | Plateau : la base ne se renouvelle pas | 3 |

---

## 9. Ce que disent les joueurs : analyse de 303 K avis Steam

### 9.1 Méthode

| Élément | Choix |
|---|---|
| Source | API publique des avis Steam (`store.steampowered.com/appreviews/2767030`) |
| Périmètre | Avis **en anglais**, du **06/12/2024 au 29/09/2026** |
| Échantillon | **37 990 avis**, jusqu'à 400 par semaine sur 95 semaines, **pondérés** par le volume réel de chaque semaine. Population estimée : **303 135 avis**. |
| Variables conservées | Date, vote (recommandé ou non), **temps de jeu au moment de l'avis**, votes « utile », texte |
| **Minimisation (RGPD)** | **Ni identifiant Steam ni pseudo** conservés ; analyse **agrégée** ; citations courtes |
| Analyse | Repérage par mots-clés (matchmaking, EOMM, écart de niveau, débutants, partie rapide, bots, rôles, smurfs) ; répartition des auteurs par temps de jeu |
| Date de collecte | 30/09/2026 |
| Fichiers | `docs/scraping_avis_steam/` : scripts, volumes par semaine, résultats |

### 9.2 Le matchmaking comme motif d'insatisfaction

- **16,6 %** des avis négatifs parlent du matchmaking, contre **1,5 %** des avis positifs, soit **11 fois plus**.
- La part des négatifs qui le citent passe de **7 % à 41 %** entre décembre 2024 et août 2025, puis **tombe à 17 %** juste après les placements de la S5 (tableau du §8). C'est une corrélation, pas une preuve.
- En 2026, les négatifs restent nombreux, mais le matchmaking n'en représente plus que 9 à 16 %.

**Thèmes des avis négatifs qui citent le matchmaking** (n = 2 346)

| Thème | Part | Dans l'ensemble des négatifs | Lien avec les maillons |
|---|---|---|---|
| EOMM / « rigged » | **35,5 %** | 6,0 % | Perception d'injustice (H1) |
| Classé | 32,8 % | 11,3 % | M2, M3 |
| Écart de niveau / stomp | **13,9 %** | 2,6 % | **M3, M7, M8** |
| Vétérans / Overwatch / « sweat » | 13,9 % | 11,2 % | M1, M6 |
| Partie rapide | 12,7 % | 4,5 % | **M7** |
| Bots | 10,0 % | 4,2 % | M7 (parties d'entraînement) |
| Rôles / compositions | 8,3 % | 3,5 % | **M4** |
| Smurfs | 5,3 % | 1,6 % | H1b |
| Débutants cités explicitement | 3,4 % | 1,3 % | M1, M7 |

### 9.3 Qui écrit les avis : une population de plus en plus expérimentée

| Trimestre | Avis estimés | < 10 h | 10-50 h | 50-200 h | > 200 h | Médiane |
|---|---|---|---|---|---|---|
| T4 2024 | 70 969 | 36,7 % | 46,9 % | 11,2 % | 5,2 % | 18 h |
| T1 2025 | 106 705 | 18,2 % | 34,1 % | 36,9 % | 10,8 % | 54 h |
| T2 2025 | 31 116 | 12,6 % | 21,7 % | 34,4 % | 31,3 % | 109 h |
| T3 2025 | 19 623 | 13,1 % | 19,4 % | 25,8 % | 41,8 % | 140 h |
| T4 2025 | 21 844 | 16,8 % | 19,7 % | 21,9 % | 41,6 % | 125 h |
| T1 2026 | 19 428 | 15,8 % | 25,7 % | 23,6 % | 34,8 % | 91 h |
| T2 2026 | 14 725 | 15,6 % | 20,9 % | 23,2 % | 40,3 % | 120 h |
| T3 2026 | 18 720 | 15,8 % | 25,4 % | 23,0 % | 35,9 % | 87 h |

Parts pondérées ; médiane calculée sur l'échantillon non pondéré. Script : `docs/scraping_avis_steam/anciennete_auteurs.py`.

→ Voir la lecture et les limites au §5.

### 9.4 Qui se plaint du matchmaking : surtout les joueurs expérimentés

| Temps de jeu au moment de l'avis | Part d'avis négatifs | Part des négatifs qui citent le matchmaking |
|---|---|---|
| 0-10 h | 24,5 % | **2,8 %** (plaintes surtout sur les **performances techniques**, ~17 %) |
| 10-50 h | 14,3 % | 9,2 % |
| 50-200 h | 20,3 % | 18,3 % |
| 200-1 000 h | 37,4 % | **30,2 %** |
| Plus de 1 000 h | 43,1 % | 22,4 % |

Deux lectures, cohérentes avec H5 :
1. **Biais du survivant** : un nouveau joueur écrasé part sans écrire d'avis, ou n'identifie pas la cause. Seule la donnée interne de churn (D10) peut trancher.
2. **L'écart est vécu des deux côtés** : les joueurs expérimentés se plaignent d'être mis avec ou contre des joueurs de niveau très différent (« new players and high-ranked veterans often end up in the same team »). L'hétérogénéité des lobbys est bien au cœur du problème.

### 9.5 Verbatims représentatifs (extraits courts, sans pseudo)

**Nouveaux joueurs face à des joueurs expérimentés (M7)**
- *[07/2025, 5,8 h]* « It is not fun to be put in a lobby with enemies that are in diamond and grandmaster just because I won the previous game, **while I am just trying to learn** »
- *[01/2025, 6,2 h]* « **Third casual match** and I am getting matched against Platinum III players with 58 hs played »
- *[07/2025, 17 h]* « This game is really sweaty and complex. **New players shouldn't even try it** unless they have a lot of friends to voice chat with »
- *[04/2025, 1,6 h]* « pairs new or low-skilled players with highly skilled ones »

**Partie rapide (M7)**
- *[06/2025, 906 h]* « Matchmaking is horrible for the **casual players in quickplay**, why does a whole team of Bronze players get paired against Celestial/Eternity players. **Needs some kind of SBMM for quickplay** »
- *[07/2025, 198 h]* « Even in quickplay the game just serves you obvious steamrolls (i.e. matching six grandmasters vs one) »

**Lobbys hétérogènes vus par les joueurs expérimentés (M8)**
- *[10/2025, 1 011 h]* « **New players and high-ranked veterans** often end up in the same team, while smurfing […] »
- *[07/2025, 1 108 h]* « In what world is it a good idea to put **Silver, Gold, Plat, and Diamond-Celestial** players in the same match…? In ranked? QP is just as bad »

**Rôles et compositions (M4)**
- *[08/2025, 335 h, 36 votes utiles]* « devs vision where **everyone have freedom to play any role any time** »
- *[07/2025, 122 h]* « Give us **placement matches** […] Add a **role queue** so I don't have to be the only tank with 4 dps and one healer »

**Bots (M7)**
- *[07/2026, 817 h, 315 votes utiles]* « you can have a **bot match even if you're winning** »
- *[02/2026, 579 h, 53 votes utiles]* « if you play and loose too much the game puts you against bots »

### 9.6 Limites

- **Steam = PC uniquement**, et **avis en anglais uniquement**.
- **Mots-clés imparfaits** : faux positifs et oublis possibles.
- **Échantillon pondéré, pas exhaustif.**
- **Seuls ceux qui écrivent un avis sont représentés** (biais du survivant).
- **Un avis mesure une perception**, pas l'iniquité réelle.
- **RGPD** : le texte d'un avis peut contenir des données personnelles, d'où l'analyse agrégée, sans identifiant, et des citations courtes.

---

## 10. BODAK

> **Décision à éclairer :** NetEase doit décider s'il modifie l'entrée en jeu de Marvel Rivals (matchmaking de la partie rapide, fourchette de niveau, garde-fous de rôles) pour que les nouveaux joueurs restent, face à un plancher d'audience bas et fragile depuis mi-2025.

### 10.1 Le BODAK en cinq phrases

| Lettre | Phrase |
|---|---|
| **B — Business problem** | « Sur Steam, la moyenne mensuelle de joueurs simultanés de Marvel Rivals baisse de **77 %** entre le mois de sa sortie (décembre 2024 : 279 K) et octobre 2025 (64 K), et plafonne depuis sous 90 K, **malgré 40 M de joueurs acquis en 3 mois**. **Les nouveaux joueurs partent-ils parce qu'ils tombent, dans des lobbys élargis par le manque de joueurs, sur une population restée surtout expérimentée ?** » |
| **O — Objective** | « **Ramener à 1,2** le ratio de churn J7 entre les **nouveaux comptes ayant perdu au moins 7 de leurs 10 premiers matchs** et les autres nouveaux comptes, **d'ici le 31/03/2027** (≈ fin de Season 12, calendrier à confirmer). » |
| **D — Data** | « Répartition des joueurs actifs par ancienneté, churn par cohorte selon les premiers matchs, MMR de départ et écart de MMR subi en partie rapide × ancienneté, largeur de fourchette × joueurs en file par heure et région, compositions par rôle × résultat × rang, parties avec bots, avis Steam agrégés. » |
| **A — Analysis** | « Audit du MMR de la partie rapide (heures pleines contre heures creuses) + cohortes 2025 et avant / après la S5 + régression du churn J7 sur écart, ancienneté, population et composition (test H1 contre H5) + tests A/B des leviers + analyse textuelle des avis Steam. » |
| **K — KPIs** | « Ratio de churn J7 des nouveaux comptes perdants, écart de MMR médian subi par les nouveaux comptes en partie rapide, attente p90 par rang, part des matchs Bronze-Or avec au moins 4 héros du même rôle, part des avis Steam négatifs citant le matchmaking. » |

### 10.2 Justification du B et du O

**B — données utilisées et à quoi elles servent**

| Donnée | Définition précise | Période et valeur | Source | À quoi elle sert |
|---|---|---|---|---|
| Moyenne mensuelle de joueurs simultanés sur Steam | Nombre moyen de joueurs connectés en même temps sur le mois. **PC uniquement**. Comparée **moyenne contre moyenne**, jamais avec un pic. | Déc. 2024 (mois de sortie) : **279 402** → oct. 2025 : **63 716**, soit **−77,2 %** | FAIT — https://steamcharts.com/app/2767030 (lu le 29/09/2026) | **Mesurer l'ampleur de la perte d'audience** depuis la sortie : c'est le symptôme business (temps 1) |
| Moyenne mensuelle depuis septembre 2025 | Même indicateur | De 63 716 à 88 790 selon les mois ; 68 566 sur les 30 derniers jours | FAIT — idem | **Montrer que la baisse ne se résorbe pas** : la base ne se renouvelle pas (temps 3) |
| Joueurs acquis | Nombre cumulé de joueurs ayant lancé le jeu, **toutes plateformes**, communiqué par NetEase | 40 M en ~3 mois après la sortie | FAIT *(extrait)* — https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report | **Écarter un problème d'acquisition** : les joueurs sont venus, c'est la **rétention** qui pose problème (d'où le « malgré ») |
| Ancienneté des auteurs d'avis Steam | Part des auteurs à plus de 200 h de jeu, par trimestre (§9.3) | 5,2 % (T4 2024) → 36 à 42 % depuis mi-2025 | FAIT (notre collecte) | **Appuyer la question posée** : la population est devenue surtout expérimentée (temps 2) |

⚠️ **Limites** : la moyenne Steam ne couvre que le PC ; décembre 2024 ne compte que 26 jours (sortie le 06/12). Les 40 M couvrent toutes les plateformes : ils servent seulement à écarter un problème d'acquisition. Le segment précis (nouveaux comptes perdants) n'est pas mesurable publiquement : il apparaît dans le **O** et sera mesuré sur les données de NetEase.

**O — grille SMART**

| Critère | Vérification |
|---|---|
| **S — Spécifique** | Un segment précis (nouveaux comptes perdants), un indicateur précis (churn J7) : c'est exactement « ce qui ne marche toujours pas » |
| **M — Mesurable** | Ratio calculable sur la télémétrie de NetEase (D10) ; valeur cible chiffrée (1,2) |
| **A — Atteignable** | Leviers testables en 90 jours : file débutants, fourchette resserrée aux heures creuses, garde-fous de rôles aux rangs bas. Précédent : après les placements de la S5, les plaintes sur le matchmaking passent de 26 % à 17 % des avis négatifs. |
| **R — Pertinent** | Découle directement du B : si les nouveaux partent à cause de l'écart de niveau, c'est chez les nouveaux comptes perdants qu'on le voit |
| **T — Temporel** | 31/03/2027, soit les 6 mois du brief ; numéro de saison à confirmer (saisons de 2 mois depuis la S3) |

*Pourquoi un ratio ?* Le churn actuel de NetEase n'est pas public : un ratio reste mesurable sans ce chiffre de départ. Quand NetEase le fournit (par exemple un churn J7 de 60 %), on réécrit l'objectif en valeur absolue : « Ramener le churn J7 des nouveaux comptes perdants de 60 % à 45 % d'ici la fin de Season 12 ».

*Contrôle externe, vérifiable publiquement :* part des avis Steam négatifs citant le matchmaking **sous 8 %** au 31/03/2027 (base : 10,5 % en septembre 2026).

### 10.3 D — chaque donnée : pourquoi, quel lien avec les hypothèses, ce que son résultat change

Chaque donnée répond à une question fermée. Son résultat renforce ou affaiblit un temps du récit, puis **déclenche** un levier ou **l'écarte** : aucune n'est collectée « pour voir ».

| Rôle | Ce que ça veut dire |
|---|---|
| **Condition nécessaire** | Si elle ne montre rien, le temps du récit concerné tombe seul |
| **Cause possible** | Le temps tient si au moins une cause possible confirme ; il tombe si toutes sont négatives |
| **Aggravant** | Si elle ne montre rien, H5 tient toujours, sans l'aggravation |
| **Départage** | Elle dit laquelle de deux hypothèses ou de deux mécanismes est le bon |
| **Précision** / **Soutien** | Elle affine une autre donnée, sans valider ni réfuter seule |
| **Orientation de la réponse** / **Coût d'une décision** / **Contexte** | Elle ne teste pas H5 : elle dit comment agir, ou à quel prix |

#### Temps 1 — Ce qui n'a pas marché

**D1. Courbe de performance sur les 20 premiers matchs (cohortes 2024-2025)**

| | |
|---|---|
| **Définition** | Évolution du score de performance d'un nouveau compte sur ses 20 premiers matchs, pour les comptes créés au lancement |
| **Pourquoi on la collecte** | Pour vérifier que des joueurs de niveaux très différents sont bien arrivés en même temps, **sans identité** : un joueur déjà expérimenté performe fort dès le début, un débutant progresse lentement |
| **Lien avec les hypothèses** | **H5, M1** (point de départ du temps 1). Aussi **H1b** (comptes neufs à performance anormale) |
| **Rôle** | **Condition de départ du temps 1** |
| **Si elle confirme** | *Hypothèse :* l'hétérogénéité à l'arrivée est prouvée et chiffrée.<br>*Décision :* on peut détecter le profil d'un nouveau compte dès ses premiers matchs et orienter son matchmaking. |
| **Si elle ne montre rien** | *Hypothèse :* les joueurs arrivés au lancement avaient des niveaux proches ; le temps 1 perd son point de départ.<br>*Décision :* l'explication du déclin de 2025 est à chercher ailleurs (H2, H4) ; le temps 3 reste à tester seul. |

**D2. Churn des cohortes 2025 selon le niveau initial et l'écart subi**

| | |
|---|---|
| **Définition** | Part des comptes créés en 2025 qui ne rejouent plus après 7 et 30 jours, selon leur performance initiale (D1) et l'écart de niveau subi dans leurs premiers matchs |
| **Pourquoi on la collecte** | Pour vérifier que ce sont bien les moins expérimentés, écrasés, qui sont partis en 2025 |
| **Lien avec les hypothèses** | **H5, M5** (temps 1). Contrôle de **H4** : si tout le monde est parti au même rythme, c'est de l'attrition naturelle |
| **Rôle** | **Condition nécessaire du temps 1** |
| **Si elle confirme** | *Hypothèse :* le déclin de 2025 a bien filtré les moins expérimentés ; le temps 1 est prouvé et le temps 2 devient très probable.<br>*Décision :* le diagnostic « ce qui n'a pas marché » peut être présenté au comité comme un fait. |
| **Si elle ne montre rien** | *Hypothèse :* tous les profils sont partis au même rythme ; le déclin de 2025 relève surtout de l'attrition naturelle (H4) ou d'autres causes (H2, H3).<br>*Décision :* on n'attribue pas le déclin au matchmaking ; le temps 3 reste à tester seul. |

**D3. Rétention des nouveaux comptes avant et après la S5**

| | |
|---|---|
| **Définition** | Rétention J7 et J30 des comptes créés avant et après l'arrivée des placements (14/11/2025) |
| **Pourquoi on la collecte** | Les placements sont la correction, par NetEase, du manque de calibrage en classé : leur effet est une preuve interne de M2 |
| **Lien avec les hypothèses** | **H5, M2** (preuve a posteriori) |
| **Rôle** | **Soutien** : elle renforce H5 mais ne suffit pas à la réfuter |
| **Si elle confirme** | *Hypothèse :* le manque de calibrage faisait bien partir les joueurs ; la baisse des plaintes Steam après la S5 n'est pas qu'une coïncidence.<br>*Décision :* on étend la même logique de calibrage à la partie rapide (D11). |
| **Si elle ne montre rien** | *Hypothèse :* les placements n'ont pas changé la rétention ; M2 est affaibli. La baisse des plaintes relevait surtout de la perception.<br>*Décision :* on ne mise pas sur le calibrage seul ; on regarde D12 et D13. |

**D4. Écart de score intra-match × ancienneté du compte (classé)**

| | |
|---|---|
| **Définition** | Différence de score compétitif moyen entre les deux équipes d'un match, croisée avec l'âge des comptes présents |
| **Pourquoi on la collecte** | Pour savoir si les comptes jeunes subissent des matchs plus déséquilibrés que les autres en classé |
| **Lien avec les hypothèses** | **H5, M2 et M3**. **Départage H5 et H1** : sous H5, l'écart dépend de l'ancienneté ; sous H1 (séries artificielles), il n'en dépend pas |
| **Rôle** | **Cause possible** (avec D5) et **départage** |
| **Si elle confirme** | *Hypothèse :* H5 est renforcée et **H1 affaiblie** : l'injustice ressentie a une cause mesurable qui n'est pas une manipulation.<br>*Décision :* file protégée pour les nouveaux comptes en classé, et réponse chiffrée aux accusations d'EOMM. |
| **Si elle ne montre rien** | *Hypothèse :* le classé n'est pas en cause ; l'écart se joue ailleurs (partie rapide, compositions).<br>*Décision :* pas de file protégée en classé. |

**D5. Compositions par rôle × résultat × rang**

| | |
|---|---|
| **Définition** | Nombre de héros par rôle dans chaque équipe, résultat du match, rang des joueurs |
| **Pourquoi on la collecte** | Pour savoir si, sans rôles imposés, certaines compositions écrasent les équipes non coordonnées aux rangs bas |
| **Lien avec les hypothèses** | **H5, M4** (écart tactique). Aussi **H2** (équilibrage des héros) |
| **Rôle** | **Cause possible** (avec D4 et D12) |
| **Si elle confirme** | *Hypothèse :* l'écart est aussi tactique.<br>*Décision :* test A/B d'un minimum de 1 tank et 1 soigneur en Bronze-Or uniquement, et/ou des bans de héros dès Or ou Platine. |
| **Si elle ne montre rien** | *Hypothèse :* la liberté de composition ne pénalise pas les moins expérimentés ; M4 tombe.<br>*Décision :* on ne touche pas à ce choix de design. |

**D6. Groupe contre solo × composition × ancienneté**

| | |
|---|---|
| **Définition** | Résultat des matchs selon que l'équipe joue en groupe ou en solo, sa composition et l'ancienneté des joueurs |
| **Pourquoi on la collecte** | Les compositions abusives demandent de la coordination : des groupes de joueurs expérimentés pourraient en profiter contre des joueurs seuls |
| **Lien avec les hypothèses** | **H5, M4** |
| **Rôle** | **Précision** de D5 |
| **Si elle confirme** | *Hypothèse :* l'écart tactique passe par la coordination.<br>*Décision :* test de la séparation des groupes et des joueurs seuls aux rangs bas. |
| **Si elle ne montre rien** | *Hypothèse :* le groupe n'aggrave pas l'écart.<br>*Décision :* pas de restriction sur les groupes (elles sont impopulaires). |

**D7. Rôle joué × rôle habituel du joueur**

| | |
|---|---|
| **Définition** | Part des matchs où un joueur est sur un rôle qu'il joue rarement |
| **Pourquoi on la collecte** | NetEase reconnaît des « imbalanced team roles » (joueur forcé sur un rôle inconnu) |
| **Lien avec les hypothèses** | **H5, M4** |
| **Rôle** | **Précision** de D5 |
| **Si elle confirme** | *Hypothèse :* les moins expérimentés subissent des rôles imposés par défaut.<br>*Décision :* le matchmaking pondère davantage le rôle habituel ; test du minimum de rôles aux rangs bas. |
| **Si elle ne montre rien** | *Hypothèse :* ce mécanisme ne compte pas.<br>*Décision :* pas de changement. |

**D8. Durée cumulée des ultimes de soin actifs par combat**

| | |
|---|---|
| **Définition** | Temps pendant lequel un combat est bloqué par des ultimes de soin enchaînés |
| **Pourquoi on la collecte** | Les combats bloqués plus de 30 s sont vécus comme injustes et peuvent ressembler à un match truqué |
| **Lien avec les hypothèses** | **H5, M4**, **H1** (le méta exploité nourrit la perception d'EOMM), **H2** |
| **Rôle** | **Précision** et perception |
| **Si elle confirme** | *Hypothèse :* la mécanique exploitée persiste et alimente la défiance.<br>*Décision :* ajustement du coût des ultimes (seuil : 15 s de blocage médian). |
| **Si elle ne montre rien** | *Hypothèse :* le problème a été corrigé par la S1.5.<br>*Décision :* pas de nouvel ajustement. |

#### Temps 2 — La conséquence

**D9. Répartition des joueurs actifs par ancienneté et heures jouées, mois par mois (nouvelle donnée)**

| | |
|---|---|
| **Définition** | Pour chaque mois depuis la sortie : part des joueurs actifs selon l'âge de leur compte et leurs heures jouées cumulées ; nombre de nouveaux comptes actifs |
| **Pourquoi on la collecte** | Pour vérifier que la population est devenue surtout expérimentée et que les nouveaux y sont minoritaires. L'indice public (§9.3) est trop biaisé pour conclure |
| **Lien avec les hypothèses** | **H5, M6** : c'est le pont entre le temps 1 et le temps 3 |
| **Rôle** | **Condition nécessaire du temps 2** |
| **Si elle confirme** | *Hypothèse :* le filtrage est prouvé ; un nouveau joueur tombe structurellement sur une population expérimentée.<br>*Décision :* le matchmaking doit **compenser activement** ce déséquilibre (file débutants, MMR de départ prudent). |
| **Si elle ne montre rien** | *Hypothèse :* la population reste mélangée ; les nouveaux ne sont pas minoritaires.<br>*Décision :* s'il y a un écart aujourd'hui, il vient surtout du réglage du MMR (mécanisme A), pas de la composition de la population. |

#### Temps 3 — Ce qui ne marche toujours pas

**D10. Churn J7 des nouveaux comptes × bilan des 10 premiers matchs (KPI de l'objectif)**

| | |
|---|---|
| **Définition** | Part des nouveaux comptes qui ne rejouent pas dans les 7 jours, selon leurs victoires et défaites sur leurs 10 premiers matchs |
| **Pourquoi on la collecte** | C'est l'indicateur de l'objectif SMART : sans elle, le O n'est pas mesurable |
| **Lien avec les hypothèses** | **H5, M9**. Contrôle de **H3** (croisée avec payeurs / non-payeurs) |
| **Rôle** | **Condition nécessaire du temps 3** |
| **Si elle confirme** (ratio nettement > 1,2) | *Hypothèse :* un mauvais démarrage fait partir les nouveaux ; le temps 3 reste possible, il faut en trouver la cause (D11, D12, D13).<br>*Décision :* l'objectif est validé et on fixe sa valeur de départ. |
| **Si elle ne montre rien** (ratio déjà ≤ 1,2) | *Hypothèse :* **le temps 3 est réfuté** : perdre ses premiers matchs ne fait pas plus partir. Avant de conclure, on vérifie la robustesse (seuil de 5 défaites sur 10, fenêtre J30, partie rapide seule, PC contre console).<br>*Décision :* on n'investit pas dans le matchmaking des nouveaux ; le plateau a d'autres causes (H2, H3, H1). |

**D11. MMR de départ et vitesse de convergence en partie rapide (nouvelle donnée)**

| | |
|---|---|
| **Définition** | Valeur de MMR attribuée à un nouveau compte, puis nombre de matchs nécessaires pour qu'il se stabilise |
| **Pourquoi on la collecte** | Pour tester le **mécanisme A** : un nouveau joueur placé trop haut ou trop lentement recalé tombe sur des joueurs trop forts, même avec beaucoup de joueurs en file |
| **Lien avec les hypothèses** | **H5, M7** ; départage des mécanismes A et B |
| **Rôle** | **Cause possible** et **départage** |
| **Si elle confirme** | *Hypothèse :* le MMR de départ est mal réglé.<br>*Décision :* MMR de départ plus prudent et convergence accélérée ; c'est le levier le moins coûteux, sans effet sur l'attente. |
| **Si elle ne montre rien** | *Hypothèse :* le réglage est bon ; si un écart existe, il vient du manque de joueurs (D13).<br>*Décision :* on ne touche pas au MMR de départ. |

**D12. Écart de MMR subi en partie rapide × ancienneté, et ancienneté des adversaires**

| | |
|---|---|
| **Définition** | Écart de MMR entre les équipes et écart max-min dans le lobby, pour les comptes sous le niveau 15 comparés aux autres ; ancienneté et heures de jeu de leurs adversaires |
| **Pourquoi on la collecte** | La partie rapide est la porte d'entrée des nouveaux, et son fonctionnement n'est pas documenté publiquement |
| **Lien avec les hypothèses** | **H5, M7** : c'est la mesure directe de « les nouveaux tombent sur des joueurs plus expérimentés » |
| **Rôle** | **Cause possible** (avec D4 et D5) |
| **Si elle confirme** | *Hypothèse :* les nouveaux subissent bien des lobbys déséquilibrés face à des joueurs installés ; le temps 3 est renforcé.<br>*Décision :* test A/B d'une file « débutants » jusqu'au niveau 15. C'est le levier le plus direct sur le O. |
| **Si elle ne montre rien** | *Hypothèse :* la porte d'entrée n'est pas déséquilibrée ; M7 tombe.<br>*Décision :* pas de file débutants ; l'effort porte sur le classé et les compositions. |

**D13. Largeur de fourchette et attente × joueurs en file, par heure, région et tranche de niveau**

| | |
|---|---|
| **Définition** | Écart de niveau maximal accepté par le matchmaking, et temps d'attente, selon le nombre de joueurs en file, heure par heure et région par région |
| **Pourquoi on la collecte** | Pour tester le **mécanisme B** : le manque de joueurs force-t-il le système à mélanger des niveaux éloignés, et où ? |
| **Lien avec les hypothèses** | **H5b, M8** (cercle vicieux) |
| **Rôle** | **Aggravant** et **départage** des mécanismes A et B |
| **Si elle confirme** (écart qui explose aux heures creuses ou dans certaines régions) | *Hypothèse :* H5b est validée : la baisse d'audience entretient l'écart.<br>*Décision :* resserrer la fourchette là où elle s'élargit, avec l'attente p90 comme seuil d'arrêt (5 minutes) ; regrouper des régions aux heures creuses ; annoncer l'élargissement aux joueurs. |
| **Si elle ne montre rien** | *Hypothèse :* H5b tombe ; l'écart ne dépend pas de la population.<br>*Décision :* on peut resserrer les files débutants sans craindre d'allonger l'attente. |

**D14. Parties avec bots × segment**

| | |
|---|---|
| **Définition** | Part des matchs contenant des bots, par ancienneté du compte et selon les séries de défaites |
| **Pourquoi on la collecte** | Des joueurs signalent des bots non annoncés : s'ils existent, ils masquent le problème et créent un risque de réputation |
| **Lien avec les hypothèses** | **H5, M7**, et **H1** (les bots cachés alimentent la défiance) |
| **Rôle** | **Orientation de la réponse** |
| **Si elle confirme** (bots fréquents chez les perdants, effet positif sur la rétention) | *Hypothèse :* ils traitent le symptôme sans la cause.<br>*Décision :* on les garde uniquement annoncés (étiquette « match d'entraînement ») et on corrige la cause (D11, D12, D13). |
| **Si elle ne montre rien** | *Hypothèse :* les accusations sont infondées.<br>*Décision :* démenti public chiffré, ou suppression des bots s'ils n'aident pas. |

**D15. Héros maîtrisés × ancienneté**

| | |
|---|---|
| **Définition** | Nombre de héros joués avec un bon niveau, selon l'ancienneté du compte |
| **Pourquoi on la collecte** | Un héros par mois alourdit le jeu : un nouveau joueur a de plus en plus de retard à rattraper |
| **Lien avec les hypothèses** | **H5, M10**, et **H2** |
| **Rôle** | **Aggravant** |
| **Si elle confirme** | *Hypothèse :* le rythme des sorties creuse l'écart.<br>*Décision :* aide à l'apprentissage des héros pour les nouveaux (essai, tutoriels), sans ralentir les sorties. |
| **Si elle ne montre rien** | *Hypothèse :* le rythme n'est pas un problème.<br>*Décision :* pas de changement. |

#### Pour ajuster : coût des leviers et perception

**D16. Attente simulée avec une fourchette resserrée ou une role queue**

| | |
|---|---|
| **Définition** | Temps d'attente estimé en rejouant le matchmaking avec une fourchette plus stricte, ou avec un nombre fixe de joueurs par rôle |
| **Pourquoi on la collecte** | Tout levier qui resserre les matchs coûte de l'attente : il faut chiffrer ce coût au lieu de le supposer |
| **Lien avec les hypothèses** | Aucune : elle chiffre le **coût des leviers** liés à M7, M8 et M4 |
| **Rôle** | **Coût d'une décision** |
| **Si l'attente reste acceptable** (p90 < 5 min) | *Décision :* on teste le resserrement, et éventuellement une role queue souple aux rangs bas. |
| **Si l'attente devient trop longue** | *Décision :* on se limite aux leviers sans coût d'attente (MMR de départ, garde-fous légers, transparence). |

**D17. Micro-sondage d'équité perçue après le match (1 match sur 10, facultatif)**

| | |
|---|---|
| **Définition** | Note de 1 à 5 donnée par le joueur sur l'équité du match qu'il vient de jouer |
| **Pourquoi on la collecte** | Pour séparer l'injustice **réelle** (D4, D12) de l'injustice **perçue** |
| **Lien avec les hypothèses** | **Départage H1 et H5** : sous H5, la perception suit l'écart réel ; sous H1, elle s'en détache |
| **Rôle** | **Départage** |
| **Si la perception suit l'écart réel** | *Hypothèse :* la défiance vient de vrais déséquilibres ; H5 est renforcée.<br>*Décision :* on corrige le matchmaking. |
| **Si l'injustice est perçue sans écart réel** | *Hypothèse :* le problème relève de H1 (perception).<br>*Décision :* transparence et communication plutôt qu'un nouvel algorithme. |

**D18. Question d'onboarding « Avez-vous déjà joué à un hero shooter compétitif ? » (facultative)**

| | |
|---|---|
| **Définition** | Réponse déclarative du joueur à la création de son compte |
| **Pourquoi on la collecte** | Pour orienter un nouveau joueur dès son premier match, avant que ses performances ne le permettent |
| **Lien avec les hypothèses** | **H5, M1 et M7**. Recoupe D1 |
| **Rôle** | **Soutien** |
| **Si elle est utile** (réponses cohérentes avec les performances) | *Décision :* elle sert à fixer un MMR de départ plus juste (D11). |
| **Si elle ne l'est pas** | *Décision :* on s'appuie uniquement sur les performances (D1). |

**D19. Avis Steam agrégés**

| | |
|---|---|
| **Définition** | Part des avis négatifs citant le matchmaking, par mois ; ancienneté des auteurs, par trimestre (§9) |
| **Pourquoi on la collecte** | La défiance fait partir les joueurs même quand le matchmaking est juste : il faut suivre la perception, publiquement |
| **Lien avec les hypothèses** | **H1** (perception) ; indice public du **temps 2** |
| **Rôle** | **Contrôle externe du O** ; ne valide ni ne réfute H5 seule |
| **Si la plainte baisse avec les leviers** | *Décision :* les corrections sont perçues ; on les généralise et on en fait un argument de communication. |
| **Si la plainte ne baisse pas alors que D10 et D12 s'améliorent** | *Décision :* le problème restant relève de la perception (H1) ; on investit dans la transparence. |

**D20. Benchmark Newzoo (flux entre jeux, agrégé)**

| | |
|---|---|
| **Définition** | Part des joueurs d'autres hero shooters qui ont joué à Marvel Rivals |
| **Pourquoi on la collecte** | Pour situer l'arrivée de joueurs déjà expérimentés dans le contexte concurrentiel |
| **Lien avec les hypothèses** | **H5, M1** (contexte), **H4** |
| **Rôle** | **Contexte** : panel biaisé, il ne tranche rien |
| **Résultat** | Aucune décision directe ; la mesure qui compte est interne (D1). |

### 10.4 Vue d'ensemble : quelle donnée teste quoi

| Donnée | Temps | Maillon | Autres hypothèses | Rôle |
|---|---|---|---|---|
| D1 Performance sur 20 matchs (2024-2025) | 1 | M1 | H1b | Condition de départ |
| D2 Churn des cohortes 2025 | 1 | M5 | H4 | Condition nécessaire |
| D3 Rétention avant / après S5 | 1 | M2 | | Soutien |
| D4 Écart de score en classé × ancienneté | 1 | M2, M3 | H1 | Cause possible + départage |
| D5 Compositions × résultat × rang | 1 et 3 | M4 | H2 | Cause possible |
| D6 Groupe / solo | 1 et 3 | M4 | | Précision |
| D7 Rôle joué × rôle habituel | 1 et 3 | M4 | | Précision |
| D8 Ultimes de soin par combat | 1 | M4 | H1, H2 | Précision |
| **D9 Joueurs actifs par ancienneté** | **2** | **M6** | | **Condition nécessaire** |
| **D10 Churn J7 des nouveaux comptes** | **3** | **M9** | H3 | **Condition nécessaire, KPI du O** |
| D11 MMR de départ et convergence | 3 | M7 | | Cause possible (mécanisme A) |
| D12 Écart de MMR en partie rapide | 3 | M7 | | Cause possible |
| D13 Fourchette × joueurs en file | 3 | M8 | H5b | Aggravant (mécanisme B) |
| D14 Parties avec bots | 3 | M7 | H1 | Orientation de la réponse |
| D15 Héros maîtrisés × ancienneté | 3 | M10 | H2 | Aggravant |
| D16 Attente simulée | Ajuster | — | | Coût d'une décision |
| D17 Micro-sondage d'équité | Ajuster | — | H1 | Départage |
| D18 Question d'onboarding | Ajuster | M1, M7 | | Soutien |
| D19 Avis Steam | Tous | M6 (indice) | H1 | Contrôle externe |
| D20 Newzoo | 1 | M1 | H4 | Contexte |

### 10.5 Comment H5 peut être réfutée (annoncé d'avance)

| Situation | Conclusion |
|---|---|
| **D2 ne montre rien** (en 2025, tous les profils sont partis au même rythme) | **Le temps 1 tombe** : le déclin de 2025 ne s'explique pas par l'écart de niveau |
| **D9 ne montre rien** (la population n'est pas devenue surtout expérimentée) | **Le temps 2 tombe** : s'il y a un écart aujourd'hui, il vient du réglage du MMR, pas du filtrage |
| **D10 ne montre rien**, même après les tests de robustesse | **Le temps 3 tombe** : les nouveaux qui perdent ne partent pas plus que les autres |
| D10 confirme, mais **D11, D12 et D5 ne montrent rien** | **Le temps 3 tombe** : les nouveaux partent, mais pas à cause du matchmaking (onboarding, difficulté, performances techniques) |
| D13 ne montre rien | Seule H5b tombe : le manque de joueurs n'aggrave pas l'écart |

→ Les trois temps sont **testables séparément**. Le temps 3 est le plus important pour la décision : c'est lui qui dit si l'on peut encore agir.

### 10.6 Comment les données orientent la décision finale de NetEase

| Résultat des données | Effet sur la décision |
|---|---|
| Temps 1 et 2 confirmés, temps 3 confirmé | **H5 validée en entier** : on corrige la cause identifiée par l'audit (§11) |
| … et D11 confirme (mécanisme A) | MMR de départ plus prudent, convergence accélérée, file débutants : **sans coût d'attente** |
| … et D13 confirme (mécanisme B) | Fourchette resserrée là où elle s'élargit, régions regroupées aux heures creuses, élargissement annoncé : **coût d'attente à piloter** (D16) |
| … et D5 confirme | Garde-fous de rôles aux rangs bas |
| Temps 1 confirmé, temps 3 réfuté | Le problème de 2025 a été corrigé (placements). Le plateau actuel a d'autres causes : **pas d'investissement matchmaking**, réorientation vers H2, H3, H4 |
| Temps 3 confirmé, temps 1 réfuté | Le problème actuel existe quelle que soit son origine : **on corrige quand même** le matchmaking des nouveaux |
| D17 et D19 montrent une défiance sans écart réel | Le problème est la **perception** (H1) : transparence plutôt qu'un nouvel algorithme |

→ Dans tous les cas, NetEase **décide sur preuve** : un résultat négatif évite de financer un développement inutile, ce qui est aussi un gain.

### 10.7 A — ce que chaque méthode tranche

| Méthode | Question tranchée |
|---|---|
| Audit du MMR de la partie rapide, heures pleines contre heures creuses | L'écart subi par les nouveaux vient-il du réglage du MMR (A) ou du manque de joueurs (B) ? |
| Cohortes 2025 et avant / après la S5 | Les moins expérimentés sont-ils partis en premier ? Le calibrage a-t-il changé la rétention ? |
| Régression du churn J7 | L'écart de niveau explique-t-il le churn mieux que les séries (H5 contre H1) ? |
| Tests A/B des leviers | Quel levier fait baisser le ratio du O, et à quel coût d'attente ? |
| Analyse textuelle des avis Steam | La perception suit-elle les changements ? |

### 10.8 K — chaque KPI a un seuil et une action (détail au §13)

| KPI | Seuil | Rôle |
|---|---|---|
| Ratio de churn J7 des nouveaux comptes perdants | ≤ 1,2 | **KPI du O** |
| Écart de MMR médian subi par les nouveaux comptes en partie rapide, rapporté à celui des autres comptes | < 1,5 | Cause (écart réel) |
| Attente p90 par rang | < 5 min | **Garde-fou** : un test qui la dépasse est arrêté |
| Part des matchs Bronze-Or avec au moins 4 héros du même rôle | < 20 % | Cause (M4) |
| Part des avis Steam négatifs citant le matchmaking | < 8 % (base : 10,5 % en sept. 2026) | Perception, contrôle externe |

---

## 11. Audit du MMR de la partie rapide (phase 0-30 jours)

L'audit répond à une question : **pourquoi un nouveau joueur tombe-t-il aujourd'hui sur des joueurs bien plus expérimentés, et est-ce que cela le fait partir ?**

| # | Question d'audit | Donnée | Ce qui confirme le temps 3 |
|---|---|---|---|
| 1 | Quel MMR reçoit un nouveau compte, et en combien de matchs se stabilise-t-il ? | D11 | MMR de départ au-dessus du vrai niveau, ou convergence lente (**mécanisme A**) |
| 2 | Quel écart de MMR un nouveau compte subit-il dans ses lobbys ? | D12 | Écart nettement plus fort pour les comptes sous le niveau 15 |
| 3 | Contre qui jouent les nouveaux comptes ? | D12 | Majorité d'adversaires installés depuis des mois |
| 4 | L'écart dépend-il du nombre de joueurs en file ? | D13 | Écart qui monte aux heures creuses et dans les petites régions (**mécanisme B**) |
| 5 | Quelles sont les règles d'élargissement ? | D13 | Élargissement rapide et sans plafond |
| 6 | Les groupes aggravent-ils l'écart ? | D6 | Groupes de joueurs installés face à des nouveaux seuls |
| 7 | Cet écart fait-il partir les nouveaux ? | D10 | Churn plus fort après des matchs à grand écart |
| 8 | Que coûterait un matchmaking plus strict ? | D16 | Attente p90 acceptable (moins de 5 minutes) |

**Lecture :** les questions 1 à 3 testent le démarrage à froid, les questions 4 et 5 le manque de joueurs, la question 7 le lien avec les départs, et la question 8 le prix de la solution.

**Le temps 3 est réfuté si** les nouveaux comptes ne subissent pas plus d'écart que les autres (question 2), **ou** si cet écart ne les fait pas partir davantage (question 7).

---

## 12. Matrice de collecte (ICE notée sur 5)

| Critère | 1 | 3 | 5 |
|---|---|---|---|
| **I — Impact** : poids dans la décision | Contexte seulement | Éclaire une décision secondaire | Tranche la décision centrale (un temps du récit, ou le choix du levier) |
| **C — Confiance** : la donnée tranche-t-elle vraiment ? | Indirecte, très bruitée | Indicateur partiel | Mesure directe |
| **E — Facilité** : coût, délai, conformité | Nouvelle collecte lourde ou sensible | Extraction ou développement modéré | **Existe déjà chez NetEase**, extraction simple |

**Score ICE = moyenne des trois notes, sur 5**, sur la même échelle de 1 à 5 que la matrice de risques (§14). **Règle d'arbitrage** : 4 ou plus → phase 0-30 jours ; de 3 à 3,9 → phase 30-90 jours ; moins de 3 → optionnel. La colonne « Réf. » renvoie aux fiches du §10.3.

| Réf. | Donnée | Temps | Existe chez NetEase ? | Base légale (portée par NetEase) | Priorité | I | C | E | **ICE /5** | Phase |
|---|---|---|---|---|---|---|---|---|---|---|
| D13 | Largeur de fourchette + attente × joueurs en file, par heure et région | 3 | Oui | Intérêt légitime | **INDISPENSABLE** | 5 | 5 | 5 | **5,0** | 0-30 j |
| D10 | Churn J7 des nouveaux comptes × 10 premiers matchs | 3 | Oui | Intérêt légitime | **INDISPENSABLE** | 5 | 4 | 5 | **4,7** | 0-30 j |
| D11 | MMR de départ et vitesse de convergence (partie rapide) | 3 | Oui | Intérêt légitime | **INDISPENSABLE** | 5 | 5 | 4 | **4,7** | 0-30 j |
| D9 | Joueurs actifs par ancienneté et heures jouées, mois par mois | 2 | Oui | Intérêt légitime (agrégé) | **INDISPENSABLE** | 5 | 4 | 5 | **4,7** | 0-30 j |
| D4 | Écart de score intra-match × ancienneté (classé) | 1 | Oui (probable) | Contrat / intérêt légitime | **INDISPENSABLE** | 5 | 4 | 5 | **4,7** | 0-30 j |
| D5 | Compositions par rôle × résultat × rang | 1 et 3 | Oui | Intérêt légitime | **INDISPENSABLE** | 4 | 5 | 5 | **4,7** | 0-30 j |
| D14 | Parties avec bots × segment | 3 | Oui (si elles existent) | Intérêt légitime + test de mise en balance | **INDISPENSABLE** | 4 | 5 | 5 | **4,7** | 0-30 j |
| D12 | Écart de MMR subi en partie rapide × ancienneté ; ancienneté des adversaires | 3 | Oui (probable) | Intérêt légitime | **INDISPENSABLE** | 5 | 4 | 4 | **4,3** | 0-30 j |
| D2 | Churn des cohortes 2025 selon le niveau initial | 1 | Oui | Intérêt légitime | **INDISPENSABLE** | 4 | 4 | 5 | **4,3** | 0-30 j |
| D3 | Rétention des nouveaux comptes avant et après la S5 | 1 | Oui | Intérêt légitime | **INDISPENSABLE** | 4 | 4 | 5 | **4,3** | 0-30 j |
| D6 | Groupe contre solo × composition × ancienneté | 1 et 3 | Oui | Intérêt légitime | **INDISPENSABLE** | 4 | 4 | 5 | **4,3** | 0-30 j |
| D1 | Courbe de performance sur les 20 premiers matchs | 1 | Oui | Intérêt légitime (anti-triche) | **INDISPENSABLE** | 4 | 4 | 4 | **4,0** | 0-30 j |
| D7 | Rôle joué × rôle habituel | 1 et 3 | Oui (utilisé par le matchmaking) | Intérêt légitime | **INDISPENSABLE** | 4 | 4 | 4 | **4,0** | 0-30 j |
| D19 | Avis Steam agrégés (sans identifiant) | Tous | Non, mais publics et déjà collectés | Intérêt légitime ; données publiques, minimisées | **INDISPENSABLE** | 3 | 3 | 5 | **3,7** | Continu |
| D16 | Attente simulée (fourchette resserrée, role queue) | Ajuster | Non (simulation) | Intérêt légitime | **INDISPENSABLE** | 4 | 3 | 3 | **3,3** | 30-90 j |
| D8 | Ultimes de soin actifs par combat | 1 | Oui (à extraire) | Intérêt légitime | UTILE | 3 | 4 | 3 | **3,3** | 30-90 j |
| D17 | Micro-sondage d'équité perçue (1 match sur 10) | Ajuster | **Non : nouvelle** | **Consentement** | UTILE | 4 | 3 | 3 | **3,3** | 30-90 j |
| D18 | Question d'onboarding (facultative) | Ajuster | **Non : nouvelle** | **Consentement** | UTILE | 3 | 3 | 4 | **3,3** | 30-90 j |
| D15 | Héros maîtrisés × ancienneté | 3 | Oui | Intérêt légitime | UTILE | 2 | 3 | 5 | **3,3** | 30-90 j |
| D20 | Benchmark Newzoo (agrégé) | 1 | Non (achat) | Contrat B2B, données agrégées | UTILE (une fois) | 2 | 2 | 3 | **2,3** | Optionnel |
| — | Historique de jeu individuel sur d'autres titres | — | — | Disproportionné, profilage | **INUTILE** | — | — | — | *non noté* | Écarté |
| — | N° de téléphone (anti-smurf) | — | — | Disproportionné, contournable | **INUTILE** | — | — | — | *non noté* | Écarté |
| — | Chat vocal ou texte complet | — | — | Disproportionné | **INUTILE** | — | — | — | *non noté* | Écarté |
| — | Âge exact pour « profiler » les joueurs | — | — | La courbe de performance suffit | **INUTILE** | — | — | — | *non noté* | Écarté |

→ **Arbitrage lisible pour le comité** : les 13 données notées 4 ou plus **existent déjà** dans la télémétrie de NetEase. L'audit des 30 premiers jours ne demande **aucune nouvelle collecte**. Les deux nouvelles collectes (sondage, question d'onboarding) arrivent ensuite, sous consentement.

---

## 13. KPIs et seuils (à calibrer sur les 30 premiers jours)

| KPI | Seuil | Action |
|---|---|---|
| **Ratio de churn J7 : nouveaux comptes ayant perdu au moins 7 de leurs 10 premiers matchs / autres nouveaux comptes (KPI du O)** | > 1,2 | Levier issu de l'audit (§11) |
| Écart de MMR médian subi par les nouveaux comptes en partie rapide / celui des autres comptes | > 1,5 | File « débutants » jusqu'au niveau 15 |
| Nombre de matchs avant stabilisation du MMR d'un nouveau compte | > X (base à mesurer) | MMR de départ plus prudent, convergence accélérée |
| Écart de MMR médian aux heures creuses / heures pleines | > 1,5 | Resserrer la fourchette aux heures creuses, regrouper des régions, annoncer l'élargissement |
| Part des adversaires installés depuis plus de 6 mois, pour les comptes sous le niveau 15 | > X (base à mesurer) | File « débutants » |
| Ratio d'écart de score, comptes de moins de 30 jours / plus anciens (classé) | > 1,5 | File protégée pour les nouveaux comptes |
| Attente p90 par rang | > 5 min | Arrêt du test de resserrement ; élargissement contrôlé et annoncé |
| Part des matchs avec au moins 4 héros du même rôle (Bronze à Or) | > 20 % | Tester le minimum 1 tank et 1 soigneur |
| Écart de taux de victoire entre la meilleure et la pire composition, par rang | > 10 points | Rééquilibrage ciblé |
| Durée médiane des combats bloqués par les ultimes | > 15 s | Ajuster le coût des ultimes |
| Part de parties d'entraînement non annoncées | > 0 % | Étiquette « match d'entraînement » |
| Score d'équité perçue | < 3/5 alors que l'écart réel est normal | Transparence, pas de nouvel algorithme |
| **Part des avis Steam négatifs citant le matchmaking (contrôle externe du O)** | > 8 % (base : 10,5 % en sept. 2026) | Analyse ciblée + communication |
| % d'avis Steam récents positifs | < 70 % | Alerte + analyse textuelle |

---

## 14. Conformité et gouvernance

**Cadre contractuel**

| Point | Conséquence |
|---|---|
| NetEase est **responsable de traitement** | Le consultant est **sous-traitant** (RGPD Art. 28) : il faut un **contrat de sous-traitance (DPA)** avant tout accès |
| Accès | Données **pseudonymisées**, agrégées quand c'est possible (D9 peut être fournie entièrement agrégée) ; ni identité, ni chat |
| Mineurs (classement T) | Comptes mineurs exclus ou analysés à part |
| Base légale | Portée par NetEase ; le livrable **propose** les tests de mise en balance, NetEase les valide |
| Collecte des avis Steam | Données publiques mais **personnelles** (texte libre) : ni identifiant ni pseudo conservés, analyse agrégée, citations courtes |

**Points de vigilance, formulés pour le client**

| Sujet | Risque | Référence |
|---|---|---|
| Classer un joueur comme expérimenté ou nouveau d'après son jeu | C'est du **profilage** : intérêt légitime possible si le test de mise en balance est documenté | RGPD Art. 4.4, 6.1.f |
| Sanctions automatiques pour smurfing (faux positifs documentés) | Il faut un **recours humain** | RGPD Art. 22 |
| Parties d'entraînement non annoncées ; élargissement de fourchette caché | **Loyauté et transparence** ; risque de réputation | RGPD Art. 5.1.a, 13 |
| Matchmaking optimisé pour l'engagement (R&D EnMatch du Fuxi AI Lab) | S'il est un jour déployé : attention à l'exploitation des vulnérabilités, notamment des mineurs | AI Act Art. 5.1.b (depuis le 02/02/2025) |
| Données de benchmark externes | Pseudonymisées, donc toujours personnelles : n'acheter que de l'**agrégé** | RGPD Art. 26, considérant 26 |

**Matrice P × I (probabilité × impact, de 1 à 5)**

| Risque | P | I | Zone | Traitement |
|---|---|---|---|---|
| Collecter l'historique de jeu externe individuel | 3 | 5 | 🔴 | **AVOID** |
| Parties d'entraînement non annoncées révélées publiquement | 4 | 4 | 🔴 / 🟠 | **MITIGATE** : étiquette |
| Faux positifs anti-smurf | 4 | 3 | 🟠 | **MITIGATE** : recours humain |
| Accès du consultant sans DPA | 2 | 5 | 🟠 | **MITIGATE** : DPA avant tout accès |
| Resserrement de la fourchette qui allonge trop l'attente | 3 | 4 | 🟠 | **MITIGATE** : attente p90 comme seuil d'arrêt |
| Garde-fous de rôles perçus comme une atteinte à l'identité du jeu | 3 | 3 | 🟡 | **MONITOR** : limités aux rangs bas, communiqués |
| Décision prise sur des sources externes biaisées (Newzoo, avis) | 3 | 3 | 🟡 | **MONITOR** : priorité aux données internes |
| Ré-identification de l'auteur d'un avis cité | 2 | 2 | 🟢 | **MITIGATE** : pas de pseudo, extraits courts |
| Lassitude face aux sondages | 3 | 2 | 🟡 | **MONITOR** : 1 match sur 10 maximum |
| Refus de répondre à la question d'onboarding | 4 | 1 | 🟢 | **ACCEPT** |

---

## 15. Roadmap

| Horizon | Actions |
|---|---|
| **0-30 jours** | DPA NetEase ↔ consultant. **Audit du MMR de la partie rapide** (§11). Extraction des données notées 4 ou plus (§12) : temps 1 (cohortes 2025, avant / après S5), temps 2 (joueurs actifs par ancienneté), temps 3 (churn des nouveaux, MMR de départ, écart subi, fourchette par heure et région). Test H1 contre H5. **Mesure de la base du O.** |
| **30-90 jours** | Tests A/B **choisis selon le résultat de l'audit** : (1) MMR de départ plus prudent et convergence accélérée (mécanisme A) ; (2) file débutants jusqu'au niveau 15 ; (3) fourchette resserrée aux heures creuses, régions regroupées (mécanisme B) ; (4) minimum 1 tank et 1 soigneur en Bronze-Or ; (5) étiquette « match d'entraînement ». Question d'onboarding et micro-sondage. |
| **90-180 jours (→ 31/03/2027)** | Pilotage par les KPIs du §13. Décision de garder, étendre ou abandonner chaque levier. Page permanente « comment fonctionne le matchmaking ». Bilan du O. |

**L'arbitrage central, à présenter au comité :** resserrer les matchs protège les nouveaux, mais allonge l'attente, alors que la population est basse. → On ne tranche pas par principe : on commence par les leviers **sans coût d'attente** (MMR de départ) et on teste les autres avec l'**attente p90** comme seuil d'arrêt.

---

## 16. Contre-arguments (questions-réponses face au client)

| Objection probable du comité | Réponse |
|---|---|
| « Nous savons déjà comment fonctionne notre matchmaking. » | Justement : vos données peuvent **valider ou réfuter chacun des trois temps en 30 jours**. Nous apportons la question et la méthode, pas un verdict. |
| « C'est normal : un jeu qui vieillit a une population expérimentée. » | Oui, c'est structurel, et c'est précisément pour ça que le matchmaking doit **compenser activement**. Sinon, les nouveaux arrivent dans une population qui les écrase, et la base ne se renouvelle jamais. |
| « 68 K joueurs simultanés, ce n'est pas un manque de joueurs. » | Pas globalement. Mais le manque est sans doute **local** : heures creuses, petites régions, certaines tranches de niveau. L'audit le mesure (D13). |
| « Les placements de la S5 ont réglé le problème. » | Ils confirment le diagnostic : en corrigeant le calibrage, vous avez vu les plaintes reculer de 9 points. Mais ils ne couvrent que le classé. La partie rapide, où débutent les nouveaux, reste sans calibrage connu. |
| « Les avis Steam, ce sont des râleurs. » | Oui : c'est de la **perception**, sur PC et en anglais. Mais sa chronologie colle aux événements du jeu, et la perception est justement ce qui fait partir. |
| « Les nouveaux joueurs ne se plaignent pas du matchmaking. » | Exact (2,8 % des négatifs à moins de 10 h). Ils partent **sans écrire** (biais du survivant), et l'écart est dénoncé par les joueurs expérimentés, qui voient les mêmes lobbys hétérogènes. Seul votre churn tranche. |
| « L'ancienneté des auteurs d'avis augmente forcément avec l'âge du jeu. » | C'est vrai, c'est pourquoi nous la présentons comme un **indice**, pas une preuve. La mesure exacte est la répartition de vos joueurs actifs (D9). |
| « La liberté de composition, c'est l'ADN du jeu. » | Nous ne la remettons pas en cause. Nous proposons des garde-fous **aux rangs bas uniquement**, et seulement si les données le justifient (D5). |
| « Resserrer la fourchette tuerait les files d'attente. » | C'est pourquoi on commence par le MMR de départ, qui ne coûte rien en attente, et qu'on teste le resserrement avec l'attente p90 comme seuil d'arrêt. |
| « Le jeu n'est pas en échec. » | Exact : vos résultats du T3 2025 le citent positivement ([transcript](https://equibles.com/stocks/ntes/calls/2025-q3)). Nous parlons d'un **plancher bas et fragile**, avec un potentiel de reprise mesurable. |

---

## 17. Pitch — diagnostic et recommandation (environ 1 min 30)

> « Marvel Rivals a attiré 40 millions de joueurs en trois mois, et pourtant son audience PC a perdu 77 % depuis sa sortie. Notre diagnostic tient en trois temps.
> **Ce qui n'a pas marché** : au lancement, des joueurs de tous niveaux sont arrivés en même temps, sans calibrage. Les moins expérimentés ont subi de lourdes défaites, et ils sont partis. Sur Steam, les plaintes contre le matchmaking sont passées de 7 % à 41 % des avis négatifs.
> **La conséquence** : ce départ a filtré votre population. Aujourd'hui, il reste surtout des joueurs expérimentés.
> **Ce qui ne marche toujours pas** : un nouveau joueur arrive en partie rapide dans cette population. Comme il y a moins de joueurs, votre matchmaking élargit la fourchette, vous l'avez dit vous-mêmes le 21 août. Le nouveau est écrasé et part à son tour : la base ne se renouvelle pas.
> Nous proposons un audit de 30 jours du MMR de la partie rapide, **sur vos propres données**, pour savoir si l'écart vient du réglage du MMR ou du manque de joueurs, puis des tests ciblés sur la cause. Objectif : d'ici le 31 mars 2027, qu'un nouveau joueur qui perd ses premiers matchs ne parte pas plus de 1,2 fois plus souvent que les autres. »

---

## 18. Reste à vérifier

- **Vidéo du 21/08/2025** : pondérations exactes, règles d'élargissement de la fourchette, passages sur les rôles.
- **MMR de la partie rapide et parties d'entraînement** : existence réelle et fonctionnement. **Question à poser au client.**
- **Répartition des joueurs actifs par ancienneté** (D9) : la demander en priorité, c'est la preuve du temps 2.
- **Ancienneté des auteurs d'avis** : l'indice (§9.3) mélange l'effet du filtrage et l'effet mécanique de l'âge du jeu.
- **Heures creuses et régions** où le manque de joueurs est le plus fort : non mesurables publiquement.
- Stats de compositions (« plus de 50 % en Diamant », taux de victoire par composition).
- Notation ICE : échelle de 1 à 5 choisie par cohérence avec la matrice P × I, **à confirmer avec l'intervenante**.
- **Échéance du O** en numéro de saison (calendrier NetEase).
- Collecte des avis : relecture manuelle d'un échantillon d'avis classés « matchmaking », pour estimer les faux positifs.
- **Captures à faire :** notes de patch S5 ; vidéo de Zhiyong (fourchette, rôles) ; interview de Chen ; Steam Charts ; Newzoo p. 24 et 45 ; **sorties des scripts `analyse_avis_steam.py` et `anciennete_auteurs.py`**.

---

## 19. Rapport d'usage IA

| Élément | Verdict |
|---|---|
| Récit en trois temps (ce qui n'a pas marché, conséquence, ce qui ne marche toujours pas) | **RETENU** : raisonnement de Noé, structuré avec l'IA |
| « Vétéran » = joueur expérimenté sur Marvel Rivals, pas forcément ancien joueur d'Overwatch | **RETENU** (précision de Noé) |
| Élargissement de la fourchette quand l'attente est longue (vidéo officielle) | **RETENU** |
| Placements S5 comme preuve du manque de calibrage | **RETENU** |
| Ancienneté des auteurs d'avis (5 % → 36-42 % à plus de 200 h) | **RETENU comme indice** ; biais mécanique signalé. Script : `docs/scraping_avis_steam/anciennete_auteurs.py`, **à relancer vous-même** |
| « Aujourd'hui, les nouveaux tombent sur des joueurs installés » | **HYPOTHÈSE** : cohérente avec les verbatims, à prouver par D12 |
| Séparation démarrage à froid / manque de joueurs | **RECOMMANDATION** |
| Collecte des avis Steam : méthode, pondération, minimisation | **RETENU** — scripts dans `docs/scraping_avis_steam/` : relancez-les et capturez la sortie |
| Newzoo 45 % | **RETENU comme contexte seulement** (panel biaisé, non recoupable) |
| MMR caché en partie rapide ; parties d'entraînement | **HYPOTHÈSE**, à valider avec le client |
| O SMART sous forme de ratio | **À DÉCIDER par vous** |
| ICE sur 5 | **À CONFIRMER** avec l'intervenante |
| « Plus de 50 % des matchs Diamant en triple Strategist » | **À VÉRIFIER** |
| « Depuis la S5, le départ en Silver III durcit les premiers matchs » | **RETIRÉ** |
| « PlayTracker = source des 45 % » ; « panel de 73 000 » ; titre de TheGamer ; EnMatch = algorithme de Marvel Rivals ; Goomba Stomp ; fil Reddit « data scientist » | **REJETÉ** |

---

### Sources (consultées les 29 et 30/09/2026)

Le registre complet, avec la fiabilité de chaque source, est dans `docs/H5_sources_a_verifier.md`.

**NetEase (officiel)**
- [Notes de patch S5](https://www.marvelrivals.com/20251114/41525_1270590.html)
- [X @MarvelRivals, vidéo du 21/08/2025](https://x.com/MarvelRivals/status/1958627668536311945)
- [Transcript des résultats T3 2025](https://equibles.com/stocks/ntes/calls/2025-q3)

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

**Partie rapide et nouveaux joueurs**
- [Dexerto, partie rapide](https://www.dexerto.com/marvel-rivals/marvel-rivals-awful-matchmaking-system-is-piting-you-against-top-rank-players-3164207/)
- [Dexerto, bots](https://www.dexerto.com/gaming/marvel-rivals-player-proves-devs-snuck-bots-into-quickplay-matches-3016959/)
- [Steam, SBMM en partie rapide](https://steamcommunity.com/app/2767030/discussions/0/578249962076258316/)
- [Steam, files d'attente](https://steamcommunity.com/app/2767030/discussions/0/688618675547317727/)
- [Steam, progression Bronze → Silver](https://steamcommunity.com/app/2767030/discussions/0/600769761663572886/)
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
- [Game World Observer](https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report)
- [Game Rant](https://gamerant.com/overwatch-steam-player-count-versus-marvel-rivals-comparison-charts/)
- [Game Rant, The Finals](https://gamerant.com/the-finals-player-count-decline-steam/)

**Études**
- [Heliyon 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10839887/)
- [EOMM 2017](https://arxiv.org/pdf/1702.06820)
- [EnMatch, AAAI 2024](https://ojs.aaai.org/index.php/aaai/article/view/28760)
