# Croise les événements officiels (patchs, annonces) avec les avis Steam proches dans le temps.
# Entrée : sample_en.jsonl (échantillon stratifié, pondéré par volume hebdomadaire réel).
import json, re, sys, time, calendar, collections
R=[json.loads(l) for l in open(sys.argv[1])]
cnt=collections.Counter(r["week"] for r in R)
for r in R: r["w"]=(r.get("week_total") or cnt[r["week"]])/cnt[r["week"]]
def has(p,t): return re.search(p,t,re.I) is not None
T={
 "MM": r"match ?making|matchmaker|\bs?bmm\b|\beomm\b|engagement.{0,12}match|rigged|skill ?gap|unbalanced (team|match|lobb)|stomp",
 "EQUIL": r"\bnerf|\bbuff|over ?powered|\bop\b|power ?creep|\bmeta\b|balance (team|patch|change|update)s?|balancing (team|patch|change)|hero balanc|(balance|balancing) is|broken (hero|character|kit)|ult(imate)?s? (spam|charge)|triple (support|strat|heal)|3 (support|strat|heal)",
 "QP": r"quick ?play|\bqp\b|quick ?match|casual mode|casual match",
 "RANK": r"\branked\b|competitive|\bcomp\b|rank ?reset|placement|\belo\b|derank",
}
for r in R:
    for k,p in T.items(): r[k]=has(p,r["text"])
def share(L,f):
    W=sum(r["w"] for r in L); return 100*sum(r["w"] for r in L if f(r))/W if W else float('nan')
def d(s): return calendar.timegm(time.strptime(s,"%Y-%m-%d"))
mode=sys.argv[2]
if mode=="mois":
    by=collections.defaultdict(list)
    for r in R: by[time.strftime("%Y-%m",time.gmtime(r["t"]))].append(r)
    print("mois | n | %nég | nég citant MM | nég citant EQUIL | nég citant QP | nég citant RANK")
    for m in sorted(by):
        L=by[m]; N=[r for r in L if not r["up"]]
        print(m,len(L),*(f"{x:.1f}" for x in [share(L,lambda r:not r["up"])]+[share(N,lambda r,k=k:r[k]) for k in ["MM","EQUIL","QP","RANK"]]),sep=" | ")
else:
    # fenêtres de 14 jours avant / après chaque événement
    EV=[l.strip().split(";") for l in open(sys.argv[3]) if l.strip() and not l.startswith("#")]
    for date,theme,label in EV:
        t=d(date); A=[r for r in R if t-14*86400<=r["t"]<t]; B=[r for r in R if t<=r["t"]<t+14*86400]
        k={"équilibrage":"EQUIL","partie rapide":"QP","classé":"RANK","matchmaking":"MM"}[theme]
        f=lambda L: (share(L,lambda r:not r["up"]), share([r for r in L if not r["up"]],lambda r:r[k]))
        a,b=f(A),f(B)
        print(f"{date} | {theme} | {label} | nég {a[0]:.1f}→{b[0]:.1f} | nég citant {k} {a[1]:.1f}→{b[1]:.1f} | n {len(A)}/{len(B)}")
        C=[r for r in B if not r["up"] and r[k] and 80<len(r["text"])<700]; C.sort(key=lambda r:-r["helpful"])
        for r in C[:2]:
            tx=re.sub(r"\s+"," ",re.sub(r"\[/?[^\]]+\]","",r["text"])).strip()
            print(f"   - [{time.strftime('%d/%m/%Y',time.gmtime(r['t']))}, {round((r['pt_review_min'] or 0)/60)} h, {r['helpful']} utiles] {tx[:300]}")
