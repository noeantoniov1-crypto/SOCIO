# **NOVA — Méthodologie du POC de veille**

**Projet :** GBS3 « AI for Business » · **Référence :** `NOVA_marche_a_suivre_workflow_veille.md` (version 2)

---

## **1. Objectif**

NOVA ne manque pas d'informations : elle manque de tri, de suite et de mémoire. Le workflow transforme une liste brute d'informations de veille en **fiches courtes adaptées à chaque pôle**. Chaque fiche répond à trois questions : ce qui se passe, pourquoi le pôle est concerné, et quoi faire.

Le POC montre que ce workflow peut être **exécuté tel quel par un assistant IA conversationnel** (Claude, ChatGPT, Gemini…), sans application ni site web. Tout s'affiche dans la conversation.

## **2. Principe directeur**

* **L'IA seulement là où il faut juger ou rédiger en langage naturel.** Elle sert à tagger, à noter et à rédiger les fiches. Le reste repose sur des règles, des formules et des validations humaines.  
* **Rien n'est inventé.** L'IA ne crée aucun fait, chiffre, lien ou besoin d'achat. Ce qui manque est signalé comme « à confirmer ».  
* **Les humains décident.** Les propositions de l'IA ne s'appliquent qu'après confirmation.

## **3. Comment on lance le POC**

1. Ouvrir une conversation avec l'assistant IA.  
2. Joindre la marche à suivre et coller les informations à traiter : ID, source, date, titre, texte, lien.  
3. Joindre le bloc « ÉTAT DU SYSTÈME » de l'exécution précédente, s'il existe.  
4. L'assistant déroule les 5 étapes et rend dans la conversation :
   * les alertes ;  
   * les tableaux de veille par pôle ;  
   * les fiches complètes ;  
   * le nouvel état.

## **4. Le workflow en 5 étapes**

    flowchart LR
      A[1. Collecte<br/>règles] --> B[2. Regroupement<br/>doublons + tagage]
      B --> C[3. Priorisation<br/>notes IA + formule]
      C --> D[4. Mise en sens<br/>fiche par pôle]
      D --> E[5. Diffusion<br/>alerte ou digest]
      E -. retours .-> C
      E -. retours .-> D

| Étape | Ce qui se passe | Qui le fait |
| ----- | ----- | ----- |
| 1\. Collecte et normalisation | Identifiant unique (N, I, P…), format commun, source cherchée dans le registre, données personnelles remplacées par des rôles | Règles |
| 2\. Regroupement et tagage | Fusion des doublons, regroupement des irritants clients (Customer Success), attribution de 1 à 3 pôles et d'un « tiroir » (type d'information) par pôle ; le bruit est écarté avec sa raison | Règles + IA |
| 3\. Priorisation | L'IA note pertinence, urgence et impact (0 à 5) pour chaque pôle ; une formule calcule le score et décide : alerte ou digest | IA pour noter, formule pour décider |
| 4\. Mise en sens | Une fiche par couple information × pôle, avec des consignes propres à chaque pôle ; contrôle du format ; validation humaine si la fiche est sensible | IA + contrôle humain |
| 5\. Diffusion | Un tableau de veille par pôle ; les alertes vont aux seuls abonnés | Règles |

**Les 9 pôles.** Direction générale, Direction financière, Marketing, Commercial, Produit, Customer Success, Opérations, RH, et un pôle transverse « conception NOVA ».

## **5. La règle de décision**

    score = pertinence × 2 + urgence × 1,5 + impact × 2          (0 à 27,5)
    score de confirmation = score + bonus de fiabilité de la source   (−2,5 à +2,5)

Les règles s'appliquent dans l'ordre : la première qui est vraie décide.

1. **Événement majeur** (qui transforme tout un secteur) → alerte « à vérifier ».  
2. **Score ≥ 24** → alerte « à vérifier » (plancher de sécurité, même si la source est inconnue).  
3. **Score de confirmation ≥ 20** → alerte.  
4. Sinon → **digest**. Rien n'est archivé.

