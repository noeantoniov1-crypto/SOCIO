H5 — UN ÉCART DE NIVEAU QUE LE MATCHMAKING NE COMPENSE PAS : DOSSIER COMPLET (VERSION 5)  

Client : comité de direction de NetEase Games · Cas : Marvel Rivals × Data for Business (GBS3) · Préparé par : Noé · Sources consultées les : 29 et 30/09/2026  

Ce qui change dans la version 5 :  
• H5 est racontée en trois temps : ce qui n'a pas marché (2025), la conséquence (une population filtrée, devenue surtout expérimentée), ce qui ne marche toujours pas (aujourd'hui) ;  
• « vétéran » ne veut plus dire « ancien joueur d'Overwatch » mais joueur expérimenté sur Marvel Rivals. Newzoo devient un simple élément de contexte ;  
• l'audit du MMR de la partie rapide devient le cœur de la phase 0-30 jours (§11), avec la séparation de deux mécanismes : démarrage à froid et manque de joueurs ;  
• nouvelle donnée : la répartition des joueurs actifs par ancienneté, mois par mois (D9) ;  
• nouvel indice public : l'ancienneté des auteurs d'avis Steam, trimestre par trimestre (§9.3) ;  
• les fiches de données (D1 à D20) sont classées selon les trois temps.  

Légende : FAIT = écrit dans une source lue · HYPOTHÈSE = à valider avec les données de NetEase · RECO = recommandation · (extrait) = source vue seulement en résumé.  

1. RÉSUMÉ EXÉCUTIF (POUR LE COMITÉ)  

