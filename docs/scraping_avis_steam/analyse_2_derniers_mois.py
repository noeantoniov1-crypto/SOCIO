# Thèmes des avis anglais du 01/08/2026 au 29/09/2026 (collecte exhaustive, repérage par mots-clés).
import json, re, time, collections, sys
R = [json.loads(l) for l in open(sys.argv[1] if len(sys.argv) > 1 else "avis_2_derniers_mois.jsonl")]
T = {
 "Matchmaking": r"match ?making|matchmaker|\bs?bmm\b|skill ?gap|unbalanced (team|match|lobb)|stomp|one.?sided",
 "EOMM / truqué": r"\beomm\b|rigged|engagement.{0,12}match|forced (loss|lose)|loser (queue|lobb)|50 ?%",
 "Toxicité / communauté": r"toxic|community|harass|insult|\bflam(e|ing)|abus(e|ive)|\bchat\b",
 "Racisme": r"racis|\bn.?word|slur",
 "Équilibrage des héros": r"\bnerf|\bbuff|balanc(e|ing)|over ?powered|\bop\b|power ?creep|\bmeta\b|broken (hero|character)",
 "Classé": r"\branked\b|competitive|\bcomp\b|\brank(s|ed)?\b|placement|elo\b",
 "Partie rapide": r"quick ?play|\bqp\b|quick ?match",
 "Bots": r"\bbots?\b",
 "Tricheurs": r"cheat|hack(er|s)?\b|aim ?bot|wall ?hack",
 "Smurfs": r"smurf",
 "Lâcheurs / AFK / throwers": r"\bthrow(er|ing|s)?\b|\bafk\b|leaver|leav(e|ing) (the )?match|\bquit(ter|ting)?\b",
 "Sanctions / bans": r"\bbanned\b|\bban\b|penalt|suspen(d|sion)|report(ed|ing)?\b",
 "Technique (perf, bugs, serveurs)": r"\bfps\b|\blag|crash|optimi[sz]|stutter|server|\bping\b|\bbug|disconnect|frame ?rate|performance",
 "Monétisation / skins": r"\bskins?\b|money|price|battle ?pass|\bp2w\b|pay to win|gacha|lootbox|microtransaction|cosmetic|\$",
 "Contenu sexualisé (« gooner »)": r"goon|horny|coomer|sexuali|fan ?service",
 "Saison 10 (Gorr, Scarlet Witch)": r"\bgorr\b|scarlet|season ?10|\bs10\b|god butcher",
 "Comparaison Overwatch": r"overwatch|\bow2?\b",
 "Développeurs / NetEase": r"\bdevs?\b|developer|netease",
 "Rôles (tank, soigneur, DPS)": r"\btanks?\b|\bheal(er|ers|ing)\b|support|strategist|vanguard|\bdps\b|role",
}
def has(p, t): return re.search(p, t, re.I) is not None
for r in R:
    r["d"] = time.strftime("%Y-%m-%d", time.gmtime(r["t"]))
    r["th"] = {k for k, p in T.items() if has(p, r["text"])}
neg = [r for r in R if not r["up"]]; pos = [r for r in R if r["up"]]
pc = lambda L, f: 100 * sum(1 for r in L if f(r)) / len(L) if L else float("nan")
print(f"Avis : {len(R)} du {min(r['d'] for r in R)} au {max(r['d'] for r in R)} ; négatifs {len(neg)} ({pc(R, lambda r: not r['up']):.1f} %)")
print("Avis de plus de 20 caractères :", sum(len(r['text'])>20 for r in R))
avant = [r for r in R if r["d"] < "2026-09-11"]; apres = [r for r in R if r["d"] >= "2026-09-11"]
na = [r for r in avant if not r["up"]]; nb = [r for r in apres if not r["up"]]
print(f"Avant S10 (01/08-10/09) : {len(avant)} avis, {pc(avant, lambda r: not r['up']):.1f} % nég. | Après S10 (11/09-29/09) : {len(apres)} avis, {pc(apres, lambda r: not r['up']):.1f} % nég.")
print("\nThème | % des négatifs | % des positifs | nég. avant S10 | nég. après S10")
for k in sorted(T, key=lambda k: -pc(neg, lambda r: k in r["th"])):
    print(f"{k} | {pc(neg, lambda r: k in r['th']):.1f} | {pc(pos, lambda r: k in r['th']):.1f} | {pc(na, lambda r: k in r['th']):.1f} | {pc(nb, lambda r: k in r['th']):.1f}")
print("\nNégatifs sans aucun thème :", f"{pc(neg, lambda r: not r['th']):.1f} %", "(dont textes de moins de 20 caractères :", f"{pc([r for r in neg if not r['th']], lambda r: len(r['text'])<20):.0f} %)")
print("\n== Négatifs par tranche de temps de jeu : n, thèmes principaux")
for a, b in [(0, 10), (10, 50), (50, 200), (200, 1000), (1000, 1e9)]:
    L = [r for r in neg if r["pt_review_min"] is not None and a*60 <= r["pt_review_min"] < b*60]
    top = sorted(T, key=lambda k: -pc(L, lambda r: k in r["th"]))[:5]
    print(f"{a}-{b if b < 1e9 else '+'} h | {len(L)} | " + " ; ".join(f"{k} {pc(L, lambda r: k in r['th']):.0f} %" for k in top))
print("\n== Volume quotidien d'avis négatifs (pics)")
c = collections.Counter(r["d"] for r in neg); tot = collections.Counter(r["d"] for r in R)
for d in sorted(c, key=lambda d: -c[d])[:8]:
    rac = sum(1 for r in neg if r["d"] == d and "Racisme" in r["th"])
    print(d, c[d], "négatifs sur", tot[d], f"({100*c[d]/tot[d]:.0f} %) ; citant le racisme : {rac}")
def verb(k, n=4):
    L = [r for r in neg if k in r["th"] and 60 < len(r["text"]) < 600]; L.sort(key=lambda r: -r["helpful"])
    for r in L[:n]:
        t = re.sub(r"\s+", " ", re.sub(r"\[/?[^\]]+\]", "", r["text"])).strip()
        print(f"  - [{r['d']}, {round((r['pt_review_min'] or 0)/60)} h, {r['helpful']} utiles] {t[:280]}")
for k in ["Toxicité / communauté", "Racisme", "Matchmaking", "Équilibrage des héros", "Classé", "Partie rapide", "Bots", "Saison 10 (Gorr, Scarlet Witch)", "Technique (perf, bugs, serveurs)"]:
    print(f"\n### {k}"); verb(k)
