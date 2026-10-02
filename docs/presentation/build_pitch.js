// Pitch client 5 min : Marvel Rivals × NetEase Games
// Structure du coaching 2 (règle 30/60/120/60/30) : Contexte · Diagnostic · Recommandation · Roadmap · Risques/KPIs
const pptxgen = require("pptxgenjs");
const React = require("react");
const RDS = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");

const NAVY = "0D1020", RED = "E62429", GOLD = "FFC72C", LIGHT = "F4F5F9", INK = "1F2233", MUTED = "5E6378", WHITE = "FFFFFF", SOFT = "C9CCDA";
const GREEN = "2E7D5B", AMBER = "B7791F", GREY = "8A8FA3", LINE = "E3E5EE";
const H = "Arial", B = "Calibri", HB = "Arial Black";
const path = require("path");
const LOGO = path.join(__dirname, "assets", "logo.png"), COVER = path.join(__dirname, "assets", "cover.jpg"); // logo et visuel : marvelrivals.com

async function icon(Comp, color = WHITE, size = 256) {
  const svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: "#" + color, size }));
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}
// icône dans un cercle : motif répété
async function badge(slide, Comp, x, y, d = 0.55, fill = RED) {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } });
  const p = d * 0.25;
  slide.addImage({ data: await icon(Comp), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p });
}
function title(slide, t, sub) {
  // bandeau sombre façon Marvel Rivals : accent rouge incliné, étiquette de section jaune, logo à droite
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 1.12, fill: { color: NAVY }, line: { color: NAVY } });
  slide.addShape("parallelogram", { x: -0.15, y: 1.12, w: 4.2, h: 0.07, fill: { color: RED }, line: { color: RED } });
  slide.addShape("parallelogram", { x: 3.95, y: 1.12, w: 1.6, h: 0.07, fill: { color: GOLD }, line: { color: GOLD } });
  slide.addShape("parallelogram", { x: 0.32, y: 0.36, w: 0.16, h: 0.46, fill: { color: RED }, line: { color: RED } });
  let sec = "", rest = sub || "";
  const k = rest.indexOf(" · ");
  if (k > 0 && k < 20) { sec = rest.slice(0, k).toUpperCase(); rest = rest.slice(k + 3); }
  if (sec) {
    const w = 0.22 + sec.length * 0.085;
    slide.addShape("parallelogram", { x: 0.55, y: 0.12, w, h: 0.22, fill: { color: GOLD }, line: { color: GOLD } });
    slide.addText(sec, { x: 0.55, y: 0.12, w, h: 0.22, fontFace: H, fontSize: 8, bold: true, color: NAVY, align: "center", valign: "middle", margin: 0, charSpacing: 1, isTextBox: true });
  }
  slide.addText(t, { x: 0.6, y: 0.34, w: 7.9, h: 0.5, fontFace: H, fontSize: 22, bold: true, color: WHITE, margin: 0, valign: "middle", isTextBox: true });
  if (rest) slide.addText(rest, { x: 0.6, y: 0.82, w: 8.0, h: 0.26, fontFace: B, fontSize: 11, color: GOLD, margin: 0, valign: "middle", isTextBox: true });
  slide.addImage({ path: LOGO, x: 8.72, y: 0.22, w: 1.05, h: 0.44 });
}
// graphiques rendus en image (SVG → PNG) : identiques dans tous les lecteurs
async function svgChart(kind, labels, values, opt) {
  const W = 930, Hh = 430, L = 58, R = 34, T = 54, Bm = 70;
  const pw = W - L - R, ph = Hh - T - Bm, max = opt.max, n = values.length;
  const x = (i) => L + (kind === "bar" ? (i + 0.5) * pw / n : i * pw / (n - 1));
  const y = (v) => T + ph - (v / max) * ph;
  let g = "";
  for (let k = 0; k <= opt.ticks; k++) {
    const v = max * k / opt.ticks, yy = y(v);
    g += `<line x1="${L}" x2="${W - R}" y1="${yy}" y2="${yy}" stroke="#E3E5EE" stroke-width="1.5"/>`;
    g += `<text x="${L - 10}" y="${yy + 6}" font-size="17" fill="#5E6378" text-anchor="end">${Math.round(v)}${opt.unit || ""}</text>`;
  }
  labels.forEach((lb, i) => { if (i % 3 === 0 || i === n - 1) g += `<text x="${x(i)}" y="${T + ph + 28}" font-size="16" fill="#5E6378" text-anchor="middle">${lb}</text>`; });
  let body = "";
  if (kind === "area") {
    const pts = values.map((v, i) => `${x(i)},${y(v)}`).join(" ");
    body += `<defs><linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E62429" stop-opacity="0.75"/><stop offset="1" stop-color="#E62429" stop-opacity="0.08"/></linearGradient></defs>`;
    body += `<polygon points="${x(0)},${y(0)} ${pts} ${x(n - 1)},${y(0)}" fill="url(#gr)"/>`;
    body += `<polyline points="${pts}" fill="none" stroke="#E62429" stroke-width="4" stroke-linejoin="round"/>`;
    (opt.marks || []).forEach(([i, txt]) => {
      body += `<circle cx="${x(i)}" cy="${y(values[i])}" r="7" fill="#0D1020"/>`;
      body += `<text x="${x(i) + (i > n / 2 ? -12 : 12)}" y="${y(values[i]) - 14}" font-size="19" font-weight="bold" fill="#0D1020" text-anchor="${i > n / 2 ? "end" : "start"}">${txt}</text>`;
    });
  } else {
    const bw = pw / n * 0.68, top = values.indexOf(Math.max(...values));
    values.forEach((v, i) => {
      body += `<rect x="${x(i) - bw / 2}" y="${y(v)}" width="${bw}" height="${y(0) - y(v)}" rx="3" fill="${i === top ? "#E62429" : "#FFC72C"}"/>`;
    });
    body += `<text x="${x(top)}" y="${y(values[top]) - 10}" font-size="19" font-weight="bold" fill="#E62429" text-anchor="middle">${values[top]} %</text>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${Hh}" font-family="Arial, Helvetica, sans-serif">
<rect width="${W}" height="${Hh}" fill="#FFFFFF"/>
<text x="${W / 2}" y="30" font-size="22" font-weight="bold" fill="#1F2233" text-anchor="middle">${opt.title}</text>${g}${body}</svg>`;
  const buf = await sharp(Buffer.from(svg)).resize(W * 2).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}
function source(slide, parts, dark = false) {
  const runs = [{ text: "Sources : ", options: { color: dark ? SOFT : MUTED } }];
  parts.forEach((p, i) => {
    runs.push({ text: p.text, options: p.url ? { hyperlink: { url: p.url }, color: dark ? "9FB4FF" : "2F3C7E" } : { color: dark ? SOFT : MUTED } });
    if (i < parts.length - 1) runs.push({ text: " · ", options: { color: dark ? SOFT : MUTED } });
  });
  slide.addText(runs, { x: 0.5, y: 5.22, w: 8.6, h: 0.28, fontFace: B, fontSize: 8.5, margin: 0, isTextBox: true });
}
function pageNum(slide, n) {
  slide.addShape("parallelogram", { x: 9.25, y: 5.25, w: 0.55, h: 0.24, fill: { color: RED }, line: { color: RED } });
  slide.addText(String(n), { x: 9.25, y: 5.25, w: 0.55, h: 0.24, fontFace: H, fontSize: 9, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0, isTextBox: true });
}
function chip(slide, text, x, y, w, color) {
  slide.addShape("roundRect", { x, y, w, h: 0.26, fill: { color }, line: { color }, rectRadius: 0.05 });
  slide.addText(text, { x, y, w, h: 0.26, fontFace: B, fontSize: 9, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0, isTextBox: true });
}

const U = {
  forbes: "https://www.forbes.com/sites/paultassi/2025/10/12/marvel-rivals-has-lost-85-of-its-players-in-10-months/",
  steamcharts: "https://steamcharts.com/app/2767030",
  gwo: "https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report",
  steamapi: "https://store.steampowered.com/appreviews/2767030?json=1",
  eomm: "https://x.com/MarvelRivals/status/1955117077561593877",
  video: "https://x.com/MarvelRivals/status/1958627668536311945",
  s5: "https://www.marvelrivals.com/20251114/41525_1270590.html",
  pcg: "https://www.pcgamesn.com/marvel-rivals/ranks-competitive",
  newzoo: "https://insider-gaming.com/almost-half-of-players-who-quit-overwatch-jumped-to-marvel-rivals/",
  vgc: "https://www.videogameschronicle.com/news/overwatch-2s-average-pc-player-count-has-dropped-39-since-marvel-rivals-was-released/",
  thegamer: "https://www.thegamer.com/marvel-rivals-no-longer-casual-friendly-black-panther-matchmaking/",
  devtalk: "https://www.marvelrivals.com/devdiaries/20250210/40954_1210988.html",
  timesaver: "https://timesaver.gg/blog/marvel-rivals-season-10-rank-reset",
  bq: "https://cloud.google.com/bigquery/pricing",
  tjm: "https://tjmetre.fr/barometre/data",
  pbi: "https://www.microsoft.com/en-us/power-platform/products/power-bi/pricing",
  rgpd: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
  aiact: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
  gdoc: "https://docs.google.com/document/d/1nOhcAL2wfeAHOK6x6UZH-Hg5yh9Ofxxko7FY47r5Vzc/edit",
};

(async () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "Noé";
  pres.title = "Marvel Rivals : pourquoi les joueurs ne restent pas";

  // 1. Titre + accroche chiffre choc (≈ 10 s)
  let s = pres.addSlide(); s.background = { color: NAVY };
  s.addImage({ path: COVER, x: 0, y: 0, w: 10, h: 5.625 });
  s.addShape("rect", { x: 0, y: 0, w: 10, h: 5.625, fill: { color: NAVY, transparency: 50 }, line: { color: NAVY, transparency: 100 } });
  s.addShape("rect", { x: 0, y: 0, w: 7.0, h: 5.625, fill: { color: NAVY, transparency: 25 }, line: { color: NAVY, transparency: 100 } });
  s.addImage({ path: LOGO, x: 0.5, y: 0.35, w: 2.1, h: 0.88 });
  s.addShape("parallelogram", { x: 0.35, y: 1.5, w: 5.6, h: 0.95, fill: { color: RED }, line: { color: RED } });
  s.addText("644 000 → 98 000", { x: 0.55, y: 1.5, w: 5.3, h: 0.95, fontFace: HB, fontSize: 38, bold: true, color: WHITE, valign: "middle", margin: 0, isTextBox: true });
  s.addText("joueurs simultanés sur Steam, en dix mois", { x: 0.55, y: 2.5, w: 5.6, h: 0.35, fontFace: B, fontSize: 16, color: GOLD, margin: 0, isTextBox: true });
  s.addText("Pourquoi les joueurs ne restent pas", { x: 0.55, y: 3.05, w: 6.6, h: 0.55, fontFace: H, fontSize: 24, bold: true, color: WHITE, margin: 0, isTextBox: true });
  s.addText("Plan de collecte data pour le comité de direction de NetEase Games", { x: 0.55, y: 3.62, w: 6.6, h: 0.35, fontFace: B, fontSize: 13, color: SOFT, margin: 0, isTextBox: true });
  s.addShape("parallelogram", { x: 0.35, y: 4.62, w: 2.2, h: 0.07, fill: { color: GOLD }, line: { color: GOLD } });
  s.addText("Noé, consultant · 2 octobre 2026", { x: 0.55, y: 4.75, w: 5, h: 0.3, fontFace: B, fontSize: 12, color: WHITE, margin: 0, isTextBox: true });
  s.addText([{ text: "Forbes, 12/10/2025", options: { hyperlink: { url: U.forbes }, color: GOLD } }, { text: " · visuel et logo : marvelrivals.com", options: { color: SOFT } }], { x: 5.0, y: 5.2, w: 4.8, h: 0.28, fontFace: B, fontSize: 9, align: "right", margin: 0, isTextBox: true });
  s.addNotes("[10 s] 644 000 joueurs en janvier 2025, 98 000 dix mois plus tard. Votre comité m'a demandé pourquoi les joueurs ne restent pas.");

  // 2. Contexte : le problème business, prouvé par les données (≈ 20 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Le problème business", "Contexte · le B du BODAK, prouvé par les données (Steam = PC uniquement)");
  s.addShape("parallelogram", { x: 0.4, y: 1.27, w: 9.2, h: 0.6, fill: { color: RED }, line: { color: RED } });
  s.addText([
    { text: "B : ", options: { bold: true, color: GOLD } },
    { text: "Marvel Rivals perd ses joueurs et ne parvient plus à en regagner ; ceux qui partent accusent d'abord le matchmaking.", options: { color: WHITE } },
  ], { x: 0.75, y: 1.28, w: 8.5, h: 0.58, fontFace: B, fontSize: 13, bold: true, margin: 0, valign: "middle", isTextBox: true });
  const months = ["Déc. 24", "Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc.", "Janv. 26", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.*"];
  const players = [279402, 306066, 228000, 144302, 134118, 102116, 79806, 82825, 77502, 64418, 63716, 65301, 75492, 88790, 81368, 65150, 70116, 67588, 69738, 84281, 80129, 67646];
  const mm = [7.4, 10.9, 12.1, 20.3, 21.1, 29.1, 27.6, 37.0, 41.0, 33.9, 25.9, 17.3, 18.2, 15.4, 15.6, 13.4, 14.4, 14.7, 14.2, 8.8, 13.4, 10.5];
  const chartBase = { showLegend: false, catAxisLabelColor: MUTED, valAxisLabelColor: MUTED, catAxisLabelFontSize: 7, valAxisLabelFontSize: 8,
    valGridLine: { color: LINE, size: 0.5 }, catGridLine: { style: "none" }, lineSize: 2.5, lineDataSymbol: "circle", lineDataSymbolSize: 4,
    showTitle: true, titleFontSize: 11, titleColor: INK, titleFontFace: B };
  const kp = players.map(v => Math.round(v / 1000));
  const ml = months.map((m, i) => (i === 12 ? "Déc. 25" : i === 21 ? "Sept. 26" : m));
  s.addImage({ data: await svgChart("area", ml, kp, { max: 350, ticks: 7, title: "Joueurs simultanés, moyenne mensuelle (milliers)", marks: [[1, "306 K (janv. 25)"], [21, "68 K"]] }), x: 0.35, y: 1.97, w: 4.65, h: 2.15 });
  s.addImage({ data: await svgChart("bar", ml, mm, { max: 45, ticks: 3, unit: " %", title: "% des avis Steam négatifs qui citent le matchmaking" }), x: 5.0, y: 1.97, w: 4.65, h: 2.15 });
  const proofs = [
    ["−85 %", "de pic à pic (644 K → 98 K) ; −76 % en moyenne depuis la sortie"],
    ["2 mois", "pour perdre les joueurs ramenés par une saison (+18 % en janv. 2026, +21 % en juil.)"],
    ["7 → 41 %", "des avis négatifs accusent le matchmaking ; NetEase a dû démentir un matchmaking truqué"],
  ];
  for (let i = 0; i < 3; i++) {
    const x = 0.5 + i * 3.05;
    s.addText(proofs[i][0], { x, y: 4.15, w: 2.9, h: 0.42, fontFace: H, fontSize: 20, bold: true, color: RED, margin: 0, isTextBox: true });
    s.addText(proofs[i][1], { x, y: 4.57, w: 2.9, h: 0.6, fontFace: B, fontSize: 9.5, color: INK, margin: 0, valign: "top", isTextBox: true });
  }
  source(s, [{ text: "Forbes (12/10/2025)", url: U.forbes }, { text: "Steam Charts (30/09/2026 ; * = 30 derniers jours)", url: U.steamcharts }, { text: "avis Steam, notre collecte", url: U.steamapi }, { text: "démenti EOMM", url: U.eomm }]);
  pageNum(s, 2);
  s.addNotes("[20 s] Le problème business : Marvel Rivals perd ses joueurs et ne parvient plus à en regagner. Les preuves : moins 85 % de pic à pic. Chaque saison ramène des joueurs, repartis en deux mois. Et ceux qui partent accusent le matchmaking : de 7 à 41 % des avis négatifs, au point que NetEase a dû démentir un matchmaking truqué.");

  // 3. Diagnostic : l'hypothèse testée (≈ 35 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Hypothèse : un écart de niveau qui fait partir", "Diagnostic · H5 : nouveaux et revenants subissent des écarts non compensés (testable)");
  const mech = [
    [fa.FaUserPlus, "H5b · Les nouveaux, en partie rapide", RED,
      "Faute de joueurs en file, le matchmaking accepte des écarts de niveau plus grands pour lancer la partie : NetEase le reconnaît (vidéo du 21/08/2025).",
      "Le nouveau tombe sur les vétérans restants, perd et part : la base ne se renouvelle pas.",
      "Aucune correction publiée pour la partie rapide, où passe chaque nouveau avant le niveau 15."],
    [fa.FaRedo, "H5c · Les joueurs de retour", NAVY,
      "En classé, le rang n'est abaissé que de 6 divisions par saison, quelle que soit l'absence (Dev Talk Vol.10). En partie rapide, rien n'indique que le niveau caché baisse (à vérifier).",
      "Un joueur absent plusieurs mois affronte des joueurs restés actifs, plus en forme : il perd et repart.",
      "Les saisons ramènent des joueurs (+18 %, +21 %), qui repartent en deux mois."],
  ];
  for (let i = 0; i < 2; i++) {
    const x = 0.5 + i * 4.6;
    s.addShape("roundRect", { x, y: 1.3, w: 4.4, h: 3.2, fill: { color: LIGHT }, line: { color: LIGHT }, rectRadius: 0.08 });
    await badge(s, mech[i][0], x + 0.2, 1.42, 0.42, mech[i][2]);
    s.addText(mech[i][1], { x: x + 0.75, y: 1.42, w: 3.5, h: 0.42, fontFace: H, fontSize: 13, bold: true, color: INK, margin: 0, valign: "middle", isTextBox: true });
    s.addText([
      { text: "Mécanisme : ", options: { bold: true, color: mech[i][2] } }, { text: mech[i][3], options: { color: INK, breakLine: true } },
      { text: " ", options: { fontSize: 4, breakLine: true } },
      { text: "Conséquence : ", options: { bold: true, color: mech[i][2] } }, { text: mech[i][4], options: { color: INK, breakLine: true } },
      { text: " ", options: { fontSize: 4, breakLine: true } },
      { text: "Indice : ", options: { bold: true, color: mech[i][2] } }, { text: mech[i][5], options: { color: INK } },
    ], { x: x + 0.2, y: 1.95, w: 4.0, h: 2.5, fontFace: B, fontSize: 10.5, margin: 0, valign: "top", isTextBox: true });
  }
  s.addText([
    { text: "Ce qu'on teste : ", options: { bold: true, color: RED } },
    { text: "l'écart de niveau subi par les nouveaux et les revenants, et s'il les fait partir dans les 7 jours. Tout se mesure dans votre télémétrie, sans savoir d'où viennent les joueurs.", options: { color: INK } },
  ], { x: 0.5, y: 4.6, w: 9, h: 0.55, fontFace: B, fontSize: 11, margin: 0, valign: "middle", isTextBox: true });
  source(s, [{ text: "vidéo NetEase du 21/08/2025", url: U.video }, { text: "Dev Talk Vol.10", url: U.devtalk }, { text: "inactivité (source tierce)", url: U.timesaver }, { text: "Steam Charts", url: U.steamcharts }]);
  pageNum(s, 3);
  s.addNotes("[40 s] Pourquoi ? Notre hypothèse : nouveaux et revenants subissent des écarts de niveau non compensés, et partent. En partie rapide, faute de joueurs, le jeu accepte des écarts plus grands, NetEase l'a reconnu. En classé, un joueur qui revient retrouve un rang à peine abaissé, perd et repart. L'origine probable : au lancement, des vétérans d'Overwatch face à un grand public venu pour Marvel. Plausible, mais invérifiable : aucune décision n'en dépend.");

  // 5. Recommandation : objectif + données prioritaires (≈ 45 s)
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "D'abord mesurer : 30 jours d'audit", "Recommandation · objectif SMART et données à extraire en priorité, et pourquoi");
  s.addShape("roundRect", { x: 0.5, y: 1.25, w: 9, h: 0.72, fill: { color: NAVY }, line: { color: NAVY }, rectRadius: 0.08 });
  s.addText([
    { text: "Objectif : ", options: { bold: true, color: RED } },
    { text: "d'ici le 31/03/2027, qu'un joueur qui perd au moins 7 de ses 10 premiers matchs ne parte pas plus de 1,2 fois plus souvent dans la semaine que les autres, chez les nouveaux comme chez les joueurs de retour.", options: { color: WHITE } },
  ], { x: 0.7, y: 1.27, w: 8.6, h: 0.68, fontFace: B, fontSize: 11.5, margin: 0, valign: "middle", isTextBox: true });
  const hd = (t) => ({ text: t, options: { bold: true, color: WHITE, fill: { color: RED }, fontFace: H, fontSize: 10 } });
  const rows = [
    [hd("Donnée à extraire"), hd("Ce qu'elle nous dit"), hd("Pourquoi en priorité")],
    ["Résultats des 10 premiers matchs et départ à 7 jours", "Si perdre au début fait partir", "C'est la mesure de l'objectif"],
    ["Mode et plateforme de ces 10 premiers matchs", "Où jouent les nouveaux", "Dit quel mode corriger en premier (Steam = PC seul)"],
    ["Niveau de départ attribué / niveau réel après 50 matchs", "Si le jeu place mal un nouveau", "Teste la cause A (démarrage à froid)"],
    ["Écart de niveau par match, selon les joueurs en file, l'heure, la région", "Si l'écart grandit quand la file se vide", "Teste la cause B (manque de joueurs)"],
    ["Revenants en classé : absence, rang avant / après, bilan, départ à 7 jours", "Si le rang au retour est périmé", "Teste la cause C en classé"],
    ["Revenants hors classé : mode rejoué ; en partie rapide, écart subi, bilan, départ", "Si un revenant est mal placé en partie rapide", "Teste C hors classé (il ne rejoue pas forcément en classé)"],
    ["Départs en classé avant / après les placements de la saison 5", "Si mieux placer les joueurs les a retenus", "Expérience déjà faite : la preuve la moins chère"],
  ];
  s.addTable(rows, { x: 0.5, y: 2.08, w: 9, colW: [3.95, 2.4, 2.65], fontFace: B, fontSize: 8.5, color: INK, border: { type: "solid", pt: 0.5, color: "D5D8E3" }, fill: { color: WHITE }, valign: "middle", margin: [1, 5, 1, 5], rowH: [0.25, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28] });
  s.addText("Ensuite, pour écarter les autres explications : héros joué, parties avec bots, joueurs en groupe, comptes arrivés en 2025. Tout existe déjà dans vos serveurs.", { x: 0.5, y: 4.86, w: 9, h: 0.33, fontFace: B, fontSize: 9, italic: true, color: MUTED, margin: 0, isTextBox: true });
  source(s, [{ text: "plan de collecte complet (matrice ICE)", url: U.gdoc }, { text: "notes de patch S5", url: U.s5 }]);
  pageNum(s, 4);
  s.addNotes("[45 s] D'abord mesurer. L'objectif : d'ici fin mars 2027, un joueur qui perd au début ne doit pas partir plus de 1,2 fois plus souvent que les autres, nouveau ou de retour. Sept données d'abord : la première mesure l'objectif, la deuxième dit où jouent les nouveaux, quatre testent les causes, dont deux pour les joueurs de retour, en classé et hors classé, car un revenant ne rejoue pas forcément en classé. La dernière exploite une expérience déjà faite en saison 5.");

  // 6. Recommandation : la matrice de collecte, visuelle (≈ 20 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Matrice ICE : 15 données indispensables", "Recommandation · Impact × Confiance × Facilité, chacun sur 5 = score sur 125 · coupe sous 30");
  const IC = "1E8C93", CC = "C2185B", EC = "C98A00";
  const th = (t) => ({ text: t, options: { bold: true, color: WHITE, fill: { color: NAVY }, fontFace: H, fontSize: 9.5, align: "center" } });
  const dec = { I: ["Indispensable", GREEN], U: ["Utile", AMBER], X: ["Écartée", GREY] };
  const mrows = [
    ["Mode et plateforme des 10 premiers matchs", 5, 5, 5, "I", ""],
    ["Écart de niveau accepté × joueurs en file (heure, région)", 5, 5, 5, "I", "cause B"],
    ["Départ à 7 jours × bilan des 10 premiers matchs", 5, 4, 5, "I", "mesure l'objectif"],
    ["Niveau de départ et vitesse de convergence", 5, 5, 4, "I", "cause A"],
    ["Revenants en classé : absence × rang au retour × bilan", 5, 4, 5, "I", "cause C"],
    ["Revenants : mode rejoué au retour", 4, 5, 5, "I", "où agir pour C"],
    ["Revenants en partie rapide : écart subi × bilan", 5, 4, 5, "I", "cause C hors classé"],
    ["Performance des comptes neufs (smurfs)", 4, 4, 4, "U", ""],
    ["Avis Steam agrégés (collecte déjà faite)", 3, 3, 5, "U", "contrôle"],
    ["Sondage d'équité perçue (1 match sur 10)", 4, 3, 3, "U", "après l'audit"],
    ["Benchmark Newzoo (panel biaisé)", 2, 2, 3, "X", "sous 30"],
    ["Chat vocal ou texte complet", 3, 3, 1, "X", "RGPD lourd"],
    ["Numéro de téléphone (anti-smurf)", 2, 2, 1, "X", "disproportionné"],
  ];
  const mt = [[th("Donnée candidate"), th("I /5"), th("C /5"), th("E /5"), th("Score"), th("Décision")]];
  mrows.forEach((r) => {
    const [lab, colr] = dec[r[4]];
    const n = (v, c) => ({ text: String(v), options: { bold: true, color: c, align: "center", fontFace: H } });
    mt.push([r[0], n(r[1], IC), n(r[2], CC), n(r[3], EC),
      { text: String(r[1] * r[2] * r[3]), options: { bold: true, color: INK, align: "center", fontFace: H, fontSize: 10.5 } },
      { text: lab + (r[5] ? " · " + r[5] : ""), options: { bold: true, color: WHITE, fill: { color: colr }, align: "center", fontSize: 8.5 } }]);
  });
  s.addTable(mt, { x: 0.5, y: 1.3, w: 9, colW: [3.9, 0.6, 0.6, 0.6, 0.75, 2.55], fontFace: B, fontSize: 9, color: INK, border: { type: "solid", pt: 0.75, color: WHITE }, fill: { color: LIGHT }, valign: "middle", margin: [1, 5, 1, 5], rowH: 0.235 });
  s.addText([
    { text: "Les 15 indispensables existent déjà dans votre télémétrie : ", options: { bold: true, color: INK } },
    { text: "aucune nouvelle collecte pour l'audit. Extrait de la matrice : 8 autres indispensables (ICE 80 à 100) et 5 autres utiles sont notés dans le plan de collecte.", options: { color: INK } },
  ], { x: 0.5, y: 4.67, w: 9, h: 0.45, fontFace: B, fontSize: 9.5, margin: 0, valign: "middle", isTextBox: true });
  source(s, [{ text: "plan de collecte complet (justification de chaque note)", url: U.gdoc }]);
  pageNum(s, 5);
  s.addNotes("[15 s] Chaque donnée est notée sur l'impact, la confiance et la facilité ; le score est leur produit. Quinze dépassent 80, toutes déjà dans votre télémétrie. Le chat ou le téléphone tombent sous 30 : risque RGPD sans décision.");

  // 7. Recommandation : les leviers par cause (≈ 35 s)
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "Puis tester le levier de chaque cause confirmée", "Recommandation · tests A/B de 60 jours si le ratio dépasse 1,2 ; les causes peuvent se cumuler");
  const causes = [
    [fa.FaSnowflake, "A · Démarrage à froid", RED, "Le jeu ne connaît pas le niveau d'un nouveau compte et le place mal.", "Écart déjà fort aux heures pleines, quand la file est remplie.", ["Niveau de départ plus prudent", "File débutants jusqu'au niveau 15"]],
    [fa.FaUsersSlash, "B · Manque de joueurs", NAVY, "File vide : le jeu accepte des écarts plus grands pour lancer la partie.", "Écart en plus aux heures creuses, quand la file se vide.", ["Écart resserré aux heures creuses", "Arrêt si 10 % attendent plus de 3 min"]],
    [fa.FaRedo, "C · Niveau périmé au retour", AMBER, "Le rang (classé) et le niveau caché (partie rapide) ignorent la durée d'absence.", "Les revenants perdent plus, d'autant plus que l'absence a été longue.", ["Matchs de recalibrage au retour", "Niveau ajusté selon l'absence, dans les deux modes"]],
  ];
  for (let i = 0; i < 3; i++) {
    const x = 0.5 + i * 3.05;
    s.addShape("roundRect", { x, y: 1.28, w: 2.9, h: 3.2, fill: { color: WHITE }, line: { color: LINE }, rectRadius: 0.08 });
    await badge(s, causes[i][0], x + 0.15, 1.4, 0.4, causes[i][2]);
    s.addText(causes[i][1], { x: x + 0.62, y: 1.4, w: 2.2, h: 0.4, fontFace: H, fontSize: 12, bold: true, color: INK, margin: 0, valign: "middle", isTextBox: true });
    s.addText(causes[i][3], { x: x + 0.15, y: 1.9, w: 2.6, h: 0.62, fontFace: B, fontSize: 10, color: INK, margin: 0, valign: "top", isTextBox: true });
    s.addText([{ text: "Signe : ", options: { bold: true, color: causes[i][2] } }, { text: causes[i][4], options: { color: MUTED, italic: true } }], { x: x + 0.15, y: 2.55, w: 2.6, h: 0.62, fontFace: B, fontSize: 9.5, margin: 0, valign: "top", isTextBox: true });
    s.addText([{ text: "Leviers à tester", options: { bold: true, color: causes[i][2], breakLine: true } }].concat(causes[i][5].map((t, j, a) => ({ text: t, options: { bullet: true, color: INK, breakLine: j < a.length - 1 } }))), { x: x + 0.1, y: 3.25, w: 2.7, h: 1.15, fontFace: B, fontSize: 10, margin: 0, valign: "top", isTextBox: true });
  }
  s.addText([
    { text: "Dans tous les cas : ", options: { bold: true, color: INK } },
    { text: "groupes séparés des joueurs seuls pour les nouveaux, étiquette « match d'entraînement » sur les parties avec bots, groupe témoin tiré au sort.", options: { color: INK } },
  ], { x: 0.5, y: 4.6, w: 9, h: 0.55, fontFace: B, fontSize: 10.5, margin: 0, valign: "middle", isTextBox: true });
  source(s, [{ text: "vidéo NetEase du 21/08/2025", url: U.video }, { text: "Dev Talk Vol.10", url: U.devtalk }]);
  pageNum(s, 6);
  s.addNotes("[35 s] On ne teste que si le ratio dépasse 1,2, et seulement les causes que l'audit confirme : une, deux ou les trois, chacune avec son levier. Démarrage à froid : niveau de départ plus prudent. Manque de joueurs : écart resserré aux heures creuses, arrêté si l'attente dépasse 3 minutes. Niveau périmé : recalibrage au retour, en classé comme en partie rapide. Toujours avec un groupe témoin.");

  // 8. Recommandation : ce que nous avons volontairement écarté (≈ 20 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Ce que nous avons volontairement écarté", "Recommandation · arbitrages : moins de données, mieux choisies");
  const out = [
    [fa.FaBan, "Historique sur d'autres jeux, chat complet, âge exact, téléphone", "Aucune décision ne les exige ; risque RGPD élevé (minimisation, Art. 5.1.c)."],
    [fa.FaChartBar, "Benchmark Newzoo des flux entre jeux", "Panel biaisé vers les joueurs engagés : inutilisable pour des débutants (ICE 12)."],
    [fa.FaUsers, "Rôles imposés (role queue)", "Contraire à l'identité du jeu, assumée par NetEase : alerte au producteur, pas de test sans son accord."],
    [fa.FaComments, "Toxicité", "Hors du périmètre matchmaking ; le tirage au sort des tests neutralise son effet sur la mesure."],
    [fa.FaSteam, "Avis Steam comme preuve", "Gardés comme contrôle de perception seulement : PC, anglais, biais du survivant."],
  ];
  for (let i = 0; i < out.length; i++) {
    const y = 1.3 + i * 0.75;
    await badge(s, out[i][0], 0.5, y + 0.05, 0.45, i % 2 ? NAVY : RED);
    s.addText(out[i][1], { x: 1.1, y, w: 8.4, h: 0.3, fontFace: H, fontSize: 12, bold: true, color: INK, margin: 0, valign: "middle", isTextBox: true });
    s.addText(out[i][2], { x: 1.1, y: y + 0.3, w: 8.4, h: 0.3, fontFace: B, fontSize: 10.5, color: MUTED, margin: 0, valign: "middle", isTextBox: true });
  }
  source(s, [{ text: "RGPD Art. 5", url: U.rgpd }, { text: "plan de collecte complet", url: U.gdoc }]);
  pageNum(s, 7);
  s.addNotes("[20 s] Nous avons volontairement écarté les données personnelles qu'aucune décision n'exige, le benchmark Newzoo, trop biaisé, et les rôles imposés, contraires à l'identité du jeu.");

  // 9. Roadmap : qui, ce qui change pour le joueur, quel résultat déclenche quoi (≈ 45 s)
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "Roadmap : qui agit, ce que vit le joueur", "Roadmap · trois phases ; chaque résultat ouvre ou ferme la phase suivante");
  const rh = (t) => ({ text: t, options: { bold: true, color: WHITE, fill: { color: NAVY }, fontFace: H, fontSize: 9.5 } });
  const ph = (n, t, d) => ({ text: [{ text: n + " · " + t, options: { bold: true, color: RED, fontFace: H, fontSize: 10.5, breakLine: true } }, { text: d, options: { color: MUTED, fontSize: 9 } }] });
  const res = (pairs) => ({ text: pairs.flatMap(([c, r], i) => [{ text: c + " → ", options: { bold: true, color: INK } }, { text: r, options: { color: INK, breakLine: i < pairs.length - 1 } }]) });
  const rrows = [
    [rh("Phase"), rh("Qui s'en occupe"), rh("Ce qui change pour le joueur"), rh("Résultat → changement")],
    [ph("1", "Audit", "0-30 j"),
      "1 data analyst (temps plein) et 1 data engineer (mi-temps) ; DPO de NetEase : accord de sous-traitance et hachage",
      "Rien en jeu : on analyse les matchs déjà enregistrés, identifiants hachés.",
      res([["Nouveaux > 1,2", "tests A et/ou B (écart aux heures pleines = A, surplus aux heures creuses = B)"], ["Revenants > 1,2", "test C"], ["Les deux ≤ 1,2", "plan B, on ne touche pas au matchmaking"]])],
    [ph("2", "Tests", "30-90 j, si un ratio > 1,2"),
      "Équipe matchmaking NetEase (code les réglages) ; analyste (mesure) ; live-ops (annonce)",
      "Une partie des joueurs, tirée au sort, reçoit le nouveau réglage, les autres servent de témoin. A : nouveaux placés plus bas, entre débutants jusqu'au niveau 15. B : matchs plus serrés aux heures creuses. C : matchs de recalibrage au retour.",
      res([["Départs en baisse face au témoin", "réglage gardé"], ["Attente p90 > 3 min", "arrêt immédiat du réglage B"], ["Aucune baisse", "réglage abandonné"]])],
    [ph("3", "Déploiement", "90-180 j"),
      "Équipe matchmaking (mise en production) ; live-ops et communication ; analyste 2 j par mois",
      "Les réglages gagnants passent à tous, annoncés dans les notes de patch ; page publique « comment fonctionne le matchmaking ».",
      res([["31/03/2027 : ratio ≤ 1,2 et avis < 8 %", "objectif atteint"], ["Ratio bon, avis > 8 %", "problème de perception : plus de transparence"], ["Ratio qui remonte", "retour en phase 2"]])],
  ];
  s.addTable(rrows, { x: 0.5, y: 1.22, w: 9, colW: [1.3, 1.9, 2.75, 3.05], fontFace: B, fontSize: 8.5, color: INK, border: { type: "solid", pt: 0.5, color: "D5D8E3" }, fill: { color: WHITE }, valign: "middle", margin: [2, 5, 2, 5], rowH: [0.27, 0.95, 1.12, 0.95] });
  s.addShape("roundRect", { x: 0.5, y: 4.62, w: 9, h: 0.5, fill: { color: NAVY }, line: { color: NAVY }, rectRadius: 0.06 });
  s.addText([
    { text: "Budget : ≈ 19 K€ engagés (audit) · ≈ 45 K€ si les tests sont lancés", options: { bold: true, color: WHITE } },
    { text: "  ·  détail du calcul slide suivante", options: { color: SOFT, fontSize: 10 } },
  ], { x: 0.7, y: 4.62, w: 8.6, h: 0.5, fontFace: B, fontSize: 12, margin: 0, valign: "middle", isTextBox: true });
  source(s, [{ text: "plan de collecte complet (§7)", url: U.gdoc }]);
  pageNum(s, 8);
  s.addNotes("[45 s] Phase 1 : trente jours d'audit par un data analyst et un data engineer ; rien ne change pour les joueurs. Si un ratio dépasse 1,2, phase 2 : votre équipe matchmaking teste le réglage de chaque cause confirmée sur des joueurs tirés au sort. Un réglage n'est gardé que s'il réduit les départs sans dépasser 3 minutes d'attente. Phase 3 : les gagnants passent à tous, annoncés dans les notes de patch.");

  // 9 bis. Budget : le calcul et les sources (≈ 15 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Combien : 19 K€ engagés, 45 K€ au total", "Roadmap · personnes aux TJM médians du marché, outils aux tarifs publics");
  const bh = (t) => ({ text: t, options: { bold: true, color: WHITE, fill: { color: NAVY }, fontFace: H, fontSize: 9.5 } });
  const amt = (t, c) => ({ text: t, options: { bold: true, color: c || INK, fontFace: H, fontSize: 10, align: "right" } });
  const brows = [
    [bh("Poste"), bh("Calcul"), bh("Montant"), bh("Source")],
    ["Audit, 0-30 j : analyste et ingénieur", "22 j × 540 € + 11 j × 650 €", amt("19 K€", RED), "TJM médians 2026, tjmetre.fr"],
    ["Tests, 30-90 j : analyste", "43 j × 540 €", amt("23 K€"), "idem"],
    ["Déploiement, 90-180 j : pilotage", "6 j × 540 €", amt("3 K€"), "idem"],
    ["Entrepôt (BigQuery à la demande)", "6,25 $ par To au-delà de 1 To gratuit ; plafond prudent : 100 To par mois pendant 6 mois", amt("≤ 3,7 K$"), "Google Cloud"],
    ["Tableaux de bord", "Outil BI existant ; sinon Power BI Pro, 14 $ × 3 utilisateurs × 6 mois", amt("0 à 0,3 K$"), "Microsoft"],
    ["Développement des réglages", "Équipe matchmaking NetEase", amt("à chiffrer"), "avant la phase 2"],
    [{ text: "Total", options: { bold: true } }, { text: "Fourchette des TJM bas et hauts : 39 à 51 K€", options: { color: MUTED } }, amt("≈ 45 K€ + ≤ 4 K$", RED), ""],
  ];
  s.addTable(brows, { x: 0.5, y: 1.22, w: 9, colW: [2.6, 3.6, 1.35, 1.45], fontFace: B, fontSize: 8.5, color: INK, border: { type: "solid", pt: 0.5, color: "D5D8E3" }, fill: { color: WHITE }, valign: "middle", margin: [1, 5, 1, 5], rowH: [0.26, 0.3, 0.27, 0.27, 0.4, 0.4, 0.27, 0.3] });
  s.addShape("roundRect", { x: 0.5, y: 3.85, w: 9, h: 0.88, fill: { color: LIGHT }, line: { color: LIGHT }, rectRadius: 0.06 });
  s.addText([
    { text: "Outils volontairement non achetés (ordres de grandeur du coaching 2) : ", options: { bold: true, color: NAVY, breakLine: true } },
    { text: "SDK analytics (GameAnalytics, deltaDNA : 300 à 5 000 $ par mois) : votre télémétrie existe déjà · attribution (AppsFlyer, Adjust : 0,05 à 0,10 $ par installation) : utile au mobile, pas à un jeu PC et consoles · CDP (Segment, Tealium : 5 à 50 K€ par an) : profils unifiés contraires à la minimisation · CRM et push (Braze : 1 à 3 K$ par mois) : marketing, hors périmètre.", options: { color: INK } },
  ], { x: 0.7, y: 3.88, w: 8.6, h: 0.82, fontFace: B, fontSize: 9, margin: 0, valign: "middle", isTextBox: true });
  s.addText([
    { text: "Stack : ", options: { bold: true, color: INK } },
    { text: "télémétrie in-game existante → entrepôt existant (type BigQuery ou Snowflake) → BI existante (type Looker ou Power BI).", options: { color: INK } },
  ], { x: 0.5, y: 4.8, w: 9, h: 0.35, fontFace: B, fontSize: 9, margin: 0, valign: "middle", isTextBox: true });
  source(s, [{ text: "TJM Data 2026 (01/10/2026)", url: U.tjm }, { text: "tarifs BigQuery (01/10/2026)", url: U.bq }, { text: "tarifs Power BI (02/10/2026)", url: U.pbi }, { text: "plan de collecte (§5)", url: U.gdoc }]);
  pageNum(s, 9);
  s.addNotes("[15 s] Seuls 19 000 euros sont engagés aujourd'hui. Si les tests sont lancés, 45 000 euros d'analyse et moins de 4 000 dollars d'outils. Nous n'achetons ni SDK, ni CDP, ni CRM : votre stack suffit.");

  // 10. Risques & KPIs de décision (≈ 30 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "KPIs de décision et garde-fous", "Risques / KPIs · comment chaque KPI se calcule, et quelle décision il déclenche");
  const kh = (t) => ({ text: t, options: { bold: true, color: WHITE, fill: { color: NAVY }, fontFace: H, fontSize: 9.5 } });
  const kr = (t) => ({ text: t, options: { bold: true, color: RED, fontFace: H, fontSize: 11 } });
  const krows = [
    [kh("KPI"), kh("Comment on le calcule"), kh("Seuil"), kh("Si le seuil est franchi"), kh("Sinon")],
    ["Ratio de départ des nouveaux comptes", "% des nouveaux qui perdent au moins 7 de leurs 10 premiers matchs et ne rejouent pas sous 7 jours, divisé par le même % chez les autres nouveaux", kr("> 1,2"), "H5 tient : tests des causes confirmées (A, B ou les deux)", "Pas d'investissement matchmaking : plan B"],
    ["Ratio de départ des joueurs de retour", "Même calcul sur les 10 premiers matchs après au moins 60 jours d'absence, classé et partie rapide séparés", kr("> 1,2"), "H5c tient : recalibrage au retour (cause C) dans le mode concerné", "Niveau au retour inchangé"],
    ["Attente p90 en partie rapide", "Temps d'attente sous lequel 90 % des joueurs trouvent une partie, par rang et région", kr("> 3 min"), "Arrêt du resserrement de l'écart", "Test poursuivi"],
    ["Part de la partie rapide", "Part des 10 premiers matchs des nouveaux joués en partie rapide", kr("> 50 %"), "Leviers sur la partie rapide en premier", "Leviers sur le mode dominant"],
    ["Avis négatifs citant le matchmaking (contrôle)", "Part des avis Steam négatifs qui le citent (base : 10,5 % en septembre 2026)", kr("> 8 %"), "Au 31/03/2027 : problème de perception, plus de transparence", "Corrections perçues : on généralise"],
  ];
  s.addTable(krows, { x: 0.5, y: 1.25, w: 9, colW: [1.7, 3.3, 0.75, 1.8, 1.45], fontFace: B, fontSize: 8.5, color: INK, border: { type: "solid", pt: 0.5, color: "D5D8E3" }, fill: { color: WHITE }, valign: "middle", margin: [1, 4, 1, 4], rowH: [0.26, 0.52, 0.42, 0.42, 0.36, 0.42] });
  s.addShape("roundRect", { x: 0.5, y: 3.85, w: 9, h: 1.3, fill: { color: LIGHT }, line: { color: LIGHT }, rectRadius: 0.06 });
  s.addText([
    { text: "Base légale : ", options: { bold: true, color: NAVY } }, { text: "contrat pour le matchmaking ; intérêt légitime documenté pour l'audit ; consentement pour les sondages.", options: { color: INK, breakLine: true } },
    { text: "RGPD et AI Act : ", options: { bold: true, color: NAVY } }, { text: "accord de sous-traitance, identifiants hachés, mineurs exclus ; aucun profilage individuel, bots toujours annoncés.", options: { color: INK, breakLine: true } },
    { text: "Plan B : ", options: { bold: true, color: RED } }, { text: "ratio ≤ 1,2 sur les deux cohortes : pas d'investissement matchmaking ; les données extraites testent équilibrage et monétisation.", options: { color: INK } },
  ], { x: 0.7, y: 3.9, w: 8.6, h: 1.2, fontFace: B, fontSize: 10, margin: 0, valign: "middle", paraSpaceAfter: 3, isTextBox: true });
  source(s, [{ text: "RGPD", url: U.rgpd }, { text: "AI Act", url: U.aiact }, { text: "plan de collecte complet (§3)", url: U.gdoc }]);
  pageNum(s, 10);
  s.addNotes("[30 s] Chaque KPI dit comment il se calcule et ce qu'il déclenche. Le principal : la part des nouveaux qui perdent au début et ne reviennent pas sous 7 jours, comparée aux autres ; au-delà de 1,2, on teste. Même calcul pour les revenants. 3 minutes d'attente arrêtent le resserrement : au-delà, un hero shooter paraît mort. Base légale : contrat et intérêt légitime documenté. Pour démarrer : signer l'accord de sous-traitance et lancer l'audit. Merci.");
  // 11. Annexe : sources
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Sources", "Annexe · consultées du 29/09 au 01/10/2026 · liens cliquables");
  const src = [
    ["Forbes, −85 % de joueurs en 10 mois (12/10/2025)", U.forbes],
    ["Steam Charts, moyennes mensuelles (PC)", U.steamcharts],
    ["40 millions de joueurs, rapport NetEase (Game World Observer)", U.gwo],
    ["API publique des avis Steam (notre collecte, 37 990 avis pondérés)", U.steamapi],
    ["Démenti de l'EOMM (X officiel, 12/08/2025)", U.eomm],
    ["Vidéo NetEase sur le matchmaking (21/08/2025)", U.video],
    ["Notes de patch Season 5, placements (14/11/2025)", U.s5],
    ["Classé : Bronze III pour tous (PCGamesN)", U.pcg],
    ["Dev Talk Vol.10, réinitialisation du rang (NetEase)", U.devtalk],
    ["Inactivité limitée aux rangs Eternity et One Above All (Timesaver, source tierce)", U.timesaver],
    ["45 % des joueurs ayant quitté Overwatch 2 ont joué à Marvel Rivals (Newzoo via Insider Gaming, 09/04/2025)", U.newzoo],
    ["Overwatch 2 : baisse des joueurs moyens sur PC (VGC)", U.vgc],
    ["« Plus un jeu pour le fan occasionnel » (TheGamer, 09/08/2025)", U.thegamer],
    ["Tarifs BigQuery, requêtes à la demande (Google Cloud)", U.bq],
    ["Tarifs Power BI (Microsoft, 02/10/2026)", U.pbi],
    ["Baromètre TJM Data 2026, médianes freelance France (tjmetre.fr, 01/10/2026)", U.tjm],
    ["RGPD (EUR-Lex)", U.rgpd], ["AI Act (EUR-Lex)", U.aiact],
    ["Plan de collecte complet (Google Docs)", U.gdoc],
  ];
  s.addText(src.map((r, i, a) => ({ text: r[0], options: { hyperlink: { url: r[1] }, color: "2F3C7E", bullet: true, breakLine: i < a.length - 1 } })), { x: 0.5, y: 1.25, w: 9, h: 3.9, fontFace: B, fontSize: 10, paraSpaceAfter: 1, valign: "top", isTextBox: true });
  pageNum(s, 11);
  s.addNotes("Annexe, à montrer seulement si on vous demande une source.");

  // 12. Annexe : questions du jury anticipées
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "Questions anticipées", "Annexe · réponses courtes, à garder sous la main");
  const qa = [
    ["Pourquoi cette donnée et pas une autre ?", "Score ICE le plus haut, et elle tranche directement l'hypothèse (départ à 7 jours, causes A, B et C)."],
    ["Combien ça coûte ?", "≈ 19 K€ pour l'audit (33 jours-homme), ≈ 45 K€ si les tests sont lancés, plus ≤ 4 K$ d'outils ; ni SDK, ni CDP, ni CRM à acheter."],
    ["Quelle base légale ?", "Contrat pour le matchmaking ; intérêt légitime documenté pour l'audit ; consentement pour les sondages."],
    ["Comment savoir si ça marche ?", "Ratio ≤ 1,2 au 31/03/2027 sur les deux cohortes ; sinon, plan B sans nouvelle collecte."],
    ["Qu'avez-vous écarté ?", "Données personnelles sans décision (chat, âge, téléphone, autres jeux), benchmark Newzoo (ICE 12), rôles imposés."],
  ];
  for (let i = 0; i < 5; i++) {
    const col = i % 2, r = Math.floor(i / 2);
    const x = 0.5 + col * 4.6, y = 1.3 + r * 1.27, w = i === 4 ? 9 : 4.4;
    s.addShape("roundRect", { x, y, w, h: 1.15, fill: { color: WHITE }, line: { color: LINE }, rectRadius: 0.06 });
    s.addText(qa[i][0], { x: x + 0.15, y: y + 0.08, w: w - 0.3, h: 0.3, fontFace: H, fontSize: 11, bold: true, color: RED, margin: 0, isTextBox: true });
    s.addText(qa[i][1], { x: x + 0.15, y: y + 0.4, w: w - 0.3, h: 0.7, fontFace: B, fontSize: 10, color: INK, margin: 0, valign: "top", isTextBox: true });
  }
  pageNum(s, 12);
  s.addNotes("Annexe pour les questions. Question imposée du jury, sans carte à l'écran : « Où avez-vous utilisé l'IA ? ». Réponse : 10 usages tracés en annexe du rapport (outil, prompt, réponse, analyse critique), plus à l'oral un élément critique que vous avez fait sans IA (par exemple le choix final de l'hypothèse ou la vérification des chiffres), si c'est le cas.");

  await pres.writeFile({ fileName: "/home/user/SOCIO/docs/presentation/pitch_marvel_rivals_netease.pptx" });
  console.log("ok");
})();
