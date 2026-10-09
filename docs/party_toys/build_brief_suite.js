// Party Toys – suite du brief créatif (style des slides « Pour qui » / « Livrables »)
const path = require('path');
const fs = require('fs');
const pptxgen = require('pptxgenjs');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const sharp = require('sharp');
const fa = require('react-icons/fa6');

const EX = path.join(__dirname, 'ex');
const OUT = process.argv[2];
const ICON_DIR = path.join(__dirname, 'icons');
fs.mkdirSync(ICON_DIR, { recursive: true });

// Couleurs relevées sur les 2 slides existantes
const C = {
  ink: '14261C', night: '10221A', card: '1D3A2B', green: '00B85C', mint: 'E6F6EC',
  grey: '4A4F55', red: 'E8423A', yellow: 'FFC629', blue: '3C8DDE', white: 'FFFFFF',
  muted: '5F6B64', mutedDark: 'C8D8D0', paper: 'F7F7F2',
};
const H = 'Arial', B = 'Calibri';
const COPY = 'Copyright équipe “Pixel Toys” - ANTONIO Noé - BEFFY Martin - CHAUVIN Lucas - ROUAY--ANTOINE Manau - REY Nathan';

async function icon(name, color, size = 256) {
  const f = path.join(ICON_DIR, `${name}_${color}.png`);
  if (fs.existsSync(f)) return f;
  const svg = renderToStaticMarkup(React.createElement(fa[name], { color: '#' + color, size }));
  await sharp(Buffer.from(svg)).png().toFile(f);
  return f;
}

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5
pptx.title = 'Party Toys – Brief créatif (suite)';

function base(dark) {
  const s = pptx.addSlide();
  s.background = { color: dark ? C.night : C.white };
  s.addText(COPY, { x: 0.5, y: 7.12, w: 12.3, h: 0.25, fontFace: H, fontSize: 7, color: dark ? '6F8A7C' : '9AA39E', align: 'center' });
  return s;
}
function title(s, t, dark, sub) {
  s.addText(t, { x: 0.6, y: 0.35, w: 12.2, h: 0.85, fontFace: H, fontSize: 34, color: dark ? C.white : C.ink, margin: 0 });
  if (sub) s.addText(sub, { x: 0.6, y: 1.13, w: 12.2, h: 0.35, fontFace: B, fontSize: 14, color: dark ? C.mutedDark : C.muted, margin: 0 });
}
function tag(s, x, y, txt, fill, color) {
  s.addText(txt, { x, y, w: 1.25, h: 0.26, fontFace: B, fontSize: 9, bold: true, color, fill: { color: fill }, align: 'center', valign: 'middle', margin: 0, charSpacing: 1, rectRadius: 0.06, shape: pptx.ShapeType.roundRect });
}
async function bubble(s, x, y, d, name, dark) {
  s.addShape(pptx.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: dark ? C.green : C.mint }, line: { type: 'none' } });
  const p = d * 0.5;
  s.addImage({ path: await icon(name, dark ? C.night : C.green), x: x + (d - p) / 2, y: y + (d - p) / 2, w: p, h: p });
}
const link = (txt, url) => ({ text: txt, options: { hyperlink: { url }, color: C.green, underline: true } });

const SRC = {
  sell: 'https://www.sell.fr/sites/default/files/essentiel-jeu-video/ejv_septembre_2025_def_0.pdf',
  circana: 'https://circana.com/intelligence/press-releases/2024/playful-profits-fandom-and-nostalgia-fuel-growth-of-teens-and-adults-e4-5bn-toy-market-in-europe',
  gil: 'https://gameindustrylibrary.com/research/shared/6-how-has-the-friendslop-genre-evolved',
  htmag: 'https://howtomarketagame.com/2024/06/24/do-demos-help-earn-wishlists-steam-next-fest-june-2024/',
  steam: 'https://partner.steamgames.com/doc/store/assets/standard',
  wcag: 'https://www.w3.org/TR/WCAG21/#contrast-minimum',
};

