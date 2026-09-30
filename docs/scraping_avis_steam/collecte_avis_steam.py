# Échantillon stratifié : jusqu'à 400 avis anglais par semaine, du 06/12/2024 au 29/09/2026.
# Minimisation : ni steamid ni pseudo conservés (date, vote, temps de jeu, texte uniquement).
import json, time, urllib.parse, urllib.request, calendar
from concurrent.futures import ThreadPoolExecutor

def get(url):
    for a in range(6):
        try:
            return json.load(urllib.request.urlopen(
                urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=30))
        except Exception:
            time.sleep(2 ** a)

def week(s):
    e = s + 7 * 86400 - 1
    cur, out, total = "*", [], None
    for _ in range(4):
        d = get("https://store.steampowered.com/appreviews/2767030?json=1&filter=recent&language=english"
                f"&purchase_type=all&num_per_page=100&start_date={s}&end_date={e}"
                "&date_range_type=include&cursor=" + urllib.parse.quote(cur))
        if not d or not d.get("reviews"):
            break
        total = d["query_summary"].get("total_reviews", total)
        for r in d["reviews"]:
            a = r.get("author", {})
            out.append({"t": r["timestamp_created"], "up": r["voted_up"],
                        "pt_review_min": a.get("playtime_at_review"), "helpful": r.get("votes_up", 0),
                        "text": r["review"], "week": s, "week_total": total})
        if d["cursor"] == cur:
            break
        cur = d["cursor"]
    return s, total, out

start = calendar.timegm((2024, 12, 6, 0, 0, 0))
end = calendar.timegm((2026, 9, 30, 0, 0, 0))
weeks = list(range(start, end, 7 * 86400))
with ThreadPoolExecutor(6) as ex, open("sample_en.jsonl", "w") as f, open("weeks.csv", "w") as w:
    for s, total, out in ex.map(week, weeks):
        w.write(f"{time.strftime('%Y-%m-%d', time.gmtime(s))},{total},{len(out)}\n")
        w.flush()
        for r in out:
            f.write(json.dumps(r) + "\n")
print("done")
