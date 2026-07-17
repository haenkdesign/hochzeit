# Die Goldene HochZeit — Design System

**„Die Goldene HochZeit"** is the branding for a 2026 jubilee **festival** — imagine *Kirmes trifft Trauung* (fairground meets wedding) rather than a stiff registry office. It is loving and celebratory, wears its worth on its sleeve (gold = "das haben wir uns verdient"), and refuses false modesty — but never takes itself too seriously.

This project is a reusable design system: brand assets, color/type/spacing foundations, CSS tokens, reusable React UI components, and a full interactive UI-kit recreation of the festival site.

## Sources provided
- `uploads/Logo_big.svg` — the "HOCHZEIT" wordmark (chunky rounded block letters, ribbon detail on the H, heart accent).
- `uploads/Logo_small.svg` — the "H" monogram with ribbons.
- `uploads/Purest_enjoyment.svg` — a groovy red hand-lettered *"Purest enjoyment"* illustration with reclining figures.
- `uploads/heart.png` — a gilded, speckled 3D heart.
- A written brand note (palette, typography intent, motifs, mood) — transcribed into the foundations below.

No product codebase or Figma file was provided; the UI kit is built from the brand note + assets.

---

## CONTENT FUNDAMENTALS
How the brand writes:
- **Language:** German. Warm, colloquial, a little cheeky. Copy is written to a *"du"* (informal you), addressing the guest directly: *"Bist du dabei?"*, *"Sag zu"*, *"Reiß dir eins ab"*.
- **Tone:** festive and self-assured, but self-deprecating. It celebrates loudly without pomp: *"Feiern ohne falsche Zurückhaltung — das haben wir uns verdient."*
- **Casing:** Sentence case in body. Display lettering is often all-caps for the hero ("HOCHZEIT"); the handwritten `’26` is lowercase/script for contrast.
- **Wordplay:** leans into the wedding/anniversary double meaning — "Trauung", "Standesamt", "Trauzeuge", "Ja-Wort" all reframed as festival fun. "Gold" recurs as a value/jubilee signal.
- **Punctuation as texture:** exclamation marks ("Neu!", "Ja!") and the diamond `◆` are used decoratively in copy, echoing the scattered background motifs.
- **Emoji:** avoid UI emoji. The brand's "emoji" are its own marks — the gilded **heart** image and the typographic `◆`/`!`. A single ❤ in a footer credit line is the tasteful exception.
- **Vibe examples:** *"Kirmes trifft Trauung."* · *"Liebe wird hier nicht beworben — sie ist einfach da."* · *"Alle Preise inkl. Konfetti."*

---

