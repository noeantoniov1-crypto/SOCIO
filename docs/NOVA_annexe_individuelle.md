# **NOVA — Annexe individuelle : Journal IA et Note personnelle**

**Auteur :** Noé · **Projet :** GBS3 « AI for Business », Gaming Campus · **Date :** 25 septembre 2026

---

## **Contexte pour le lecteur**

Ce document réunit les parties 1 (POC), 2 (Journal IA) et 3 (Note personnelle) de mon annexe individuelle. Il est écrit pour être lu sans avoir suivi le projet : cette première section pose le décor.

**Le cadre.** Projet d'école GBS3 « AI for Business » (semaine du 21 au 25 septembre 2026), en groupe de trois. Rendu : 1 PDF commun par groupe \+ 1 PDF individuel par étudiant. La note est 100 % individuelle, sur 200 points.

**NOVA.** PME fictive d'environ 50 collaborateurs qui conçoit des produits et services numériques pour des entreprises. Sa veille existe mais elle est dispersée (newsletters, médias, réseaux, alertes, informations internes) et débouche rarement sur une décision, une action ou une mémoire commune. La demande du dirigeant : « les bonnes informations aux bonnes personnes, au bon moment, et savoir quoi en faire ».

**Les données fournies.** Le classeur `02_Donnees_Exercice_NOVA_Etudiants_MAJ.xlsx` contient 48 informations fictives (N001 à N048) et 16 propos de collaborateurs (V01 à V16). Le brief initial annonçait 30 lignes et 12 verbatims : la version mise à jour du classeur fait foi.

**La solution conçue.** Un seul produit de veille qui fonctionne en 5 étapes, commun à tous, mais dont les fiches changent selon le pôle destinataire (9 pôles : Direction générale, Direction financière, Marketing, Commercial, Produit, Customer Success, Opérations, RH, et un pôle transverse « conception NOVA »).

flowchart LR  
  A\[1. Collecte\<br/\>règles\] \--\> B\[2. Regroupement\<br/\>dédoublonnage \+ tagage\]  
  B \--\> C\[3. Tri et priorisation\<br/\>score \+ mémoire\]  
  C \--\> D\[4. Mise en sens\<br/\>IA générative : fiches\]  
  D \--\> E\[5. Diffusion\<br/\>alerte ou digest\]  
  E \-. feedback relecteurs .-\> C  
  E \-. feedback relecteurs .-\> D

L'IA générative n'intervient que là où il faut juger ou rédiger en langage naturel (notation à l'étape 3, fiches à l'étape 4). Le reste repose sur des règles, des formules et des validations humaines.

**Mon rôle en une phrase.** J'ai structuré le projet de bout en bout : j'ai cadré le diagnostic, conçu l'architecture, rédigé les consignes (prompts) envoyées à l'IA, pris les décisions principales, écrit les marches à suivre, réalisé la maquette, puis rédigé et mis en forme tous les documents du rendu commun. L'IA (Claude) m'a servi d'outil de production et de contradicteur ; chaque décision retenue a été vérifiée et validée par moi.

**Comment lire la suite.** La partie 1 présente le POC : le test du workflow sur trois sources, étape par étape, et le résumé des résultats par source. La partie 2 est mon journal de bord : jour par jour, les tâches que j'ai réalisées et mes interactions significatives avec l'IA, avec ce que j'ai vérifié, refusé ou corrigé. La partie 3 explique la solution, mes choix, ma progression et mon recul. Les identifiants (N005, V13…) renvoient aux lignes du classeur.

---

## **Partie 1 — Le POC : test du workflow sur trois sources**

### **Le POC en bref**

**Ce que c'est.** Le POC (preuve de concept) vérifie que la marche à suivre `NOVA_marche_a_suivre_workflow_veille.md` (version 2) peut être exécutée telle quelle par un assistant IA conversationnel, sans application ni site web. On joint le document, on colle les informations de veille, et l'assistant déroule les 5 étapes. Il rend dans la conversation les tableaux de veille par pôle, les fiches complètes, les alertes éventuelles et le bloc « ÉTAT DU SYSTÈME » à conserver pour l'exécution suivante.

**Ce que je voulais vérifier.**

* qu'une même information produit des fiches différentes selon le pôle destinataire ;  
* que les notes de l'IA, les formules de score et les règles de routage donnent une décision traçable (alerte ou digest) ;  
* que l'assistant n'invente ni lien, ni chiffre, ni besoin d'achat, et signale ce qui manque ;  
* que l'état produit en fin d'exécution contient tout ce qu'il faut pour la suite (compteurs d'identifiants, registre des sources, références du contrôle du modèle).

**Le jeu de test.** Trois informations du classeur, chacune issue d'une source différente :

| Source | Type | Date | Titre | Catégorie indiquée | ID fourni |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Startup Radar | Média startup | 05/09/2026 | Levée de 18 M€ pour une plateforme de veille automatisée B2B (SignalDeck) | Concurrence | aucun |
| Marketing Bench | Newsletter | 06/09/2026 | Les newsletters de curation retrouvent de l'engagement dans les audiences B2B | Marketing | aucun |
| B2B Growth | Newsletter | 10/09/2026 | Les signaux de recrutement comme indicateur de transformation commerciale | Commercial | N020 |

**Conditions d'exécution.** Il s'agit d'une première exécution : aucun état du système n'est fourni, l'assistant part donc de l'état initial. Il n'y a ni message interne Customer Success ni table d'abonnement, et l'abonnement par défaut s'applique. L'exécution a été faite avec Claude le 25/09/2026.

### **Les étapes par lesquelles le POC est passé**

| Étape | Ce que l'assistant a fait | Type |
| ----- | ----- | ----- |
| Début — Contrôle du modèle | Aucune référence dans l'état : pas de contrôle possible. 5 références créées en fin d'étape 3 pour les exécutions suivantes. | Règle |
| 1\. Collecte et normalisation | Attribution des identifiants selon les compteurs, mise au format standard, recherche de chaque source dans le registre (vide) → 3 sources « non référencées » (fiabilité 2,5) et 3 propositions d'ajout SRC-1 à SRC-3. | Règles |
| 2a. Dédoublonnage | Trois faits différents : aucun doublon. | Jugement simple |
| 2c. Tagage et rangement | Prompt de tagage appliqué à chaque information : pôles concernés (3 au maximum) et tiroir de chaque pôle. | Prompt LLM |
| 2d–2f. Redirections, bruit, tags à vérifier | Aucune redirection active, aucune information écartée, aucune confiance « faible ». | Règles |
| 3\. Priorisation | Notes pertinence / urgence / impact pour chaque couple information × pôle, bonus de source, correction par les mémoires, scores, routage. | Prompt LLM + formules |
| 4\. Mise en sens | Une fiche par couple information × pôle, avec le bloc de consignes du pôle, puis contrôle de format et de sensibilité. | Prompt LLM + contrôle |
| 5\. Diffusion | Tableau de veille par pôle ; aucune alerte à envoyer. | Règles |
| Fin | Bloc « ÉTAT DU SYSTÈME » complet : compteurs, registre, fiches récentes, références, propositions en attente. | Règles |

