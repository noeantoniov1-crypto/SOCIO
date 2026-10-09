// Party Toys – slide « À quelles couleurs notre cible est habituée ? »
const path = require('path');
const pptxgen = require('pptxgenjs');

const DIR = __dirname;
const G = path.join(DIR, 'games');
const pal = require(path.join(G, 'palettes.json'));
const OUT = process.argv[2];

const C = { ink: '14261C', night: '10221A', card: '1D3A2B', green: '00B85C', mint: 'E6F6EC', muted: '5F6B64', mutedDark: 'C8D8D0', yellow: 'FFC629' };
const H = 'Arial', B = 'Calibri';
const COPY = 'Copyright équipe “Pixel Toys” - ANTONIO Noé - BEFFY Martin - CHAUVIN Lucas - ROUAY--ANTOINE Manau - REY Nathan';

const games = [
  ['1097150_3', 'Fall Guys', '2020', 1097150],
  ['1677740_2', 'Stumble Guys', '2021', 1677740],
  ['1782210_2', 'Crab Game', '2021', 1782210],
  ['386940_0', 'Ultimate Chicken Horse', '2016', 386940],
  ['1260320_0', 'Party Animals', '2023', 1260320],
  ['285900_3', 'Gang Beasts', '2017', 285900],
];
const avg = Math.round(games.reduce((s, g) => s + pal[g[0]].sat, 0) / games.length);

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.title = 'Party Toys – Les couleurs des party games';
const s = pptx.addSlide();
s.background = { color: 'FFFFFF' };

s.addText('À quelles couleurs notre cible est habituée ?', { x: 0.6, y: 0.3, w: 12.2, h: 0.8, fontFace: H, fontSize: 32, color: C.ink, margin: 0 });
s.addText('6 party games qu’elle connaît, avec les couleurs dominantes mesurées sur chaque capture officielle', { x: 0.6, y: 1.05, w: 12.2, h: 0.35, fontFace: B, fontSize: 14, color: C.muted, margin: 0 });

const IW = 2.62, IH = IW * 9 / 16, GX = 0.18, X0 = 0.6, Y0 = 1.6, RH = 2.42;
games.forEach(([f, name, year], i) => {
  const x = X0 + (i % 3) * (IW + GX), y = Y0 + Math.floor(i / 3) * RH;
  s.addImage({ path: path.join(G, f + '.jpg'), x, y, w: IW, h: IH, sizing: { type: 'cover', w: IW, h: IH } });
  s.addText(name, { x, y: y + IH + 0.06, w: IW - 0.9, h: 0.3, fontFace: B, fontSize: name.length > 15 ? 10.5 : 12, bold: true, color: C.ink, margin: 0, valign: 'middle' });
  const sat = pal[f].sat;
  s.addText(`sat. ${sat} %`, { x: x + IW - 0.85, y: y + IH + 0.08, w: 0.85, h: 0.26, fontFace: B, fontSize: 9.5, bold: true, align: 'center', valign: 'middle', margin: 0,
    color: sat >= avg ? C.night : C.muted, fill: { color: sat >= avg ? C.mint : 'F0F2F1' }, shape: pptx.ShapeType.roundRect, rectRadius: 0.06 });
  // barre de couleurs proportionnelle
  let cx = x;
  const cols = pal[f].colors, tot = cols.reduce((a, c) => a + c.pct, 0);
  cols.forEach((c) => {
    const w = IW * c.pct / tot;
    s.addShape(pptx.ShapeType.rect, { x: cx, y: y + IH + 0.42, w, h: 0.24, fill: { color: c.hex }, line: { type: 'none' } });
    cx += w;
  });
});