## VISUAL FOUNDATIONS
- **Colors** — Pink `#F9CEE9` is the base (sweet, not saccharine); Rot `#EB3915` is the loud signal/contrast; a three-step **gold** system (`#D4CDA3` highlight → `#AA9B74` mid → `#45302B` shadow) carries all hero/jubilee elements. Warm neutrals: cream paper `#FBF3E7`, ink-brown text `#2B1D18`. Gold and red need **generous pink/cream whitespace** to breathe.
- **Typography** — Heavy, rounded, 3D-embossed block lettering for heroes (feels "erarbeitet", like chocolate letters or trophy engraving). A handwritten numeral/script as the playful counterpoint (the `’26`). Clean rounded sans for running copy. See substitution note below.
- **Embossing** — the hero lettering uses layered gold text-shadows (`--emboss-gold` / `.hz-emboss`): highlight on top, deep-brown contour beneath. This is the single most recognizable type treatment.
- **Patterns / backgrounds** — the signature **red-white gingham (Karo)**, a retro picnic check, used as a *panel/Fläche fill only, never behind running text*. Scattered **exclamation marks and diamonds/rhombi** as energy motifs. The **heart** as a small woven-in detail (never separately "advertised"). Full-bleed illustration breaks (the "Purest enjoyment" line art).
- **Corner radii** — everything is generously rounded, echoing the pill-shaped block letters: pills for buttons/tags, 16–32px for cards/panels.
- **Borders** — chunky, confident, cartoon-clean: 2–3px solid ink outlines. Not hairline-subtle.
- **Shadows** — two systems: a hard **"sticker" offset shadow** (`4px 4px 0 ink`) for playful/marketing surfaces, and a soft warm drop shadow for editorial cards. Depth on the *lettering* comes from layered gold tones, not blur.
- **Cards** — rounded white surfaces; `soft` (warm shadow, hairline) for reading, `sticker` (ink outline + hard shadow) for marketing, optional red top-accent bar.
- **Animation** — springy and festive. Buttons use a bounce easing (`--ease-bounce`), lift/translate on hover, and press *into* their sticker shadow. Checkboxes pop the check in with a spring. No long ambient loops.
- **Hover states** — lift (translateY / sticker offset grows) + deeper color (`--*-deep` / `--accent-hover`). **Press states** — translate down/into shadow + slight scale-down.
- **Focus** — 2px red border + 4px soft red glow ring (`rgba(235,57,21,.18)`).
- **Transparency & blur** — sparingly: the sticky nav uses a translucent pink + backdrop-blur. Otherwise surfaces are solid.
- **Imagery vibe** — warm and gilded; the heart is speckled metallic gold; illustrations are single-color (red) energetic line art. No cool tones, no b&w.
- **Layout** — centered, max-width ~1200px, lots of whitespace; sticky header; content on pink/cream so gold + red pop.

---

## ICONOGRAPHY
- **No icon font or icon library was provided, and none is bundled.** The brand's "icons" are typographic and illustrative:
  - The **`◆` / `◇` diamond** and the **`!` exclamation mark** (set in the display font) as decorative/energetic marks — see the `Scatter` component.
  - The **gilded heart** raster (`assets/heart-gold.png`) as the love detail / success mark.
  - The **monogram** (`assets/logo-monogram*.svg`) as the compact brand icon (favicon, nav).
- If a consuming project needs functional UI glyphs (arrows, close, menu), **substitute a rounded open-source set** to match the soft brand — recommended: **Phosphor** (regular/bold) or **Lucide**, loaded from CDN. This is a **flagged substitution**, not part of the provided brand.
- Never redraw the logo or heart from scratch; use the provided assets and the recolored tone variants in `assets/`.

---

## FONT SUBSTITUTION (⚠ needs your input)
No font binaries were supplied. The closest Google Fonts stand-ins are used and must be confirmed/replaced:
- **Display / hero block lettering →** `Baloo 2` (fat, rounded, high-contrast terminals).
- **Handwritten script (the `’26`) →** `Caveat`.
- **Body / UI →** `Nunito`.
Swap the `@import` in `tokens/fonts.css` for local `@font-face` rules once the real festival fonts arrive.

---

## Index / manifest
Root:
- `styles.css` — global entry point (import this one file). `@import`s all tokens.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/` — logos (`logo-wordmark*.svg`, `logo-monogram*.svg` in ink/cream/gold tones), `purest-enjoyment.svg`, `heart-gold.png`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `SKILL.md` — Agent-Skill wrapper.

### Components (`window.DieGoldeneHochZeitDesignSystem_64a80b`)
- **Core** — `Button`, `Badge`, `Card`
- **Forms** — `Input`, `Checkbox`
- **Brand** — `Ticket`, `Gingham`, `Scatter`, `Logo`

*Component set note:* no source defined a component inventory, so this is a from-scratch set sized to the festival brand's needs — a small core (Button/Badge/Card), the two form controls the RSVP flow requires (Input/Checkbox), and four brand-specific primitives (`Ticket`, `Gingham`, `Scatter`, `Logo`) that encode the signature motifs. No speculative primitives (Toast/Tabs/Avatar…) were added.

### UI kits
- `ui_kits/festival-site/` — interactive recreation of the festival marketing site (Hero, Programm, Tickets, RSVP, Footer). See its `README.md`.
