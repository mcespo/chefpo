# chefpo — Claude Instructions

A personal recipe site built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Recipes live as `.mdx` files under `src/content/docs/` and are organized into `meals/` and `drinks/`.

**Meals** are further split into subcategories:
- `meals/breakfast/` — morning food
- `meals/baked-goods/` — breads, flatbreads, scones
- `meals/mains/` — dinner and lunch dishes
- `meals/pantry/` — base ingredients and preparations
- `meals/treats/` — sweets and snacks

**Drinks** are currently a flat list under `drinks/` — subcategories will be added when the volume warrants it.

---

## Stack & Setup

- **Framework:** Astro + Starlight
- **Content:** MDX files in `src/content/docs/`
- **Node:** >= 22.12.0 (pinned in `.nvmrc`, enforced in `netlify.toml` — do not change without reason)
- **Deploy:** Netlify (`dist/` as publish directory)

If content module errors appear after adding new MDX files, clear the `.astro` cache directory.

---

## Adding a Recipe

All recipes follow the same MDX structure. Use `src/content/docs/meals/breakfast/oven-baked-french-toast.mdx` as a reference — it is a clean, simple example.

### File Naming

- Lowercase kebab-case: `fruit-scone.mdx`, `steel-cut-oatmeal.mdx`
- Place under the correct subcategory: `meals/breakfast/`, `meals/baked-goods/`, `meals/mains/`, `meals/pantry/`, `meals/treats/`, or `drinks/`
- If multiple versions of the same recipe exist, suffix with the source abbreviation: `german-pancake-atk.mdx` vs `german-pancake.mdx`

### Frontmatter

```yaml
---
title: Recipe Title
description: A brief description.
lastUpdated: YYYY-MM-DD
hero:
  tagline: T A G L I N E !   # optional — use spaced caps for personality
---
```

- **Always include `lastUpdated`** with the current date whenever a file is created or modified.
- **Omit the `hero.image` block entirely** until actual recipe images are available. Do not reference placeholder assets.
- The `tagline` is optional — include it when it adds personality.

### Imports

Always import what you use. Common imports:

```mdx
import { Steps, Aside, Tabs, TabItem } from "@astrojs/starlight/components";
import VideoFrame from "../../../../components/VideoFrame.astro";
```

- Only include `VideoFrame` if a video URL is available.
- Only include `Aside`, `Tabs`, `TabItem` if they are used in the file.
- **VideoFrame import path depends on file location:**
  - Meals subcategory (`meals/breakfast/`, `meals/mains/`, etc.): `../../../../components/VideoFrame.astro`
  - Drinks (`drinks/`): `../../../components/VideoFrame.astro`

### Page Structure

```mdx
## Recipe Title, Source Name

<VideoFrame
  title="Recipe Title, Source Name"
  link="https://www.youtube.com/embed/VIDEO_ID"
/>

### Description
### Ingredients
### Tools
### Recipe
```

**The `## heading` convention:**
- When a source is known, use `## Recipe Title, Source Name` — the comma-separated source credits the original author or channel.
- When there is no source (original or unknown), use `## Recipe Title` — omit the comma and source entirely.
- The `VideoFrame` title should always match the `## heading` exactly.
- The frontmatter `title:` field is the recipe name only — no source appended.

---

## Ingredients Table

Use a two-column table: `Item` | `Amount`. A third `Notes` column is acceptable for brief clarifications.

- **Lowercase** all item names
- **Weight-first:** always lead with grams, followed by volume or count in parentheses: `390g (2½ cups)`
- For whole items, use `x2`, `x1`, etc.
- For optional ingredients, add `(optional)` inline in the item name

```md
| Item              | Amount           |
| ----------------- | ---------------- |
| all-purpose flour | 390g (2½ cups)   |
| large eggs        | x2               |
| vanilla extract   | 5g (1 tsp)       |
```

