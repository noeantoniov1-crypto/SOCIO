// Pitch client 5 min : Marvel Rivals × NetEase Games (structure kick-off p. 45)
const pptxgen = require("pptxgenjs");
const React = require("react");
const RDS = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");

const NAVY = "161A33", RED = "E23636", LIGHT = "F4F5F9", INK = "1F2233", MUTED = "5E6378", WHITE = "FFFFFF", SOFT = "C9CCDA";
const H = "Arial", B = "Calibri";

async function icon(Comp, color = WHITE, size = 256) {
  const svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: "#" + color, size }));
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}
// icône dans un cercle rouge : motif répété
async function badge(slide, Comp, x, y, d = 0.55, fill = RED) {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } });
  const p = d * 0.25;
  slide.addImage({ data: await icon(Comp), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p });
}
function title(slide, t, sub, dark = false) {
  slide.addText(t, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontFace: H, fontSize: 28, bold: true, color: dark ? WHITE : INK, margin: 0, isTextBox: true });
  if (sub) slide.addText(sub, { x: 0.5, y: 0.88, w: 9, h: 0.35, fontFace: B, fontSize: 13, color: dark ? SOFT : MUTED, margin: 0, isTextBox: true });
}
function source(slide, parts, dark = false) {
  // parts : [{text, url?}]
  const runs = [{ text: "Sources : ", options: { color: dark ? SOFT : MUTED } }];
  parts.forEach((p, i) => {
    runs.push({ text: p.text, options: p.url ? { hyperlink: { url: p.url }, color: dark ? "9FB4FF" : "2F3C7E" } : { color: dark ? SOFT : MUTED } });
    if (i < parts.length - 1) runs.push({ text: " · ", options: { color: dark ? SOFT : MUTED } });
  });
  slide.addText(runs, { x: 0.5, y: 5.2, w: 9, h: 0.28, fontFace: B, fontSize: 9, margin: 0, isTextBox: true });
}
function pageNum(slide, n, dark = false) {
  slide.addText(String(n), { x: 9.2, y: 5.2, w: 0.3, h: 0.28, fontFace: B, fontSize: 9, color: dark ? SOFT : MUTED, align: "right", margin: 0, isTextBox: true });
}

const U = {
  steamcharts: "https://steamcharts.com/app/2767030",
  gwo: "https://gameworldobserver.com/2025/02/20/marvel-rivals-40-million-players-netease-fy24-report",
  steamapi: "https://store.steampowered.com/appreviews/2767030?json=1",
  video: "https://x.com/MarvelRivals/status/1958627668536311945",
  s5: "https://www.marvelrivals.com/20251114/41525_1270590.html",
  s7: "https://www.marvelrivals.com/gameupdate/20260318/41548_1291772.html",
  pcg: "https://www.pcgamesn.com/marvel-rivals/ranks-competitive",
  heliyon: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10839887/",
  rgpd: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
  aiact: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
  crossplay: "https://esportsinsider.com/marvel-rivals-crossplay",
  gdoc: "https://docs.google.com/document/d/1nOhcAL2wfeAHOK6x6UZH-Hg5yh9Ofxxko7FY47r5Vzc/edit",
};

