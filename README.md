# Poems in Flight

An interactive poetry experience built with vanilla JavaScript and p5.js. Words become physical — they fly, collapse, bloom, and lean. Each poem is paired with an interaction mode that echoes its subject.

**Live site → [xu-qianyi.github.io/poetry_fly_interaction](https://xu-qianyi.github.io/poetry_fly_interaction/poetry_fly_2.html)**

---

## Interaction modes

| Mode | Behavior | Poem |
|------|----------|------|
| **moth** | Long words split into wings and flutter away; short words dart like bees | *Speak, Memory* — Vladimir Nabokov, 1951 |
| **magnet** | Words are drawn toward the cursor by gravitational force | *Tonight I Can Write* — Pablo Neruda, 1924 |
| **crumble** | The poem collapses letter by letter from the end; letters pile at the bottom | *The Death of the Moth* — Virginia Woolf, 1942 |
| **drop** | All words fall under gravity in cascading sheets | *I Live My Life* — Rainer Maria Rilke, 1905 |
| **blossom** | Words disappear and leave behind small drawn flowers | *The Summer Day* — Mary Oliver, 1990 |
| **ripple** | Hovering a word sends organic ripple waves across the poem | *The Guest House* — Rumi, 13th century |
| **curious** | Words rotate toward the cursor like animals turning to look — too close and they shy away | *A Blessing* — James Wright, 1963 |

---

## Running locally

No build step required for the main experience. Open `poetry_fly_2.html` directly in a browser.

```bash
open poetry_fly_2.html
```

The `poetry_fly_p5/` directory is a separate p5.js prototype workspace:

```bash
cd poetry_fly_p5
npm install
npm run dev
```

---

## Stack

- Vanilla JS — interaction physics and animation loops
- [p5.js](https://p5js.org/) — ripple canvas overlay
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) — poem text
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — UI controls
- GitHub Pages — hosting