**Measurement priority and conversion rules:**
1. Always show weight in grams first, volume second in parentheses.
2. If a source provides volume only, apply a realistic common conversion for that substance (e.g. water/milk: 1 cup = 240g; all-purpose flour: 1 cup = 120–130g; butter: 1 tbsp = 14g).
3. If a reliable conversion is uncertain for the substance, keep volume only and add a `Notes` column entry: `check weight` — do not guess.
4. Some measurements don't convert meaningfully: `pinch of cinnamon`, `as needed`, `to taste` — keep them as-is without forcing a gram value.

If the recipe has clearly distinct groups (dry/wet, batter/topping), use `####` subheadings above each table.

---

## Tools Table

Single-column table. No header row needed beyond `Items`. Lowercase all entries. One item per row.

---

## Recipe Steps

Wrap all steps in `<Steps>`:

```mdx
<Steps>
1. Step one.

2. Step two.
</Steps>
```

- Bold the action at the start of a step where it aids scannability: `**Mix dry ingredients:**`
- Write in plain, direct language — first person where natural
- Do not over-explain; trust the cook

---

## Components

### VideoFrame

Embeds a YouTube video. Convert watch URLs to embed URLs:

- `https://www.youtube.com/watch?v=ABC123` → `https://www.youtube.com/embed/ABC123`
- `https://youtu.be/ABC123` → `https://www.youtube.com/embed/ABC123`

```mdx
<VideoFrame
  title="Recipe Title, Source Name"
  link="https://www.youtube.com/embed/VIDEO_ID"
/>
```

**Do not invent or guess YouTube video URLs.** If a URL is not provided at recipe creation time, omit the `VideoFrame` component and its import entirely. The user will supply the URL in a follow-up.

### Aside

Use for tips, notes, or warnings that sit outside the main steps:

```mdx
<Aside type="tip">
  Your tip here.
</Aside>
```

Types: `tip`, `note`, `caution`, `danger`

### Tabs / TabItem

Use when a recipe has distinct method variations (e.g. slow cooker vs pressure cooker, or a multi-day process split by day). Use `syncKey` so tabs sync across the page if multiple tab groups exist.

```mdx
<Tabs syncKey="method-key">
  <TabItem label="Method A">
    ...
  </TabItem>
  <TabItem label="Method B">
    ...
  </TabItem>
</Tabs>
```

When using tabs, drop heading levels inside each tab to `####` to avoid conflicting with the page hierarchy.

---

## Descriptions

- Keep them brief — 2–4 sentences
- Credit the source: "Based on the recipe by America's Test Kitchen."
- Include yield or timing info inline if useful: `**Yield:** About 8 waffles`
- The owner's personal voice is welcome — preserve it when cleaning up user-supplied text

---

## Style Conventions

- **Temperatures:** always `°F` first, `°C` in parentheses — `400°F (200°C)`
- **Ranges:** use en dashes — `15–20 minutes`, `3–4 cups`
- **Fractions:** use unicode — `½`, `¼`, `¾` not `1/2`, `1/4`, `3/4`
- **Emojis:** welcome for personality, but limit use inside recipe steps
- **Ingredient amounts in step text:** prefer weight when referencing measured items (e.g. "add the 240g of milk" rather than "add 1 cup of milk")

---

## Workflow Notes

- When a user pastes a recipe in any format, clean it up into the standard structure above without adding content beyond what was provided.
- When the user says "same format as the other recipes," they mean this structure exactly.
- Work in Claude Code when manipulating the repo directly. An artifact to paste into Claude Code is sufficient when working in Claude Chat.

### Index pages — always keep up to date

Both `src/content/docs/meals/index.mdx` and `src/content/docs/drinks/index.mdx` serve as master lists for the site. **Whenever a recipe is added, update the relevant index page** — add a row to the correct category table with the recipe title linked and a brief one-liner description. This is not optional follow-up; treat it as part of every recipe addition.