Problème : Sur Steam (PC), la moyenne mensuelle de joueurs simultanés est passée de 279 K le mois de la sortie (décembre 2024) à un plateau de 64 à 89 K depuis septembre 2025, soit −77 %, malgré 40 M de joueurs acquis en 3 mois. Dans les avis Steam, la part des négatifs qui citent le matchmaking est passée de 7 % à 41 % entre décembre 2024 et août 2025.  
Ce qui n'a pas marché (2025) : Des joueurs de tous niveaux sont arrivés en même temps, sans calibrage : la partie rapide n'avait pas de mécanisme documenté et le classé faisait démarrer tout le monde en Bronze III jusqu'à la Season 5. Les moins expérimentés ont subi de lourdes défaites face aux plus expérimentés, et ils sont partis.  
La conséquence : Ce départ a filtré la population : ceux qui restent sont surtout des joueurs expérimentés. Chez les auteurs d'avis Steam, la part de joueurs à plus de 200 heures passe de 5 % à 36-42 %.  
Ce qui ne marche toujours pas (aujourd'hui) : Un nouveau joueur arrive en partie rapide dans cette population expérimentée. Comme il y a moins de joueurs, le matchmaking élargit la fourchette de niveau (mécanisme reconnu par vos équipes). Le nouveau perd lourdement et part à son tour : la base ne se renouvelle pas.  
Recommandation : Un audit du MMR de la partie rapide en 30 jours sur vos données existantes, pour séparer deux causes : un MMR de départ mal réglé, ou le manque de joueurs. Ensuite, des tests A/B ciblés sur la cause trouvée : file débutants, fourchette resserrée aux heures creuses, garde-fous de rôles aux rangs bas.  
Objectif : D'ici le 31/03/2027 : qu'un nouveau joueur qui perd ses premiers matchs ne parte pas plus de 1,2 fois plus souvent que les autres.  
Coût : Faible en collecte : les données prioritaires existent déjà dans votre télémétrie. Deux nouvelles collectes seulement, plus tard et sous consentement.  
Risque principal : Des pratiques perçues comme opaques (bots non annoncés, élargissement de fourchette caché) : risque de réputation et de conformité (RGPD Art. 5 et 22, AI Act Art. 5, mineurs).  

2. L'HYPOTHÈSE H5 EN TROIS TEMPS  

H5. Ce qui n'a pas marché : au lancement, des joueurs de niveaux très différents sont arrivés en même temps. Sans calibrage, les moins expérimentés ont subi de lourdes défaites face aux plus expérimentés, et ils sont partis.  
La conséquence : ce départ a filtré la population. Il reste surtout des joueurs expérimentés, qui ont accumulé des centaines d'heures sur Marvel Rivals.  
Ce qui ne marche toujours pas : un nouveau joueur arrive aujourd'hui dans cette population expérimentée, d'abord en partie rapide. Faute de joueurs, le matchmaking élargit la fourchette de niveau (H5b). Le nouveau perd lourdement et part à son tour : la base ne se renouvelle pas.  
Le joueur interprète ces défaites comme un matchmaking truqué, alors qu'elles viennent d'un écart de niveau que le matchmaking ne compense pas.  

2.1 Le cercle vicieux  

1. Moins de joueurs en file.  
2. Le matchmaking élargit la fourchette de niveau (H5b).  
3. Le nouveau joueur tombe sur une population expérimentée.  
4. Il subit des défaites lourdes dès ses premiers matchs.  
5. Il part, et la base ne se renouvelle pas.  
6. Il y a donc encore moins de joueurs en file : retour à l'étape 1.  

2.2 La chaîne causale, maillon par maillon  

• M1  
   – Maillon : Des joueurs de niveaux très différents arrivent en même temps  
   – Temps du récit : 1. Ce qui n'a pas marché  
   – Force de la preuve : Moyenne : 40 M de joueurs en 3 mois, dont des joueurs venus d'autres hero shooters (contexte)  
   – Donnée qui tranche (fiche §10.3) : D1  
• M2  
   – Maillon : Aucun calibrage : classé en Bronze III pour tous jusqu'à la S5, partie rapide non documentée  
   – Temps du récit : 1. Ce qui n'a pas marché  
   – Force de la preuve : Forte (officiel)  
   – Donnée qui tranche (fiche §10.3) : D3, D4  
• M3  
   – Maillon : Les plus expérimentés montent vite en traversant les moins expérimentés  
   – Temps du récit : 1. Ce qui n'a pas marché  
   – Force de la preuve : Moyenne (mécanisme officiel)  
   – Donnée qui tranche (fiche §10.3) : D4  
• M4  
   – Maillon : La liberté de composition ajoute un écart tactique  
   – Temps du récit : 1. Ce qui n'a pas marché  
   – Force de la preuve : Forte sur les faits  
   – Donnée qui tranche (fiche §10.3) : D5 à D8  
• M5  
   – Maillon : Les défaites lourdes font partir  
   – Temps du récit : 1. Ce qui n'a pas marché  
   – Force de la preuve : Forte (études)  
   – Donnée qui tranche (fiche §10.3) : D2  
• M6  
   – Maillon : La population est filtrée : il reste surtout des joueurs expérimentés  
   – Temps du récit : 2. La conséquence  
   – Force de la preuve : Moyenne : logique, et indice public dans les avis (§9.3)  
   – Donnée qui tranche (fiche §10.3) : D9  
• M7  
   – Maillon : Les nouveaux entrent en partie rapide face à cette population  
   – Temps du récit : 3. Ce qui ne marche toujours pas  
   – Force de la preuve : Moyenne : règles officielles, MMR de la partie rapide non documenté  
   – Donnée qui tranche (fiche §10.3) : D11, D12  
• M8  
   – Maillon : Moins de joueurs → fourchette élargie (H5b)  
   – Temps du récit : 3. Ce qui ne marche toujours pas  
   – Force de la preuve : Forte (officiel, mécanisme)  
   – Donnée qui tranche (fiche §10.3) : D13  
• M9  
   – Maillon : Les défaites lourdes font partir les nouveaux (même mécanisme que M5)  
   – Temps du récit : 3. Ce qui ne marche toujours pas  
   – Force de la preuve : À mesurer  
   – Donnée qui tranche (fiche §10.3) : D10 (KPI de l'objectif)  
• M10  
   – Maillon : Aggravant : le jeu s'alourdit (un héros par mois)  
   – Temps du récit : 3. Ce qui ne marche toujours pas  
   – Force de la preuve : Moyenne  
   – Donnée qui tranche (fiche §10.3) : D15  

Pourquoi des maillons : chaque maillon se vérifie seul. La chaîne vaut ce que vaut son maillon le plus faible, et chaque maillon fragile donne une donnée à extraire. On peut valider un temps du récit sans les autres.  

2.3 Deux mécanismes à séparer dans le temps 3  

L'écart subi aujourd'hui par un nouveau joueur peut venir de deux causes, dont les solutions diffèrent :  

• A. Démarrage à froid  
   – Ce qui se passe : Le MMR de départ d'un nouveau compte est mal réglé (par exemple au niveau médian), ou met trop de matchs à trouver le bon niveau  
   – Comment le voir : Écart subi par les nouveaux comptes à population égale (même heure, même région)  
   – Levier : Revoir le MMR de départ, accélérer sa convergence, file débutants  
• B. Manque de joueurs (H5b)  
   – Ce qui se passe : Faute de joueurs en file, le système élargit la fourchette  
   – Comment le voir : Écart qui augmente quand la file se vide (heures creuses, petites régions), quel que soit l'âge du compte  
   – Levier : Resserrer la fourchette en acceptant plus d'attente, regrouper des files ou des régions, annoncer l'élargissement  

Test simple : comparer l'écart subi par les nouveaux comptes aux heures pleines et aux heures creuses. S'il est élevé tout le temps, c'est surtout A. S'il explose aux heures creuses, c'est surtout B. Les deux peuvent se cumuler.  

3. ARBRE D'HYPOTHÈSES  

• H1 Matchmaking perçu comme truqué (EOMM, démenti)  
   – Rapport avec H5 : H5 explique la perception sans EOMM  
   – Test qui départage (données NetEase) : Sous H5 : écarts plus forts pour les comptes jeunes et quand la file est vide. Sous H1 : séries indépendantes de l'ancienneté et de la population.  
• H1b Smurfing  
   – Rapport avec H5 : Aggrave H5 : des joueurs expérimentés sur des comptes neufs  
   – Test qui départage (données NetEase) : Comptes jeunes à performance anormale (D1)  
• H2 Fatigue d'équilibrage  
   – Rapport avec H5 : Effet additionnel (M10)  
   – Test qui départage (données NetEase) : Churn aligné sur les patchs, ou sur les défaites lourdes ?  
• H3 Monétisation  
   – Rapport avec H5 : Indépendante, contrôle  
   – Test qui départage (données NetEase) : Churn payeurs / non-payeurs × ancienneté × bilan des premiers matchs  
• H4 Attrition naturelle du genre  
   – Rapport avec H5 : Contrôle : explique une partie de la baisse des premiers mois  
   – Test qui départage (données NetEase) : Benchmark : The Finals −80 % en 1,5 mois (Game Rant (https://gamerant.com/the-finals-player-count-decline-steam/))  

→ H5 n'a pas besoin d'expliquer 100 % du déclin. Elle doit montrer que ce mécanisme y a contribué en 2025, et qu'il empêche la reprise aujourd'hui.  

→ En 2026, les avis négatifs restent nombreux (26 à 43 % selon les mois), mais ne citent plus le matchmaking qu'à 9-16 % : d'autres causes (H2, H3, performances techniques) pèsent aussi sur le plateau.  

4. TEMPS 1 — CE QUI N'A PAS MARCHÉ (2025) : LES PREUVES  

M1 — Des joueurs de niveaux très différents arrivent en même temps  

• 10 M de joueurs en 3 jours, 20 M en moins de 2 semaines, 40 M en ~3 mois  
   – Statut : FAIT (extrait)  
   – Source : Game World Observer (https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report)  
• Contexte : « 45% of players who stopped playing Overwatch 2 in December played Marvel Rivals » : des joueurs déjà expérimentés dans le genre sont arrivés en même temps que des joueurs venus pour la licence  
   – Statut : FAIT (panel biaisé vers les joueurs engagés, §7)  
   – Source : Newzoo, PC & Console Gaming Report 2025, p. 24  
• Moyennes Steam d'Overwatch 2 : environ 32 K (novembre 2024), puis 25 248 (décembre, −21,7 %) et 19 745 (−21,8 %)  
   – Statut : FAIT (PC)  
   – Source : VGC (https://www.videogameschronicle.com/news/overwatch-2s-average-pc-player-count-has-dropped-39-since-marvel-rivals-was-released/)  
• Répartition réelle des niveaux à l'arrivée  
   – Statut : Inconnue publiquement ; mesurable par NetEase (D1)  
   – Source : —  

⚠️ Newzoo écrit « played » (ont joué), pas « switched » (sont passés). Le titre de TheGamer (« 45 % des joueurs d'Overwatch 2 ont migré ») est une déformation. Ce chiffre sert seulement de contexte : la preuve de l'hétérogénéité est dans la télémétrie de NetEase.  

M2 — Aucun calibrage  

• Jusqu'à la S4 : pas de placement, tout le monde démarre en Bronze III ; classé au niveau 10, puis 15 depuis la S2  
   – Statut : FAIT  
   – Source : PCGamesN (https://www.pcgamesn.com/marvel-rivals/ranks-competitive)  
• Pas de documentation publique du MMR de la partie rapide, par où passent tous les nouveaux joueurs avant le niveau 15  
   – Statut : FAIT (absence)  
   – Source : Gaming Amigos (https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking)  
• Répartition officielle des rangs en S1.5 : joueurs à moins de 5 matchs classés exclus, à cause du « poids écrasant » des joueurs placés en Bronze  
   – Statut : FAIT  
   – Source : PCGamesN (https://www.pcgamesn.com/marvel-rivals/ranks-competitive)  
• Placements annoncés le 03/09/2025, repoussés après la S4  
   – Statut : FAIT  
   – Source : TheGamer (https://www.thegamer.com/marvel-rivals-season-4-finally-getting-placement-matches/)  
• S5 (14/11/2025) : 10 matchs de placement ; nouveau joueur placé au rang estimé Silver III ; groupes de 3 maximum pendant les placements  
   – Statut : FAIT (officiel)  
   – Source : Notes de patch S5 (https://www.marvelrivals.com/20251114/41525_1270590.html)  
• Part des avis négatifs citant le matchmaking : 25,9 % (oct. 2025) → 17,3 % (nov. 2025)  
   – Statut : FAIT (notre collecte)  
   – Source : §9  

→ Lecture : les placements de la S5 sont la correction, par NetEase lui-même, du manque de calibrage en classé. Ils confirment après coup que ce point posait problème. Juste après leur arrivée, les plaintes sur le matchmaking reculent et la fréquentation rebondit (décembre 2025 – janvier 2026). C'est une corrélation, pas une causalité : à confirmer avec la rétention des nouveaux comptes avant et après le 14/11/2025 (D3). Les placements ne couvrent pas la partie rapide.  

M3 — Les plus expérimentés montent vite en traversant les autres  

Vidéo de Zhiyong, 21/08/2025 — FAIT (officiel). Sources : PC Gamer (https://www.pcgamer.com/games/third-person-shooter/marvel-rivals-devs-transparent-18-minute-breakdown-of-how-ranked-isnt-rigged-fails-to-placate-players-who-hate-losing/), Gaming Amigos (https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking).  

• La performance est ramenée à 10 minutes de jeu et comparée aux joueurs du même héros au même rang.  
• Silver : 60 % performance / 40 % résultat ; Celestial : 30 % / 70 %.  
• Points : ±20 à niveau égal ; +25 / −15 contre plus fort ; +15 / −25 contre plus faible.  
• Les équipes sont équilibrées sur la moyenne des scores.  
• Témoignage de joueur : « Bronze → Silver en ~6 matchs » en dominant (Steam (https://steamcommunity.com/app/2767030/discussions/0/600769761663572886/)).  

→ Le système fonctionne comme prévu pour un joueur expérimenté : il monte vite. Le coût est supporté par les joueurs moins expérimentés qu'il croise en chemin.  

M4 — La liberté de composition ajoute un écart tactique  

Le choix de NetEase, et son propre diagnostic :  

• Guangyun Chen : « We believe no role queue will lead to a richer gaming experience for everyone »  
   – Statut : FAIT  
   – Source : GamesRadar+ (https://www.gamesradar.com/games/third-person-shooter/marvel-rivals-boss-doubles-down-we-believe-no-role-queue-will-lead-to-a-richer-gaming-experience-for-everyone/) · PC Gamer (https://www.pcgamer.com/games/third-person-shooter/instead-of-role-queue-marvel-rivals-wants-to-trust-players-with-the-epic-responsibility-of-creating-a-functioning-team-by-themselves-well-be-taking-a-little-bit-more-of-a-marvel-inspired-approach/)  
• Zhiyong : une role queue allongerait l'attente ; le système peut produire des « imbalanced team roles »  
   – Statut : FAIT (officiel)  
   – Source : Gaming Amigos (https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking)  
• Conseil officiel face aux séries de défaites : « apprenez à flex »  
   – Statut : FAIT  
   – Source : Gfinity (https://www.gfinityesports.com/article/netease-reveals-the-secret-to-fixing-your-marvel-rivals-losing-streak)  
• Bans de héros seulement à partir de Diamant III  
   – Statut : FAIT  
   – Source : PCGamesN (https://www.pcgamesn.com/marvel-rivals/ranks-competitive)  

Les mécaniques exploitées :  

• S0 → S1  
   – Mécanique : Triple Strategist  
   – Constat : Enchaînement d'ultimes : Luna Snow (12 s), Loki (12 s), puis un troisième, soit un combat bloqué plus de 30 s. Zhiyong : « oppressive moments », « may slow down the game's pace ».  
   – Source : Dexerto S1.5 (https://www.dexerto.com/marvel-rivals/marvel-rivals-season-1-5-killed-triple-support-but-the-new-meta-is-much-worse-3139069/) · Dexerto, plan des devs (https://www.dexerto.com/marvel-rivals/marvel-rivals-devs-reveal-plan-to-crack-down-on-three-support-meta-3136350/)  
• S1.5 (21/02/2025)  
   – Mécanique : Correctif  
   – Constat : Ultimes de soin plus chers ; tanks à bouclier affaiblis  
   – Source : idem  
• Après la S1.5  
   – Mécanique : L'abus se déplace  
   – Constat : Combo Storm + Human Torch ; méta jugé « much worse for casuals »  
   – Source : Dexerto S1.5 (https://www.dexerto.com/marvel-rivals/marvel-rivals-season-1-5-killed-triple-support-but-the-new-meta-is-much-worse-3139069/)  
• En continu  
   – Mécanique : Triple tank + triple soin ; empilement de team-ups  
   – Constat : Efficace contre les équipes non coordonnées  
   – Source : FandomWire (https://fandomwire.com/marvel-rivals-dps-mains-are-using-the-dumbest-strategy-that-makes-3-heal-3-tank-comp-a-guaranteed-way-to-hit-celestial/)  
• 2025 (avis Steam)  
   – Mécanique : Ressenti des joueurs  
   – Constat : « Add a role queue so I don't have to be the only tank with 4 dps and one healer » (07/2025, 122 h)  
   – Source : §9  
• —  
   – Mécanique : « Plus de 50 % des matchs Diamant en triple Strategist »  
   – Constat : Non vérifié (Reddit, fil Steam)  
   – Source : rivals.fan (https://rivals.fan/news/marvel-rivals-three-strategist-meta)  

→ Lecture pour le client : la liberté de composition est un choix de design légitime. Mais aux rangs bas, elle avantage les joueurs expérimentés et coordonnés face aux joueurs moins expérimentés en solo. Perdre un combat bloqué 30 secondes ressemble à un match truqué : le méta exploité nourrit la perception d'EOMM.  

M5 — Les défaites lourdes font partir  

• Kang, Suh et Kim, Heliyon, 2024 (texte intégral lu, PMC (https://pmc.ncbi.nlm.nih.gov/articles/PMC10839887/)) : ~6 millions de matchs, plus de 262 000 joueurs.  
   • +50 points d'écart de niveau moyen : +10 % de churn (de 17 % à 18,7 %).  
   • Jouer contre plus fort, et subir de grands écarts de niveau, augmente le churn.  
   • Les débutants sont moins sensibles au taux de victoire que les joueurs avancés.  
• EOMM, EA/UCLA, 2017 (extrait) : en série de défaites, le risque de churn est d'environ 5 %, contre 2 à 2,6 % sinon (arXiv (https://arxiv.org/pdf/1702.06820)).  

→ Ce sont des analogies tirées d'autres jeux. La vraie mesure est dans les données de churn de NetEase (D2 pour 2025, D10 aujourd'hui).  

5. TEMPS 2 — LA CONSÉQUENCE : UNE POPULATION FILTRÉE  

M6 — Il reste surtout des joueurs expérimentés  

Le raisonnement : l'audience PC passe de 279 K à 64-89 K. Ceux qui restent sont, par définition, ceux qui ont tenu malgré les défaites : surtout des joueurs investis, qui ont accumulé des centaines d'heures. Ce ne sont pas forcément d'anciens joueurs d'Overwatch, mais des joueurs expérimentés sur Marvel Rivals.  

Indice public : l'ancienneté des auteurs d'avis Steam (notre collecte, §9.3)  

• T4 2024 (sortie le 06/12)  
   – Avis à moins de 10 h de jeu : 36,7 %  
   – Avis à plus de 200 h de jeu : 5,2 %  
   – Temps de jeu médian des auteurs : 18 h  
• T1 2025  
   – Avis à moins de 10 h de jeu : 18,2 %  
   – Avis à plus de 200 h de jeu : 10,8 %  
   – Temps de jeu médian des auteurs : 54 h  
• T2 2025  
   – Avis à moins de 10 h de jeu : 12,6 %  
   – Avis à plus de 200 h de jeu : 31,3 %  
   – Temps de jeu médian des auteurs : 109 h  
• T3 2025  
   – Avis à moins de 10 h de jeu : 13,1 %  
   – Avis à plus de 200 h de jeu : 41,8 %  
   – Temps de jeu médian des auteurs : 140 h  
• T4 2025  
   – Avis à moins de 10 h de jeu : 16,8 %  
   – Avis à plus de 200 h de jeu : 41,6 %  
   – Temps de jeu médian des auteurs : 125 h  
• T1 2026  
   – Avis à moins de 10 h de jeu : 15,8 %  
   – Avis à plus de 200 h de jeu : 34,8 %  
   – Temps de jeu médian des auteurs : 91 h  
• T2 2026  
   – Avis à moins de 10 h de jeu : 15,6 %  
   – Avis à plus de 200 h de jeu : 40,3 %  
   – Temps de jeu médian des auteurs : 120 h  
• T3 2026 (jusqu'au 29/09)  
   – Avis à moins de 10 h de jeu : 15,8 %  
   – Avis à plus de 200 h de jeu : 35,9 %  
   – Temps de jeu médian des auteurs : 87 h  

En volume, le nombre estimé d'avis écrits par des joueurs à moins de 10 heures passe d'environ 26 000 au T4 2024 à 2 300 à 3 700 par trimestre depuis mi-2025, soit environ 9 fois moins.  

→ Lecture : la part des auteurs très expérimentés est passée de 5 % à 36-42 % et s'y maintient. Il arrive encore des nouveaux joueurs (environ 16 % des avis), mais en petit nombre au sein d'une population expérimentée.  

⚠️ Limites de cet indice :  
• sur un jeu plus ancien, les auteurs d'avis ont mécaniquement plus d'heures ;  
• au lancement, les joueurs écrivent davantage d'avis ;  
• seuls ceux qui écrivent un avis sont représentés, sur PC et en anglais.  

C'est un indice cohérent, pas une preuve. La mesure exacte est la répartition des joueurs actifs par ancienneté et heures jouées, mois par mois, dans la télémétrie de NetEase (D9).  

6. TEMPS 3 — CE QUI NE MARCHE TOUJOURS PAS : LES PREUVES  

M7 — Les nouveaux entrent en partie rapide face à cette population  

• Le classé n'est accessible qu'au niveau 15 : un nouveau joueur passe d'abord par la partie rapide  
   – Statut : FAIT  
   – Source : PCGamesN (https://www.pcgamesn.com/marvel-rivals/ranks-competitive)  
• Le MMR de la partie rapide n'est pas documenté publiquement. La vidéo du 21/08/2025 porte sur le classé.  
   – Statut : FAIT (absence)  
   – Source : Gaming Amigos (https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking)  
• Critères de matchmaking cités par NetEase : composition, score compétitif, score de base, serveurs, rôles habituellement joués  
   – Statut : FAIT (rapporté)  
   – Source : Gfinity (https://www.gfinityesports.com/article/netease-reveals-the-secret-to-fixing-your-marvel-rivals-losing-streak)  
• La partie rapide « privilégie la vitesse » : « huge skill gaps », « a rookie might find themselves against seasoned veterans »  
   – Statut : Presse / verbatims  
   – Source : Dexerto (https://www.dexerto.com/marvel-rivals/marvel-rivals-awful-matchmaking-system-is-piting-you-against-top-rank-players-3164207/)  
• MMR caché avec des fourchettes plus larges qu'en classé  
   – Statut : HYPOTHÈSE (communauté)  
   – Source : Steam (https://steamcommunity.com/app/2767030/discussions/0/578249962076258316/)  
• Parties avec bots après 2 défaites d'affilée, jamais confirmées ni démenties publiquement  
   – Statut : HYPOTHÈSE solide (28/12/2024) ; encore signalées en S7 (2026)  
   – Source : Dexerto (https://www.dexerto.com/gaming/marvel-rivals-player-proves-devs-snuck-bots-into-quickplay-matches-3016959/) · TheGamer S7 (https://www.thegamer.com/marvel-rivals-mixed-reviews-steam-season-7/)  
• Avis Steam : « a whole team of Bronze players get paired against Celestial/Eternity players. Needs some kind of SBMM for quickplay » (06/2025, 906 h) ; « new players and high-ranked veterans often end up in the same team » (10/2025, 1 011 h)  
   – Statut : Verbatims (notre collecte)  
   – Source : §9  

M8 — Moins de joueurs, fourchette élargie (H5b)  

• Si l'attente est trop longue, la fourchette de rang s'élargit progressivement ; groupes mélangés (4+1+1 contre 3+2+1) ; « rank gaps » reconnus  
   – Statut : FAIT (officiel)  
   – Source : Gaming Amigos (https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking)  
• S3.5 : groupes de 4 et 6 interdits aux rangs élevés, car ils rendaient le matchmaking trop difficile à équilibrer  
   – Statut : FAIT (officiel)  
   – Source : idem  
• Population PC : 279 K de moyenne en décembre 2024, 68,6 K sur les 30 derniers jours  
   – Statut : FAIT  
   – Source : Steam Charts (https://steamcharts.com/app/2767030)  
• Files de 20 minutes et plus au sommet ; serveur « mort » cité (Tokyo, 04/2025)  
   – Statut : Verbatims  
   – Source : Steam (https://steamcommunity.com/app/2767030/discussions/0/688618675547317727/) · avis Steam  

→ Point d'attention : 68 K joueurs simultanés sur PC, sans compter les consoles, ce n'est pas un désert. Le manque de joueurs est sans doute local : certaines heures, certaines régions, certaines tranches de niveau. C'est là que l'audit doit le chercher (D13).  

→ Effet structurel (HYPOTHÈSE) : au lancement, tout le monde était nouveau, donc un nouveau joueur trouvait facilement des adversaires de son niveau. Près de deux ans plus tard, les nouveaux arrivent au compte-gouttes dans une population expérimentée. Même un MMR bien réglé manque alors d'adversaires de même niveau et doit élargir la fourchette. C'est un effet du vieillissement d'un jeu service, que le matchmaking doit compenser activement.  

M9 — Les défaites lourdes font partir les nouveaux  

Même mécanisme que M5, appliqué aux nouveaux joueurs d'aujourd'hui. Aucune donnée publique ne le mesure : c'est l'indicateur de l'objectif SMART (D10).  

⚠️ Les joueurs à moins de 10 heures citent le matchmaking dans seulement 2,8 % de leurs avis négatifs. Un nouveau joueur écrasé part souvent sans écrire d'avis, ou n'identifie pas la cause (« c'est trop dur ») : c'est le biais du survivant (§9.4).  

M10 — Aggravant : le jeu s'alourdit  

Depuis la S3 (11/07/2025) : saisons de 2 mois et un héros par mois, contre un tous les ~6 mois sur Overwatch 2 (GameSpot (https://www.gamespot.com/articles/marvel-rivals-shortening-seasons-releasing-a-new-hero-every-month/1100-6530612/), extrait). Plus de 45 héros en février 2026 (Game Rant (https://gamerant.com/overwatch-steam-player-count-versus-marvel-rivals-comparison-charts/)). Un nouveau joueur a de plus en plus à apprendre face à des joueurs qui connaissent déjà tous les héros.  

7. LA SOURCE NEWZOO : COLLECTE ET FIABILITÉ (CONTEXTE DU TEMPS 1)  

7.1 Comment Newzoo récolte ses données  

1. Joueur relie volontairement ses comptes Steam / PSN / Xbox  
2. à une application de suivi (ex. PlayTracker)  
3. import : jeux joués, temps de jeu par jeu,  
4. date de dernière partie, variation depuis la dernière synchronisation  
5. pseudonymisation transmission à Newzoo (données dans l'UE)  
6. filtres de qualité + modèles de correction des biais  
7. indicateurs agrégés (DAU, MAU, churn et recouvrement entre jeux)  

• Nature des données  
   – Ce qu'on sait : « Raw telemetry data taken from over 1 million players within Newzoo's panel of users »  
   – Statut : FAIT  
   – Source : Rapport, p. 45  
• Mesure du passage d'un jeu à l'autre  
   – Ce qu'on sait : « Player and spender overlap, acquisition, retention, and churn between titles »  
   – Statut : FAIT  
   – Source : Rapport, p. 42  
• Couverture  
   – Ce qu'on sait : Steam, PlayStation, Xbox ; 37 marchés hors Chine et Inde  
   – Statut : FAIT  
   – Source : Rapport, p. 24, 46 à 65  
• Mécanisme documenté  
   – Ce qu'on sait : Comptes Steam / PSN / Xbox reliés à PlayTracker  
   – Statut : FAIT  
   – Source : PlayTracker, section B (https://playtracker.net/privacy/)  
• Partage avec Newzoo  
   – Ce qu'on sait : « joint controllers under the GDPR » ; données pseudonymisées ; résultats agrégés  
   – Statut : FAIT  
   – Source : PlayTracker, section D (https://playtracker.net/privacy/)  
• PlayTracker est-il la source des 45 % ?  
   – Ce qu'on sait : Non prouvé : partenariat annoncé le 27/05/2025, après le rapport  
   – Statut : HYPOTHÈSE  
   – Source : X @PlayTrackerNet (https://x.com/PlayTrackerNet/status/1927304996393013371) · WAHL (https://www.wahl.hr/insight/playtracker-enters-strategic-partnership-with-newzoo)  
• « 73 000 joueurs »  
   – Ce qu'on sait : C'est le Global Gamer Study, un sondage, pas le panel de télémétrie  
   – Statut : Correction  
   – Source : Rapport, p. 8  

7.2 Fiabilité  

• Overwatch 2 recule en décembre 2024  
   – Newzoo : −26 % d'engagement (p. 73)  
   – Source indépendante : SteamDB via VGC : −21,7 % puis −21,8 %  
   – Verdict : ✅ Cohérent  
• Overwatch 2 revient à ses anciens niveaux  
   – Newzoo : DAU au niveau d'Overwatch 1 (p. 78)  
   – Source indépendante : Baisse continue sur Steam  
   – Verdict : ✅ Cohérent  
• Marvel Rivals est un succès massif en décembre  
   – Newzoo : 7 % de la croissance F2P 2024 (p. 24)  
   – Source indépendante : 279 K de moyenne Steam, 40 M de joueurs  
   – Verdict : ✅ Cohérent  
• Le chiffre de 45 %  
   – Newzoo : p. 24  
   – Source indépendante : Aucune autre source chiffrée  
   – Verdict : ⚠️ Non recoupable  
• Représentativité  
   – Newzoo : Panel biaisé vers les joueurs « core » (disclaimer p. 45)  
   – Source indépendante : —  
   – Verdict : ❌ Faible  

Verdict : fiable pour la tendance (des joueurs expérimentés d'autres jeux sont arrivés). Inutilisable pour mesurer quoi que ce soit dans la base de NetEase. Dans la version 5, il ne sert donc que de contexte.  

Leçon de minimisation : Newzoo a besoin de comptes liés pour savoir d'où viennent les joueurs. NetEase, non : sa télémétrie de match suffit à repérer un joueur expérimenté (D1). L'historique de jeu externe reste INUTILE (RGPD Art. 5.1.c).  

8. CHRONOLOGIE : FRÉQUENTATION STEAM, AVIS ET ÉVÉNEMENTS  

Sources : Steam Charts (https://steamcharts.com/app/2767030), lu le 29/09/2026 (moyennes mensuelles de joueurs simultanés, PC uniquement ; pic de référence 642 333) ; avis Steam en anglais, notre collecte du 30/09/2026.  

• Déc. 2024  
   – Moyenne Steam : 279 402  
   – Variation : —  
   – % d'avis négatifs : 16,1 %  
   – % des négatifs citant le matchmaking : 7,4 %  
   – Événement : Sortie (06/12) ; Bronze III pour tous ; bots signalés (28/12)  
   – Temps : 1  
• Janv. 2025  
   – Moyenne Steam : 306 066  
   – Variation : +9,5 %  
   – % d'avis négatifs : 18,0 %  
   – % des négatifs citant le matchmaking : 10,9 %  
   – Événement : Pic de 642 333  
   – Temps : 1  
• Fév. – mars 2025  
   – Moyenne Steam : 228 000 / 144 302  
   – Variation : −25,5 % / −36,7 %  
   – % d'avis négatifs : 18,9 % / 16,4 %  
   – % des négatifs citant le matchmaking : 12,1 % / 20,3 %  
   – Événement : Méta triple Strategist, correctif S1.5 (21/02)  
   – Temps : 1  
• Avr. 2025  
   – Moyenne Steam : 134 118  
   – Variation : −7,1 %  
   – % d'avis négatifs : 20,4 %  
   – % des négatifs citant le matchmaking : 21,1 %  
   – Événement : S2 ; classé au niveau 15  
   – Temps : 1  
• Mai – juin 2025  
   – Moyenne Steam : 102 116 / 79 806  
   – Variation : −23,9 % / −21,9 %  
   – % d'avis négatifs : 28,3 % / 31,9 %  
   – % des négatifs citant le matchmaking : 29,1 % / 27,6 %  
   – Événement : Cassure  
   – Temps : 1 → 2  
• Juil. – août 2025  
   – Moyenne Steam : 82 825 / 77 502  
   – Variation : +3,8 % / −6,4 %  
   – % d'avis négatifs : 34,6 % / 38,5 %  
   – % des négatifs citant le matchmaking : 37,0 % / 41,0 %  
   – Événement : S3 : un héros par mois ; démenti EOMM (12/08) ; vidéo (21/08)  
   – Temps : 2  
• Sept. – oct. 2025  
   – Moyenne Steam : 64 418 / 63 716  
   – Variation : −16,9 % / −1,1 %  
   – % d'avis négatifs : 37,8 % / 37,6 %  
   – % des négatifs citant le matchmaking : 33,9 % / 25,9 %  
   – Événement : Placements repoussés ; plus bas historique  
   – Temps : 2  
• Nov. 2025  
   – Moyenne Steam : 65 301  
   – Variation : +2,5 %  
   – % d'avis négatifs : 17,6 %  
   – % des négatifs citant le matchmaking : 17,3 %  
   – Événement : S5 : placements (NetEase corrige le calibrage du classé)  
   – Temps : 3  
• Déc. 2025 – janv. 2026  
   – Moyenne Steam : 75 492 / 88 790  
   – Variation : +15,6 % / +17,6 %  
   – % d'avis négatifs : 28,1 % / 25,9 %  
   – % des négatifs citant le matchmaking : 18,2 % / 15,4 %  
   – Événement : Rebond (corrélation, pas causalité)  
   – Temps : 3  
• Fév. 2026  
   – Moyenne Steam : 81 368  
   – Variation : −8,4 %  
   – % d'avis négatifs : 27,8 %  
   – % des négatifs citant le matchmaking : 15,6 %  
   – Événement : Relance d'Overwatch  
   – Temps : 3  
• Mars – sept. 2026  
   – Moyenne Steam : 30 derniers jours : 68 566  
   – Variation : −14,4 %  
   – % d'avis négatifs : 32 à 43 %  
   – % des négatifs citant le matchmaking : 9 à 15 %  
   – Événement : Plateau : la base ne se renouvelle pas  
   – Temps : 3  

9. CE QUE DISENT LES JOUEURS : ANALYSE DE 303 K AVIS STEAM  

9.1 Méthode  

• Source : API publique des avis Steam (store.steampowered.com/appreviews/2767030)  
• Périmètre : Avis en anglais, du 06/12/2024 au 29/09/2026  
• Échantillon : 37 990 avis, jusqu'à 400 par semaine sur 95 semaines, pondérés par le volume réel de chaque semaine. Population estimée : 303 135 avis.  
• Variables conservées : Date, vote (recommandé ou non), temps de jeu au moment de l'avis, votes « utile », texte  
• Minimisation (RGPD) : Ni identifiant Steam ni pseudo conservés ; analyse agrégée ; citations courtes  
• Analyse : Repérage par mots-clés (matchmaking, EOMM, écart de niveau, débutants, partie rapide, bots, rôles, smurfs) ; répartition des auteurs par temps de jeu  
• Date de collecte : 30/09/2026  
• Fichiers : docs/scraping_avis_steam/ : scripts, volumes par semaine, résultats  

9.2 Le matchmaking comme motif d'insatisfaction  

• 16,6 % des avis négatifs parlent du matchmaking, contre 1,5 % des avis positifs, soit 11 fois plus.  
• La part des négatifs qui le citent passe de 7 % à 41 % entre décembre 2024 et août 2025, puis tombe à 17 % juste après les placements de la S5 (tableau du §8). C'est une corrélation, pas une preuve.  
• En 2026, les négatifs restent nombreux, mais le matchmaking n'en représente plus que 9 à 16 %.  

Thèmes des avis négatifs qui citent le matchmaking (n = 2 346)  

• EOMM / « rigged »  
   – Part : 35,5 %  
   – Dans l'ensemble des négatifs : 6,0 %  
   – Lien avec les maillons : Perception d'injustice (H1)  
• Classé  
   – Part : 32,8 %  
   – Dans l'ensemble des négatifs : 11,3 %  
   – Lien avec les maillons : M2, M3  
• Écart de niveau / stomp  
   – Part : 13,9 %  
   – Dans l'ensemble des négatifs : 2,6 %  
   – Lien avec les maillons : M3, M7, M8  
• Vétérans / Overwatch / « sweat »  
   – Part : 13,9 %  
   – Dans l'ensemble des négatifs : 11,2 %  
   – Lien avec les maillons : M1, M6  
• Partie rapide  
   – Part : 12,7 %  
   – Dans l'ensemble des négatifs : 4,5 %  
   – Lien avec les maillons : M7  
• Bots  
   – Part : 10,0 %  
   – Dans l'ensemble des négatifs : 4,2 %  
   – Lien avec les maillons : M7 (parties d'entraînement)  
• Rôles / compositions  
   – Part : 8,3 %  
   – Dans l'ensemble des négatifs : 3,5 %  
   – Lien avec les maillons : M4  
• Smurfs  
   – Part : 5,3 %  
   – Dans l'ensemble des négatifs : 1,6 %  
   – Lien avec les maillons : H1b  
• Débutants cités explicitement  
   – Part : 3,4 %  
   – Dans l'ensemble des négatifs : 1,3 %  
   – Lien avec les maillons : M1, M7  

9.3 Qui écrit les avis : une population de plus en plus expérimentée  

• T4 2024  
   – Avis estimés : 70 969  
   – < 10 h : 36,7 %  
   – 10-50 h : 46,9 %  
   – 50-200 h : 11,2 %  
   – > 200 h : 5,2 %  
   – Médiane : 18 h  
• T1 2025  
   – Avis estimés : 106 705  
   – < 10 h : 18,2 %  
   – 10-50 h : 34,1 %  
   – 50-200 h : 36,9 %  
   – > 200 h : 10,8 %  
   – Médiane : 54 h  
• T2 2025  
   – Avis estimés : 31 116  
   – < 10 h : 12,6 %  
   – 10-50 h : 21,7 %  
   – 50-200 h : 34,4 %  
   – > 200 h : 31,3 %  
   – Médiane : 109 h  
• T3 2025  
   – Avis estimés : 19 623  
   – < 10 h : 13,1 %  
   – 10-50 h : 19,4 %  
   – 50-200 h : 25,8 %  
   – > 200 h : 41,8 %  
   – Médiane : 140 h  
• T4 2025  
   – Avis estimés : 21 844  
   – < 10 h : 16,8 %  
   – 10-50 h : 19,7 %  
   – 50-200 h : 21,9 %  
   – > 200 h : 41,6 %  
   – Médiane : 125 h  
• T1 2026  
   – Avis estimés : 19 428  
   – < 10 h : 15,8 %  
   – 10-50 h : 25,7 %  
   – 50-200 h : 23,6 %  
   – > 200 h : 34,8 %  
   – Médiane : 91 h  
• T2 2026  
   – Avis estimés : 14 725  
   – < 10 h : 15,6 %  
   – 10-50 h : 20,9 %  
   – 50-200 h : 23,2 %  
   – > 200 h : 40,3 %  
   – Médiane : 120 h  
• T3 2026  
   – Avis estimés : 18 720  
   – < 10 h : 15,8 %  
   – 10-50 h : 25,4 %  
   – 50-200 h : 23,0 %  
   – > 200 h : 35,9 %  
   – Médiane : 87 h  

Parts pondérées ; médiane calculée sur l'échantillon non pondéré. Script : docs/scraping_avis_steam/anciennete_auteurs.py.  

→ Voir la lecture et les limites au §5.  

9.4 Qui se plaint du matchmaking : surtout les joueurs expérimentés  

• 0-10 h  
   – Part d'avis négatifs : 24,5 %  
   – Part des négatifs qui citent le matchmaking : 2,8 % (plaintes surtout sur les performances techniques, ~17 %)  
• 10-50 h  
   – Part d'avis négatifs : 14,3 %  
   – Part des négatifs qui citent le matchmaking : 9,2 %  
• 50-200 h  
   – Part d'avis négatifs : 20,3 %  
   – Part des négatifs qui citent le matchmaking : 18,3 %  
• 200-1 000 h  
   – Part d'avis négatifs : 37,4 %  
   – Part des négatifs qui citent le matchmaking : 30,2 %  
• Plus de 1 000 h  
   – Part d'avis négatifs : 43,1 %  
   – Part des négatifs qui citent le matchmaking : 22,4 %  

Deux lectures, cohérentes avec H5 :  
1. Biais du survivant : un nouveau joueur écrasé part sans écrire d'avis, ou n'identifie pas la cause. Seule la donnée interne de churn (D10) peut trancher.  
2. L'écart est vécu des deux côtés : les joueurs expérimentés se plaignent d'être mis avec ou contre des joueurs de niveau très différent (« new players and high-ranked veterans often end up in the same team »). L'hétérogénéité des lobbys est bien au cœur du problème.  

9.5 Verbatims représentatifs (extraits courts, sans pseudo)  

Nouveaux joueurs face à des joueurs expérimentés (M7)  
• [07/2025, 5,8 h] « It is not fun to be put in a lobby with enemies that are in diamond and grandmaster just because I won the previous game, while I am just trying to learn »  
• [01/2025, 6,2 h] « Third casual match and I am getting matched against Platinum III players with 58 hs played »  
• [07/2025, 17 h] « This game is really sweaty and complex. New players shouldn't even try it unless they have a lot of friends to voice chat with »  
• [04/2025, 1,6 h] « pairs new or low-skilled players with highly skilled ones »  

Partie rapide (M7)  
• [06/2025, 906 h] « Matchmaking is horrible for the casual players in quickplay, why does a whole team of Bronze players get paired against Celestial/Eternity players. Needs some kind of SBMM for quickplay »  
• [07/2025, 198 h] « Even in quickplay the game just serves you obvious steamrolls (i.e. matching six grandmasters vs one) »  

Lobbys hétérogènes vus par les joueurs expérimentés (M8)  
• [10/2025, 1 011 h] « New players and high-ranked veterans often end up in the same team, while smurfing […] »  
• [07/2025, 1 108 h] « In what world is it a good idea to put Silver, Gold, Plat, and Diamond-Celestial players in the same match…? In ranked? QP is just as bad »  

Rôles et compositions (M4)  
• [08/2025, 335 h, 36 votes utiles] « devs vision where everyone have freedom to play any role any time »  
• [07/2025, 122 h] « Give us placement matches […] Add a role queue so I don't have to be the only tank with 4 dps and one healer »  

Bots (M7)  
• [07/2026, 817 h, 315 votes utiles] « you can have a bot match even if you're winning »  
• [02/2026, 579 h, 53 votes utiles] « if you play and loose too much the game puts you against bots »  

9.6 Limites  

• Steam = PC uniquement, et avis en anglais uniquement.  
• Mots-clés imparfaits : faux positifs et oublis possibles.  
• Échantillon pondéré, pas exhaustif.  
• Seuls ceux qui écrivent un avis sont représentés (biais du survivant).  
• Un avis mesure une perception, pas l'iniquité réelle.  
• RGPD : le texte d'un avis peut contenir des données personnelles, d'où l'analyse agrégée, sans identifiant, et des citations courtes.  

10. BODAK  

Décision à éclairer : NetEase doit décider s'il modifie l'entrée en jeu de Marvel Rivals (matchmaking de la partie rapide, fourchette de niveau, garde-fous de rôles) pour que les nouveaux joueurs restent, face à un plancher d'audience bas et fragile depuis mi-2025.  

10.1 Le BODAK en cinq phrases  

• B — Business problem : « Sur Steam, la moyenne mensuelle de joueurs simultanés de Marvel Rivals baisse de 77 % entre le mois de sa sortie (décembre 2024 : 279 K) et octobre 2025 (64 K), et plafonne depuis sous 90 K, malgré 40 M de joueurs acquis en 3 mois. Les nouveaux joueurs partent-ils parce qu'ils tombent, dans des lobbys élargis par le manque de joueurs, sur une population restée surtout expérimentée ? »  
• O — Objective : « Ramener à 1,2 le ratio de churn J7 entre les nouveaux comptes ayant perdu au moins 7 de leurs 10 premiers matchs et les autres nouveaux comptes, d'ici le 31/03/2027 (≈ fin de Season 12, calendrier à confirmer). »  
• D — Data : « Répartition des joueurs actifs par ancienneté, churn par cohorte selon les premiers matchs, MMR de départ et écart de MMR subi en partie rapide × ancienneté, largeur de fourchette × joueurs en file par heure et région, compositions par rôle × résultat × rang, parties avec bots, avis Steam agrégés. »  
• A — Analysis : « Audit du MMR de la partie rapide (heures pleines contre heures creuses) + cohortes 2025 et avant / après la S5 + régression du churn J7 sur écart, ancienneté, population et composition (test H1 contre H5) + tests A/B des leviers + analyse textuelle des avis Steam. »  
• K — KPIs : « Ratio de churn J7 des nouveaux comptes perdants, écart de MMR médian subi par les nouveaux comptes en partie rapide, attente p90 par rang, part des matchs Bronze-Or avec au moins 4 héros du même rôle, part des avis Steam négatifs citant le matchmaking. »  

10.2 Justification du B et du O  

B — données utilisées et à quoi elles servent  

• Moyenne mensuelle de joueurs simultanés sur Steam  
   – Définition précise : Nombre moyen de joueurs connectés en même temps sur le mois. PC uniquement. Comparée moyenne contre moyenne, jamais avec un pic.  
   – Période et valeur : Déc. 2024 (mois de sortie) : 279 402 → oct. 2025 : 63 716, soit −77,2 %  
   – Source : FAIT — https://steamcharts.com/app/2767030 (lu le 29/09/2026)  
   – À quoi elle sert : Mesurer l'ampleur de la perte d'audience depuis la sortie : c'est le symptôme business (temps 1)  
• Moyenne mensuelle depuis septembre 2025  
   – Définition précise : Même indicateur  
   – Période et valeur : De 63 716 à 88 790 selon les mois ; 68 566 sur les 30 derniers jours  
   – Source : FAIT — idem  
   – À quoi elle sert : Montrer que la baisse ne se résorbe pas : la base ne se renouvelle pas (temps 3)  
• Joueurs acquis  
   – Définition précise : Nombre cumulé de joueurs ayant lancé le jeu, toutes plateformes, communiqué par NetEase  
   – Période et valeur : 40 M en ~3 mois après la sortie  
   – Source : FAIT (extrait) — https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report  
   – À quoi elle sert : Écarter un problème d'acquisition : les joueurs sont venus, c'est la rétention qui pose problème (d'où le « malgré »)  
• Ancienneté des auteurs d'avis Steam  
   – Définition précise : Part des auteurs à plus de 200 h de jeu, par trimestre (§9.3)  
   – Période et valeur : 5,2 % (T4 2024) → 36 à 42 % depuis mi-2025  
   – Source : FAIT (notre collecte)  
   – À quoi elle sert : Appuyer la question posée : la population est devenue surtout expérimentée (temps 2)  

⚠️ Limites : la moyenne Steam ne couvre que le PC ; décembre 2024 ne compte que 26 jours (sortie le 06/12). Les 40 M couvrent toutes les plateformes : ils servent seulement à écarter un problème d'acquisition. Le segment précis (nouveaux comptes perdants) n'est pas mesurable publiquement : il apparaît dans le O et sera mesuré sur les données de NetEase.  

O — grille SMART  

• S — Spécifique : Un segment précis (nouveaux comptes perdants), un indicateur précis (churn J7) : c'est exactement « ce qui ne marche toujours pas »  
• M — Mesurable : Ratio calculable sur la télémétrie de NetEase (D10) ; valeur cible chiffrée (1,2)  
• A — Atteignable : Leviers testables en 90 jours : file débutants, fourchette resserrée aux heures creuses, garde-fous de rôles aux rangs bas. Précédent : après les placements de la S5, les plaintes sur le matchmaking passent de 26 % à 17 % des avis négatifs.  
• R — Pertinent : Découle directement du B : si les nouveaux partent à cause de l'écart de niveau, c'est chez les nouveaux comptes perdants qu'on le voit  
• T — Temporel : 31/03/2027, soit les 6 mois du brief ; numéro de saison à confirmer (saisons de 2 mois depuis la S3)  

Pourquoi un ratio ? Le churn actuel de NetEase n'est pas public : un ratio reste mesurable sans ce chiffre de départ. Quand NetEase le fournit (par exemple un churn J7 de 60 %), on réécrit l'objectif en valeur absolue : « Ramener le churn J7 des nouveaux comptes perdants de 60 % à 45 % d'ici la fin de Season 12 ».  

Contrôle externe, vérifiable publiquement : part des avis Steam négatifs citant le matchmaking sous 8 % au 31/03/2027 (base : 10,5 % en septembre 2026).  

10.3 D — chaque donnée : pourquoi, quel lien avec les hypothèses, ce que son résultat change  

Chaque donnée répond à une question fermée. Son résultat renforce ou affaiblit un temps du récit, puis déclenche un levier ou l'écarte : aucune n'est collectée « pour voir ».  

• Condition nécessaire : Si elle ne montre rien, le temps du récit concerné tombe seul  
• Cause possible : Le temps tient si au moins une cause possible confirme ; il tombe si toutes sont négatives  
• Aggravant : Si elle ne montre rien, H5 tient toujours, sans l'aggravation  
• Départage : Elle dit laquelle de deux hypothèses ou de deux mécanismes est le bon  
• Précision / Soutien : Elle affine une autre donnée, sans valider ni réfuter seule  
• Orientation de la réponse / Coût d'une décision / Contexte : Elle ne teste pas H5 : elle dit comment agir, ou à quel prix  

Temps 1 — Ce qui n'a pas marché  

D1. Courbe de performance sur les 20 premiers matchs (cohortes 2024-2025)  

Définition : Évolution du score de performance d'un nouveau compte sur ses 20 premiers matchs, pour les comptes créés au lancement  
Pourquoi on la collecte : Pour vérifier que des joueurs de niveaux très différents sont bien arrivés en même temps, sans identité : un joueur déjà expérimenté performe fort dès le début, un débutant progresse lentement  
Lien avec les hypothèses : H5, M1 (point de départ du temps 1). Aussi H1b (comptes neufs à performance anormale)  
Rôle : Condition de départ du temps 1  
Si elle confirme :  
   – Hypothèse : l'hétérogénéité à l'arrivée est prouvée et chiffrée.  
   – Décision : on peut détecter le profil d'un nouveau compte dès ses premiers matchs et orienter son matchmaking.  
Si elle ne montre rien :  
   – Hypothèse : les joueurs arrivés au lancement avaient des niveaux proches ; le temps 1 perd son point de départ.  
   – Décision : l'explication du déclin de 2025 est à chercher ailleurs (H2, H4) ; le temps 3 reste à tester seul.  

D2. Churn des cohortes 2025 selon le niveau initial et l'écart subi  

Définition : Part des comptes créés en 2025 qui ne rejouent plus après 7 et 30 jours, selon leur performance initiale (D1) et l'écart de niveau subi dans leurs premiers matchs  
Pourquoi on la collecte : Pour vérifier que ce sont bien les moins expérimentés, écrasés, qui sont partis en 2025  
Lien avec les hypothèses : H5, M5 (temps 1). Contrôle de H4 : si tout le monde est parti au même rythme, c'est de l'attrition naturelle  
Rôle : Condition nécessaire du temps 1  
Si elle confirme :  
   – Hypothèse : le déclin de 2025 a bien filtré les moins expérimentés ; le temps 1 est prouvé et le temps 2 devient très probable.  
   – Décision : le diagnostic « ce qui n'a pas marché » peut être présenté au comité comme un fait.  
Si elle ne montre rien :  
   – Hypothèse : tous les profils sont partis au même rythme ; le déclin de 2025 relève surtout de l'attrition naturelle (H4) ou d'autres causes (H2, H3).  
   – Décision : on n'attribue pas le déclin au matchmaking ; le temps 3 reste à tester seul.  

D3. Rétention des nouveaux comptes avant et après la S5  

Définition : Rétention J7 et J30 des comptes créés avant et après l'arrivée des placements (14/11/2025)  
Pourquoi on la collecte : Les placements sont la correction, par NetEase, du manque de calibrage en classé : leur effet est une preuve interne de M2  
Lien avec les hypothèses : H5, M2 (preuve a posteriori)  
Rôle : Soutien : elle renforce H5 mais ne suffit pas à la réfuter  
Si elle confirme :  
   – Hypothèse : le manque de calibrage faisait bien partir les joueurs ; la baisse des plaintes Steam après la S5 n'est pas qu'une coïncidence.  
   – Décision : on étend la même logique de calibrage à la partie rapide (D11).  
Si elle ne montre rien :  
   – Hypothèse : les placements n'ont pas changé la rétention ; M2 est affaibli. La baisse des plaintes relevait surtout de la perception.  
   – Décision : on ne mise pas sur le calibrage seul ; on regarde D12 et D13.  

D4. Écart de score intra-match × ancienneté du compte (classé)  

Définition : Différence de score compétitif moyen entre les deux équipes d'un match, croisée avec l'âge des comptes présents  
Pourquoi on la collecte : Pour savoir si les comptes jeunes subissent des matchs plus déséquilibrés que les autres en classé  
Lien avec les hypothèses : H5, M2 et M3. Départage H5 et H1 : sous H5, l'écart dépend de l'ancienneté ; sous H1 (séries artificielles), il n'en dépend pas  
Rôle : Cause possible (avec D5) et départage  
Si elle confirme :  
   – Hypothèse : H5 est renforcée et H1 affaiblie : l'injustice ressentie a une cause mesurable qui n'est pas une manipulation.  
   – Décision : file protégée pour les nouveaux comptes en classé, et réponse chiffrée aux accusations d'EOMM.  
Si elle ne montre rien :  
   – Hypothèse : le classé n'est pas en cause ; l'écart se joue ailleurs (partie rapide, compositions).  
   – Décision : pas de file protégée en classé.  

D5. Compositions par rôle × résultat × rang  

Définition : Nombre de héros par rôle dans chaque équipe, résultat du match, rang des joueurs  
Pourquoi on la collecte : Pour savoir si, sans rôles imposés, certaines compositions écrasent les équipes non coordonnées aux rangs bas  
Lien avec les hypothèses : H5, M4 (écart tactique). Aussi H2 (équilibrage des héros)  
Rôle : Cause possible (avec D4 et D12)  
Si elle confirme :  
   – Hypothèse : l'écart est aussi tactique.  
   – Décision : test A/B d'un minimum de 1 tank et 1 soigneur en Bronze-Or uniquement, et/ou des bans de héros dès Or ou Platine.  
Si elle ne montre rien :  
   – Hypothèse : la liberté de composition ne pénalise pas les moins expérimentés ; M4 tombe.  
   – Décision : on ne touche pas à ce choix de design.  

D6. Groupe contre solo × composition × ancienneté  

Définition : Résultat des matchs selon que l'équipe joue en groupe ou en solo, sa composition et l'ancienneté des joueurs  
Pourquoi on la collecte : Les compositions abusives demandent de la coordination : des groupes de joueurs expérimentés pourraient en profiter contre des joueurs seuls  
Lien avec les hypothèses : H5, M4  
Rôle : Précision de D5  
Si elle confirme :  
   – Hypothèse : l'écart tactique passe par la coordination.  
   – Décision : test de la séparation des groupes et des joueurs seuls aux rangs bas.  
Si elle ne montre rien :  
   – Hypothèse : le groupe n'aggrave pas l'écart.  
   – Décision : pas de restriction sur les groupes (elles sont impopulaires).  

D7. Rôle joué × rôle habituel du joueur  

Définition : Part des matchs où un joueur est sur un rôle qu'il joue rarement  
Pourquoi on la collecte : NetEase reconnaît des « imbalanced team roles » (joueur forcé sur un rôle inconnu)  
Lien avec les hypothèses : H5, M4  
Rôle : Précision de D5  
Si elle confirme :  
   – Hypothèse : les moins expérimentés subissent des rôles imposés par défaut.  
   – Décision : le matchmaking pondère davantage le rôle habituel ; test du minimum de rôles aux rangs bas.  
Si elle ne montre rien :  
   – Hypothèse : ce mécanisme ne compte pas.  
   – Décision : pas de changement.  

D8. Durée cumulée des ultimes de soin actifs par combat  

Définition : Temps pendant lequel un combat est bloqué par des ultimes de soin enchaînés  
Pourquoi on la collecte : Les combats bloqués plus de 30 s sont vécus comme injustes et peuvent ressembler à un match truqué  
Lien avec les hypothèses : H5, M4, H1 (le méta exploité nourrit la perception d'EOMM), H2  
Rôle : Précision et perception  
Si elle confirme :  
   – Hypothèse : la mécanique exploitée persiste et alimente la défiance.  
   – Décision : ajustement du coût des ultimes (seuil : 15 s de blocage médian).  
Si elle ne montre rien :  
   – Hypothèse : le problème a été corrigé par la S1.5.  
   – Décision : pas de nouvel ajustement.  

Temps 2 — La conséquence  

D9. Répartition des joueurs actifs par ancienneté et heures jouées, mois par mois (nouvelle donnée)  

Définition : Pour chaque mois depuis la sortie : part des joueurs actifs selon l'âge de leur compte et leurs heures jouées cumulées ; nombre de nouveaux comptes actifs  
Pourquoi on la collecte : Pour vérifier que la population est devenue surtout expérimentée et que les nouveaux y sont minoritaires. L'indice public (§9.3) est trop biaisé pour conclure  
Lien avec les hypothèses : H5, M6 : c'est le pont entre le temps 1 et le temps 3  
Rôle : Condition nécessaire du temps 2  
Si elle confirme :  
   – Hypothèse : le filtrage est prouvé ; un nouveau joueur tombe structurellement sur une population expérimentée.  
   – Décision : le matchmaking doit compenser activement ce déséquilibre (file débutants, MMR de départ prudent).  
Si elle ne montre rien :  
   – Hypothèse : la population reste mélangée ; les nouveaux ne sont pas minoritaires.  
   – Décision : s'il y a un écart aujourd'hui, il vient surtout du réglage du MMR (mécanisme A), pas de la composition de la population.  

Temps 3 — Ce qui ne marche toujours pas  

D10. Churn J7 des nouveaux comptes × bilan des 10 premiers matchs (KPI de l'objectif)  

Définition : Part des nouveaux comptes qui ne rejouent pas dans les 7 jours, selon leurs victoires et défaites sur leurs 10 premiers matchs  
Pourquoi on la collecte : C'est l'indicateur de l'objectif SMART : sans elle, le O n'est pas mesurable  
Lien avec les hypothèses : H5, M9. Contrôle de H3 (croisée avec payeurs / non-payeurs)  
Rôle : Condition nécessaire du temps 3  
Si elle confirme (ratio nettement > 1,2) :  
   – Hypothèse : un mauvais démarrage fait partir les nouveaux ; le temps 3 reste possible, il faut en trouver la cause (D11, D12, D13).  
   – Décision : l'objectif est validé et on fixe sa valeur de départ.  
Si elle ne montre rien (ratio déjà ≤ 1,2) :  
   – Hypothèse : le temps 3 est réfuté : perdre ses premiers matchs ne fait pas plus partir. Avant de conclure, on vérifie la robustesse (seuil de 5 défaites sur 10, fenêtre J30, partie rapide seule, PC contre console).  
   – Décision : on n'investit pas dans le matchmaking des nouveaux ; le plateau a d'autres causes (H2, H3, H1).  

D11. MMR de départ et vitesse de convergence en partie rapide (nouvelle donnée)  

Définition : Valeur de MMR attribuée à un nouveau compte, puis nombre de matchs nécessaires pour qu'il se stabilise  
Pourquoi on la collecte : Pour tester le mécanisme A : un nouveau joueur placé trop haut ou trop lentement recalé tombe sur des joueurs trop forts, même avec beaucoup de joueurs en file  
Lien avec les hypothèses : H5, M7 ; départage des mécanismes A et B  
Rôle : Cause possible et départage  
Si elle confirme :  
   – Hypothèse : le MMR de départ est mal réglé.  
   – Décision : MMR de départ plus prudent et convergence accélérée ; c'est le levier le moins coûteux, sans effet sur l'attente.  
Si elle ne montre rien :  
   – Hypothèse : le réglage est bon ; si un écart existe, il vient du manque de joueurs (D13).  
   – Décision : on ne touche pas au MMR de départ.  

D12. Écart de MMR subi en partie rapide × ancienneté, et ancienneté des adversaires  

Définition : Écart de MMR entre les équipes et écart max-min dans le lobby, pour les comptes sous le niveau 15 comparés aux autres ; ancienneté et heures de jeu de leurs adversaires  
Pourquoi on la collecte : La partie rapide est la porte d'entrée des nouveaux, et son fonctionnement n'est pas documenté publiquement  
Lien avec les hypothèses : H5, M7 : c'est la mesure directe de « les nouveaux tombent sur des joueurs plus expérimentés »  
Rôle : Cause possible (avec D4 et D5)  
Si elle confirme :  
   – Hypothèse : les nouveaux subissent bien des lobbys déséquilibrés face à des joueurs installés ; le temps 3 est renforcé.  
   – Décision : test A/B d'une file « débutants » jusqu'au niveau 15. C'est le levier le plus direct sur le O.  
Si elle ne montre rien :  
   – Hypothèse : la porte d'entrée n'est pas déséquilibrée ; M7 tombe.  
   – Décision : pas de file débutants ; l'effort porte sur le classé et les compositions.  

D13. Largeur de fourchette et attente × joueurs en file, par heure, région et tranche de niveau  

Définition : Écart de niveau maximal accepté par le matchmaking, et temps d'attente, selon le nombre de joueurs en file, heure par heure et région par région  
Pourquoi on la collecte : Pour tester le mécanisme B : le manque de joueurs force-t-il le système à mélanger des niveaux éloignés, et où ?  
Lien avec les hypothèses : H5b, M8 (cercle vicieux)  
Rôle : Aggravant et départage des mécanismes A et B  
Si elle confirme (écart qui explose aux heures creuses ou dans certaines régions) :  
   – Hypothèse : H5b est validée : la baisse d'audience entretient l'écart.  
   – Décision : resserrer la fourchette là où elle s'élargit, avec l'attente p90 comme seuil d'arrêt (5 minutes) ; regrouper des régions aux heures creuses ; annoncer l'élargissement aux joueurs.  
Si elle ne montre rien :  
   – Hypothèse : H5b tombe ; l'écart ne dépend pas de la population.  
   – Décision : on peut resserrer les files débutants sans craindre d'allonger l'attente.  

D14. Parties avec bots × segment  

Définition : Part des matchs contenant des bots, par ancienneté du compte et selon les séries de défaites  
Pourquoi on la collecte : Des joueurs signalent des bots non annoncés : s'ils existent, ils masquent le problème et créent un risque de réputation  
Lien avec les hypothèses : H5, M7, et H1 (les bots cachés alimentent la défiance)  
Rôle : Orientation de la réponse  
Si elle confirme (bots fréquents chez les perdants, effet positif sur la rétention) :  
   – Hypothèse : ils traitent le symptôme sans la cause.  
   – Décision : on les garde uniquement annoncés (étiquette « match d'entraînement ») et on corrige la cause (D11, D12, D13).  
Si elle ne montre rien :  
   – Hypothèse : les accusations sont infondées.  
   – Décision : démenti public chiffré, ou suppression des bots s'ils n'aident pas.  

D15. Héros maîtrisés × ancienneté  

Définition : Nombre de héros joués avec un bon niveau, selon l'ancienneté du compte  
Pourquoi on la collecte : Un héros par mois alourdit le jeu : un nouveau joueur a de plus en plus de retard à rattraper  
Lien avec les hypothèses : H5, M10, et H2  
Rôle : Aggravant  
Si elle confirme :  
   – Hypothèse : le rythme des sorties creuse l'écart.  
   – Décision : aide à l'apprentissage des héros pour les nouveaux (essai, tutoriels), sans ralentir les sorties.  
Si elle ne montre rien :  
   – Hypothèse : le rythme n'est pas un problème.  
   – Décision : pas de changement.  

Pour ajuster : coût des leviers et perception  

D16. Attente simulée avec une fourchette resserrée ou une role queue  

Définition : Temps d'attente estimé en rejouant le matchmaking avec une fourchette plus stricte, ou avec un nombre fixe de joueurs par rôle  
Pourquoi on la collecte : Tout levier qui resserre les matchs coûte de l'attente : il faut chiffrer ce coût au lieu de le supposer  
Lien avec les hypothèses : Aucune : elle chiffre le coût des leviers liés à M7, M8 et M4  
Rôle : Coût d'une décision  
Si l'attente reste acceptable (p90 < 5 min) : Décision : on teste le resserrement, et éventuellement une role queue souple aux rangs bas.  
Si l'attente devient trop longue : Décision : on se limite aux leviers sans coût d'attente (MMR de départ, garde-fous légers, transparence).  

D17. Micro-sondage d'équité perçue après le match (1 match sur 10, facultatif)  

Définition : Note de 1 à 5 donnée par le joueur sur l'équité du match qu'il vient de jouer  
Pourquoi on la collecte : Pour séparer l'injustice réelle (D4, D12) de l'injustice perçue  
Lien avec les hypothèses : Départage H1 et H5 : sous H5, la perception suit l'écart réel ; sous H1, elle s'en détache  
Rôle : Départage  
Si la perception suit l'écart réel :  
   – Hypothèse : la défiance vient de vrais déséquilibres ; H5 est renforcée.  
   – Décision : on corrige le matchmaking.  
Si l'injustice est perçue sans écart réel :  
   – Hypothèse : le problème relève de H1 (perception).  
   – Décision : transparence et communication plutôt qu'un nouvel algorithme.  

D18. Question d'onboarding « Avez-vous déjà joué à un hero shooter compétitif ? » (facultative)  

Définition : Réponse déclarative du joueur à la création de son compte  
Pourquoi on la collecte : Pour orienter un nouveau joueur dès son premier match, avant que ses performances ne le permettent  
Lien avec les hypothèses : H5, M1 et M7. Recoupe D1  
Rôle : Soutien  
Si elle est utile (réponses cohérentes avec les performances) : Décision : elle sert à fixer un MMR de départ plus juste (D11).  
Si elle ne l'est pas : Décision : on s'appuie uniquement sur les performances (D1).  

D19. Avis Steam agrégés  

Définition : Part des avis négatifs citant le matchmaking, par mois ; ancienneté des auteurs, par trimestre (§9)  
Pourquoi on la collecte : La défiance fait partir les joueurs même quand le matchmaking est juste : il faut suivre la perception, publiquement  
Lien avec les hypothèses : H1 (perception) ; indice public du temps 2  
Rôle : Contrôle externe du O ; ne valide ni ne réfute H5 seule  
Si la plainte baisse avec les leviers : Décision : les corrections sont perçues ; on les généralise et on en fait un argument de communication.  
Si la plainte ne baisse pas alors que D10 et D12 s'améliorent : Décision : le problème restant relève de la perception (H1) ; on investit dans la transparence.  

D20. Benchmark Newzoo (flux entre jeux, agrégé)  

Définition : Part des joueurs d'autres hero shooters qui ont joué à Marvel Rivals  
Pourquoi on la collecte : Pour situer l'arrivée de joueurs déjà expérimentés dans le contexte concurrentiel  
Lien avec les hypothèses : H5, M1 (contexte), H4  
Rôle : Contexte : panel biaisé, il ne tranche rien  
Résultat : Aucune décision directe ; la mesure qui compte est interne (D1).  

10.4 Vue d'ensemble : quelle donnée teste quoi  

• D1 Performance sur 20 matchs (2024-2025)  
   – Temps : 1  
   – Maillon : M1  
   – Autres hypothèses : H1b  
   – Rôle : Condition de départ  
• D2 Churn des cohortes 2025  
   – Temps : 1  
   – Maillon : M5  
   – Autres hypothèses : H4  
   – Rôle : Condition nécessaire  
• D3 Rétention avant / après S5  
   – Temps : 1  
   – Maillon : M2  
   – Rôle : Soutien  
• D4 Écart de score en classé × ancienneté  
   – Temps : 1  
   – Maillon : M2, M3  
   – Autres hypothèses : H1  
   – Rôle : Cause possible + départage  
• D5 Compositions × résultat × rang  
   – Temps : 1 et 3  
   – Maillon : M4  
   – Autres hypothèses : H2  
   – Rôle : Cause possible  
• D6 Groupe / solo  
   – Temps : 1 et 3  
   – Maillon : M4  
   – Rôle : Précision  
• D7 Rôle joué × rôle habituel  
   – Temps : 1 et 3  
   – Maillon : M4  
   – Rôle : Précision  
• D8 Ultimes de soin par combat  
   – Temps : 1  
   – Maillon : M4  
   – Autres hypothèses : H1, H2  
   – Rôle : Précision  
• D9 Joueurs actifs par ancienneté  
   – Temps : 2  
   – Maillon : M6  
   – Rôle : Condition nécessaire  
• D10 Churn J7 des nouveaux comptes  
   – Temps : 3  
   – Maillon : M9  
   – Autres hypothèses : H3  
   – Rôle : Condition nécessaire, KPI du O  
• D11 MMR de départ et convergence  
   – Temps : 3  
   – Maillon : M7  
   – Rôle : Cause possible (mécanisme A)  
• D12 Écart de MMR en partie rapide  
   – Temps : 3  
   – Maillon : M7  
   – Rôle : Cause possible  
• D13 Fourchette × joueurs en file  
   – Temps : 3  
   – Maillon : M8  
   – Autres hypothèses : H5b  
   – Rôle : Aggravant (mécanisme B)  
• D14 Parties avec bots  
   – Temps : 3  
   – Maillon : M7  
   – Autres hypothèses : H1  
   – Rôle : Orientation de la réponse  
• D15 Héros maîtrisés × ancienneté  
   – Temps : 3  
   – Maillon : M10  
   – Autres hypothèses : H2  
   – Rôle : Aggravant  
• D16 Attente simulée  
   – Temps : Ajuster  
   – Maillon : —  
   – Rôle : Coût d'une décision  
• D17 Micro-sondage d'équité  
   – Temps : Ajuster  
   – Maillon : —  
   – Autres hypothèses : H1  
   – Rôle : Départage  
• D18 Question d'onboarding  
   – Temps : Ajuster  
   – Maillon : M1, M7  
   – Rôle : Soutien  
• D19 Avis Steam  
   – Temps : Tous  
   – Maillon : M6 (indice)  
   – Autres hypothèses : H1  
   – Rôle : Contrôle externe  
• D20 Newzoo  
   – Temps : 1  
   – Maillon : M1  
   – Autres hypothèses : H4  
   – Rôle : Contexte  

10.5 Comment H5 peut être réfutée (annoncé d'avance)  

• D2 ne montre rien (en 2025, tous les profils sont partis au même rythme) : Le temps 1 tombe : le déclin de 2025 ne s'explique pas par l'écart de niveau  
• D9 ne montre rien (la population n'est pas devenue surtout expérimentée) : Le temps 2 tombe : s'il y a un écart aujourd'hui, il vient du réglage du MMR, pas du filtrage  
• D10 ne montre rien, même après les tests de robustesse : Le temps 3 tombe : les nouveaux qui perdent ne partent pas plus que les autres  
• D10 confirme, mais D11, D12 et D5 ne montrent rien : Le temps 3 tombe : les nouveaux partent, mais pas à cause du matchmaking (onboarding, difficulté, performances techniques)  
• D13 ne montre rien : Seule H5b tombe : le manque de joueurs n'aggrave pas l'écart  

→ Les trois temps sont testables séparément. Le temps 3 est le plus important pour la décision : c'est lui qui dit si l'on peut encore agir.  

10.6 Comment les données orientent la décision finale de NetEase  

• Temps 1 et 2 confirmés, temps 3 confirmé : H5 validée en entier : on corrige la cause identifiée par l'audit (§11)  
• … et D11 confirme (mécanisme A) : MMR de départ plus prudent, convergence accélérée, file débutants : sans coût d'attente  
• … et D13 confirme (mécanisme B) : Fourchette resserrée là où elle s'élargit, régions regroupées aux heures creuses, élargissement annoncé : coût d'attente à piloter (D16)  
• … et D5 confirme : Garde-fous de rôles aux rangs bas  
• Temps 1 confirmé, temps 3 réfuté : Le problème de 2025 a été corrigé (placements). Le plateau actuel a d'autres causes : pas d'investissement matchmaking, réorientation vers H2, H3, H4  
• Temps 3 confirmé, temps 1 réfuté : Le problème actuel existe quelle que soit son origine : on corrige quand même le matchmaking des nouveaux  
• D17 et D19 montrent une défiance sans écart réel : Le problème est la perception (H1) : transparence plutôt qu'un nouvel algorithme  

→ Dans tous les cas, NetEase décide sur preuve : un résultat négatif évite de financer un développement inutile, ce qui est aussi un gain.  

10.7 A — ce que chaque méthode tranche  

• Audit du MMR de la partie rapide, heures pleines contre heures creuses : L'écart subi par les nouveaux vient-il du réglage du MMR (A) ou du manque de joueurs (B) ?  
• Cohortes 2025 et avant / après la S5 : Les moins expérimentés sont-ils partis en premier ? Le calibrage a-t-il changé la rétention ?  
• Régression du churn J7 : L'écart de niveau explique-t-il le churn mieux que les séries (H5 contre H1) ?  
• Tests A/B des leviers : Quel levier fait baisser le ratio du O, et à quel coût d'attente ?  
• Analyse textuelle des avis Steam : La perception suit-elle les changements ?  

10.8 K — chaque KPI a un seuil et une action (détail au §13)  

• Ratio de churn J7 des nouveaux comptes perdants  
   – Seuil : ≤ 1,2  
   – Rôle : KPI du O  
• Écart de MMR médian subi par les nouveaux comptes en partie rapide, rapporté à celui des autres comptes  
   – Seuil : < 1,5  
   – Rôle : Cause (écart réel)  
• Attente p90 par rang  
   – Seuil : < 5 min  
   – Rôle : Garde-fou : un test qui la dépasse est arrêté  
• Part des matchs Bronze-Or avec au moins 4 héros du même rôle  
   – Seuil : < 20 %  
   – Rôle : Cause (M4)  
• Part des avis Steam négatifs citant le matchmaking  
   – Seuil : < 8 % (base : 10,5 % en sept. 2026)  
   – Rôle : Perception, contrôle externe  

11. AUDIT DU MMR DE LA PARTIE RAPIDE (PHASE 0-30 JOURS)  

L'audit répond à une question : pourquoi un nouveau joueur tombe-t-il aujourd'hui sur des joueurs bien plus expérimentés, et est-ce que cela le fait partir ?  

• 1  
   – Question d'audit : Quel MMR reçoit un nouveau compte, et en combien de matchs se stabilise-t-il ?  
   – Donnée : D11  
   – Ce qui confirme le temps 3 : MMR de départ au-dessus du vrai niveau, ou convergence lente (mécanisme A)  
• 2  
   – Question d'audit : Quel écart de MMR un nouveau compte subit-il dans ses lobbys ?  
   – Donnée : D12  
   – Ce qui confirme le temps 3 : Écart nettement plus fort pour les comptes sous le niveau 15  
• 3  
   – Question d'audit : Contre qui jouent les nouveaux comptes ?  
   – Donnée : D12  
   – Ce qui confirme le temps 3 : Majorité d'adversaires installés depuis des mois  
• 4  
   – Question d'audit : L'écart dépend-il du nombre de joueurs en file ?  
   – Donnée : D13  
   – Ce qui confirme le temps 3 : Écart qui monte aux heures creuses et dans les petites régions (mécanisme B)  
• 5  
   – Question d'audit : Quelles sont les règles d'élargissement ?  
   – Donnée : D13  
   – Ce qui confirme le temps 3 : Élargissement rapide et sans plafond  
• 6  
   – Question d'audit : Les groupes aggravent-ils l'écart ?  
   – Donnée : D6  
   – Ce qui confirme le temps 3 : Groupes de joueurs installés face à des nouveaux seuls  
• 7  
   – Question d'audit : Cet écart fait-il partir les nouveaux ?  
   – Donnée : D10  
   – Ce qui confirme le temps 3 : Churn plus fort après des matchs à grand écart  
• 8  
   – Question d'audit : Que coûterait un matchmaking plus strict ?  
   – Donnée : D16  
   – Ce qui confirme le temps 3 : Attente p90 acceptable (moins de 5 minutes)  

Lecture : les questions 1 à 3 testent le démarrage à froid, les questions 4 et 5 le manque de joueurs, la question 7 le lien avec les départs, et la question 8 le prix de la solution.  

Le temps 3 est réfuté si les nouveaux comptes ne subissent pas plus d'écart que les autres (question 2), ou si cet écart ne les fait pas partir davantage (question 7).  

12. MATRICE DE COLLECTE (ICE NOTÉE SUR 5)  

• I — Impact : poids dans la décision  
   – 1 : Contexte seulement  
   – 3 : Éclaire une décision secondaire  
   – 5 : Tranche la décision centrale (un temps du récit, ou le choix du levier)  
• C — Confiance : la donnée tranche-t-elle vraiment ?  
   – 1 : Indirecte, très bruitée  
   – 3 : Indicateur partiel  
   – 5 : Mesure directe  
• E — Facilité : coût, délai, conformité  
   – 1 : Nouvelle collecte lourde ou sensible  
   – 3 : Extraction ou développement modéré  
   – 5 : Existe déjà chez NetEase, extraction simple  

Score ICE = moyenne des trois notes, sur 5, sur la même échelle de 1 à 5 que la matrice de risques (§14). Règle d'arbitrage : 4 ou plus → phase 0-30 jours ; de 3 à 3,9 → phase 30-90 jours ; moins de 3 → optionnel. La colonne « Réf. » renvoie aux fiches du §10.3.  

• D13  
   – Donnée : Largeur de fourchette + attente × joueurs en file, par heure et région  
   – Temps : 3  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 5  
   – C : 5  
   – E : 5  
   – ICE /5 : 5,0  
   – Phase : 0-30 j  
• D10  
   – Donnée : Churn J7 des nouveaux comptes × 10 premiers matchs  
   – Temps : 3  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 5  
   – C : 4  
   – E : 5  
   – ICE /5 : 4,7  
   – Phase : 0-30 j  
• D11  
   – Donnée : MMR de départ et vitesse de convergence (partie rapide)  
   – Temps : 3  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 5  
   – C : 5  
   – E : 4  
   – ICE /5 : 4,7  
   – Phase : 0-30 j  
• D9  
   – Donnée : Joueurs actifs par ancienneté et heures jouées, mois par mois  
   – Temps : 2  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime (agrégé)  
   – Priorité : INDISPENSABLE  
   – I : 5  
   – C : 4  
   – E : 5  
   – ICE /5 : 4,7  
   – Phase : 0-30 j  
• D4  
   – Donnée : Écart de score intra-match × ancienneté (classé)  
   – Temps : 1  
   – Existe chez NetEase ? : Oui (probable)  
   – Base légale (portée par NetEase) : Contrat / intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 5  
   – C : 4  
   – E : 5  
   – ICE /5 : 4,7  
   – Phase : 0-30 j  
• D5  
   – Donnée : Compositions par rôle × résultat × rang  
   – Temps : 1 et 3  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 4  
   – C : 5  
   – E : 5  
   – ICE /5 : 4,7  
   – Phase : 0-30 j  
• D14  
   – Donnée : Parties avec bots × segment  
   – Temps : 3  
   – Existe chez NetEase ? : Oui (si elles existent)  
   – Base légale (portée par NetEase) : Intérêt légitime + test de mise en balance  
   – Priorité : INDISPENSABLE  
   – I : 4  
   – C : 5  
   – E : 5  
   – ICE /5 : 4,7  
   – Phase : 0-30 j  
• D12  
   – Donnée : Écart de MMR subi en partie rapide × ancienneté ; ancienneté des adversaires  
   – Temps : 3  
   – Existe chez NetEase ? : Oui (probable)  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 5  
   – C : 4  
   – E : 4  
   – ICE /5 : 4,3  
   – Phase : 0-30 j  
• D2  
   – Donnée : Churn des cohortes 2025 selon le niveau initial  
   – Temps : 1  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 4  
   – C : 4  
   – E : 5  
   – ICE /5 : 4,3  
   – Phase : 0-30 j  
• D3  
   – Donnée : Rétention des nouveaux comptes avant et après la S5  
   – Temps : 1  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 4  
   – C : 4  
   – E : 5  
   – ICE /5 : 4,3  
   – Phase : 0-30 j  
• D6  
   – Donnée : Groupe contre solo × composition × ancienneté  
   – Temps : 1 et 3  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 4  
   – C : 4  
   – E : 5  
   – ICE /5 : 4,3  
   – Phase : 0-30 j  
• D1  
   – Donnée : Courbe de performance sur les 20 premiers matchs  
   – Temps : 1  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime (anti-triche)  
   – Priorité : INDISPENSABLE  
   – I : 4  
   – C : 4  
   – E : 4  
   – ICE /5 : 4,0  
   – Phase : 0-30 j  
• D7  
   – Donnée : Rôle joué × rôle habituel  
   – Temps : 1 et 3  
   – Existe chez NetEase ? : Oui (utilisé par le matchmaking)  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 4  
   – C : 4  
   – E : 4  
   – ICE /5 : 4,0  
   – Phase : 0-30 j  
• D19  
   – Donnée : Avis Steam agrégés (sans identifiant)  
   – Temps : Tous  
   – Existe chez NetEase ? : Non, mais publics et déjà collectés  
   – Base légale (portée par NetEase) : Intérêt légitime ; données publiques, minimisées  
   – Priorité : INDISPENSABLE  
   – I : 3  
   – C : 3  
   – E : 5  
   – ICE /5 : 3,7  
   – Phase : Continu  
• D16  
   – Donnée : Attente simulée (fourchette resserrée, role queue)  
   – Temps : Ajuster  
   – Existe chez NetEase ? : Non (simulation)  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : INDISPENSABLE  
   – I : 4  
   – C : 3  
   – E : 3  
   – ICE /5 : 3,3  
   – Phase : 30-90 j  
• D8  
   – Donnée : Ultimes de soin actifs par combat  
   – Temps : 1  
   – Existe chez NetEase ? : Oui (à extraire)  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : UTILE  
   – I : 3  
   – C : 4  
   – E : 3  
   – ICE /5 : 3,3  
   – Phase : 30-90 j  
• D17  
   – Donnée : Micro-sondage d'équité perçue (1 match sur 10)  
   – Temps : Ajuster  
   – Existe chez NetEase ? : Non : nouvelle  
   – Base légale (portée par NetEase) : Consentement  
   – Priorité : UTILE  
   – I : 4  
   – C : 3  
   – E : 3  
   – ICE /5 : 3,3  
   – Phase : 30-90 j  
• D18  
   – Donnée : Question d'onboarding (facultative)  
   – Temps : Ajuster  
   – Existe chez NetEase ? : Non : nouvelle  
   – Base légale (portée par NetEase) : Consentement  
   – Priorité : UTILE  
   – I : 3  
   – C : 3  
   – E : 4  
   – ICE /5 : 3,3  
   – Phase : 30-90 j  
• D15  
   – Donnée : Héros maîtrisés × ancienneté  
   – Temps : 3  
   – Existe chez NetEase ? : Oui  
   – Base légale (portée par NetEase) : Intérêt légitime  
   – Priorité : UTILE  
   – I : 2  
   – C : 3  
   – E : 5  
   – ICE /5 : 3,3  
   – Phase : 30-90 j  
• D20  
   – Donnée : Benchmark Newzoo (agrégé)  
   – Temps : 1  
   – Existe chez NetEase ? : Non (achat)  
   – Base légale (portée par NetEase) : Contrat B2B, données agrégées  
   – Priorité : UTILE (une fois)  
   – I : 2  
   – C : 2  
   – E : 3  
   – ICE /5 : 2,3  
   – Phase : Optionnel  
• —  
   – Donnée : Historique de jeu individuel sur d'autres titres  
   – Temps : —  
   – Existe chez NetEase ? : —  
   – Base légale (portée par NetEase) : Disproportionné, profilage  
   – Priorité : INUTILE  
   – I : —  
   – C : —  
   – E : —  
   – ICE /5 : non noté  
   – Phase : Écarté  
• —  
   – Donnée : N° de téléphone (anti-smurf)  
   – Temps : —  
   – Existe chez NetEase ? : —  
   – Base légale (portée par NetEase) : Disproportionné, contournable  
   – Priorité : INUTILE  
   – I : —  
   – C : —  
   – E : —  
   – ICE /5 : non noté  
   – Phase : Écarté  
• —  
   – Donnée : Chat vocal ou texte complet  
   – Temps : —  
   – Existe chez NetEase ? : —  
   – Base légale (portée par NetEase) : Disproportionné  
   – Priorité : INUTILE  
   – I : —  
   – C : —  
   – E : —  
   – ICE /5 : non noté  
   – Phase : Écarté  
• —  
   – Donnée : Âge exact pour « profiler » les joueurs  
   – Temps : —  
   – Existe chez NetEase ? : —  
   – Base légale (portée par NetEase) : La courbe de performance suffit  
   – Priorité : INUTILE  
   – I : —  
   – C : —  
   – E : —  
   – ICE /5 : non noté  
   – Phase : Écarté  

→ Arbitrage lisible pour le comité : les 13 données notées 4 ou plus existent déjà dans la télémétrie de NetEase. L'audit des 30 premiers jours ne demande aucune nouvelle collecte. Les deux nouvelles collectes (sondage, question d'onboarding) arrivent ensuite, sous consentement.  

13. KPIS ET SEUILS (À CALIBRER SUR LES 30 PREMIERS JOURS)  

• Ratio de churn J7 : nouveaux comptes ayant perdu au moins 7 de leurs 10 premiers matchs / autres nouveaux comptes (KPI du O)  
   – Seuil : > 1,2  
   – Action : Levier issu de l'audit (§11)  
• Écart de MMR médian subi par les nouveaux comptes en partie rapide / celui des autres comptes  
   – Seuil : > 1,5  
   – Action : File « débutants » jusqu'au niveau 15  
• Nombre de matchs avant stabilisation du MMR d'un nouveau compte  
   – Seuil : > X (base à mesurer)  
   – Action : MMR de départ plus prudent, convergence accélérée  
• Écart de MMR médian aux heures creuses / heures pleines  
   – Seuil : > 1,5  
   – Action : Resserrer la fourchette aux heures creuses, regrouper des régions, annoncer l'élargissement  
• Part des adversaires installés depuis plus de 6 mois, pour les comptes sous le niveau 15  
   – Seuil : > X (base à mesurer)  
   – Action : File « débutants »  
• Ratio d'écart de score, comptes de moins de 30 jours / plus anciens (classé)  
   – Seuil : > 1,5  
   – Action : File protégée pour les nouveaux comptes  
• Attente p90 par rang  
   – Seuil : > 5 min  
   – Action : Arrêt du test de resserrement ; élargissement contrôlé et annoncé  
• Part des matchs avec au moins 4 héros du même rôle (Bronze à Or)  
   – Seuil : > 20 %  
   – Action : Tester le minimum 1 tank et 1 soigneur  
• Écart de taux de victoire entre la meilleure et la pire composition, par rang  
   – Seuil : > 10 points  
   – Action : Rééquilibrage ciblé  
• Durée médiane des combats bloqués par les ultimes  
   – Seuil : > 15 s  
   – Action : Ajuster le coût des ultimes  
• Part de parties d'entraînement non annoncées  
   – Seuil : > 0 %  
   – Action : Étiquette « match d'entraînement »  
• Score d'équité perçue  
   – Seuil : < 3/5 alors que l'écart réel est normal  
   – Action : Transparence, pas de nouvel algorithme  
• Part des avis Steam négatifs citant le matchmaking (contrôle externe du O)  
   – Seuil : > 8 % (base : 10,5 % en sept. 2026)  
   – Action : Analyse ciblée + communication  
• % d'avis Steam récents positifs  
   – Seuil : < 70 %  
   – Action : Alerte + analyse textuelle  

14. CONFORMITÉ ET GOUVERNANCE  

Cadre contractuel  

• NetEase est responsable de traitement : Le consultant est sous-traitant (RGPD Art. 28) : il faut un contrat de sous-traitance (DPA) avant tout accès  
• Accès : Données pseudonymisées, agrégées quand c'est possible (D9 peut être fournie entièrement agrégée) ; ni identité, ni chat  
• Mineurs (classement T) : Comptes mineurs exclus ou analysés à part  
• Base légale : Portée par NetEase ; le livrable propose les tests de mise en balance, NetEase les valide  
• Collecte des avis Steam : Données publiques mais personnelles (texte libre) : ni identifiant ni pseudo conservés, analyse agrégée, citations courtes  

Points de vigilance, formulés pour le client  

• Classer un joueur comme expérimenté ou nouveau d'après son jeu  
   – Risque : C'est du profilage : intérêt légitime possible si le test de mise en balance est documenté  
   – Référence : RGPD Art. 4.4, 6.1.f  
• Sanctions automatiques pour smurfing (faux positifs documentés)  
   – Risque : Il faut un recours humain  
   – Référence : RGPD Art. 22  
• Parties d'entraînement non annoncées ; élargissement de fourchette caché  
   – Risque : Loyauté et transparence ; risque de réputation  
   – Référence : RGPD Art. 5.1.a, 13  
• Matchmaking optimisé pour l'engagement (R&D EnMatch du Fuxi AI Lab)  
   – Risque : S'il est un jour déployé : attention à l'exploitation des vulnérabilités, notamment des mineurs  
   – Référence : AI Act Art. 5.1.b (depuis le 02/02/2025)  
• Données de benchmark externes  
   – Risque : Pseudonymisées, donc toujours personnelles : n'acheter que de l'agrégé  
   – Référence : RGPD Art. 26, considérant 26  

Matrice P × I (probabilité × impact, de 1 à 5)  

• Collecter l'historique de jeu externe individuel  
   – P : 3  
   – I : 5  
   – Zone : 🔴  
   – Traitement : AVOID  
• Parties d'entraînement non annoncées révélées publiquement  
   – P : 4  
   – I : 4  
   – Zone : 🔴 / 🟠  
   – Traitement : MITIGATE : étiquette  
• Faux positifs anti-smurf  
   – P : 4  
   – I : 3  
   – Zone : 🟠  
   – Traitement : MITIGATE : recours humain  
• Accès du consultant sans DPA  
   – P : 2  
   – I : 5  
   – Zone : 🟠  
   – Traitement : MITIGATE : DPA avant tout accès  
• Resserrement de la fourchette qui allonge trop l'attente  
   – P : 3  
   – I : 4  
   – Zone : 🟠  
   – Traitement : MITIGATE : attente p90 comme seuil d'arrêt  
• Garde-fous de rôles perçus comme une atteinte à l'identité du jeu  
   – P : 3  
   – I : 3  
   – Zone : 🟡  
   – Traitement : MONITOR : limités aux rangs bas, communiqués  
• Décision prise sur des sources externes biaisées (Newzoo, avis)  
   – P : 3  
   – I : 3  
   – Zone : 🟡  
   – Traitement : MONITOR : priorité aux données internes  
• Ré-identification de l'auteur d'un avis cité  
   – P : 2  
   – I : 2  
   – Zone : 🟢  
   – Traitement : MITIGATE : pas de pseudo, extraits courts  
• Lassitude face aux sondages  
   – P : 3  
   – I : 2  
   – Zone : 🟡  
   – Traitement : MONITOR : 1 match sur 10 maximum  
• Refus de répondre à la question d'onboarding  
   – P : 4  
   – I : 1  
   – Zone : 🟢  
   – Traitement : ACCEPT  

15. ROADMAP  

• 0-30 jours : DPA NetEase ↔ consultant. Audit du MMR de la partie rapide (§11). Extraction des données notées 4 ou plus (§12) : temps 1 (cohortes 2025, avant / après S5), temps 2 (joueurs actifs par ancienneté), temps 3 (churn des nouveaux, MMR de départ, écart subi, fourchette par heure et région). Test H1 contre H5. Mesure de la base du O.  
• 30-90 jours : Tests A/B choisis selon le résultat de l'audit : (1) MMR de départ plus prudent et convergence accélérée (mécanisme A) ; (2) file débutants jusqu'au niveau 15 ; (3) fourchette resserrée aux heures creuses, régions regroupées (mécanisme B) ; (4) minimum 1 tank et 1 soigneur en Bronze-Or ; (5) étiquette « match d'entraînement ». Question d'onboarding et micro-sondage.  
• 90-180 jours (→ 31/03/2027) : Pilotage par les KPIs du §13. Décision de garder, étendre ou abandonner chaque levier. Page permanente « comment fonctionne le matchmaking ». Bilan du O.  

L'arbitrage central, à présenter au comité : resserrer les matchs protège les nouveaux, mais allonge l'attente, alors que la population est basse. → On ne tranche pas par principe : on commence par les leviers sans coût d'attente (MMR de départ) et on teste les autres avec l'attente p90 comme seuil d'arrêt.  

16. CONTRE-ARGUMENTS (QUESTIONS-RÉPONSES FACE AU CLIENT)  

• « Nous savons déjà comment fonctionne notre matchmaking. » : Justement : vos données peuvent valider ou réfuter chacun des trois temps en 30 jours. Nous apportons la question et la méthode, pas un verdict.  
• « C'est normal : un jeu qui vieillit a une population expérimentée. » : Oui, c'est structurel, et c'est précisément pour ça que le matchmaking doit compenser activement. Sinon, les nouveaux arrivent dans une population qui les écrase, et la base ne se renouvelle jamais.  
• « 68 K joueurs simultanés, ce n'est pas un manque de joueurs. » : Pas globalement. Mais le manque est sans doute local : heures creuses, petites régions, certaines tranches de niveau. L'audit le mesure (D13).  
• « Les placements de la S5 ont réglé le problème. » : Ils confirment le diagnostic : en corrigeant le calibrage, vous avez vu les plaintes reculer de 9 points. Mais ils ne couvrent que le classé. La partie rapide, où débutent les nouveaux, reste sans calibrage connu.  
• « Les avis Steam, ce sont des râleurs. » : Oui : c'est de la perception, sur PC et en anglais. Mais sa chronologie colle aux événements du jeu, et la perception est justement ce qui fait partir.  
• « Les nouveaux joueurs ne se plaignent pas du matchmaking. » : Exact (2,8 % des négatifs à moins de 10 h). Ils partent sans écrire (biais du survivant), et l'écart est dénoncé par les joueurs expérimentés, qui voient les mêmes lobbys hétérogènes. Seul votre churn tranche.  
• « L'ancienneté des auteurs d'avis augmente forcément avec l'âge du jeu. » : C'est vrai, c'est pourquoi nous la présentons comme un indice, pas une preuve. La mesure exacte est la répartition de vos joueurs actifs (D9).  
• « La liberté de composition, c'est l'ADN du jeu. » : Nous ne la remettons pas en cause. Nous proposons des garde-fous aux rangs bas uniquement, et seulement si les données le justifient (D5).  
• « Resserrer la fourchette tuerait les files d'attente. » : C'est pourquoi on commence par le MMR de départ, qui ne coûte rien en attente, et qu'on teste le resserrement avec l'attente p90 comme seuil d'arrêt.  
• « Le jeu n'est pas en échec. » : Exact : vos résultats du T3 2025 le citent positivement (transcript (https://equibles.com/stocks/ntes/calls/2025-q3)). Nous parlons d'un plancher bas et fragile, avec un potentiel de reprise mesurable.  

17. PITCH — DIAGNOSTIC ET RECOMMANDATION (ENVIRON 1 MIN 30)  

« Marvel Rivals a attiré 40 millions de joueurs en trois mois, et pourtant son audience PC a perdu 77 % depuis sa sortie. Notre diagnostic tient en trois temps.  
Ce qui n'a pas marché : au lancement, des joueurs de tous niveaux sont arrivés en même temps, sans calibrage. Les moins expérimentés ont subi de lourdes défaites, et ils sont partis. Sur Steam, les plaintes contre le matchmaking sont passées de 7 % à 41 % des avis négatifs.  
La conséquence : ce départ a filtré votre population. Aujourd'hui, il reste surtout des joueurs expérimentés.  
Ce qui ne marche toujours pas : un nouveau joueur arrive en partie rapide dans cette population. Comme il y a moins de joueurs, votre matchmaking élargit la fourchette, vous l'avez dit vous-mêmes le 21 août. Le nouveau est écrasé et part à son tour : la base ne se renouvelle pas.  
Nous proposons un audit de 30 jours du MMR de la partie rapide, sur vos propres données, pour savoir si l'écart vient du réglage du MMR ou du manque de joueurs, puis des tests ciblés sur la cause. Objectif : d'ici le 31 mars 2027, qu'un nouveau joueur qui perd ses premiers matchs ne parte pas plus de 1,2 fois plus souvent que les autres. »  

18. RESTE À VÉRIFIER  

• Vidéo du 21/08/2025 : pondérations exactes, règles d'élargissement de la fourchette, passages sur les rôles.  
• MMR de la partie rapide et parties d'entraînement : existence réelle et fonctionnement. Question à poser au client.  
• Répartition des joueurs actifs par ancienneté (D9) : la demander en priorité, c'est la preuve du temps 2.  
• Ancienneté des auteurs d'avis : l'indice (§9.3) mélange l'effet du filtrage et l'effet mécanique de l'âge du jeu.  
• Heures creuses et régions où le manque de joueurs est le plus fort : non mesurables publiquement.  
• Stats de compositions (« plus de 50 % en Diamant », taux de victoire par composition).  
• Notation ICE : échelle de 1 à 5 choisie par cohérence avec la matrice P × I, à confirmer avec l'intervenante.  
• Échéance du O en numéro de saison (calendrier NetEase).  
• Collecte des avis : relecture manuelle d'un échantillon d'avis classés « matchmaking », pour estimer les faux positifs.  
• Captures à faire : notes de patch S5 ; vidéo de Zhiyong (fourchette, rôles) ; interview de Chen ; Steam Charts ; Newzoo p. 24 et 45 ; sorties des scripts analyse_avis_steam.py et anciennete_auteurs.py.  

19. RAPPORT D'USAGE IA  

• Récit en trois temps (ce qui n'a pas marché, conséquence, ce qui ne marche toujours pas) : RETENU : raisonnement de Noé, structuré avec l'IA  
• « Vétéran » = joueur expérimenté sur Marvel Rivals, pas forcément ancien joueur d'Overwatch : RETENU (précision de Noé)  
• Élargissement de la fourchette quand l'attente est longue (vidéo officielle) : RETENU  
• Placements S5 comme preuve du manque de calibrage : RETENU  
• Ancienneté des auteurs d'avis (5 % → 36-42 % à plus de 200 h) : RETENU comme indice ; biais mécanique signalé. Script : docs/scraping_avis_steam/anciennete_auteurs.py, à relancer vous-même  
• « Aujourd'hui, les nouveaux tombent sur des joueurs installés » : HYPOTHÈSE : cohérente avec les verbatims, à prouver par D12  
• Séparation démarrage à froid / manque de joueurs : RECOMMANDATION  
• Collecte des avis Steam : méthode, pondération, minimisation : RETENU — scripts dans docs/scraping_avis_steam/ : relancez-les et capturez la sortie  
• Newzoo 45 % : RETENU comme contexte seulement (panel biaisé, non recoupable)  
• MMR caché en partie rapide ; parties d'entraînement : HYPOTHÈSE, à valider avec le client  
• O SMART sous forme de ratio : À DÉCIDER par vous  
• ICE sur 5 : À CONFIRMER avec l'intervenante  
• « Plus de 50 % des matchs Diamant en triple Strategist » : À VÉRIFIER  
• « Depuis la S5, le départ en Silver III durcit les premiers matchs » : RETIRÉ  
• « PlayTracker = source des 45 % » ; « panel de 73 000 » ; titre de TheGamer ; EnMatch = algorithme de Marvel Rivals ; Goomba Stomp ; fil Reddit « data scientist » : REJETÉ  

Sources (consultées les 29 et 30/09/2026)  

Le registre complet, avec la fiabilité de chaque source, est dans docs/H5_sources_a_verifier.md.  

NetEase (officiel)  
• Notes de patch S5 (https://www.marvelrivals.com/20251114/41525_1270590.html)  
• X @MarvelRivals, vidéo du 21/08/2025 (https://x.com/MarvelRivals/status/1958627668536311945)  
• Transcript des résultats T3 2025 (https://equibles.com/stocks/ntes/calls/2025-q3)  

Matchmaking et rôles  
• Gaming Amigos (https://www.gamingamigos.com/post/marvel-rivals-explains-matchmaking)  
• PC Gamer, vidéo (https://www.pcgamer.com/games/third-person-shooter/marvel-rivals-devs-transparent-18-minute-breakdown-of-how-ranked-isnt-rigged-fails-to-placate-players-who-hate-losing/)  
• Gfinity (https://www.gfinityesports.com/article/netease-reveals-the-secret-to-fixing-your-marvel-rivals-losing-streak)  
• GamesRadar+, role queue (https://www.gamesradar.com/games/third-person-shooter/marvel-rivals-boss-doubles-down-we-believe-no-role-queue-will-lead-to-a-richer-gaming-experience-for-everyone/)  
• PC Gamer, role queue (https://www.pcgamer.com/games/third-person-shooter/instead-of-role-queue-marvel-rivals-wants-to-trust-players-with-the-epic-responsibility-of-creating-a-functioning-team-by-themselves-well-be-taking-a-little-bit-more-of-a-marvel-inspired-approach/)  
• PCGamesN (https://www.pcgamesn.com/marvel-rivals/ranks-competitive)  
• TheGamer, placements (https://www.thegamer.com/marvel-rivals-season-4-finally-getting-placement-matches/)  

Méta et abus  
• Dexerto, plan des devs (https://www.dexerto.com/marvel-rivals/marvel-rivals-devs-reveal-plan-to-crack-down-on-three-support-meta-3136350/)  
• Dexerto, S1.5 (https://www.dexerto.com/marvel-rivals/marvel-rivals-season-1-5-killed-triple-support-but-the-new-meta-is-much-worse-3139069/)  
• rivals.fan (https://rivals.fan/news/marvel-rivals-three-strategist-meta)  
• FandomWire, compositions (https://fandomwire.com/marvel-rivals-dps-mains-are-using-the-dumbest-strategy-that-makes-3-heal-3-tank-comp-a-guaranteed-way-to-hit-celestial/)  

Partie rapide et nouveaux joueurs  
• Dexerto, partie rapide (https://www.dexerto.com/marvel-rivals/marvel-rivals-awful-matchmaking-system-is-piting-you-against-top-rank-players-3164207/)  
• Dexerto, bots (https://www.dexerto.com/gaming/marvel-rivals-player-proves-devs-snuck-bots-into-quickplay-matches-3016959/)  
• Steam, SBMM en partie rapide (https://steamcommunity.com/app/2767030/discussions/0/578249962076258316/)  
• Steam, files d'attente (https://steamcommunity.com/app/2767030/discussions/0/688618675547317727/)  
• Steam, progression Bronze → Silver (https://steamcommunity.com/app/2767030/discussions/0/600769761663572886/)  
• TheGamer S7 (https://www.thegamer.com/marvel-rivals-mixed-reviews-steam-season-7/)  

Avis joueurs  
• API publique des avis Steam, Marvel Rivals (https://store.steampowered.com/appreviews/2767030?json=1) — collecte du 30/09/2026, scripts et résultats dans docs/scraping_avis_steam/  

Newzoo et collecte  
• Newzoo, PC & Console Gaming Report 2025 (PDF fourni)  
• PlayTracker, politique de confidentialité (https://playtracker.net/privacy/)  
• WAHL (https://www.wahl.hr/insight/playtracker-enters-strategic-partnership-with-newzoo)  
• VGC (https://www.videogameschronicle.com/news/overwatch-2s-average-pc-player-count-has-dropped-39-since-marvel-rivals-was-released/)  

Fréquentation  
• Steam Charts (https://steamcharts.com/app/2767030)  
• Game World Observer (https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report)  
• Game Rant (https://gamerant.com/overwatch-steam-player-count-versus-marvel-rivals-comparison-charts/)  
• Game Rant, The Finals (https://gamerant.com/the-finals-player-count-decline-steam/)  

Études  
• Heliyon 2024 (https://pmc.ncbi.nlm.nih.gov/articles/PMC10839887/)  
• EOMM 2017 (https://arxiv.org/pdf/1702.06820)  
• EnMatch, AAAI 2024 (https://ojs.aaai.org/index.php/aaai/article/view/28760)
