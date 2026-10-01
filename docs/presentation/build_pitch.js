// Pitch client 5 min : Marvel Rivals × NetEase Games
// Structure du coaching 2 (règle 30/60/120/60/30) : Contexte · Diagnostic · Recommandation · Roadmap · Risques/KPIs
const pptxgen = require("pptxgenjs");
const React = require("react");
const RDS = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");

const NAVY = "161A33", RED = "E23636", LIGHT = "F4F5F9", INK = "1F2233", MUTED = "5E6378", WHITE = "FFFFFF", SOFT = "C9CCDA";
const GREEN = "2E7D5B", AMBER = "B7791F", GREY = "8A8FA3", LINE = "E3E5EE";
const H = "Arial", B = "Calibri";

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
function title(slide, t, sub, dark = false) {
  slide.addText(t, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontFace: H, fontSize: 26, bold: true, color: dark ? WHITE : INK, margin: 0, isTextBox: true });
  if (sub) slide.addText(sub, { x: 0.5, y: 0.88, w: 9, h: 0.32, fontFace: B, fontSize: 12, color: dark ? SOFT : MUTED, margin: 0, isTextBox: true });
}
function source(slide, parts, dark = false) {
  const runs = [{ text: "Sources : ", options: { color: dark ? SOFT : MUTED } }];
  parts.forEach((p, i) => {
    runs.push({ text: p.text, options: p.url ? { hyperlink: { url: p.url }, color: dark ? "9FB4FF" : "2F3C7E" } : { color: dark ? SOFT : MUTED } });
    if (i < parts.length - 1) runs.push({ text: " · ", options: { color: dark ? SOFT : MUTED } });
  });
  slide.addText(runs, { x: 0.5, y: 5.22, w: 8.6, h: 0.28, fontFace: B, fontSize: 8.5, margin: 0, isTextBox: true });
}
function pageNum(slide, n, dark = false) {
  slide.addText(String(n), { x: 9.2, y: 5.22, w: 0.3, h: 0.28, fontFace: B, fontSize: 9, color: dark ? SOFT : MUTED, align: "right", margin: 0, isTextBox: true });
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
  await badge(s, fa.FaGamepad, 0.5, 0.5, 0.6);
  s.addText("644 000 → 98 000", { x: 0.5, y: 1.3, w: 9, h: 0.9, fontFace: H, fontSize: 54, bold: true, color: RED, margin: 0, isTextBox: true });
  s.addText("joueurs simultanés sur Steam, en dix mois", { x: 0.5, y: 2.2, w: 9, h: 0.4, fontFace: B, fontSize: 18, color: SOFT, margin: 0, isTextBox: true });
  s.addText("Marvel Rivals : pourquoi les joueurs ne restent pas", { x: 0.5, y: 3.0, w: 9, h: 0.6, fontFace: H, fontSize: 28, bold: true, color: WHITE, margin: 0, isTextBox: true });
  s.addText("Plan de collecte data pour le comité de direction de NetEase Games", { x: 0.5, y: 3.6, w: 9, h: 0.4, fontFace: B, fontSize: 15, color: SOFT, margin: 0, isTextBox: true });
  s.addText("Noé, consultant · 2 octobre 2026", { x: 0.5, y: 4.7, w: 6, h: 0.3, fontFace: B, fontSize: 12, color: SOFT, margin: 0, isTextBox: true });
  s.addText([{ text: "Forbes, 12/10/2025", options: { hyperlink: { url: U.forbes }, color: "9FB4FF" } }], { x: 6.5, y: 4.7, w: 3, h: 0.3, fontFace: B, fontSize: 10, align: "right", margin: 0, isTextBox: true });
  s.addNotes("[10 s] 644 000 joueurs en janvier 2025, 98 000 dix mois plus tard. Je suis mandaté par votre comité pour comprendre pourquoi les joueurs ne restent pas, et quoi mesurer pour le savoir.");

  // 2. Contexte : le problème business, prouvé par les données (≈ 20 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Le jeu perd ses joueurs et ne les regagne pas", "Contexte · le B du BODAK, prouvé par les données (Steam = PC uniquement)");
  const months = ["Déc. 24", "Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc.", "Janv. 26", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.*"];
  const players = [279402, 306066, 228000, 144302, 134118, 102116, 79806, 82825, 77502, 64418, 63716, 65301, 75492, 88790, 81368, 65150, 70116, 67588, 69738, 84281, 80129, 67646];
  const mm = [7.4, 10.9, 12.1, 20.3, 21.1, 29.1, 27.6, 37.0, 41.0, 33.9, 25.9, 17.3, 18.2, 15.4, 15.6, 13.4, 14.4, 14.7, 14.2, 8.8, 13.4, 10.5];
  const chartBase = { showLegend: false, catAxisLabelColor: MUTED, valAxisLabelColor: MUTED, catAxisLabelFontSize: 7, valAxisLabelFontSize: 8,
    valGridLine: { color: LINE, size: 0.5 }, catGridLine: { style: "none" }, lineSize: 2.5, lineDataSymbol: "circle", lineDataSymbolSize: 4,
    showTitle: true, titleFontSize: 11, titleColor: INK, titleFontFace: B };
  s.addChart(pres.charts.LINE, [{ name: "Joueurs simultanés (milliers)", labels: months, values: players.map(v => Math.round(v / 1000)) }],
    { ...chartBase, x: 0.35, y: 1.25, w: 4.65, h: 2.75, chartColors: [RED], title: "Joueurs simultanés, moyenne mensuelle (milliers)" });
  s.addChart(pres.charts.LINE, [{ name: "% des avis négatifs citant le matchmaking", labels: months, values: mm }],
    { ...chartBase, x: 5.0, y: 1.25, w: 4.65, h: 2.75, chartColors: [NAVY], valAxisMaxVal: 45, valAxisLabelFormatCode: "0\"%\"", title: "% des avis Steam négatifs qui citent le matchmaking" });
  const proofs = [
    ["−85 %", "de pic à pic (644 K → 98 K) ; −76 % en moyenne depuis la sortie"],
    ["2 mois", "pour perdre les joueurs ramenés par une saison (+18 % en janv. 2026, +21 % en juil.)"],
    ["7 → 41 %", "des avis négatifs accusent le matchmaking ; NetEase a dû démentir un matchmaking truqué"],
  ];
  for (let i = 0; i < 3; i++) {
    const x = 0.5 + i * 3.05;
    s.addText(proofs[i][0], { x, y: 4.1, w: 2.9, h: 0.45, fontFace: H, fontSize: 22, bold: true, color: i === 2 ? NAVY : RED, margin: 0, isTextBox: true });
    s.addText(proofs[i][1], { x, y: 4.55, w: 2.9, h: 0.6, fontFace: B, fontSize: 10, color: INK, margin: 0, valign: "top", isTextBox: true });
  }
  source(s, [{ text: "Forbes (12/10/2025)", url: U.forbes }, { text: "Steam Charts (30/09/2026 ; * = 30 derniers jours)", url: U.steamcharts }, { text: "avis Steam, notre collecte", url: U.steamapi }, { text: "démenti EOMM", url: U.eomm }]);
  pageNum(s, 2);
  s.addNotes("[20 s] Le problème, prouvé par les données. Un : moins 85 % de pic à pic, moins 76 % en moyenne depuis la sortie. Deux : chaque saison ramène des joueurs, et en deux mois ils sont repartis. Trois : ceux qui partent accusent le matchmaking, de 7 à 41 % des avis négatifs, au point que NetEase a dû démentir publiquement un matchmaking truqué. Ma question : pourquoi les joueurs vivent-ils le matchmaking comme injuste au point de partir ?");

  // 3. Diagnostic : l'hypothèse, temps 1 (≈ 30 s)
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "Hypothèse : deux publics opposés réunis", "Diagnostic · pourquoi le problème existe (HYPOTHÈSE H5, à valider sur vos données)");
  const pops = [
    [fa.FaCrosshairs, "Les vétérans du genre", [["45 %", " des joueurs qui ont arrêté Overwatch 2 en décembre 2024 ont joué à Marvel Rivals (Newzoo)"], ["−22 %", " de joueurs moyens sur Overwatch 2 (PC) ce mois-là"]], NAVY],
    [fa.FaMask, "Le grand public venu pour Marvel", [["10 M", " de joueurs en 3 jours, 40 M en 3 mois"], ["Gratuit", " et porté par une licence grand public : beaucoup découvrent le genre"]], RED],
  ];
  for (let i = 0; i < 2; i++) {
    const x = 0.5 + i * 4.6;
    s.addShape("roundRect", { x, y: 1.3, w: 4.4, h: 2.05, fill: { color: WHITE }, line: { color: LINE }, rectRadius: 0.08 });
    await badge(s, pops[i][0], x + 0.2, 1.43, 0.42, pops[i][3]);
    s.addText(pops[i][1], { x: x + 0.75, y: 1.43, w: 3.5, h: 0.42, fontFace: H, fontSize: 14, bold: true, color: INK, margin: 0, valign: "middle", isTextBox: true });
    const runs = [];
    pops[i][2].forEach((r, j) => {
      runs.push({ text: r[0], options: { bold: true, color: pops[i][3], fontSize: 15 } });
      runs.push({ text: r[1], options: { color: INK, breakLine: true } });
      if (j === 0) runs.push({ text: " ", options: { fontSize: 4, breakLine: true } });
    });
    s.addText(runs, { x: x + 0.2, y: 1.98, w: 4.0, h: 1.3, fontFace: B, fontSize: 10.5, margin: 0, valign: "top", isTextBox: true });
  }
  s.addShape("roundRect", { x: 0.5, y: 3.5, w: 9, h: 1.6, fill: { color: NAVY }, line: { color: NAVY }, rectRadius: 0.08 });
  s.addText([
    { text: "Sans calibrage, ils se croisent ", options: { bold: true, color: RED } },
    { text: "(Bronze III pour tous en classé jusqu'à la saison 5) : les écarts de niveau donnent l'impression d'un matchmaking injuste, et les moins expérimentés partent.", options: { color: WHITE, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "Ce qu'il reste : ", options: { bold: true, color: RED } },
    { text: "surtout des vétérans. Auteurs d'avis Steam à plus de 200 h : 5 % fin 2024, 42 % à l'été 2025. « Plus un jeu pour le fan de Marvel occasionnel » (TheGamer, 09/08/2025).", options: { color: WHITE } },
  ], { x: 0.75, y: 3.55, w: 8.5, h: 1.5, fontFace: B, fontSize: 11.5, margin: 0, valign: "middle", isTextBox: true });
  source(s, [{ text: "Newzoo via Insider Gaming", url: U.newzoo }, { text: "VGC", url: U.vgc }, { text: "Game World Observer", url: U.gwo }, { text: "PCGamesN", url: U.pcg }, { text: "avis Steam", url: U.steamapi }, { text: "TheGamer", url: U.thegamer }]);
  pageNum(s, 3);
  s.addNotes("[30 s] Pourquoi ce problème existe ? Notre hypothèse, H5. Au lancement, deux publics opposés arrivent en même temps : des vétérans du genre, puisque 45 % des joueurs qui ont quitté Overwatch 2 en décembre ont joué à Marvel Rivals, et un grand public venu pour Marvel, 40 millions en trois mois. Sans calibrage, ils se croisent : les écarts de niveau donnent l'impression d'un matchmaking injuste, et les moins expérimentés partent. Il reste surtout des vétérans. Attention : Newzoo dit « ont joué », pas « ont migré ».");

  // 4. Diagnostic : l'hypothèse, temps 2 (≈ 30 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Deux mécanismes entretiennent les écarts", "Diagnostic · aujourd'hui : ce que les données publiques montrent, et ce qu'elles ne montrent pas");
  const mech = [
    [fa.FaUserPlus, "H5b · Les nouveaux, en partie rapide", RED,
      "Faute de joueurs en file, le matchmaking accepte des écarts de niveau plus grands pour lancer la partie : NetEase le reconnaît (vidéo du 21/08/2025).",
      "Le nouveau tombe sur les vétérans restants, perd et part : la base ne se renouvelle pas.",
      "Aucune correction publiée pour la partie rapide, où passe chaque nouveau avant le niveau 15."],
    [fa.FaRedo, "H5c · Les joueurs de retour, en classé", NAVY,
      "À chaque saison, le rang n'est abaissé que de 6 divisions, quelle que soit la durée de l'absence (Dev Talk Vol.10).",
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
    { text: "Ce qu'on ne sait pas encore : ", options: { bold: true, color: RED } },
    { text: "où jouent les nouveaux, quel écart subissent nouveaux et revenants, et si cet écart les fait partir. Seules vos données internes peuvent trancher.", options: { color: INK } },
  ], { x: 0.5, y: 4.6, w: 9, h: 0.55, fontFace: B, fontSize: 11, margin: 0, valign: "middle", isTextBox: true });
  source(s, [{ text: "vidéo NetEase du 21/08/2025", url: U.video }, { text: "Dev Talk Vol.10", url: U.devtalk }, { text: "inactivité (source tierce)", url: U.timesaver }, { text: "Steam Charts", url: U.steamcharts }]);
  pageNum(s, 4);
  s.addNotes("[30 s] Et aujourd'hui ? Deux mécanismes entretiennent ces écarts. Pour les nouveaux, en partie rapide : faute de joueurs, le matchmaking accepte des écarts plus grands, NetEase l'a reconnu ; le nouveau tombe sur les vétérans et part. Pour les joueurs de retour, en classé : leur rang n'est abaissé que de six divisions, même après des mois d'absence ; ils affrontent des joueurs plus en forme, perdent, et repartent. C'est cohérent avec les retours de saison qui ne durent pas. Mais ce sont des hypothèses : seules vos données peuvent trancher.");

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
    ["Durée d'absence, rang au retour et bilan des 10 premiers matchs classés", "Si le rang au retour est périmé", "Teste la cause C (joueurs de retour)"],
    ["Départs en classé avant / après les placements de la saison 5", "Si mieux placer les joueurs les a retenus", "Expérience déjà faite : la preuve la moins chère"],
  ];
  s.addTable(rows, { x: 0.5, y: 2.08, w: 9, colW: [3.5, 2.6, 2.9], fontFace: B, fontSize: 9, color: INK, border: { type: "solid", pt: 0.5, color: "D5D8E3" }, fill: { color: WHITE }, valign: "middle", margin: [1, 5, 1, 5], rowH: [0.26, 0.36, 0.36, 0.36, 0.36, 0.36, 0.36] });
  s.addText("Ensuite, pour écarter les autres explications : héros joué, parties avec bots, joueurs en groupe, comptes arrivés en 2025. Tout existe déjà dans vos serveurs.", { x: 0.5, y: 4.83, w: 9, h: 0.35, fontFace: B, fontSize: 9.5, italic: true, color: MUTED, margin: 0, isTextBox: true });
  source(s, [{ text: "plan de collecte complet (matrice ICE)", url: U.gdoc }, { text: "notes de patch S5", url: U.s5 }]);
  pageNum(s, 5);
  s.addNotes("[45 s] Recommandation : d'abord mesurer. L'objectif traduit l'hypothèse en chiffre : un joueur qui perd au début ne doit pas partir plus de 1,2 fois plus souvent que les autres, chez les nouveaux comme chez les revenants, d'ici fin mars 2027. Six données d'abord. La première mesure l'objectif. La deuxième dit où jouent les nouveaux. Les trois suivantes testent chacune une cause : le niveau de départ, le manque de joueurs, le rang au retour. La dernière exploite une expérience que NetEase a déjà faite en saison 5. Tout est déjà dans vos serveurs.");

  // 6. Recommandation : la matrice de collecte, visuelle (≈ 20 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "La matrice de collecte : 13 données indispensables", "Recommandation · score ICE = Impact × Confiance × Facilité, sur 125 ; coupe sous 30");
  const cols = [
    ["INDISPENSABLE · ICE ≥ 80", GREEN, [
      ["Mode et plateforme des 10 premiers matchs", 125], ["Écart accepté × joueurs en file", 125], ["Départ à 7 jours × bilan des 10 matchs", 100],
      ["Niveau de départ et convergence", 100], ["Joueurs de retour : absence × rang × bilan", 100], ["Filtrage de la population", 100],
      ["Écart de score en classé", 100], ["Compositions par rôle", 100], ["Parties avec bots", 100], ["Écart subi en partie rapide", 80],
      ["Cohortes 2025", 80], ["Rétention avant / après la S5", 80], ["Groupes contre solos", 80]]],
    ["UTILE · 30 à 79", AMBER, [
      ["Performance des comptes neufs (smurfs)", 64], ["Rôle joué / rôle habituel", 64], ["Avis Steam (collecte faite)", 45],
      ["Attente simulée", 36], ["Durée des ultimes de soin", 36], ["Sondage d'équité perçue", 36], ["Question d'onboarding", 36], ["Héros maîtrisés", 30]]],
    ["ÉCARTÉ · < 30 ou inutile", GREY, [
      ["Benchmark Newzoo (panel biaisé)", 12], ["Chat vocal ou texte complet", 9], ["Historique sur d'autres jeux", 6], ["Âge exact", 6], ["Numéro de téléphone", 4]]],
  ];
  const cw = [3.35, 3.0, 2.65];
  let cx = 0.5;
  for (let c = 0; c < 3; c++) {
    const [lab, col, items] = cols[c];
    chip(s, lab, cx, 1.28, cw[c] - 0.15, col);
    items.forEach((it, i) => {
      const y = 1.62 + i * 0.27;
      s.addShape("rect", { x: cx, y: y + 0.02, w: cw[c] - 0.15, h: 0.24, fill: { color: c === 0 ? "EAF4EF" : c === 1 ? "FBF3E6" : "F0F1F4" }, line: { color: WHITE } });
      s.addText(it[0], { x: cx + 0.06, y: y + 0.02, w: cw[c] - 0.7, h: 0.24, fontFace: B, fontSize: 8.5, color: INK, margin: 0, valign: "middle", isTextBox: true });
      s.addText(String(it[1]), { x: cx + cw[c] - 0.62, y: y + 0.02, w: 0.42, h: 0.24, fontFace: H, fontSize: 9, bold: true, color: col, align: "right", margin: 0, valign: "middle", isTextBox: true });
    });
    cx += cw[c];
  }
  s.addText([
    { text: "Les 13 indispensables existent déjà dans votre télémétrie : ", options: { bold: true, color: INK } },
    { text: "aucune nouvelle collecte pour l'audit. Les deux collectes nouvelles (sondage, question d'onboarding) sont facultatives, sous consentement, après l'audit.", options: { color: INK } },
  ], { x: 6.85, y: 3.15, w: 2.6, h: 1.9, fontFace: B, fontSize: 10, margin: 0, valign: "top", isTextBox: true });
  source(s, [{ text: "plan de collecte complet (justification de chaque note)", url: U.gdoc }]);
  pageNum(s, 6);
  s.addNotes("[20 s] Voici la matrice complète. Chaque donnée est notée sur l'impact sur la décision, la confiance et la facilité. Treize sont indispensables, et toutes existent déjà dans votre télémétrie : l'audit ne demande aucune nouvelle collecte. Les données écartées, à droite, je les détaille juste après.");

  // 7. Recommandation : les leviers par cause (≈ 35 s)
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "Puis tester le levier qui correspond à la cause", "Recommandation · tests A/B de 60 jours, seulement si l'audit confirme le problème");
  const causes = [
    [fa.FaSnowflake, "A · Démarrage à froid", RED, "Le jeu ne connaît pas le niveau d'un nouveau compte et le place mal.", "Écart fort sur les premiers matchs, à toute heure.", ["Niveau de départ plus prudent", "File débutants jusqu'au niveau 15"]],
    [fa.FaUsersSlash, "B · Manque de joueurs", NAVY, "File vide : le jeu accepte des écarts plus grands pour lancer la partie.", "L'écart grandit quand la file se vide.", ["Écart resserré aux heures creuses", "Arrêt si 10 % attendent plus de 5 min"]],
    [fa.FaRedo, "C · Rang périmé au retour", AMBER, "Le rang ne tient pas compte de la durée d'absence.", "Les revenants perdent plus, d'autant plus que l'absence a été longue.", ["Matchs de recalibrage au retour", "Baisse de rang selon l'absence"]],
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
  pageNum(s, 7);
  s.addNotes("[35 s] On ne teste que si l'audit confirme le problème, et on teste le levier de la cause trouvée. A, démarrage à froid : le jeu place mal un nouveau ; on rend le niveau de départ plus prudent. B, manque de joueurs : on resserre l'écart aux heures creuses, et on arrête si l'attente dépasse 5 minutes. C, rang périmé : on ajoute des matchs de recalibrage au retour d'une longue absence. Chaque test a son groupe témoin tiré au sort.");

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
    await badge(s, out[i][0], 0.5, y + 0.05, 0.45, GREY);
    s.addText(out[i][1], { x: 1.1, y, w: 8.4, h: 0.3, fontFace: H, fontSize: 12, bold: true, color: INK, margin: 0, valign: "middle", isTextBox: true });
    s.addText(out[i][2], { x: 1.1, y: y + 0.3, w: 8.4, h: 0.3, fontFace: B, fontSize: 10.5, color: MUTED, margin: 0, valign: "middle", isTextBox: true });
  }
  source(s, [{ text: "RGPD Art. 5", url: U.rgpd }, { text: "plan de collecte complet", url: U.gdoc }]);
  pageNum(s, 8);
  s.addNotes("[20 s] Ce que nous avons volontairement écarté. Les données personnelles qu'aucune décision n'exige : historique sur d'autres jeux, chat, âge, téléphone. Le benchmark Newzoo, trop biaisé pour étudier des débutants. Les rôles imposés, contraires à l'identité du jeu. Et les avis Steam ne servent que de contrôle, jamais de preuve.");

  // 9. Roadmap : quand, qui, combien (≈ 60 s)
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "Roadmap : quand, qui, combien", "Trois phases, chacune avec sa porte de décision");
  const ph = [
    ["0-30 j", "Audit", "1 data analyst à temps plein, 1 data engineer à mi-temps ; DPO NetEase pour l'accord et le hachage", "≈ 33 jours-homme ; aucune licence nouvelle", "Ratio ≤ 1,2 sur les deux cohortes → plan B"],
    ["30-90 j", "Tests A/B", "Équipe matchmaking NetEase + analyste", "Développement chiffré par NetEase avant tout lancement", "Levier gardé si le ratio baisse et l'attente reste < 5 min"],
    ["90-180 j", "Généralisation", "Live-ops et communication ; page publique « comment fonctionne le matchmaking »", "Pilotage mensuel sur les outils existants", "31/03/2027 : ratio ≤ 1,2"],
  ];
  for (let i = 0; i < 3; i++) {
    const x = 0.5 + i * 3.05;
    s.addShape("ellipse", { x: x + 0.05, y: 1.3, w: 0.45, h: 0.45, fill: { color: RED }, line: { color: RED } });
    s.addText(String(i + 1), { x: x + 0.05, y: 1.3, w: 0.45, h: 0.45, fontFace: H, fontSize: 15, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0, isTextBox: true });
    s.addText([{ text: ph[i][0] + "  ", options: { bold: true, color: INK } }, { text: ph[i][1], options: { color: MUTED } }], { x: x + 0.6, y: 1.3, w: 2.3, h: 0.45, fontFace: H, fontSize: 14, valign: "middle", margin: 0, isTextBox: true });
    s.addShape("roundRect", { x, y: 1.9, w: 2.9, h: 2.45, fill: { color: WHITE }, line: { color: LINE }, rectRadius: 0.08 });
    s.addText([
      { text: "Qui : ", options: { bold: true, color: NAVY } }, { text: ph[i][2], options: { color: INK, breakLine: true } },
      { text: " ", options: { fontSize: 4, breakLine: true } },
      { text: "Combien : ", options: { bold: true, color: NAVY } }, { text: ph[i][3], options: { color: INK, breakLine: true } },
      { text: " ", options: { fontSize: 4, breakLine: true } },
      { text: "Décision : ", options: { bold: true, color: RED } }, { text: ph[i][4], options: { color: INK } },
    ], { x: x + 0.15, y: 2.0, w: 2.6, h: 2.3, fontFace: B, fontSize: 10, margin: 0, valign: "top", isTextBox: true });
  }
  s.addText([
    { text: "Stack : ", options: { bold: true, color: INK } },
    { text: "télémétrie in-game existante → entrepôt existant (type BigQuery ou Snowflake ; requêtes ≈ 6,25 $ par To au-delà de 1 To gratuit par mois) → BI existante (type Looker ou Tableau).", options: { color: INK } },
  ], { x: 0.5, y: 4.47, w: 9, h: 0.65, fontFace: B, fontSize: 10, margin: 0, valign: "middle", isTextBox: true });
  source(s, [{ text: "tarifs BigQuery (01/10/2026)", url: U.bq }, { text: "plan de collecte complet (§5 et §7)", url: U.gdoc }]);
  pageNum(s, 9);
  s.addNotes("[60 s] La roadmap : quand, qui, combien. Trente jours d'audit, avec un data analyst à temps plein et un data engineer à mi-temps, soit environ 33 jours-homme, sans aucune licence nouvelle : tout passe par votre télémétrie, votre entrepôt et vos outils de BI. Si le ratio est déjà sous 1,2 sur les deux cohortes, on s'arrête et on bascule sur le plan B. Sinon, soixante jours de tests A/B avec votre équipe matchmaking, chiffrés par vos soins avant lancement. Puis généralisation et pilotage mensuel jusqu'au 31 mars 2027.");

  // 10. Risques & KPIs de décision (≈ 30 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "KPIs de décision et garde-fous", "Risques / KPIs · chaque seuil déclenche une action");
  const kpi = [["> 1,2", "ratio de départ des nouveaux qui perdent : on teste A ou B"], ["> 1,2", "ratio de départ des revenants qui perdent : on teste C"], ["> 5 min", "d'attente pour 10 % des joueurs : on arrête le resserrement"], ["> 50 %", "des premiers matchs en partie rapide : on la corrige en premier"]];
  for (let i = 0; i < 4; i++) {
    const x = 0.5 + i * 2.29;
    s.addShape("roundRect", { x, y: 1.25, w: 2.15, h: 1.35, fill: { color: NAVY }, line: { color: NAVY }, rectRadius: 0.08 });
    s.addText(kpi[i][0], { x: x + 0.15, y: 1.32, w: 1.9, h: 0.5, fontFace: H, fontSize: 24, bold: true, color: RED, margin: 0, isTextBox: true });
    s.addText(kpi[i][1], { x: x + 0.15, y: 1.85, w: 1.9, h: 0.7, fontFace: B, fontSize: 9.5, color: WHITE, margin: 0, valign: "top", isTextBox: true });
  }
  const risks = [
    [fa.FaBalanceScale, "Base légale", "Contrat pour le matchmaking lui-même ; intérêt légitime documenté (test de mise en balance) pour l'audit ; consentement pour les sondages."],
    [fa.FaUserShield, "RGPD", "Accord de sous-traitance avant tout accès, identifiants hachés par NetEase, mineurs exclus ou traités à part."],
    [fa.FaGavel, "AI Act", "Aucun profilage individuel des « perdants » : les leviers s'appliquent à tous ; bots toujours annoncés."],
    [fa.FaRoute, "Plan B", "Ratio ≤ 1,2 sur les deux cohortes : pas d'investissement matchmaking ; les données extraites testent équilibrage et monétisation."],
  ];
  for (let i = 0; i < 4; i++) {
    const y = 2.75 + i * 0.6;
    await badge(s, risks[i][0], 0.5, y + 0.06, 0.4);
    s.addText([{ text: risks[i][1] + " : ", options: { bold: true, color: INK } }, { text: risks[i][2], options: { color: INK } }], { x: 1.05, y, w: 8.45, h: 0.55, fontFace: B, fontSize: 10.5, margin: 0, valign: "middle", isTextBox: true });
  }
  source(s, [{ text: "RGPD", url: U.rgpd }, { text: "AI Act", url: U.aiact }]);
  pageNum(s, 10);
  s.addNotes("[30 s] Chaque KPI a un seuil qui déclenche une décision : 1,2 pour lancer les tests, chez les nouveaux comme chez les revenants ; 5 minutes d'attente pour les arrêter ; 50 % pour choisir le mode visé. Base légale : contrat pour le matchmaking, intérêt légitime documenté pour l'audit. Et si l'hypothèse tombe, le plan B réutilise les mêmes données. Pour démarrer : signer l'accord de sous-traitance et lancer l'audit de 30 jours. Merci, je prends vos questions.");

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
    ["Pourquoi cette donnée et pas une autre ?", "Score ICE le plus haut, et elle tranche directement l'hypothèse (départ à 7 jours, cause A, B ou C)."],
    ["Combien ça coûte ?", "≈ 33 jours-homme pour l'audit ; aucune licence nouvelle ; requêtes ≈ 6,25 $ par To au-delà de 1 To gratuit."],
    ["Quelle base légale ?", "Contrat pour le matchmaking ; intérêt légitime documenté pour l'audit ; consentement pour les sondages."],
    ["Comment savoir si ça marche ?", "Ratio ≤ 1,2 au 31/03/2027 sur les deux cohortes ; sinon, plan B sans nouvelle collecte."],
    ["Qu'avez-vous écarté ?", "Données personnelles sans décision (chat, âge, téléphone, autres jeux), benchmark Newzoo (ICE 12), rôles imposés."],
    ["Où avez-vous utilisé l'IA ?", "9 usages tracés en annexe du rapport : outil, prompt, réponse, analyse critique (retenu, rejeté, à vérifier)."],
  ];
  for (let i = 0; i < 6; i++) {
    const col = i % 2, r = Math.floor(i / 2);
    const x = 0.5 + col * 4.6, y = 1.3 + r * 1.27;
    s.addShape("roundRect", { x, y, w: 4.4, h: 1.15, fill: { color: WHITE }, line: { color: LINE }, rectRadius: 0.06 });
    s.addText(qa[i][0], { x: x + 0.15, y: y + 0.08, w: 4.1, h: 0.3, fontFace: H, fontSize: 11, bold: true, color: RED, margin: 0, isTextBox: true });
    s.addText(qa[i][1], { x: x + 0.15, y: y + 0.4, w: 4.1, h: 0.7, fontFace: B, fontSize: 10, color: INK, margin: 0, valign: "top", isTextBox: true });
  }
  pageNum(s, 12);
  s.addNotes("Annexe pour les questions. Pour « Où avez-vous utilisé l'IA ? », ajoutez à l'oral un élément critique que vous avez fait sans IA (par exemple le choix final de l'hypothèse ou la vérification des chiffres), si c'est le cas.");

  await pres.writeFile({ fileName: "/home/user/SOCIO/docs/presentation/pitch_marvel_rivals_netease.pptx" });
  console.log("ok");
})();
