import json, re, time, collections
import sys
R=[json.loads(l) for l in open(sys.argv[1] if len(sys.argv)>1 else "sample_en.jsonl")]
cnt=collections.Counter(r["week"] for r in R)
for r in R: r["w"]=(r.get("week_total") or cnt[r["week"]])/cnt[r["week"]]
def share(L,f):
    W=sum(r["w"] for r in L); return (sum(r["w"] for r in L if f(r))/W) if W else 0
def has(p,t): return re.search(p,t,re.I) is not None
MM=r"match ?making|matchmaker|\bs?bmm\b|\beomm\b|engagement.{0,12}match|rigged|skill ?gap|unbalanced (team|match|lobb)|stomp"
THEMES={
 "nouveaux joueurs / débutants": r"new(er)? players?|newbie|noob|beginner|casual player|new to (the )?(game|genre|hero shooter)|first (hero )?shooter|newcomer",
 "vétérans / Overwatch": r"overwatch|\bow2?\b|veteran|sweat",
 "écart de niveau / stomp": r"skill ?gap|stomp|one.?sided|steamroll|out ?matched|way (better|higher)|(higher|lower) rank",
 "smurfs": r"smurf",
 "bots": r"\bbots?\b",
 "partie rapide": r"quick ?play|\bqp\b|quick ?match|casual mode",
 "classé": r"\branked\b|competitive|\bcomp\b",
 "rôles / compositions": r"role ?queue|role ?lock|\broles?\b|triple (support|strat|heal|tank)|3 (support|strat|heal|tank)|[456] ?dps|team ?comp|composition",
 "EOMM / truqué": r"eomm|rigged|engagement.{0,12}match|forced (loss|lose)|50 ?%",
}
for r in R:
    r["m"]=time.strftime("%Y-%m",time.gmtime(r["t"]))
    r["mm"]=has(MM,r["text"])
N=len(R); neg=[r for r in R if not r["up"]]; pos=[r for r in R if r["up"]]
print("TOTAL",N,"du",min(r["m"] for r in R),"au",max(r["m"] for r in R))
print("population estimée", round(sum(r["w"] for r in R)))
print("négatifs (pondéré)",f"{share(R,lambda r: not r['up']):.1%}")
print("mention matchmaking : négatifs",f"{share(neg,lambda r:r['mm']):.1%}","positifs",f"{share(pos,lambda r:r['mm']):.1%}")
print("\n== PAR MOIS : n, % négatifs, % des négatifs citant le MM, part du MM dans tous les avis")
by=collections.defaultdict(list)
for r in R: by[r["m"]].append(r)
for m in sorted(by):
    L=by[m]; ng=[r for r in L if not r["up"]]
    print(m, len(L), round(sum(r["w"] for r in L)), f"{share(L,lambda r: not r['up']):.1%}", f"{share(ng,lambda r:r['mm']):.1%}", f"{share(L,lambda r:r['mm']):.1%}")
print("\n== PAR TEMPS DE JEU AU MOMENT DE L'AVIS")
B=[(0,10),(10,50),(50,200),(200,1000),(1000,1e9)]
for a,b in B:
    L=[r for r in R if r["pt_review_min"] is not None and a*60<=r["pt_review_min"]<b*60]
    ng=[r for r in L if not r["up"]]
    if L: print(f"{a}-{b if b<1e9 else '+'} h", len(L), f"nég {share(L,lambda r: not r['up']):.1%}", f"MM parmi nég {share(ng,lambda r:r['mm']):.1%}", f"MM parmi tous {share(L,lambda r:r['mm']):.1%}")
mmneg=[r for r in neg if r["mm"]]
print("\n== THÈMES dans les avis négatifs citant le matchmaking (n=%d)"%len(mmneg))
for k,p in THEMES.items():
    print(f"{k}: {share(mmneg,lambda r:has(p,r['text'])):.1%}  (tous avis nég: {share(neg,lambda r:has(p,r['text'])):.1%})")
# verbatims
def pick(p, k=6):
    c=[r for r in mmneg if has(p,r["text"]) and 80<len(r["text"])<900]
    c.sort(key=lambda r:-r["helpful"])
    for r in c[:k]:
        t=re.sub(r"\s+"," ",re.sub(r"\[/?[^\]]+\]","",r["text"])).strip()
        print(f"- [{r['m']}, {round((r['pt_review_min'] or 0)/60)} h, {r['helpful']} utiles] {t[:400]}")
for k in ["nouveaux joueurs / débutants","écart de niveau / stomp","rôles / compositions","partie rapide","bots","smurfs"]:
    print("\n### VERBATIMS :",k); pick(THEMES[k])
