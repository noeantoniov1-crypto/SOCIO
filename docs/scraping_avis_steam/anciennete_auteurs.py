# Répartition pondérée des auteurs d'avis par temps de jeu au moment de l'avis, par trimestre.
# Indice public de l'évolution de la population (biais : un jeu plus ancien a mécaniquement des auteurs plus expérimentés).
import json, collections, time, statistics, sys

path = sys.argv[1] if len(sys.argv) > 1 else "sample_en.jsonl"
rows = [json.loads(l) for l in open(path)]
cnt = collections.Counter(r["week"] for r in rows)
agg = collections.defaultdict(lambda: collections.defaultdict(float))
med = collections.defaultdict(list)
for r in rows:
    w = (r["week_total"] or 0) / cnt[r["week"]]
    y, m = time.strftime("%Y-%m", time.gmtime(r["t"])).split("-")
    q = f"{y}-T{(int(m) - 1) // 3 + 1}"
    h = (r["pt_review_min"] or 0) / 60
    b = "<10h" if h < 10 else "10-50h" if h < 50 else "50-200h" if h < 200 else "200h+"
    agg[q][b] += w
    agg[q]["tot"] += w
    med[q].append(h)
print("trimestre avis_estimés <10h 10-50h 50-200h 200h+ médiane_h(non pondérée)")
for q in sorted(agg):
    t = agg[q]["tot"]
    print(q, int(t), " ".join(f"{agg[q][b] / t * 100:.1f}%" for b in ["<10h", "10-50h", "50-200h", "200h+"]),
          round(statistics.median(med[q]), 1))