**Calculs communs aux trois sources.** Première exécution, donc :

* **bonus de source = 0** pour les trois sources (aucun avis reçu : `nb_recus = 0`, donc poids et constance à 0) ;  
* **correction des notes = 0** (mémoires vides, `n = 0`, donc confiance `w = 0`) : notes finales = notes de l'IA ;  
* **score = pertinence × 2 + urgence × 1,5 + impact × 2**, puis routage : alerte si événement majeur, si score ≥ 24 (plancher de sécurité) ou si score de confirmation ≥ 20 ; sinon digest.

### **Source 1 — Startup Radar (média startup)**

**Entrée.** « Levée de 18 M€ pour une plateforme de veille automatisée B2B » : la société SignalDeck prévoit d'accélérer en France et en Allemagne avec une offre de veille combinant collecte, résumé et signaux commerciaux.

**Étape 1.** Aucun identifiant fourni → **N001** (compteur N : 0 → 1). Source absente du registre → « non référencée », proposition **SRC-1**. Aucun lien fourni : le champ URL reste vide.

**Étape 2 — sortie du prompt de tagage.**

    {"id": "N001",
     "poles": [{"pole": "DG", "tiroir": "DG-T4", "tiroir_secondaire": null},
               {"pole": "PROD", "tiroir": "PROD-T0", "tiroir_secondaire": null}],
     "a_ecarter": false, "confiance": "moyenne",
     "raison": "Levée de fonds d'un concurrent qui veut accélérer en France"}

Pour la Direction générale, l'information va dans le tiroir DG-T4 (opération sur un acteur du marché). Pour le Produit, elle va dans « Autre » : l'article décrit une levée de fonds, pas une nouvelle fonctionnalité.

**Étape 3 — notes et routage.**

| Couple | Pertinence | Urgence | Impact | Score | Route |
| ----- | ----- | ----- | ----- | ----- | ----- |
| N001 × DG | 4 | 2 | 3 | 4×2 + 2×1,5 + 3×2 = **17,00** | Digest |
| N001 × PROD | 3 | 2 | 3 | 3×2 + 2×1,5 + 3×2 = **15,00** | Digest |

**Étape 4 — fiches produites.**

| Fiche | Titre | Pourquoi vous | Contenu propre au pôle | Action proposée |
| ----- | ----- | ----- | ----- | ----- |
| F-N001-DG | SignalDeck lève 18 M€ pour la veille B2B | Un concurrent mieux financé renforce sa présence en France. | Horizon 3 à 12 mois ; décision attendue : aucune, pour information ; option : suivre ses annonces en France | Demander au Produit une comparaison d'offres (Direction générale, sous 1 mois) |
| F-N001-PROD | Un concurrent financé propose collecte, résumé et signaux commerciaux | Ce concurrent aura plus de moyens pour faire évoluer une offre à situer face à la roadmap. | Impact utilisateurs : faible (aucune fonctionnalité nouvelle annoncée) ; question à trancher : l'offre recouvre-t-elle une fonctionnalité de NOVA ? | Comparaison rapide des fonctionnalités (Responsable produit, sous 1 mois) |

**Contrôle.** Les deux fiches sont conformes. La fiche DG compte 76 mots, pour un maximum de 80. Aucune n'est sensible. **Incertitude signalée par l'assistant :** le recouvrement entre l'offre de SignalDeck et celle de NOVA n'est pas établi, car le brief ne décrit pas les produits de NOVA.

### **Source 2 — Marketing Bench (newsletter)**

**Entrée.** « Les newsletters de curation retrouvent de l'engagement dans les audiences B2B » : le benchmark observe une meilleure performance quand les contenus sont moins nombreux, contextualisés et accompagnés d'une recommandation d'action.

**Étape 1.** Aucun identifiant fourni → **N002** (compteur N : 1 → 2). Source « non référencée », proposition **SRC-2**.

**Étape 2 — sortie du prompt de tagage.**

    {"id": "N002",
     "poles": [{"pole": "MKT", "tiroir": "MKT-T1", "tiroir_secondaire": null},
               {"pole": "TRANS", "tiroir": "TRANS-T4", "tiroir_secondaire": null}],
     "a_ecarter": false, "confiance": "haute",
     "raison": "Tendance de contenu B2B ; principe de diffusion utile au système de veille"}

**Étape 3 — notes et routage.**

| Couple | Pertinence | Urgence | Impact | Score | Route |
| ----- | ----- | ----- | ----- | ----- | ----- |
| N002 × MKT | 4 | 2 | 2 | 4×2 + 2×1,5 + 2×2 = **15,00** | Digest |
| N002 × TRANS | 4 | 2 | 3 | 4×2 + 2×1,5 + 3×2 = **17,00** | Digest |

**Étape 4 — fiches produites.**

| Fiche | Titre | Pourquoi vous | Contenu propre au pôle | Action proposée |
| ----- | ----- | ----- | ----- | ----- |
| F-N002-MKT | Newsletters B2B : moins de contenus, plus de contexte, plus d'engagement | Une règle concrète pour le format des contenus produits par le marketing. | Verdict : **produire** ; angle « Moins mais mieux : ce qui fait lire une newsletter B2B » (post réseau social) ; points à vérifier : chiffres du benchmark, cohérence avec l'offre de NOVA | Rédiger le post (Chargé de contenu marketing, sous 2 semaines) |
| F-N002-TRANS | Un benchmark conforte le principe « moins, contextualisé, actionnable » | C'est le parti pris des fiches NOVA (« pourquoi vous », action proposée, digest filtré). | Dimension UX ; étape NOVA concernée : 4 ; application : garder un digest court et suivre l'engagement via les retours « bon signal » | Ajouter le taux de retours « bon signal » par pôle aux indicateurs de calibration (Responsable de la veille) |

**Contrôle.** Les deux fiches sont conformes et aucune n'est sensible. **Incertitudes signalées :** la source ne donne ni chiffres, ni échantillon, ni période. L'application à l'outil interne NOVA est une interprétation, présentée comme telle.

### **Source 3 — B2B Growth (newsletter)**

**Entrée.** « Les signaux de recrutement comme indicateur de transformation commerciale » : l'article explique comment une hausse rapide de recrutements sur une fonction peut signaler un projet d'expansion ou de réorganisation.

