# Convertit un Markdown en texte « copiable-collable » dans Word / Google Docs :
# pas de tableaux à barres, pas de **, pas de <br>, pas de blocs de code, liens en URL brutes.
import re, sys

def inline(s):
    s = re.sub(r'\[([^\]]+)\]\((https?://[^)]+)\)', lambda m: m.group(1) if m.group(1).startswith('http') else f"{m.group(1)} ({m.group(2)})", s)
    s = s.replace('**', '')
    s = re.sub(r'(?<![\w*])\*([^*\n]+?)\*(?![\w*])', r'\1', s)
    s = re.sub(r'`([^`]+)`', r'\1', s)
    s = s.replace('<br>', ' §BR§ ')
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def cells(line):
    line = line.strip().strip('|')
    return [inline(c) for c in line.split('|')]

src = open(sys.argv[1]).read().split('\n')
out = []
i = 0
def blank():
    if out and out[-1] != '': out.append('')
while i < len(src):
    l = src[i]
    if l.startswith('```'):
        i += 1
        block = []
        while i < len(src) and not src[i].startswith('```'):
            block.append(src[i]); i += 1
        i += 1
        # schéma : on garde les lignes de texte utiles
        steps = [re.sub(r'[─│▼▲►◄┘└┐┌]+', ' ', b).strip() for b in block]
        steps = [re.sub(r'\s{2,}', ' ', s) for s in steps if re.search(r'\w', s)]
        blank()
        for n, s in enumerate(steps, 1):
            out.append(f"{n}. {s}")
        blank()
        continue
    if l.strip().startswith('|'):
        rows = []
        while i < len(src) and src[i].strip().startswith('|'):
            rows.append(src[i]); i += 1
        head = cells(rows[0])
        body = [cells(r) for r in rows[2:]]
        blank()
        if len(head) == 2 and all(h == '' for h in head):
            for r in body:
                parts = [x.strip() for x in r[1].split('§BR§')]
                if len(parts) > 1:
                    out.append(f"{r[0]} :")
                    out.extend(f"   – {x}" for x in parts)
                else:
                    out.append(f"{r[0]} : {r[1]}" if r[0] else r[1])
        elif len(head) == 2:
            for r in body:
                out.append(f"• {r[0]} : {r[1]}")
        else:
            for r in body:
                title = r[0] if r[0] else '—'
                out.append(f"• {title}")
                for h, v in zip(head[1:], r[1:]):
                    if v and v != '—' or h:
                        if v: out.append(f"   – {h} : {v}" if h else f"   – {v}")
        blank()
        continue
    if l.strip() == '---':
        blank(); i += 1; continue
    m = re.match(r'^(#{1,6})\s+(.*)', l)
    if m:
        blank()
        t = inline(m.group(2))
        out.append(t.upper() if len(m.group(1)) <= 2 else t)
        blank(); i += 1; continue
    if l.startswith('>'):
        t = inline(l.lstrip('> ').rstrip())
        if t: out.append(t)
        else: blank()
        i += 1; continue
    m = re.match(r'^(\s*)[-*]\s+(.*)', l)
    if m:
        ind = '   ' * (len(m.group(1)) // 2)
        out.append(f"{ind}• {inline(m.group(2))}")
        i += 1; continue
    m = re.match(r'^(\s*)(\d+)\.\s+(.*)', l)
    if m:
        out.append(f"{m.group(2)}. {inline(m.group(3))}"); i += 1; continue
    if l.strip() == '':
        blank(); i += 1; continue
    out.append(inline(l)); i += 1
out = [y.replace(' §BR§ ', ' ; ').replace('§BR§', ';') for y in out]
txt = '\n'.join((x + '  ') if x.strip() else x for x in out)
txt = re.sub(r'\n{3,}', '\n\n', txt).strip() + '\n'
open(sys.argv[2], 'w').write(txt)