(async () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "Noé";
  pres.title = "Marvel Rivals : retenir les nouveaux joueurs";

  // 1. Titre
  let s = pres.addSlide(); s.background = { color: NAVY };
  await badge(s, fa.FaGamepad, 0.5, 0.6, 0.7);
  s.addText("Marvel Rivals : retenir les nouveaux joueurs", { x: 0.5, y: 1.6, w: 9, h: 1.2, fontFace: H, fontSize: 36, bold: true, color: WHITE, margin: 0, isTextBox: true });
  s.addText("Plan de collecte data pour le comité de direction de NetEase Games", { x: 0.5, y: 2.85, w: 9, h: 0.5, fontFace: B, fontSize: 18, color: SOFT, margin: 0, isTextBox: true });
  s.addText("Noé, consultant · 2 octobre 2026", { x: 0.5, y: 4.6, w: 9, h: 0.35, fontFace: B, fontSize: 13, color: SOFT, margin: 0, isTextBox: true });
  s.addNotes("Bonjour. Je suis mandaté par le comité de direction de NetEase Games. Ma question : pourquoi Marvel Rivals ne garde-t-il pas ses nouveaux joueurs, et que faut-il mesurer pour le savoir ?");

  // 2. Contexte (30 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Le jeu attire, mais ne retient pas", "Contexte · joueurs simultanés Steam depuis le lancement (06/12/2024), moyenne mensuelle (PC)");
  s.addText("−76 %", { x: 0.5, y: 1.45, w: 3, h: 0.9, fontFace: H, fontSize: 60, bold: true, color: RED, margin: 0, isTextBox: true });
  s.addText("de joueurs simultanés en moyenne entre le mois de lancement (déc. 2024 : 279 K) et les 30 derniers jours (68 K)", { x: 0.5, y: 2.35, w: 3, h: 0.8, fontFace: B, fontSize: 13, color: INK, margin: 0, isTextBox: true });
  s.addText("40 M", { x: 0.5, y: 3.3, w: 3, h: 0.8, fontFace: H, fontSize: 48, bold: true, color: NAVY, margin: 0, isTextBox: true });
  s.addText("de joueurs acquis en 3 mois : le problème est la rétention, pas l'acquisition", { x: 0.5, y: 4.1, w: 3, h: 0.8, fontFace: B, fontSize: 13, color: INK, margin: 0, isTextBox: true });
  const months = ["Déc. 24", "Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc.", "Janv. 26", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.*"];
  const players = [279402, 306066, 228000, 144302, 134118, 102116, 79806, 82825, 77502, 64418, 63716, 65301, 75492, 88790, 81368, 65150, 70116, 67588, 69738, 84281, 80129, 67646];
  s.addChart(pres.charts.LINE, [{ name: "Joueurs simultanés (moyenne)", labels: months, values: players.map(v => Math.round(v / 1000)) }], {
    x: 3.8, y: 1.35, w: 5.7, h: 3.7, chartColors: [RED], lineSize: 3, lineDataSymbol: "circle", lineDataSymbolSize: 6,
    showTitle: true, title: "Milliers de joueurs simultanés (moyenne mensuelle)", titleFontSize: 12, titleColor: INK, titleFontFace: B,
    showLegend: false, catAxisLabelColor: MUTED, valAxisLabelColor: MUTED, catAxisLabelFontSize: 8, valAxisLabelFontSize: 9,
    valGridLine: { color: "E3E5EE", size: 0.5 }, catGridLine: { style: "none" },
    showValue: false,
  });
  source(s, [{ text: "Steam Charts (consulté le 30/09/2026 ; * sept. 2026 = 30 derniers jours)", url: U.steamcharts }, { text: "rapport NetEase via Game World Observer (40 M)", url: U.gwo }]);
  pageNum(s, 2);
  s.addNotes("30 secondes. Depuis le lancement, la fréquentation moyenne sur Steam a perdu 76 %. Après un sommet en janvier 2025 (306 000), elle chute pendant neuf mois, puis stagne entre 64 000 et 89 000 depuis un an : les nouvelles saisons font des rebonds, pas une remontée. Pourtant 40 millions de joueurs sont venus en trois mois. Le jeu sait attirer ; il ne sait pas garder. Attention : Steam, c'est le PC seulement.");

  // 3. Diagnostic : H5 en trois temps (≈ 30 s)
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "H5 : les nouveaux perdent trop tôt et partent", "Diagnostic · H5 en trois temps (HYPOTHÈSE, à valider sur vos données)");
  const steps = [
    [fa.FaUserFriends, "2025 : ce qui n'a pas marché", "Des joueurs de tous niveaux arrivent en même temps, sans calibrage (Bronze III pour tous en classé jusqu'à la S5). Les moins expérimentés perdent lourdement et partent."],
    [fa.FaFilter, "Conséquence", "Le départ filtre la population : il reste surtout des joueurs expérimentés."],
    [fa.FaDoorOpen, "Aujourd'hui : ce qui ne marche toujours pas", "Un nouveau arrive en partie rapide face à cette population. Faute de joueurs, la fourchette de niveau s'élargit. Il perd et part : la base ne se renouvelle pas."],
  ];
  for (let i = 0; i < 3; i++) {
    const x = 0.5 + i * 3.05;
    s.addShape("roundRect", { x, y: 1.45, w: 2.85, h: 2.75, fill: { color: WHITE }, line: { color: "E3E5EE" }, rectRadius: 0.08, shadow: { type: "outer", blur: 4, offset: 1, angle: 90, color: "000000", opacity: 0.12 } });
    await badge(s, steps[i][0], x + 0.2, 1.65, 0.5);
    s.addText(steps[i][1], { x: x + 0.2, y: 2.25, w: 2.45, h: 0.5, fontFace: H, fontSize: 13, bold: true, color: INK, margin: 0, valign: "top", isTextBox: true });
    s.addText(steps[i][2], { x: x + 0.2, y: 2.8, w: 2.45, h: 1.3, fontFace: B, fontSize: 11, color: INK, margin: 0, valign: "top", isTextBox: true });
  }
  s.addText([
    { text: "Deux causes possibles, deux leviers différents : ", options: { bold: true, color: INK } },
    { text: "", options: { breakLine: true } },
    { text: "A · démarrage à froid (MMR de départ mal réglé)  ·  B · manque de joueurs (fourchette élargie aux heures creuses)", options: { color: INK } },
  ], { x: 0.5, y: 4.4, w: 9, h: 0.55, fontFace: B, fontSize: 12, margin: 0, isTextBox: true });
  source(s, [{ text: "PCGamesN (Bronze III)", url: U.pcg }, { text: "vidéo NetEase du 21/08/2025 (fourchette)", url: U.video }]);
  pageNum(s, 3);
  s.addNotes("Notre hypothèse principale, H5, en trois temps. En 2025, tout le monde arrive sans calibrage ; les moins expérimentés perdent et partent. Il reste surtout des joueurs expérimentés. Aujourd'hui, un nouveau arrive en partie rapide face à eux, dans des parties que le manque de joueurs élargit ; il part à son tour. Deux causes possibles : un MMR de départ mal réglé, ou le manque de joueurs. Elles appellent des leviers différents, c'est pourquoi on audite avant d'agir.");

  // 4. Diagnostic : preuves (≈ 30 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Le matchmaking a porté la chute de 2025", "Diagnostic · part des avis Steam négatifs qui citent le matchmaking (37 990 avis pondérés)");
  const m2 = ["Déc. 24", "Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc.", "Janv. 26", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept."];
  const mm = [7.4, 10.9, 12.1, 20.3, 21.1, 29.1, 27.6, 37.0, 41.0, 33.9, 25.9, 17.3, 18.2, 15.4, 15.6, 13.4, 14.4, 14.7, 14.2, 8.8, 13.4, 10.5];
  s.addChart(pres.charts.LINE, [{ name: "% des négatifs citant le matchmaking", labels: m2, values: mm }], {
    x: 0.4, y: 1.3, w: 5.6, h: 3.8, chartColors: [NAVY], lineSize: 3, lineDataSymbol: "circle", lineDataSymbolSize: 5,
    showLegend: false, catAxisLabelColor: MUTED, valAxisLabelColor: MUTED, catAxisLabelFontSize: 8, valAxisLabelFontSize: 9,
    valAxisMaxVal: 45, valAxisLabelFormatCode: "0\"%\"", valGridLine: { color: "E3E5EE", size: 0.5 }, catGridLine: { style: "none" },
    showTitle: true, title: "% des avis négatifs citant le matchmaking", titleFontSize: 12, titleColor: INK, titleFontFace: B,
  });
  const facts = [
    ["7 % → 41 %", "déc. 2024 → août 2025 : la plainte qui monte le plus pendant la chute"],
    ["38 % → 38 %", "après le démenti EOMM et la vidéo officielle d'août 2025 : expliquer ne suffit pas"],
    ["36 % → 14 %", "d'avis négatifs après les placements de la S5 : corriger le calibrage compte (corrélation)"],
  ];
  for (let i = 0; i < 3; i++) {
    const y = 1.35 + i * 1.22;
    s.addText(facts[i][0], { x: 6.3, y, w: 3.2, h: 0.5, fontFace: H, fontSize: 24, bold: true, color: RED, margin: 0, isTextBox: true });
    s.addText(facts[i][1], { x: 6.3, y: y + 0.5, w: 3.2, h: 0.65, fontFace: B, fontSize: 11, color: INK, margin: 0, valign: "top", isTextBox: true });
  }
  source(s, [{ text: "API publique des avis Steam (notre collecte)", url: U.steamapi }, { text: "notes de patch S5", url: U.s5 }, { text: "vidéo du 21/08/2025", url: U.video }]);
  pageNum(s, 4);
  s.addNotes("Les faits qui appuient H5. Pendant la chute, la part des avis négatifs qui parlent du matchmaking passe de 7 à 41 %. Les explications officielles d'août 2025 ne la font pas baisser. En revanche, quand NetEase ajoute des placements en classé, les avis négatifs chutent de 36 à 14 %. Mais la partie rapide, par où passent tous les nouveaux, n'a jamais été corrigée. Ce sont des corrélations : seules vos données internes peuvent trancher.");

  // 5. Recommandation : objectif + audit (≈ 1 min)
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "D'abord mesurer : 30 jours d'audit", "Recommandation · les données à extraire en priorité, et pourquoi");
  s.addShape("roundRect", { x: 0.5, y: 1.3, w: 9, h: 0.72, fill: { color: NAVY }, line: { color: NAVY }, rectRadius: 0.08 });
  s.addText([
    { text: "Objectif : ", options: { bold: true, color: RED } },
    { text: "d'ici le 31/03/2027, qu'un nouveau joueur qui perd au moins 7 de ses 10 premiers matchs ne parte pas plus de 1,2 fois plus souvent dans la semaine que les autres nouveaux.", options: { color: WHITE } },
  ], { x: 0.7, y: 1.32, w: 8.6, h: 0.68, fontFace: B, fontSize: 12, margin: 0, valign: "middle", isTextBox: true });
  const hd = (t) => ({ text: t, options: { bold: true, color: WHITE, fill: { color: RED }, fontFace: H, fontSize: 10.5 } });
  const rows = [
    [hd("Donnée à extraire"), hd("Ce qu'elle nous dit"), hd("Pourquoi en priorité")],
    ["Résultats des 10 premiers matchs et départ à 7 jours", "Si perdre au début fait partir", "C'est la mesure de l'objectif : sans elle, pas de preuve du problème"],
    ["Mode et plateforme de ces 10 premiers matchs", "Où jouent les nouveaux : quel mode, PC ou console", "Dit quel mode corriger en premier (Steam = PC seul)"],
    ["Niveau de départ attribué comparé au niveau réel après 50 matchs", "Si le jeu place mal un nouveau à l'arrivée", "Teste la cause A (démarrage à froid)"],
    ["Écart de niveau par match, selon les joueurs en file, l'heure, la région", "Si l'écart grandit quand il y a peu de joueurs", "Teste la cause B (manque de joueurs)"],
    ["Départs en classé avant / après les placements de la saison 5", "Si mieux placer les joueurs les a retenus", "Expérience déjà faite par NetEase : la preuve la moins chère"],
  ];
  s.addTable(rows, { x: 0.5, y: 2.15, w: 9, colW: [3.2, 2.9, 2.9], fontFace: B, fontSize: 9.5, color: INK, border: { type: "solid", pt: 0.5, color: "D5D8E3" }, fill: { color: WHITE }, valign: "middle", margin: [2, 5, 2, 5], rowH: [0.28, 0.4, 0.4, 0.4, 0.4, 0.4] });
  s.addText("Ensuite, pour écarter les autres explications : héros joué, parties avec bots, joueurs en groupe, comptes arrivés en 2025. Toutes ces données existent déjà dans vos serveurs.", { x: 0.5, y: 4.78, w: 9, h: 0.38, fontFace: B, fontSize: 9.5, italic: true, color: MUTED, margin: 0, isTextBox: true });
  source(s, [{ text: "plan de collecte complet (12 données notées, détail et justification)", url: U.gdoc }]);
  pageNum(s, 5);
  s.addNotes("Recommandation, première partie : d'abord mesurer. L'objectif traduit notre hypothèse en chiffre : si perdre au début fait partir, les nouveaux qui perdent partent plus que les autres. On vise un écart d'au plus 1,2 fois au 31 mars 2027. Cinq données d'abord. Un : les résultats des dix premiers matchs et le départ à sept jours, c'est la mesure même de l'objectif. Deux : dans quel mode et sur quelle plateforme jouent les nouveaux, pour savoir quoi corriger en premier. Trois et quatre : chacune teste une des deux causes possibles. Cinq : NetEase a déjà changé le placement en classé à la saison 5 ; comparer avant et après, c'est une expérience gratuite. Tout existe déjà dans vos serveurs : pas de nouvelle collecte. Et si l'écart est déjà sous 1,2, on n'investit pas dans le matchmaking.");

  // 6. Recommandation : leviers (≈ 1 min)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Puis tester le levier qui correspond à la cause", "Recommandation · deux causes possibles ; tests A/B de 60 jours si l'audit confirme le problème");
  const cols = [
    [fa.FaSnowflake, "Cause A : démarrage à froid",
      "Le jeu ne connaît pas le niveau d'un nouveau compte. Il lui donne un niveau de départ par défaut et le place mal tant qu'il n'a pas assez joué.",
      "Dans les données : l'écart est fort sur les premiers matchs, à toute heure.",
      ["Niveau de départ plus prudent", "Ajustement plus rapide du niveau des nouveaux comptes (freine aussi les joueurs confirmés qui se recréent un compte)"]],
    [fa.FaUsersSlash, "Cause B : manque de joueurs",
      "Quand peu de joueurs sont en file (heures creuses, petites régions), le jeu élargit l'écart de niveau accepté pour lancer la partie plus vite.",
      "Dans les données : l'écart grandit quand la file se vide, pour tous.",
      ["Écart resserré aux heures creuses", "Regroupement de régions si besoin", "Arrêt si 10 % des joueurs attendent plus de 5 min"]],
  ];
  for (let i = 0; i < 2; i++) {
    const x = 0.5 + i * 4.6;
    s.addShape("roundRect", { x, y: 1.3, w: 4.4, h: 3.05, fill: { color: LIGHT }, line: { color: LIGHT }, rectRadius: 0.08 });
    await badge(s, cols[i][0], x + 0.2, 1.42, 0.45);
    s.addText(cols[i][1], { x: x + 0.8, y: 1.42, w: 3.45, h: 0.45, fontFace: H, fontSize: 14, bold: true, color: INK, margin: 0, valign: "middle", isTextBox: true });
    s.addText(cols[i][2], { x: x + 0.2, y: 1.97, w: 4.0, h: 0.72, fontFace: B, fontSize: 11, color: INK, margin: 0, valign: "top", isTextBox: true });
    s.addText(cols[i][3], { x: x + 0.2, y: 2.7, w: 4.0, h: 0.38, fontFace: B, fontSize: 10, italic: true, color: MUTED, margin: 0, valign: "top", isTextBox: true });
    s.addText([{ text: "Leviers à tester", options: { bold: true, color: RED, breakLine: true } }].concat(cols[i][4].map((t, j, a) => ({ text: t, options: { bullet: true, color: INK, breakLine: j < a.length - 1 } }))), { x: x + 0.15, y: 3.1, w: 4.1, h: 1.2, fontFace: B, fontSize: 10.5, margin: 0, valign: "top", isTextBox: true });
  }
  s.addText([
    { text: "Dans les deux cas : ", options: { bold: true, color: INK } },
    { text: "file débutants jusqu'au niveau 15, groupes séparés des joueurs seuls en partie rapide, étiquette « match d'entraînement » sur les parties avec bots. ", options: { color: INK } },
    { text: "Écartés : ", options: { bold: true, color: RED } },
    { text: "rôles imposés (liberté de composition).", options: { color: INK } },
  ], { x: 0.5, y: 4.47, w: 9, h: 0.65, fontFace: B, fontSize: 11, margin: 0, valign: "top", isTextBox: true });
  source(s, [{ text: "vidéo NetEase du 21/08/2025 (écart élargi quand la file est longue)", url: U.video }, { text: "crossplay en partie rapide", url: U.crossplay }]);
  pageNum(s, 6);
  s.addNotes("Recommandation, deuxième partie. Deux causes peuvent expliquer que les nouveaux perdent trop. Cause A, le démarrage à froid : le jeu ne sait rien d'un nouveau compte, il lui donne un niveau par défaut et le place mal pendant ses premiers matchs. Cause B, le manque de joueurs : quand la file est vide, le jeu accepte des écarts de niveau plus grands pour lancer la partie ; NetEase l'a lui-même expliqué en août 2025. Les données les distinguent : A, l'écart est fort sur les premiers matchs à toute heure ; B, il grandit quand la file se vide. On ne teste que le levier de la cause trouvée, avec un groupe témoin. Nous écartons les rôles imposés : la liberté de composition fait partie de l'identité du jeu.");

  // 7. Roadmap (1 min)
  s = pres.addSlide(); s.background = { color: LIGHT };
  title(s, "Trois phases, chacune avec sa porte de décision", "Roadmap · 0-30 / 30-90 / 90-180 jours");
  const ph = [
    ["0-30 j", "Audit", "Accord de sous-traitance et validation du hachage (J0). Extraction des 12 données, par mode et plateforme. Mesure du ratio.", "Ratio ≤ 1,2 → plan B, pas d'investissement matchmaking"],
    ["30-90 j", "Tests A/B", "Levier de la cause trouvée, groupe test contre groupe témoin.", "Levier gardé si le ratio baisse et l'attente p90 < 5 min"],
    ["90-180 j", "Généralisation", "Leviers gagnants déployés, page publique « comment fonctionne le matchmaking », pilotage mensuel.", "31/03/2027 : ratio ≤ 1,2"],
  ];
  for (let i = 0; i < 3; i++) {
    const x = 0.5 + i * 3.05;
    s.addShape("ellipse", { x: x + 0.1, y: 1.5, w: 0.5, h: 0.5, fill: { color: RED }, line: { color: RED } });
    s.addText(String(i + 1), { x: x + 0.1, y: 1.5, w: 0.5, h: 0.5, fontFace: H, fontSize: 16, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0, isTextBox: true });
    s.addText(ph[i][0], { x: x + 0.75, y: 1.5, w: 2, h: 0.5, fontFace: H, fontSize: 16, bold: true, color: INK, valign: "middle", margin: 0, isTextBox: true });
    s.addShape("roundRect", { x, y: 2.2, w: 2.85, h: 2.75, fill: { color: WHITE }, line: { color: "E3E5EE" }, rectRadius: 0.08 });
    s.addText(ph[i][1], { x: x + 0.2, y: 2.35, w: 2.45, h: 0.4, fontFace: H, fontSize: 14, bold: true, color: INK, margin: 0, isTextBox: true });
    s.addText(ph[i][2], { x: x + 0.2, y: 2.8, w: 2.45, h: 1.2, fontFace: B, fontSize: 11, color: INK, margin: 0, valign: "top", isTextBox: true });
    s.addText([{ text: "Décision : ", options: { bold: true, color: RED } }, { text: ph[i][3], options: { color: INK } }], { x: x + 0.2, y: 4.05, w: 2.45, h: 0.8, fontFace: B, fontSize: 11, margin: 0, valign: "top", isTextBox: true });
  }
  pageNum(s, 7);
  s.addNotes("La roadmap, une minute. Trente jours d'audit, qui démarrent quand l'accord de sous-traitance et le hachage sont validés : c'est J0. Si le ratio est déjà sous 1,2, on s'arrête et on bascule sur le plan B (équilibrage, monétisation, attrition naturelle), avec les données déjà extraites. Sinon, 60 jours de tests A/B contre un groupe témoin, puis généralisation jusqu'au 31 mars 2027.");

  // 8. Risques & KPIs (30 s)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Des seuils qui déclenchent une décision", "KPIs et risques");
  const kpi = [["> 1,2", "ratio de churn J7 à l'audit : on lance les tests"], ["> 5 min", "attente p90 : on arrête le resserrement"], ["> 50 %", "des 10 premiers matchs en partie rapide : on la corrige en premier"]];
  for (let i = 0; i < 3; i++) {
    const x = 0.5 + i * 3.05;
    s.addShape("roundRect", { x, y: 1.4, w: 2.85, h: 1.45, fill: { color: NAVY }, line: { color: NAVY }, rectRadius: 0.08 });
    s.addText(kpi[i][0], { x: x + 0.2, y: 1.5, w: 2.45, h: 0.6, fontFace: H, fontSize: 28, bold: true, color: RED, margin: 0, isTextBox: true });
    s.addText(kpi[i][1], { x: x + 0.2, y: 2.1, w: 2.45, h: 0.7, fontFace: B, fontSize: 11, color: WHITE, margin: 0, valign: "top", isTextBox: true });
  }
  const risks = [
    [fa.FaUserShield, "Données personnelles (RGPD)", "Accord de sous-traitance, identifiants hachés par NetEase, analyse dans votre environnement, mineurs exclus."],
    [fa.FaGavel, "AI Act", "Aucun profilage individuel des « perdants » : leviers appliqués à tous les nouveaux comptes. Lecture à valider par un juriste."],
    [fa.FaRobot, "Bots", "Jamais cachés : étiquette neutre, message préparé avec Marvel."],
  ];
  for (let i = 0; i < 3; i++) {
    const y = 3.05 + i * 0.68;
    await badge(s, risks[i][0], 0.5, y + 0.05, 0.45);
    s.addText([{ text: risks[i][1] + " : ", options: { bold: true, color: INK } }, { text: risks[i][2], options: { color: INK } }], { x: 1.1, y, w: 8.4, h: 0.6, fontFace: B, fontSize: 11, margin: 0, valign: "middle", isTextBox: true });
  }
  source(s, [{ text: "RGPD", url: U.rgpd }, { text: "AI Act", url: U.aiact }]);
  pageNum(s, 8);
  s.addNotes("30 secondes sur les garde-fous. Chaque KPI a un seuil qui déclenche une décision : 1,2 pour lancer les tests, 5 minutes d'attente pour les arrêter, 50 % pour choisir le mode visé. Côté risques : accord de sous-traitance et pseudonymisation, aucun profilage individuel, et jamais de bots cachés. Pour démarrer, nous vous demandons deux choses : signer l'accord de sous-traitance et lancer l'audit de 30 jours, environ 33 jours-homme. Si l'hypothèse est confirmée, vous tenez votre levier de rétention ; sinon, vous évitez d'investir au mauvais endroit. Merci, je prends vos questions.");

  // 9. Sources (annexe)
  s = pres.addSlide(); s.background = { color: WHITE };
  title(s, "Sources", "Annexe · consultées les 29 et 30/09/2026 · liens cliquables");
  const src = [
    ["Steam Charts, moyennes mensuelles (PC)", U.steamcharts],
    ["40 millions de joueurs, rapport NetEase (Game World Observer)", U.gwo],
    ["API publique des avis Steam (notre collecte, 37 990 avis pondérés)", U.steamapi],
    ["Vidéo NetEase sur le matchmaking, 21/08/2025", U.video],
    ["Notes de patch Season 5, placements (14/11/2025)", U.s5],
    ["Notes de patch Season 7, placement individuel (18/03/2026)", U.s7],
    ["Classé : Bronze III pour tous (PCGamesN)", U.pcg],
    ["Crossplay : partie rapide commune, classé séparé (Esports Insider)", U.crossplay],
    ["Écart de niveau et churn (Heliyon, 2024, analogie)", U.heliyon],
    ["RGPD (EUR-Lex)", U.rgpd], ["AI Act (EUR-Lex)", U.aiact],
    ["Plan de collecte complet (Google Docs)", U.gdoc],
  ];
  s.addText(src.map((r, i, a) => ({ text: r[0], options: { hyperlink: { url: r[1] }, color: "2F3C7E", bullet: true, breakLine: i < a.length - 1 } })), { x: 0.5, y: 1.35, w: 9, h: 3.8, fontFace: B, fontSize: 12, paraSpaceAfter: 4, valign: "top", isTextBox: true });
  pageNum(s, 9);
  s.addNotes("Annexe, à montrer seulement si on vous demande une source.");

  await pres.writeFile({ fileName: "/home/user/SOCIO/docs/presentation/pitch_marvel_rivals_netease.pptx" });
  console.log("ok");
})();
