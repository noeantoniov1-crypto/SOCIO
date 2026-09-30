# Collecte exhaustive des avis anglais publiés du 01/08/2026 au 29/09/2026 (API publique Steam).
# Minimisation : ni steamid ni pseudo conservés (date, vote, temps de jeu, votes utiles, texte).
import json, time, urllib.parse, urllib.request, calendar
S = calendar.timegm((2026, 8, 1, 0, 0, 0)); E = calendar.timegm((2026, 9, 30, 0, 0, 0)) - 1
def get(url):
    for a in range(6):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=30))
        except Exception:
            time.sleep(2 ** a)
cur, n, seen = "*", 0, set()
with open("avis_2_derniers_mois.jsonl", "w") as f:
    while True:
        d = get("https://store.steampowered.com/appreviews/2767030?json=1&filter=recent&language=english&purchase_type=all"
                f"&num_per_page=100&start_date={S}&end_date={E}&date_range_type=include&cursor=" + urllib.parse.quote(cur))
        if not d or not d.get("reviews"): break
        for r in d["reviews"]:
            if r["recommendationid"] in seen: continue
            seen.add(r["recommendationid"])
            f.write(json.dumps({"t": r["timestamp_created"], "up": r["voted_up"],
                                "pt_review_min": r.get("author", {}).get("playtime_at_review"),
                                "helpful": r.get("votes_up", 0), "text": r["review"]}) + "\n"); n += 1
        if d["cursor"] == cur: break
        cur = d["cursor"]
print("avis collectés :", n, "| total annoncé :", d and d.get("query_summary", {}).get("total_reviews"))