// Panneau de lecture
const px = 9.0, pw = 3.8;
s.addShape(pptx.ShapeType.roundRect, { x: px, y: 1.6, w: pw, h: 3.0, fill: { color: C.night }, line: { type: 'none' }, rectRadius: 0.1 });
s.addText('SES HABITUDES VISUELLES', { x: px + 0.25, y: 1.75, w: pw - 0.5, h: 0.3, fontFace: H, fontSize: 10.5, bold: true, color: C.green, charSpacing: 2, margin: 0 });
s.addText([
  { text: 'Un fond cyan ou bleu ciel', options: { bold: true, color: 'FFFFFF', breakLine: true } },
  { text: 'dans 4 captures sur 6', options: { color: C.mutedDark, breakLine: true } },
  { text: ' ', options: { fontSize: 5, breakLine: true } },
  { text: 'Une couleur chaude qui ressort', options: { bold: true, color: 'FFFFFF', breakLine: true } },
  { text: 'orange, jaune ou rose sur les persos et obstacles', options: { color: C.mutedDark, breakLine: true } },
  { text: ' ', options: { fontSize: 5, breakLine: true } },
  { text: `Des couleurs saturées : ${avg} % en moyenne`, options: { bold: true, color: 'FFFFFF', breakLine: true } },
  { text: 'jusqu’à 75 % (Stumble Guys) ; les jeux « physiques » (Party Animals, Gang Beasts) restent plus doux', options: { color: C.mutedDark } },
], { x: px + 0.25, y: 2.1, w: pw - 0.5, h: 2.4, fontFace: B, fontSize: 12, valign: 'top', margin: 0 });

// Party Toys aujourd'hui
const ty = 4.75;
s.addShape(pptx.ShapeType.roundRect, { x: px, y: ty, w: pw, h: 2.0, fill: { color: C.mint }, line: { type: 'none' }, rectRadius: 0.1 });
s.addText('ET PARTY TOYS ?', { x: px + 0.25, y: ty + 0.12, w: 2.4, h: 0.3, fontFace: H, fontSize: 10.5, bold: true, color: C.green, charSpacing: 2, margin: 0 });
s.addImage({ path: path.join(DIR, 'ex', 'p-013.png'), x: px + 0.25, y: ty + 0.5, w: 1.45, h: 1.45 * 397 / 768 });
s.addText('sat. 28 %', { x: px + 0.25, y: ty + 1.3, w: 1.45, h: 0.26, fontFace: B, fontSize: 9.5, bold: true, color: C.muted, fill: { color: 'FFFFFF' }, align: 'center', valign: 'middle', margin: 0, shape: pptx.ShapeType.roundRect, rectRadius: 0.06 });
s.addText([
  { text: 'Notre capture Racing : presque 2× moins saturée. ', options: { bold: true, color: C.ink } },
  { text: 'Piste : jouets plus vifs, ciel cyan à la fenêtre, gris des routes en base.', options: { color: C.ink } },
], { x: px + 1.82, y: ty + 0.45, w: pw - 1.97, h: 1.5, fontFace: B, fontSize: 10.5, valign: 'top', margin: 0 });
s.addText('RECO', { x: px + pw - 0.95, y: ty + 0.12, w: 0.75, h: 0.24, fontFace: B, fontSize: 9, bold: true, color: C.night, fill: { color: C.yellow }, align: 'center', valign: 'middle', margin: 0, shape: pptx.ShapeType.roundRect, rectRadius: 0.06 });

// Sources
const links = games.map(([, name, , id], i) => ({ text: `${name} (${games[i][2]})` + (i < games.length - 1 ? ', ' : ''), options: { hyperlink: { url: `https://store.steampowered.com/app/${id}/` }, color: C.green } }));
s.addText([
  { text: 'Captures et dates de sortie : pages Steam officielles (© leurs éditeurs), consultées le 09/10/2026 : ', options: { color: C.muted } },
  ...links,
  { text: '. Couleurs : 6 teintes dominantes par capture (k-moyennes) ; « sat. » = saturation moyenne des pixels (HSV).', options: { color: C.muted } },
], { x: 0.6, y: 6.62, w: 8.2, h: 0.45, fontFace: B, fontSize: 8.5, valign: 'top', margin: 0 });
s.addText(COPY, { x: 0.5, y: 7.12, w: 12.3, h: 0.25, fontFace: H, fontSize: 7, color: '9AA39E', align: 'center' });

pptx.writeFile({ fileName: OUT }).then(() => console.log('ok', OUT));