Pour Customer Success, un irritant passe en alerte dès qu'il touche **3 clients** ou qu'il est bloquant.

## **6. Une fiche adaptée à chaque pôle**

Toutes les fiches ont un tronc commun : titre, résumé des faits, « pourquoi vous », action proposée (quoi, qui, quand), incertitudes et sources avec leurs liens. Chaque pôle ajoute ses propres champs :

| Pôle | Ce que la fiche ajoute |
| ----- | ----- |
| Direction générale | Ce que ça change pour NOVA, horizon, décision attendue (80 mots maximum) |
| Direction financière | Impact financier et base de calcul, lien avec le coût de l'IA |
| Marketing | Verdict produire / surveiller / ignorer, angle de contenu |
| Commercial | Compte, type de mouvement, prochaine action et accroche, fenêtre d'opportunité |
| Produit | Impact pour les utilisateurs, options et effort, question à trancher |
| Customer Success | Irritant consolidé, clients concernés, gravité |
| Opérations | Élément touché, NOVA concernée ou non, gravité, actions immédiates |
| RH | Population concernée, échéance (60 mots maximum) |
| Transverse | Enseignement et application à la conception de NOVA |

## **7. La boucle de feedback**

Les relecteurs réagissent aux fiches avec des commandes simples. Ils voient les notes finales, mais pas la note de départ de l'IA : c'est le « double aveugle ».

| Retour | Ce qu'il modifie |
| ----- | ----- |
| Vrai / faux | La fiabilité de la source (moyenne mobile) |
| Priorité trop haute / trop basse | Une mémoire chiffrée par pôle, critère et tiroir, qui corrige les notes suivantes de ±1 au maximum |
| Mauvais tiroir / mauvais pôle | La fiche concernée ; après 3 corrections identiques, une proposition de redirection |
| Fiche mal rédigée | Une version 2 de la fiche, à approuver ; après 3 corrections approuvées dans le même sens, une règle de rédaction |
| Information manquée / nouvelle source | Le registre des sources |
| Décision prise | Le journal des décisions, rappelé dans les fiches suivantes |

**Les garde-fous.**

* Les prompts de tagage et de notation ne changent jamais à cause d'un retour : seuls des nombres et des tables à clé unique évoluent.  
* Aucune table ne change sans confirmation humaine.  
* Un **contrôle du modèle** renote 5 textes de référence au début de chaque exécution, pour détecter un changement d'assistant ou de modèle.

## **8. La mémoire entre deux exécutions**

L'assistant n'a pas de mémoire d'une conversation à l'autre. Le bloc **« ÉTAT DU SYSTÈME »** (JSON), rendu à la fin de chaque réponse, conserve tout ce qui compte :

* les compteurs d'identifiants ;  
* le registre des sources ;  
* les mémoires de notation ;  
* les fiches récentes et leurs versions ;  
* les propositions en attente ;  
* le journal des décisions.

L'utilisateur le garde et le recolle à l'exécution suivante.

## **9. Premier test**

Le workflow a été testé sur 3 informations de 3 sources : Startup Radar, Marketing Bench et B2B Growth.

**Résultat.** 6 fiches (2 pôles par information), toutes au digest, avec un meilleur score de 17 pour un seuil d'alerte à 20. Il n'y a eu ni doublon ni information écartée. Aucun lien ni chiffre n'a été inventé, et les inconnues ont été signalées.

**Ce qui reste à tester.** Le détail est dans l'annexe individuelle, partie 1.

* les alertes ;  
* Customer Success ;  
* les doublons ;  
* la boucle de feedback.

## **10. Limites du POC**

* Les seuils et coefficients (20, 24, α = 0,15…) sont raisonnés, mais pas encore mesurés sur des données réelles.  
* Les produits, concurrents et outils réels de NOVA ne sont pas connus : les fiches restent génériques sur ces points.  
* La mémoire chiffrée demande une douzaine de retours par tiroir avant d'être fiable.  
* Dans le POC, rien n'est envoyé automatiquement, et la mention « référent » est déclarative.