**Étape 1.** Identifiant fourni **N020**. Il est supérieur au compteur (2), donc conservé, et le compteur N passe à 20. Source « non référencée », proposition **SRC-3**.

**Étape 2 — sortie du prompt de tagage.**

    {"id": "N020",
     "poles": [{"pole": "COM", "tiroir": "COM-T0", "tiroir_secondaire": null},
               {"pole": "TRANS", "tiroir": "TRANS-T0", "tiroir_secondaire": null}],
     "a_ecarter": false, "confiance": "moyenne",
     "raison": "Méthode pour repérer des prospects qui bougent ; utile à la détection de signaux"}

Les deux pôles sont rangés dans « Autre ». L'article décrit une **méthode** et pas le recrutement d'un compte précis : le tiroir COM-T3 (Recrutement) ne s'applique donc pas. Aucun tiroir TRANS ne couvre les méthodes de détection de signaux.

**Étape 3 — notes et routage.**

| Couple | Pertinence | Urgence | Impact | Score | Route |
| ----- | ----- | ----- | ----- | ----- | ----- |
| N020 × COM | 4 | 1 | 2 | 4×2 + 1×1,5 + 2×2 = **13,50** | Digest |
| N020 × TRANS | 3 | 1 | 2 | 3×2 + 1×1,5 + 2×2 = **11,50** | Digest |

**Étape 4 — fiches produites.**