(async () => {
  // ───────── 1. Objectifs de la campagne (à placer AVANT « Pour qui ») ─────────
  {
    const s = base(false);
    title(s, 'Pourquoi cette campagne ?', false, 'Objectifs, sujet et message clé du brief');
    const cols = [
      ['FaBullseye', 'Objectif', 'Faire connaître un party game indépendant sans notoriété et transformer la curiosité en intention de jeu.',
        ['Ajouts en liste de souhaits Steam', 'Joueurs de la démo', 'Membres du Discord']],
      ['FaBullhorn', 'Sujet', 'Teaser puis lancer la démo jouable de Party Toys sur Steam (PC), avant la sortie en accès anticipé.',
        ['Révélation du jeu', 'Démo jouable', 'Sortie en accès anticipé']],
      ['FaKey', 'Message clé', 'Vos jouets d’enfance prennent vie sur le tapis de ville : jusqu’à 10 amis, des mini-jeux qui changent à chaque manche… et un enfant qui sème le chaos.',
        ['Nostalgie', 'Entre amis', 'Chaos & fous rires']],
    ];
    const W = 3.85, G = 0.33, X0 = 0.6;
    for (let i = 0; i < 3; i++) {
      const [ic, h, body, chips] = cols[i];
      const x = X0 + i * (W + G);
      s.addShape(pptx.ShapeType.roundRect, { x, y: 1.85, w: W, h: 4.2, fill: { color: 'F4FAF6' }, line: { color: 'D5EEDD', width: 1 }, rectRadius: 0.12 });
      await bubble(s, x + 0.3, 2.1, 0.8, ic, false);
      s.addText(h, { x: x + 1.25, y: 2.2, w: W - 1.4, h: 0.6, fontFace: B, fontSize: 22, bold: true, color: C.green, margin: 0 });
      s.addText(body, { x: x + 0.3, y: 3.1, w: W - 0.6, h: 1.65, fontFace: B, fontSize: 15, color: C.ink, valign: 'top', margin: 0 });
      s.addText(i === 0 ? 'INDICATEURS PROPOSÉS' : i === 1 ? 'TEMPS FORTS' : 'TROIS PROMESSES', { x: x + 0.3, y: 4.8, w: W - 0.6, h: 0.3, fontFace: B, fontSize: 10, bold: true, color: C.muted, charSpacing: 2, margin: 0 });
      s.addText(chips.map((c) => ({ text: c, options: { bullet: { code: '25CF' }, breakLine: true } })),
        { x: x + 0.3, y: 5.1, w: W - 0.6, h: 0.85, fontFace: B, fontSize: 12.5, color: C.ink, margin: 0, paraSpaceAfter: 2 });
    }
    s.addShape(pptx.ShapeType.roundRect, { x: 0.6, y: 6.3, w: 12.2, h: 0.62, fill: { color: C.green }, line: { type: 'none' }, rectRadius: 0.1 });
    s.addText([
      { text: 'HYPOTHÈSE  ', options: { bold: true, charSpacing: 2 } },
      { text: 'Le jalon « démo puis accès anticipé » et les indicateurs sont à valider par l’équipe : le brief GBS3 demande le but de la campagne et ce que l’on célèbre ou teasé.' },
    ], { x: 0.85, y: 6.3, w: 11.8, h: 0.62, fontFace: B, fontSize: 13, color: C.night, valign: 'middle', margin: 0 });
  }

  // ───────── 2. Habitudes de la cible → ce qu'on lui propose ─────────
  {
    const s = base(false);
    title(s, 'Ce que fait notre cible… et ce qu’on lui propose', false);
    s.addText('Ses habitudes (sourcées)', { x: 0.6, y: 1.3, w: 6, h: 0.45, fontFace: B, fontSize: 20, bold: true, color: C.green, margin: 0 });
    s.addText('Notre proposition', { x: 7.35, y: 1.3, w: 5.4, h: 0.45, fontFace: B, fontSize: 20, bold: true, color: C.green, margin: 0 });
    const rows = [
      ['FaUserGroup', '86 %', 'des joueurs français jouent avec leurs amis ; 65 % partagent leurs sessions.', [link('SELL / Médiamétrie, sept. 2025', SRC.sell)],
        'Pack « soirée » : salon privé jusqu’à 10, code d’invitation à partager et lien Discord dans le hub.'],
      ['FaDiscord', '51 %', 'des 16-30 ans se sont fait des amis grâce au jeu vidéo ; 56 % des 10-30 ans se disent « gamers ».', [link('SELL / Médiamétrie, sept. 2025', SRC.sell)],
        'Serveur Discord + « Toy Night » hebdomadaire : l’équipe joue avec la communauté et fait voter le prochain mini-jeu.'],
      ['FaTiktok', '4 / 10', 'meilleures ventes Steam 2025 sont des jeux « entre amis » (Peak : 15,4 M) qui vivent de clips de ratés partagés.', [link('GameDev Reports via Game Industry Library, 2026', SRC.gil)],
        'Bouton « clip 15 s » vertical après chaque manche + mode streamer où le chat Twitch pilote l’enfant.'],
      ['FaRobot', '28,5 %', 'des ventes de jouets en Europe (EU5) concernent les 12 ans et plus, portées par la nostalgie.', [link('Circana, 2024 (données 2023)', SRC.circana)],
        'Récompenses = jouets d’époque à collectionner pour sa chambre ; posts « Quel jouet étais-tu ? ».'],
      ['FaGamepad', '≈ 20 %', 'des joueurs d’une démo du Steam Next Fest l’ajoutent ensuite à leur liste de souhaits.', [link('How To Market A Game, 24/06/2024', SRC.htmag)],
        'Démo gratuite jouable à plusieurs, mise en avant pendant le Steam Next Fest.'],
    ];
    const y0 = 1.82, rh = 1.04;
    for (let i = 0; i < rows.length; i++) {
      const [ic, big, txt, src, prop] = rows[i];
      const y = y0 + i * rh;
      await bubble(s, 0.6, y + 0.1, 0.72, ic, false);
      s.addText(big, { x: 1.42, y: y + 0.05, w: 1.2, h: 0.55, fontFace: H, fontSize: 24, bold: true, color: C.green, margin: 0, fit: 'shrink' });
      s.addText(txt, { x: 2.65, y: y + 0.0, w: 4.1, h: 0.66, fontFace: B, fontSize: 11.5, color: C.ink, valign: 'top', margin: 0 });
      s.addText([{ text: 'Source : ', options: { color: C.muted } }, ...src], { x: 2.65, y: y + 0.7, w: 4.1, h: 0.22, fontFace: B, fontSize: 9, margin: 0 });
      s.addImage({ path: await icon('FaArrowRight', C.green), x: 6.88, y: y + 0.3, w: 0.3, h: 0.3 });
      s.addShape(pptx.ShapeType.roundRect, { x: 7.35, y: y + 0.04, w: 5.45, h: 0.86, fill: { color: C.mint }, line: { type: 'none' }, rectRadius: 0.08 });
      s.addText(prop, { x: 7.55, y: y + 0.04, w: 5.1, h: 0.86, fontFace: B, fontSize: 13, color: C.ink, valign: 'middle', margin: 0 });
      if (i < rows.length - 1) s.addShape(pptx.ShapeType.line, { x: 0.6, y: y + rh - 0.05, w: 6.15, h: 0, line: { color: 'E3E8E5', width: 0.75 } });
    }
  }

  // ───────── 3. Le cadrage ─────────
  {
    const s = base(true);
    title(s, 'Le cadrage', true, 'Où, quand, combien et sous quels formats');
    const cards = [
      ['FaEarthEurope', 'Territoires', 'France d’abord, puis Europe francophone et anglophone (contenus FR + EN).'],
      ['FaDesktop', 'Plateformes', 'Steam (PC) pour jouer · TikTok, YouTube Shorts, Instagram, X pour faire voir · Twitch et Discord pour fédérer.'],
      ['FaCalendarDays', 'Durée', '12 semaines : 6 avant la démo, la semaine du Steam Next Fest, 5 après.'],
      ['FaCropSimple', 'Formats', 'Bande-annonce 16:9 (60-90 s) · clips 9:16 (15-30 s) · affiches 2:3 · capsules Steam 920×430, 1232×706, 748×896.'],
      ['FaHandshake', 'Prestataires', 'Monteur / motion designer (bande-annonce, clips) · agence ou freelance pour le sourcing des streamers.'],
      ['FaEuroSign', 'Budget', 'Enveloppe de 20 k€ : 50 % streamers, 25 % production vidéo, 15 % publicité sociale, 10 % communauté.'],
    ];
    const W = 3.6, Hc = 1.52, G = 0.25;
    for (let i = 0; i < cards.length; i++) {
      const [ic, h, body] = cards[i];
      const x = 0.6 + (i % 2) * (W + G), y = 1.65 + Math.floor(i / 2) * (Hc + 0.15);
      s.addShape(pptx.ShapeType.roundRect, { x, y, w: W, h: Hc, fill: { color: C.card }, line: { type: 'none' }, rectRadius: 0.1 });
      await bubble(s, x + 0.22, y + 0.2, 0.62, ic, true);
      s.addText(h, { x: x + 1.0, y: y + 0.22, w: W - 1.1, h: 0.58, fontFace: B, fontSize: 19, bold: true, color: C.white, margin: 0, valign: 'middle' });
      s.addText(body, { x: x + 0.22, y: y + 0.82, w: W - 0.42, h: Hc - 0.88, fontFace: B, fontSize: 11.5, color: C.mutedDark, valign: 'top', margin: 0 });
      if (h === 'Budget' || h === 'Durée') tag(s, x + W - 1.4, y + 0.12, 'HYPOTHÈSE', C.yellow, C.night);
    }
    s.addText([{ text: 'Formats Steam : ', options: { color: '6F8A7C' } }, link('Steamworks, Graphical assets', SRC.steam)],
      { x: 0.6, y: 6.6, w: 7.5, h: 0.25, fontFace: B, fontSize: 9.5, margin: 0 });
    // Campagnes de référence
    const rx = 8.45, rw = 4.35;
    s.addShape(pptx.ShapeType.roundRect, { x: rx, y: 1.65, w: rw, h: 4.86, fill: { color: C.green }, line: { type: 'none' }, rectRadius: 0.12 });
    s.addText('CAMPAGNES DE RÉFÉRENCE', { x: rx + 0.35, y: 1.9, w: rw - 0.6, h: 0.35, fontFace: H, fontSize: 12, bold: true, color: C.night, charSpacing: 3, margin: 0 });
    const refs = [
      ['Peak (2025)', 'Un jeu « entre amis » porté par les clips de ratés sur TikTok et Discord.'],
      ['Fall Guys (2020)', 'Des streamers qui jouent ensemble dans la même partie, en direct.'],
      ['Toy Story', 'La référence d’univers : des jouets expressifs qui vivent quand on ne les regarde pas.'],
    ];
    refs.forEach(([h, b], i) => {
      const y = 2.45 + i * 1.3;
      s.addText(h, { x: rx + 0.35, y, w: rw - 0.6, h: 0.4, fontFace: B, fontSize: 18, bold: true, color: C.night, margin: 0 });
      s.addText(b, { x: rx + 0.35, y: y + 0.4, w: rw - 0.6, h: 0.75, fontFace: B, fontSize: 13, color: C.night, valign: 'top', margin: 0 });
    });
  }

  // ───────── 4. Timeline avant / jour J / après ─────────
  {
    const s = base(false);
    title(s, 'Le déroulé : avant, pendant, après', false, 'Chaque phase réutilise les livrables de la slide précédente');
    const phases = [
      ['AVANT', 'S-6 → S-1', 'FaEye', 'Éveiller la curiosité', [
        'Teaser : « Quelque chose bouge dans la chambre… »',
        'Page Steam ouverte aux listes de souhaits',
        'Un clip vertical par semaine (un jouet, un mini-jeu)',
        'Discord ouvert, première Toy Night',
        'Kit streamers envoyé à S-2'], 'Listes de souhaits, abonnés'],
      ['JOUR J', 'Steam Next Fest', 'FaRocket', 'Faire jouer', [
        'Bande-annonce de lancement de la démo',
        '10 streamers dans la même partie, en direct',
        'Affiches Racing, KOTH et Only Up',
        'Vidéo multijoueur : « l’enfant arrive »'], 'Joueurs de la démo, pics de spectateurs'],
      ['APRÈS', 'S+1 → S+5', 'FaTrophy', 'Faire rester', [
        'Concours « la plus belle chambre » (captures)',
        'Vote de la communauté pour le prochain mini-jeu',
        'Best-of des clips de la semaine',
        'Annonce de la date d’accès anticipé'], 'Membres Discord actifs, contenus créés par les joueurs'],
    ];
    const W = 3.95, G = 0.18, y = 1.95;
    for (let i = 0; i < 3; i++) {
      const [ph, when, ic, goal, acts, kpi] = phases[i];
      const x = 0.6 + i * (W + G);
      await bubble(s, x, y, 0.5, ic, true);
      s.addText([{ text: ph, options: { bold: true, color: C.green } }, { text: '   ' + when, options: { color: C.muted } }],
        { x: x + 0.62, y: y, w: W - 0.6, h: 0.5, fontFace: B, fontSize: 16, valign: 'middle', margin: 0 });
      const cy = 2.7;
      s.addShape(pptx.ShapeType.roundRect, { x, y: cy, w: W, h: 4.15, fill: { color: i === 1 ? C.night : 'F4FAF6' }, line: { color: i === 1 ? C.night : 'D5EEDD', width: 1 }, rectRadius: 0.1 });
      const fg = i === 1 ? C.white : C.ink;
      s.addText(goal, { x: x + 0.25, y: cy + 0.2, w: W - 0.5, h: 0.45, fontFace: B, fontSize: 19, bold: true, color: i === 1 ? C.green : C.ink, margin: 0 });
      s.addText(acts.map((a) => ({ text: a, options: { bullet: { code: '25CF' }, breakLine: true } })),
        { x: x + 0.25, y: cy + 0.75, w: W - 0.5, h: 2.5, fontFace: B, fontSize: 13, color: fg, valign: 'top', margin: 0, paraSpaceAfter: 5 });
      s.addShape(pptx.ShapeType.line, { x: x + 0.25, y: cy + 3.35, w: W - 0.5, h: 0, line: { color: i === 1 ? '2E5140' : 'D5EEDD', width: 0.75 } });
      s.addText([{ text: 'ON MESURE  ', options: { bold: true, color: C.green, charSpacing: 1 } }, { text: kpi, options: { color: i === 1 ? C.mutedDark : C.muted } }],
        { x: x + 0.25, y: cy + 3.42, w: W - 0.5, h: 0.6, fontFace: B, fontSize: 11.5, valign: 'middle', margin: 0 });
    }
  }

  // ───────── 5. Sourcing streamers & kit ─────────
  {
    const s = base(true);
    title(s, 'Sourcing streamers & kit', true, 'Les attentes du brief : qui faire jouer, et avec quels outils');
    s.addText('Qui faire jouer ?', { x: 0.6, y: 1.65, w: 6, h: 0.45, fontFace: B, fontSize: 20, bold: true, color: C.green, margin: 0 });
    const tiers = [
      ['Micro', '5 k – 50 k abonnés', 'Groupes d’amis qui streament déjà Fall Guys, Peak ou R.E.P.O. ensemble. Le cœur du dispositif.', 'Une vingtaine'],
      ['Intermédiaires', '50 k – 500 k', 'Créateurs « soirée entre potes » : ils font les clips qui circulent sur TikTok.', '5 à 8'],
      ['Tête d’affiche', '> 500 k', 'Une seule, pour réunir les 10 streamers dans la partie du Jour J.', '1'],
    ];
    tiers.forEach(([n, size, d, q], i) => {
      const y = 2.2 + i * 1.32;
      s.addShape(pptx.ShapeType.roundRect, { x: 0.6, y, w: 6.3, h: 1.18, fill: { color: C.card }, line: { type: 'none' }, rectRadius: 0.08 });
      s.addText(n, { x: 0.85, y: y + 0.12, w: 2.3, h: 0.4, fontFace: B, fontSize: 17, bold: true, color: C.white, margin: 0 });
      s.addText(size, { x: 0.85, y: y + 0.52, w: 2.3, h: 0.35, fontFace: B, fontSize: 12, color: C.green, margin: 0 });
      s.addText(d, { x: 3.1, y: y + 0.1, w: 2.6, h: 0.98, fontFace: B, fontSize: 11.5, color: C.mutedDark, valign: 'middle', margin: 0 });
      s.addText(q, { x: 5.75, y: y + 0.1, w: 1.0, h: 0.98, fontFace: H, fontSize: 13, bold: true, color: C.green, align: 'center', valign: 'middle', margin: 0, fit: 'shrink' });
    });
    s.addText('Critères : audience 15-30 ans francophone · joue déjà en groupe · ton bienveillant (PEGI) · taux d’engagement plutôt que nombre d’abonnés.',
      { x: 0.6, y: 6.2, w: 6.3, h: 0.6, fontFace: B, fontSize: 11.5, color: C.mutedDark, margin: 0, valign: 'top' });
    // Kit
    const kx = 7.25, kw = 5.55;
    s.addShape(pptx.ShapeType.roundRect, { x: kx, y: 1.65, w: kw, h: 5.2, fill: { color: C.green }, line: { type: 'none' }, rectRadius: 0.12 });
    s.addText('CONTENU DU KIT STREAMERS', { x: kx + 0.35, y: 1.85, w: kw - 0.6, h: 0.35, fontFace: H, fontSize: 12, bold: true, color: C.night, charSpacing: 3, margin: 0 });
    const kit = [
      ['FaTicket', '10 clés de démo', 'pour tout son groupe d’amis'],
      ['FaChildReaching', 'Extension « l’enfant »', 'le chat déclenche le chaos'],
      ['FaPalette', 'Overlay & alertes', 'aux couleurs du tapis de ville'],
      ['FaImage', 'Assets', 'logo, key art, affiches, musique libre'],
      ['FaListCheck', 'Brief', 'à faire / à éviter, calendrier, # à utiliser'],
    ];
    for (let i = 0; i < kit.length; i++) {
      const [ic, h, d] = kit[i];
      const y = 2.4 + i * 0.86;
      s.addShape(pptx.ShapeType.ellipse, { x: kx + 0.35, y, w: 0.6, h: 0.6, fill: { color: C.night }, line: { type: 'none' } });
      s.addImage({ path: await icon(ic, C.green), x: kx + 0.5, y: y + 0.15, w: 0.3, h: 0.3 });
      s.addText([{ text: h, options: { bold: true, breakLine: true } }, { text: d }],
        { x: kx + 1.15, y: y - 0.05, w: kw - 1.4, h: 0.72, fontFace: B, fontSize: 14, color: C.night, valign: 'middle', margin: 0 });
    }
  }

  // ───────── 6. Hypothèse de couleur ─────────
  {
    const s = base(false);
    title(s, 'Hypothèse de couleur : le tapis de ville', false, 'Les 5 pastilles de la palette, précisées en HEX avec un rôle chacune');
    s.addImage({ path: path.join(EX, 'p-000.png'), x: 0.6, y: 1.75, w: 2.55, h: 2.55 });
    s.addText('Sur l’image du tapis (moodboard), le gris des routes couvre environ un tiers de la surface et les verts environ un sixième : ils deviennent la base, les couleurs vives des jouets restent des touches.',
      { x: 0.6, y: 4.4, w: 2.55, h: 2.0, fontFace: B, fontSize: 11.5, color: C.muted, valign: 'top', margin: 0 });
    const sw = [
      ['PRIMAIRE', 'Vert jouet', C.green, 'Titres, boutons, appels à l’action, logo', C.night],
      ['SECONDAIRE', 'Vert nuit', C.night, 'Fonds sombres, textes sur couleur vive', C.white],
      ['SECONDAIRE', 'Gris asphalte', C.grey, 'Routes, cadres, interface', C.white],
      ['ACCENT', 'Rouge Racing', C.red, 'Mini-jeu Racing', C.night],
      ['ACCENT', 'Jaune KOTH', C.yellow, 'Mini-jeu King of the Hill', C.night],
      ['ACCENT', 'Bleu Only Up', C.blue, 'Mini-jeu Only Up', C.night],
    ];
    const X0 = 3.5, W = 1.45, G = 0.13;
    sw.forEach(([role, name, hex, use, fg], i) => {
      const x = X0 + i * (W + G);
      s.addText(role, { x, y: 1.75, w: W, h: 0.28, fontFace: B, fontSize: 9.5, bold: true, color: C.muted, charSpacing: 2, margin: 0 });
      s.addShape(pptx.ShapeType.roundRect, { x, y: 2.05, w: W, h: 1.75, fill: { color: hex }, line: { color: hex === C.white ? 'DDDDDD' : hex, width: 1 }, rectRadius: 0.1 });
      s.addText('Aa', { x: x + 0.15, y: 2.15, w: W - 0.3, h: 0.7, fontFace: H, fontSize: 26, bold: true, color: fg, margin: 0 });
      s.addText('#' + hex, { x: x + 0.15, y: 3.35, w: W - 0.3, h: 0.35, fontFace: H, fontSize: 11, bold: true, color: fg, margin: 0 });
      s.addText(name, { x, y: 3.9, w: W, h: 0.32, fontFace: B, fontSize: 13, bold: true, color: C.ink, margin: 0 });
      s.addText(use, { x, y: 4.2, w: W, h: 0.65, fontFace: B, fontSize: 10.5, color: C.muted, valign: 'top', margin: 0 });
    });
    // Règle de proportion
    const bx = X0, bw = 6 * W + 5 * G, by = 5.05;
    s.addText('RÈGLE DE DOSAGE', { x: bx, y: by, w: 3, h: 0.28, fontFace: B, fontSize: 9.5, bold: true, color: C.muted, charSpacing: 2, margin: 0 });
    const parts = [[0.6, C.night, '60 % fonds : vert nuit / blanc'], [0.3, C.green, '30 % vert jouet'], [0.1, C.red, '10 % accent']];
    let cx = bx;
    parts.forEach(([p, col, lab]) => {
      const w = bw * p;
      s.addShape(pptx.ShapeType.rect, { x: cx, y: by + 0.32, w, h: 0.42, fill: { color: col }, line: { type: 'none' } });
      s.addText(lab, { x: cx + 0.1, y: by + 0.32, w: w - 0.1, h: 0.42, fontFace: B, fontSize: 11, bold: true, color: col === C.night ? C.white : C.night, valign: 'middle', margin: 0, fit: 'shrink' });
      cx += w;
    });
    s.addText([
      { text: 'Une seule couleur d’accent par mini-jeu, jamais deux sur le même visuel. ', options: { bold: true, color: C.ink } },
      { text: 'Texte foncé (#10221A) sur vert, jaune, bleu et rouge : le blanc n’y atteint pas le contraste minimal (2,6 : 1 sur le vert, 1,6 : 1 sur le jaune) ; le vert nuit y dépasse 4 : 1. ', options: { color: C.muted } },
      link('WCAG 2.1, critère 1.4.3', SRC.wcag),
    ], { x: bx, y: 5.95, w: bw, h: 0.9, fontFace: B, fontSize: 11, valign: 'top', margin: 0 });
    tag(s, 11.55, 0.5, 'HYPOTHÈSE', C.yellow, C.night);
  }

  // ───────── 7. Déclinaison de la palette ─────────
  {
    const s = base(true);
    title(s, 'Déclinaison : une couleur par mini-jeu', true, 'La même grille, trois accents : on reconnaît le mini-jeu avant de lire son nom');
    const posters = [
      ['RACING', 'p-013.png', C.red, 'Course de voitures sur les routes du tapis'],
      ['KING OF THE HILL', 'p-014.png', C.yellow, 'Tenir le sommet le plus longtemps'],
      ['ONLY UP', 'p-012.png', C.blue, 'Grimper toujours plus haut dans la chambre'],
    ];
    const pw = 2.55, ph = 3.82, G = 0.3, y = 1.7;
    for (let i = 0; i < 3; i++) {
      const [name, img, col, line] = posters[i];
      const x = 0.6 + i * (pw + G);
      s.addShape(pptx.ShapeType.rect, { x, y, w: pw, h: ph, fill: { color: col }, line: { type: 'none' } });
      s.addImage({ path: path.join(EX, img), x: x + 0.15, y: y + 0.15, w: pw - 0.3, h: 2.0, sizing: { type: 'cover', w: pw - 0.3, h: 2.0 } });
      s.addText('PARTY TOYS', { x: x + 0.15, y: y + 2.25, w: pw - 0.3, h: 0.3, fontFace: H, fontSize: 10, bold: true, color: C.night, charSpacing: 4, margin: 0 });
      s.addText(name, { x: x + 0.15, y: y + 2.52, w: pw - 0.3, h: 0.5, fontFace: 'Arial Black', fontSize: 15, color: C.night, margin: 0, valign: 'top', fit: 'shrink' });
      s.addText(line, { x: x + 0.15, y: y + 3.08, w: pw - 0.3, h: 0.6, fontFace: B, fontSize: 11, color: C.night, valign: 'top', margin: 0 });
      s.addText('Affiche 2:3 · #' + col, { x, y: y + ph + 0.08, w: pw, h: 0.3, fontFace: B, fontSize: 10.5, color: C.mutedDark, margin: 0 });
    }
    // Clip vertical 9:16
    const vx = 9.3, vw = 1.75, vh = vw * 16 / 9;
    s.addShape(pptx.ShapeType.roundRect, { x: vx, y, w: vw, h: vh, fill: { color: C.night }, line: { color: C.green, width: 2 }, rectRadius: 0.12 });
    s.addImage({ path: path.join(EX, 'p-013.png'), x: vx + 0.08, y: y + 0.55, w: vw - 0.16, h: 1.4, sizing: { type: 'cover', w: vw - 0.16, h: 1.4 } });
    s.addText('L’ENFANT ARRIVE…', { x: vx + 0.1, y: y + 0.12, w: vw - 0.2, h: 0.35, fontFace: 'Arial Black', fontSize: 10, color: C.yellow, align: 'center', margin: 0, fit: 'shrink' });
    s.addText('10 joueurs, 1 tapis', { x: vx + 0.1, y: y + 2.05, w: vw - 0.2, h: 0.3, fontFace: B, fontSize: 10, color: C.white, align: 'center', margin: 0 });
    s.addText('Ajouter à ma liste', { x: vx + 0.18, y: y + vh - 0.6, w: vw - 0.36, h: 0.36, fontFace: B, fontSize: 10, bold: true, color: C.night, fill: { color: C.green }, align: 'center', valign: 'middle', margin: 0, shape: pptx.ShapeType.roundRect, rectRadius: 0.08 });
    s.addText('Clip TikTok 9:16', { x: vx, y: y + vh + 0.08, w: vw, h: 0.3, fontFace: B, fontSize: 10.5, color: C.mutedDark, margin: 0 });
    // Capsule Steam
    const sx = 11.3, sw2 = 1.5;
    s.addText('Capsule Steam', { x: sx, y, w: sw2, h: 0.3, fontFace: B, fontSize: 10.5, color: C.mutedDark, margin: 0 });
    s.addShape(pptx.ShapeType.rect, { x: sx, y: y + 0.32, w: sw2, h: sw2 * 430 / 920, fill: { color: C.green }, line: { type: 'none' } });
    s.addText('PARTY TOYS', { x: sx, y: y + 0.32, w: sw2, h: sw2 * 430 / 920, fontFace: 'Arial Black', fontSize: 11, color: C.night, align: 'center', valign: 'middle', margin: 0 });
    s.addText('920×430 : le vert primaire, sans accent, pour rester lisible en vignette.', { x: sx, y: y + 1.12, w: sw2, h: 1.3, fontFace: B, fontSize: 10, color: C.mutedDark, valign: 'top', margin: 0 });
    // Bandeau règle
    s.addShape(pptx.ShapeType.roundRect, { x: 0.6, y: 6.05, w: 12.2, h: 0.75, fill: { color: C.card }, line: { type: 'none' }, rectRadius: 0.1 });
    s.addText([
      { text: 'À TRANCHER EN ÉQUIPE  ', options: { bold: true, color: C.green, charSpacing: 2 } },
      { text: 'les teintes exactes (à caler sur les textures du jeu), la typographie du style guide (Super Starfish / Poppins / Grandstander) et les visuels : captures provisoires, l’image Only Up vient du moodboard et sera remplacée par une capture du jeu.', options: { color: C.mutedDark } },
    ], { x: 0.85, y: 6.05, w: 11.8, h: 0.75, fontFace: B, fontSize: 12.5, valign: 'middle', margin: 0 });
  }

  await pptx.writeFile({ fileName: OUT });
  console.log('ok', OUT);
})();