| Fiche | Titre | Pourquoi vous | Contenu propre au pôle | Action proposée |
| ----- | ----- | ----- | ----- | ----- |
| F-N020-COM | Repérer les prospects qui bougent grâce à leurs recrutements | Un critère simple pour détecter le moment où un prospect bouge, avant de le contacter. | Compte : aucun (article de méthode) ; accroche type en 13 mots, sans donnée personnelle ; fenêtre : sans échéance | Ajouter la hausse rapide de recrutements aux critères de repérage des comptes (Responsable commercial, prochaine réunion d'équipe) |
| F-N020-TRANS | Le recrutement comme signal : une piste pour la détection NOVA | Un type de signal que le système doit savoir reconnaître et ranger pour le Commercial. | Dimension données ; étape NOVA concernée : 2 ; vérifier que ces informations arrivent au tiroir COM-T3 | Vérifier que des sources couvrent les offres d'emploi des comptes suivis (Responsable de la veille) |

**Contrôle.** Les deux fiches sont conformes et aucune n'est sensible. **Incertitude signalée** (consigne propre au Commercial) : une hausse de recrutements ne prouve ni un projet d'expansion ni un besoin d'achat, et des offres publiées ne prouvent pas que les recrutements ont eu lieu.

### **Résumé des résultats par source**

| Source | ID | Pôles (tiroir) | Scores | Route | Fiches | Point marquant |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Startup Radar | N001 | DG (DG-T4), PROD (PROD-T0) | 17,00 / 15,00 | Digest | 2 | Concurrent financé : pertinent pour la direction, sans urgence ; recouvrement avec l'offre NOVA à confirmer |
| Marketing Bench | N002 | MKT (MKT-T1), TRANS (TRANS-T4) | 15,00 / 17,00 | Digest | 2 | Seule information à confiance « haute » ; verdict marketing « produire » avec un angle prêt à l'emploi |
| B2B Growth | N020 | COM (COM-T0), TRANS (TRANS-T0) | 13,50 / 11,50 | Digest | 2 | Article de méthode : rangé en « Autre », limites d'une piste commerciale bien signalées |

**Bilan chiffré.** 3 informations, 6 couples information × pôle, 6 fiches complètes et 0 alerte. Il n'y a ni doublon, ni information écartée, ni fiche sensible. Le meilleur score est 17, en dessous du seuil d'alerte de 20. Compteurs en fin d'exécution : N 20 · I 0 · P 0 · IRR 0 · SRC 3.

**Ce que le POC confirme.**

* Une même information donne des fiches différentes selon le pôle : SignalDeck est un sujet de rapport de force pour la direction, et une question de roadmap pour le Produit.  
* La décision alerte ou digest est entièrement traçable : chaque score se recalcule à la main à partir des notes.  
* L'assistant n'a inventé aucun lien ni chiffre. Il a signalé ce que le brief ne dit pas (offre de NOVA, chiffres du benchmark) au lieu de le supposer.  
* Le digest joue son rôle : des informations utiles mais sans urgence n'interrompent personne.

**Ce que le POC ne teste pas encore, ou révèle.**

* **Pas d'alerte, pas de Customer Success, pas de feedback** : les règles d'alerte, le regroupement des irritants et les mémoires de notation restent à tester sur un jeu plus large (par exemple les doublons Orbis N031–N033 et des messages internes).  
* **Identifiants** : les deux lignes collées sans identifiant ont reçu N001 et N002, qui ne correspondent pas forcément à leur numéro dans le classeur. Et comme N020 a porté le compteur à 20, des lignes N003 à N019 fournies plus tard seraient renumérotées. Leçon : fournir tous les identifiants du classeur, ou aucun.  
* **Tiroir « Autre »** : 3 des 6 rangements y tombent (PROD-T0, COM-T0, TRANS-T0). Sur un volume plus grand, ce serait le signal qu'un tiroir manque, par exemple « méthode de veille » pour TRANS.  
* **Registre des sources vide au départ** : toutes les sources sont « non référencées ». Le responsable de la veille doit décider de SRC-1 à SRC-3 avant que la fiabilité puisse s'accumuler.

---

## **Partie 2 — Mon journal de bord : contribution et usage de l'IA**

Cette partie suit la semaine jour par jour. Pour chaque journée, un tableau liste les tâches que j'ai réalisées et les livrables produits, puis les entrées du journal IA détaillent les interactions significatives avec l'IA : ce que j'ai demandé, ce que l'IA a produit, et ce que j'ai vérifié, refusé ou décidé. J'ai travaillé avec un seul assistant, Claude, dans un Projet dédié, sur 10 conversations. Le POC est traité à part, dans la partie 1 ci-dessus.

### **Mon rôle**

J'ai structuré et piloté le projet du diagnostic jusqu'au rendu commun. Concrètement, j'ai :

* **cadré** le projet et la méthode (lecture du brief, choix des outils, distinction fait / hypothèse / à confirmer) ;  
* **conçu** l'architecture en 5 étapes et la répartition entre IA, règles et humain ;  
* **rédigé** les consignes envoyées à l'IA : demandes de production, prompts de notation et de rédaction des fiches par pôle, prompt de spécification des écrans ;  
* **pris** les décisions principales, y compris celles qui contredisaient une proposition précédente ;  
* **écrit** les marches à suivre qui décrivent le fonctionnement complet ;  
* **réalisé** les schémas FigJam et la maquette ;  
* **rédigé et mis en forme** tous les documents du rendu commun.

### **Vue d'ensemble du journal IA**

| \# | Date | Sujet | Ma décision ou ma vérification |
| ----- | ----- | ----- | ----- |
| J1 | 21/09 | Comprendre le brief, choisir les outils | Repéré une date inventée par l'IA |
| J2 | 21/09 | Trier les données par pôle | Imposé la sélection au lieu de l'exhaustivité |
| J3 | 21/09 | Schémas des 5 workflows | Exigé un schéma par workflow |
| J4 | 21/09 | Coût de l'IA et mémoire partagée | Retiré l'IA d'une étape |
| J5 | 22/09 | Collecte, embeddings, tagage | Demandé à être contredit ; rejeté un chiffre non mesuré |
| J6 | 23/09 | Scoring et marche à suivre | Corrigé 12 → 16 verbatims ; fixé les règles d'alerte |
| J7 | 24/09 | Refonte du feedback | Détecté un défaut de design ; proposé 5 améliorations |
| J8 | 24/09 | Document données et risques | Laissé en « à confirmer » ce que le brief ne dit pas |
| J9 | 25/09 | Spécification, maquette et rendu commun | Rédigé le prompt de spécification ; réalisé la maquette ; rédigé et mis en forme le rendu commun |
| J10 | 25/09 | Contrôle du modèle | Validé seulement après compréhension ; ajouté une correction |

### **Lundi 21/09 — Comprendre et diagnostiquer**

**Tâches réalisées**

| Tâche | Livrable | Usage dans le projet |
| ----- | ----- | ----- |
| Lecture et décryptage du brief, notions POC et V0 | Synthèse de travail | Cadrage de toute la semaine |
| Choix d'un outillage minimal et recherche de ressources | Liste d'outils et de ressources | Méthode du groupe |
| Tri des 48 signaux et 16 verbatims par pôle | `NOVA_Veille_triee_par_pole.xlsx` | Diagnostic par pôle |
| Repérage du bruit, des doublons et des signaux transverses | Colonnes cluster et vigilance du classeur | Justification de la sélection des données |
| Formulation du besoin de NOVA en 4 manques (filtrage par profil, mise en sens, déclenchement d'action, mémoire) | Synthèse du besoin | Diagnostic du dossier commun |
| Conception des 5 workflows, un schéma par workflow | Schémas interactifs | Architecture V1 |
| Arbitrage coût : IA retirée du tri, réservée à la mise en sens | Schéma mis à jour | Rubrique « Arbitrages » |
| Architecture mémoire : journal \+ index léger \+ contrat d'écriture | Schéma mémoire | Architecture V1 |

**Journal IA**

#### **J1 — Comprendre le brief et choisir les outils (21/09)**

* **Objectif** : savoir exactement ce qui est attendu avant de produire quoi que ce soit.  
* **Ma démarche** : j'ai fourni le brief complet et demandé une explication du projet, des notions « POC » et « V0 », puis des conseils d'outils et des ressources (vidéos, articles).  
* **Résultat** : un résumé du projet, un outillage minimal (un LLM, Figma, Notion ou Google Docs) et une liste de ressources sur les pipelines de données et la méthode POC.  
* **Vérification** : j'ai relu le résumé à côté du brief. Il annonçait un débriefing « le 1er octobre » alors que le brief dit « semaine suivante, date à confirmer ». Il suggérait aussi « 15 à 20 articles » pour le POC alors que le brief n'impose aucun quota.  
* **Enseignement** : l'IA complète les trous avec des détails précis qui ont l'air vrais. J'ai pris l'habitude de revérifier toute date, tout chiffre et toute consigne dans le document source.

#### **J2 — Réorganiser le classeur par pôle (21/09)**

* **Objectif** : lire rapidement qui a besoin de quoi, pour construire le diagnostic.  
* **Ma démarche** : j'ai donné le classeur et demandé une réorganisation par pôle.  
* **Résultat** : `NOVA_Veille_triee_par_pole.xlsx` en 4 onglets (Lisez-moi, Besoins par pôle, Verbatims par pôle, Corpus par pôle), avec pour chaque pôle son besoin, la décision à améliorer et les signaux rattachés.  
* **Vérification** : j'ai conservé la distinction entre le fait (le verbatim → pôle, donné par le champ Fonction) et l'hypothèse (le signal → pôle, proposé par l'IA, à valider).  
* **Erreur repérée** : l'IA avait traité les 48 signaux et les 16 verbatims. Je lui ai opposé la consigne du brief : ne pas tout utiliser, sélectionner et justifier.  
* **Décision** : le classeur devient une **carte de travail**, pas notre sélection. Chaque ligne retenue doit dire pour quel profil, quelle décision, quel niveau de confiance et quelle action.  
* **Enseignement** : le tri a fait ressortir trois constats que j'ai réutilisés dans le diagnostic :  
  * Customer Success n'a aucun signal public : son besoin porte sur des données internes ;  
  * des doublons se corrigent entre eux (Orbis N031-N033, Fluxio N034-N036, CloudMind N044-N045) ;  
  * certaines lignes sont du bruit volontaire (N007, N012, N019, N040) ;  
  * 13 signaux « transverses » ne visent aucun pôle mais disent comment construire NOVA (UX, fiabilité de l'IA, coûts).

#### **J3 — Schémas des workflows (21/09)**

* **Objectif** : voir chaque brique séparément avant un schéma global.  
* **Ma démarche** : j'ai refusé un schéma condensé et demandé un schéma par workflow, avec le rôle de chaque agent, ce qui relève de la règle, de l'IA ou de l'humain, et ce que chaque workflow lit ou écrit en mémoire.  
* **Résultat** : 5 workflows (collecte, regroupement, tri, mise en sens, diffusion) reliés par une « fiche signal » enrichie à chaque étape, une mémoire commune et une boucle de feedback de la diffusion vers le tri.  
* **Vérification** : j'ai contrôlé que chaque workflow renvoyait à des verbatims précis du classeur, pas à des besoins génériques.  
* **Enseignement** : découper d'abord m'a permis de discuter chaque étape avec le groupe avant de les assembler.

#### **J4 — Coût de l'IA et mémoire partagée (21/09)**

* **Objectif** : répondre à deux objections vues dans une vidéo de référence : le coût d'un appel IA à chaque étape, et la complexité d'une mémoire interrogée par tous les workflows.  
* **Ma démarche** : j'ai soumis ces deux objections à l'IA en lui demandant de les analyser sur notre schéma.  
* **Décisions** : l'étape de tri passe en règles (formule pondérée) et l'IA générative est réservée à la mise en sens. La mémoire est séparée en un journal structuré et un index léger, avec un contrat d'écriture : chaque workflow n'écrit que ses propres champs.  
* **Vérification** : l'arbitrage rejoint des signaux du classeur (N015 : une règle simple suffit parfois avant un LLM ; N028 et V11 sur les coûts).  
* **Suite** : j'ai fait évoluer ce choix le 23/09 (J6). Le tri utilise finalement un LLM pour noter trois critères, mais la décision alerte ou digest reste une formule.

### **Mardi 22/09 — Architecture des étapes 1 et 2**

**Tâches réalisées**

| Tâche | Livrable | Usage dans le projet |
| ----- | ----- | ----- |
| Choix d'un workflow par type de connexion \+ normalisation commune | Étape 1 découpée en 1a / 1b | Architecture |
| Ajout d'une surveillance par source (panne silencieuse) | Règle de surveillance | Données et risques |
| Report des embeddings, justifié par le volume | Arbitrage écrit | Rubrique « Arbitrages » |
| Refus du LLM pour le tagage, escalade règles → mots-clés → classifieur | Arbitrage écrit | Étape 2 |

**Journal IA**

#### **J5 — Collecte, embeddings et tagage (22/09)**

* **Objectif** : trancher trois questions d'architecture.  
* **Ma démarche** : j'ai demandé explicitement à l'IA de me contredire si mes idées étaient mauvaises.  
* **Décisions** :  
  * un workflow par type de connexion (RSS, email, webhook, API), puis une normalisation commune (étape 1 séparée en 1a ingestion et 1b normalisation) ;  
  * une surveillance de chaque source pour détecter une panne silencieuse, et la conservation des données brutes pour pouvoir les retraiter ;  
  * embeddings reportés ;  
  * pas de LLM pour proposer les tags, mais des règles source → pôle, puis des mots-clés si nécessaire.  
* **Vérification** : l'IA justifiait le report des embeddings par « des règles couvrent 80 à 90 % des doublons ». C'est une estimation, pas une mesure sur nos données : je ne la présente pas comme un fait.  
* **Enseignement** : le principe que j'avais fixé (« l'IA seulement pour un jugement en langage naturel ») a servi à refuser un usage de l'IA. Un principe écrit sert à trancher les cas suivants.

### **Mercredi 23/09 — Priorisation et mode opératoire**

**Tâches réalisées**

| Tâche | Livrable | Usage dans le projet |
| ----- | ----- | ----- |
| Conception du scoring (3 critères notés, formule pondérée, bonus de fiabilité centré) | `NOVA_processus_scoring_A_a_Z.md` | Étape 3 |
| Règles de diffusion (pas d'archive, alertes aux seuls abonnés) | Règles écrites | Étape 5 |
| Chemin Customer Success : source interne, regroupement d'irritants, seuil de 3 clients | Section dédiée | Étapes 1 à 3 |
| Rédaction des 9 blocs de consignes de rédaction des fiches, un par pôle | Prompts par pôle | Étape 4 |
| Syntaxe complète des retours relecteurs (VRAI, FAUX, NONCONF, PRIO, INUTILE, TAG, REDAC, BON, DECISION, VALIDATION, CONFIRME, RETIRER, CALIBRATION) | Section feedback | Boucle de feedback |
| Bloc « ÉTAT DU SYSTÈME » qui conserve la mémoire entre deux exécutions | Format JSON | Mémoire |
| Mode opératoire complet, exécutable par un assistant sans contexte | `NOVA_marche_a_suivre_workflow_veille.md` | Référence du workflow et base du POC |
| Mise à jour du tableau FigJam (sections 1 à 5, sous-blocs 4a à 4e, renvoi des retours vers la bonne étape) | Tableau « Pipeline veille » | Schéma du dossier commun |

**Journal IA**

#### **J6 — Scoring de priorité et marche à suivre (23/09)**

* **Objectif** : définir comment une information devient alerte ou digest, puis écrire un mode opératoire exécutable par un assistant IA sans aucun contexte.  
* **Mes décisions** :  
  * retrait des exemples passés (few-shot) du prompt de notation ;  
  * pas d'archive : toute information non alertée va au digest ;  
  * bonus de fiabilité centré (fiabilité − 2,5), qui devient un malus pour une source régulièrement peu fiable ;  
  * Customer Success alimenté par une source interne ajoutée à l'étape 1, avec regroupement des irritants et un seuil de 3 clients (V16) ;  
  * bruit défini strictement (aucun lien concret avec un pôle) ; dans le doute, on tague plutôt que d'écarter ;  
  * alertes envoyées uniquement aux personnes qui l'ont demandé ;  
  * rendu du POC dans la conversation, sous forme de tableaux, sans site web, mais avec les fiches complètes pour chaque signal retenu.  
* **Erreur repérée** : l'IA partait de 12 verbatims (chiffre du brief). Je l'ai corrigée : le classeur mis à jour en contient 16, dont V13 à V16 qui changent les règles d'alerte (DG interrompue seulement en cas de vraie urgence, Commercial qui veut la source et une phrase de justification, Produit qui veut retrouver les décisions passées, seuil de 3 clients pour Customer Success).  
* **Production** : mise à jour du tableau FigJam « Pipeline veille » via le connecteur Figma (sections 1 à 5, sous-blocs 4a à 4e, renvoi des retours « inutile » vers la bonne étape) ; rédaction de `NOVA_processus_scoring_A_a_Z.md` et de `NOVA_marche_a_suivre_workflow_veille.md`.  
* **Enseignement** : l'IA prend pour acquis le premier document lu. Quand deux sources se contredisent, c'est à moi de dire laquelle fait foi.

### **Jeudi 24/09 — Robustesse, feedback, données et risques**

**Tâches réalisées**

| Tâche | Livrable | Usage dans le projet |
| ----- | ----- | ----- |
| Détection du risque de contradictions dans le carnet de leçons | Diagnostic écrit | Refonte du feedback |
| Mémoire chiffrée par pôle, critère et tiroir, avec mes 5 améliorations | Section mémoire du workflow v2 | Étape 3 |
| Correction des fiches en v2 avec approbation, règles de rédaction après 3 corrections convergentes | Section 10.7 | Étape 4 et feedback |
| Autocritique demandée à l'IA et intégration des 8 failles relevées | Workflow v2 corrigé | Rubrique « Données et risques » |
| Registre des sources et indicateurs fiabilité / utilité / santé technique | Section collecte | Étape 1 |
| Report manuel des modifications Figma après la limite du connecteur | `modifs_figma_partie1.md` | Schéma du dossier commun |
| Document données, confidentialité, vérification, limites, accès et contrôles | Document en 6 parties \+ glossaire | Rubrique « Données et risques » |

**Journal IA**

#### **J7 — Refonte du feedback (24/09)**

* **Objectif** : corriger un défaut que j'ai identifié dans notre propre design : un carnet de leçons écrites, injecté dans le prompt, finirait par contenir des règles contradictoires.  
* **Décision** : remplacement par une mémoire chiffrée par pôle, critère et type d'information (« tiroir »), qui apprend l'écart moyen entre la note humaine et la note de l'IA (moyenne mobile exponentielle, α \= 0,15). Le prompt ne change plus ; seule la correction numérique apprend.  
* **Mes propositions** :  
  1. un champ « événement majeur » pour les cas exceptionnels ;  
  2. un double tag pondéré 70 / 30 (tiroir principal / secondaire) ;  
  3. la moyenne mobile exponentielle à la place d'une moyenne simple ;  
  4. un repli tiroir → famille → pôle quand un tiroir manque de données ;  
  5. un « double aveugle » : le relecteur ne voit pas la note de l'IA.  
* **Correction par l'IA** : sur l'événement majeur, ma version amplifiait la correction ; elle doit au contraire la neutraliser. Une erreur de logique sur les retours « correct » (écart nul) a aussi été rectifiée. J'ai accepté ces deux corrections après les avoir comprises.  
* **Vérification** : j'ai demandé un exemple chiffré complet (comment la valeur −1,2 se construit en 7 retours) et pourquoi 0,15 plutôt qu'une autre valeur, pour pouvoir l'expliquer moi-même.  
* **Correction des fiches** : j'ai proposé qu'une fiche mal jugée génère immédiatement une v2 à approuver. Cela a donné la section 10.7 : partie A (v2 proposée par l'IA avec une consigne contrainte, approuvée par l'auteur du commentaire si la correction est de forme, par le référent du pôle si elle change le sens) et partie B (une règle de rédaction n'est créée qu'après 3 corrections approuvées allant dans le même sens, avec une protection contre les allers-retours sur 60 jours).  
* **Autocritique demandée** : j'ai demandé à l'IA de chercher les failles de ce design. Elle en a listé 8, dont l'auto-validation par l'auteur du commentaire et des seuils inventés dans les règles générées ; je les ai fait intégrer.  
* **Sources** : j'ai fait détailler la collecte (registre des sources actives / en test / en pause, respect des règles d'accès des sites, canal de partage manuel) et les trois indicateurs issus du feedback (fiabilité, utilité, santé technique).  
* **Limite d'outil** : le connecteur Figma a atteint sa limite d'usage. J'ai fait produire la liste des modifications à reporter à la main (`modifs_figma_partie1.md`) et je les ai appliquées.

#### **J8 — Document « données et risques » (24/09)**

* **Objectif** : produire la rubrique « Données, confidentialité, vérification, limites, accès et contrôles » pour un lecteur qui ne connaît pas le workflow.  
* **Ma démarche** : j'ai rédigé la demande en précisant le public (quelqu'un qui n'a pas participé) et le niveau attendu (contextualisé, clair, concis).  
* **Résultat** : un document en 6 parties avec schéma, glossaire et liste de points à confirmer.  
* **Vérification** : j'ai gardé en « à confirmer » ce que le brief ne dit pas : produits et concurrents réels de NOVA, ses outils et fournisseurs, qui s'abonne à quel pôle, où est stockée la mémoire, par quel canal partent les alertes.  
* **Enseignement** : écrire « à confirmer » est plus honnête et plus utile qu'une hypothèse présentée comme un choix.

### **Vendredi 25/09 — Maquette et rendu commun**

**Tâches réalisées**

| Tâche | Livrable | Usage dans le projet |
| ----- | ----- | ----- |
| Rédaction du prompt de spécification avec marquage de certitude | `prompt.md` | Méthode de passage workflow → écrans |
| Spécification fonctionnelle (28 écrans, 106 interactions, 7 rôles, 49 règles, 11 conflits, 9 questions bloquantes) | `NOVA_spec_UI_UX.md` | Base des maquettes |
| Réalisation de la maquette | Maquette | Rubrique « Expérience utilisateur » du dossier commun |
| Rédaction de tous les documents du rendu commun | Diagnostic, architecture et workflow, arbitrages, données et risques, expérience utilisateur | PDF commun du groupe |
| Mise en forme du rendu commun | PDF commun finalisé | Dépôt du groupe |
| Explication et correction du contrôle du modèle (ajout de la date des références) | Section 10.10 corrigée | Arbitrages |
| Rédaction de mon annexe individuelle | Ce document | Rendu individuel |

**Journal IA**

#### **J9 — Spécification des écrans, maquette et rendu commun (25/09)**

* **Objectif** : passer de la logique du workflow à ce que l'utilisateur voit et fait, puis réaliser la maquette et finaliser le rendu commun.  
* **Ma démarche** : j'ai rédigé moi-même un prompt de spécification (`prompt.md`) qui imposait un marquage de certitude pour chaque élément : explicite dans nos documents, déduit, à confirmer, non défini, ou en conflit.  
* **Résultat** : une spécification fonctionnelle (`NOVA_spec_UI_UX.md`) : 9 pôles, 7 rôles (collaborateur, direction, abonné, relecteur, référent, responsable veille, administrateur), 28 écrans, 106 interactions, 23 fenêtres, 25 notifications, 30 permissions et 49 règles, chacun avec un identifiant stable.  
* **Erreur repérée (la mienne)** : l'IA a contrôlé les fichiers et montré que `POC.md` était une copie exacte d'un autre fichier, et que le document de workflow manquait. Elle n'a travaillé que sur les deux sources réelles.  
* **Vérification** : elle a relevé 11 contradictions entre nos documents et 9 questions bloquantes (qui valide une fiche sensible, quelle note afficher sans révéler la fiabilité des sources, accès du responsable veille aux contenus de direction).  
* **Maquette** : j'ai réalisé la maquette à partir de cette spécification, en tranchant moi-même les conflits nécessaires à l'affichage.  
* **Rendu commun** : j'ai ensuite rédigé et mis en forme tous les documents du PDF commun (diagnostic, architecture et workflow, arbitrages, données et risques, expérience utilisateur).  
* **Enseignement** : vérifier ce que j'envoie avant de juger ce que je reçois. Le marquage de certitude que j'avais imposé a rendu les déductions de l'IA visibles.

#### **J10 — Comprendre le contrôle du modèle (25/09)**

* **Objectif** : comprendre une étape que je dois pouvoir défendre : au début de chaque exécution, l'IA renote 5 textes de référence.  
* **Résultat** : la mémoire corrige le biais d'un modèle précis. Si le modèle change (autre assistant, mise à jour), la vieille correction crée une nouvelle erreur, sans que personne ne le voie. Les 5 références servent d'étalon : un écart moyen de 0,5 ou plus déclenche un signal, et un humain choisit de remettre les mémoires à zéro ou non.  
* **Correction** : les références doivent aussi stocker la date de l'information ; je l'ai reportée dans le document d'arbitrage.  
* **Limite relevée** : l'IA ne note jamais exactement pareil ; avec 5 références, le signal peut se déclencher à tort. C'est pour cela que la décision reste humaine.  
* **Enseignement** : je n'ai validé cette brique qu'après avoir pu l'expliquer avec mes mots.

### **Bilan de ma contribution**

**Ce que j'ai proposé moi-même**

* Voir chaque workflow séparément avant un schéma global.  
* Réserver l'IA générative aux jugements en langage naturel, et l'écrire comme principe du projet.  
* Remettre en cause le carnet de leçons avant qu'il ne pose problème.  
* Les 5 améliorations de la mémoire : événement majeur, double tag pondéré, moyenne mobile, repli tiroir → famille → pôle, double aveugle.  
* La correction immédiate d'une fiche en v2 soumise à approbation.  
* L'alerte réservée aux seules personnes abonnées, le digest pour tout le reste.  
* Le traitement de Customer Success par une source interne.  
* Un rendu du POC directement dans la conversation, sans développer d'application.

**Ce que j'ai vérifié ou corrigé**

* Le nombre réel de verbatims (16 et non 12\) et de signaux (48 et non 30).  
* La sélection des données plutôt que l'exhaustivité.  
* Les dates et chiffres ajoutés sans source par l'IA.  
* Mes propres fichiers en double avant la spécification.  
* Les formules (α \= 0,15, valeur −1,2, seuil 0,5), que je n'ai gardées qu'après les avoir comprises avec un exemple chiffré.

### **Ce que je retiens du journal**

L'IA m'a servi à produire, structurer, expliquer et me contredire ; elle ne m'a jamais servi de source de vérité ni de décideur.

| Ce que l'IA a bien fait | Ce que j'ai dû contrôler |
| ----- | ----- |
| Mettre en forme un gros volume (48 signaux, 9 pôles) | Dates et chiffres ajoutés sans source (J1, J5) |
| Distinguer fait et hypothèse quand je le lui demande | Tendance à tout traiter plutôt qu'à sélectionner (J2) |
| Critiquer une proposition, y compris la sienne (J7) | Premier document lu pris comme référence (J6) |
| Refuser un usage inutile de l'IA (J5) | Formules et seuils à comprendre avant de les garder (J7, J10) |
| Repérer des incohérences dans mes fichiers (J9) | Suppositions sur NOVA absentes du brief (J8) |

**Mes règles de travail, construites au fil de la semaine :**

1. Donner le contexte complet (brief, classeur, décisions déjà prises) à chaque nouvelle conversation.  
2. Demander explicitement d'être contredit, et une autocritique sur les designs importants.  
3. Revérifier dans la source toute date, tout chiffre, toute consigne.  
4. Exiger un marquage « fait / déduction / à confirmer ».  
5. Ne garder une formule ou un mécanisme que si je sais l'expliquer avec un exemple chiffré.  
6. Utiliser uniquement les données fictives du classeur, jamais de données réelles.

---

## **Partie 3 — Ma note personnelle**

### **Le besoin**

Le problème de NOVA n'est pas le manque d'information, c'est l'absence de tri, de suite et de mémoire. Les verbatims le montrent : chacun lit, sauvegarde ou partage, mais rien ne relie l'information à une décision.

Chaque pôle veut améliorer une décision différente :

| Pôle | Ce qu'il demande | Décision à améliorer |
| ----- | ----- | ----- |
| Direction générale | N'être interrompue que pour une vraie urgence (V13) | Quoi traiter tout de suite, quoi laisser au digest |
| Commercial | Repérer les mouvements des prospects (V05, V06), voir la source et la raison en une phrase (V14) | Quand et comment relancer un compte |
| Produit | Retrouver les décisions passées et leurs résultats (V15) | Arbitrer la feuille de route sans refaire les mêmes débats |
| Customer Success | Être alerté quand un problème touche au moins 3 clients (V16) | Escalader un irritant client au bon moment |
| RH | Moins d'informations, mais avec la raison pour laquelle elles la concernent (V12) | Filtrer ce qui mérite son attention |

Deux besoins sont communs à tous : recevoir l'alerte dans les outils déjà utilisés (V10) et garder une mémoire consultable. Le coût est une contrainte transverse (V11).

### **Les notions IA que j'utilise, et leurs limites**

* **LLM génératif** : produit du texte à partir d'une consigne. Utile pour juger la pertinence d'un texte ou rédiger une fiche. Limite : il peut inventer (hallucination) et ne répond jamais exactement pareil deux fois.  
* **Prompt et consigne contrainte** : la qualité dépend du contexte fourni et des interdits posés (« n'invente ni besoin d'achat, ni budget »). Limite : une consigne trop chargée de règles devient contradictoire ; c'est ce qui m'a fait abandonner le carnet de leçons (J7).  
* **Classer n'est pas générer** : ranger une information dans une liste fermée de pôles se fait par règles ou mots-clés, sans LLM (J5).  
* **Embeddings (similarité de sens)** : détectent deux textes proches sans mots communs. Reportés : à quelques dizaines de signaux par semaine, des règles suffisent pour dédoublonner.  
* **Biais et calibration** : une IA qui note a des erreurs régulières (par exemple surestimer l'urgence d'un sujet réglementaire). Notre mémoire apprend cet écart pour le corriger. Limite : l'écart appris ne vaut que pour un modèle donné (J10).  
* **Humain dans la boucle** : validation des fiches sensibles, choix en cas de signal de dérive, confirmation des corrections. Limite : cela demande du temps aux relecteurs.

### **La solution**

Une information brute traverse 5 étapes et en ressort sous forme de fiche courte adaptée à un pôle : ce qui se passe, pourquoi le pôle est concerné, quoi faire.

| Étape | Ce qui se passe | Qui le fait |
| ----- | ----- | ----- |
| 1\. Collecte | Un connecteur par type de source, puis mise au même format (id, source, date, type, lien). Une source interne alimente Customer Success. | Règles et automatisation |
| 2\. Regroupement | Doublons fusionnés (même lien, même organisation sur une période, titres proches) ; rattachement à un pôle et à un type d'information (« tiroir ») | Règles |
| 3\. Tri | L'IA note pertinence, urgence et impact ; la formule pertinence × 2 \+ urgence × 1,5 \+ impact × 2 donne le score, corrigé par la mémoire et la fiabilité de la source | IA pour noter, formule pour décider |
| 4\. Mise en sens | Rédaction d'une fiche par pôle, avec un bloc de consignes propre à chacun des 9 pôles, sans invention | IA générative, validation humaine si fiche sensible |
| 5\. Diffusion | Alerte envoyée aux seuls abonnés du pôle ; tout le reste au digest (pas d'archive) | Règles |
| Feedback | Les relecteurs jugent la note et la fiche ; les retours ajustent la mémoire ou proposent une fiche corrigée | Humain, puis formule |

**Les briques.** Un registre des sources (actives, en test, en pause), le moteur de règles, l'appel au LLM pour la notation et la rédaction, une mémoire (journal des fiches, mémoire des écarts de notation, historique des versions, bloc « ÉTAT DU SYSTÈME » conservé entre deux exécutions), un tableau de veille par pôle et un canal d'alerte.

**Le parcours utilisateur.**

1. Un abonné du Commercial reçoit une alerte : la fiche cite la source, dit en une phrase pourquoi ce compte le concerne et propose une vérification, sans présenter un besoin d'achat comme un fait.  
2. Il ouvre le tableau de veille de son pôle pour voir les autres informations de la semaine (digest).  
3. S'il est relecteur, il note la fiche sans voir la note de l'IA (double aveugle) et peut commenter une partie précise.  
4. Une fiche mal jugée génère une version 2 à approuver : par l'auteur du commentaire si la correction est de forme, par le référent du pôle si elle change le sens.

**Pourquoi cela répond au besoin.** Le tri limite les interruptions (V13, V12), la fiche donne la raison et la suite (V14), le digest et l'historique constituent la mémoire (V15), le regroupement d'irritants applique le seuil de 3 clients (V16). Pour le POC, tout s'affiche dans la conversation sous forme de tableaux, sans application.

### **Mes arbitrages**

**Un recours à l'IA justifié : la rédaction des fiches (étape 4).** Expliquer à un commercial pourquoi l'ouverture de 15 postes chez HexaPro (N005) le concerne, et quelle vérification faire, demande de comprendre le texte et le besoin du pôle. Aucune règle ne peut l'écrire. La consigne est forte : distinguer fait et interprétation, ne rien inventer, signaler ce qui manque.

**Un choix de règle : le rattachement au pôle (étape 2).** Classer une information dans une liste fermée est une catégorisation, pas une génération. Une règle source → pôle, puis des mots-clés si besoin, est moins chère, reproductible et explicable. Dans le doute, l'information est taguée plutôt qu'écartée.

**Un choix humain : le contrôle du modèle.** Quand les notes de l'IA sur les 5 textes de référence s'écartent d'au moins 0,5 en moyenne, le système ne remet rien à zéro seul. Un humain décide, car l'écart peut venir de la variabilité normale de l'IA et pas d'un vrai changement.

**Un choix que j'ai inversé : le carnet de leçons.** Le 23/09 j'avais retenu des leçons écrites injectées dans le prompt. Le 24/09 j'ai jugé qu'elles finiraient par se contredire, et je les ai remplacées par une mémoire chiffrée : le prompt ne change plus, seule la correction numérique apprend.

### **Données nécessaires**

* **Entrées** : informations collectées (titre, date, source, texte, lien) et, pour Customer Success, messages et comptes rendus internes.  
* **Référentiels** : liste des pôles et de leurs tiroirs, registre des sources avec leur fiabilité, table des abonnements et des référents.  
* **État du système** : mémoire des écarts de notation, journal des fiches et de leurs versions, textes de référence du contrôle du modèle.  
* **À confirmer par NOVA** : ses produits, concurrents et fournisseurs réels, la table d'abonnement, le lieu de stockage et les canaux d'alerte.

### **Le risque principal : l'erreur silencieuse**

Le risque le plus grave n'est pas une fiche fausse visible, c'est une priorité fausse que personne ne voit : une information urgente classée en digest ne génère aucune plainte. Trois garde-fous y répondent : le contrôle du modèle en début d'exécution, le double aveugle qui empêche le relecteur de s'aligner sur l'IA, et une trace de chaque information écartée avec sa raison.

Autres risques traités : invention de faits par l'IA (consigne contrainte et validation humaine des fiches sensibles), confidentialité des données internes de Customer Success (anonymisation, accès limité), et pour le POC, usage exclusif des données fictives du classeur.

---

### **Ma contribution**

Ma contribution est détaillée jour par jour dans la partie 2 (journal de bord), avec les tâches réalisées, les livrables et les décisions prises.

### **Ma progression**

Le 21/09, je pensais surtout en outils et en étapes. Le 22/09, j'ai commencé à demander à l'IA de me contredire. À partir du 23/09, je raisonnais en risques : que se passe-t-il quand le système se trompe sans que personne ne le voie ? C'est ce qui m'a fait abandonner le carnet de leçons, puis comprendre et corriger le contrôle du modèle. Le 25/09, j'ai traduit toute cette logique en maquette, puis rédigé et mis en forme l'ensemble du rendu commun.

Mon principe de départ, « l'IA seulement là où un jugement en langage naturel est indispensable », a tenu toute la semaine, mais je l'ai appliqué plus finement : le tri utilise l'IA pour noter, jamais pour décider seul.

* \[ \] À compléter : ce que les deux autres membres du groupe ont pris en charge  
* \[ \] À compléter : retours reçus en coaching (22/09 et 24/09) et comment je les ai intégrés

---

### **Mon recul**

**La limite principale : la solution est devenue plus complexe que le besoin.** 9 pôles, des mémoires par tiroir, un contrôle du modèle, des versions de fiches : chaque ajout répondait à un vrai problème, mais l'ensemble demande beaucoup de relecteurs et de retours pour apprendre. À quelques dizaines de signaux par semaine, la mémoire chiffrée mettra des semaines à devenir fiable (une douzaine de retours par tiroir).

**Autres limites.**

* Les seuils (0,5 d'écart, α \= 0,15, pondérations 2 / 1,5 / 2\) sont raisonnés mais pas encore mesurés sur des données réelles.  
* Nos informations sur NOVA restent limitées : sans ses produits, concurrents et outils réels, les fiches restent génériques.  
* Nos documents ont évolué vite : la spécification des écrans a relevé 11 contradictions entre eux à résoudre.

**Mes recommandations pour la suite.**

1. Lancer une première version sur 2 ou 3 pôles seulement (Commercial, Direction générale, Customer Success), ceux dont les verbatims donnent les règles les plus claires.  
2. Démarrer sans mémoire chiffrée : mesurer d'abord pendant un mois les écarts entre notes humaines et notes de l'IA, puis activer la correction.  
3. Résoudre les 9 questions bloquantes de la spécification, en priorité : qui valide une fiche sensible.  
4. Mesurer l'usage réel : part d'alertes jugées utiles, fiches corrigées, informations urgentes retrouvées tardivement en digest.

