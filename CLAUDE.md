# chefpo — Claude Instructions

A personal recipe site built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Recipes live as `.mdx` files under `src/content/docs/`, split into `meals/` and `drinks/`.

**Meals** subcategories:
- `meals/breakfast/` — morning food
- `meals/baked-goods/` — breads, flatbreads, scones
- `meals/mains/` — dinner and lunch dishes
- `meals/pantry/` — base ingredients and preparations
- `meals/treats/` — sweets and snacks

**Drinks** are a flat list under `drinks/` — subcategories will be added when the volume warrants it.

The sidebar autogenerates from these directories. `src/content/docs/meals/index.mdx` and `src/content/docs/drinks/index.mdx` are hand-maintained master lists.

---

## Stack & Setup

- **Framework:** Astro + Starlight
- **Content:** MDX files in `src/content/docs/`
- **Node:** >= 22.12.0 (pinned in `.nvmrc`, enforced in `netlify.toml` — do not change without reason)
- **Deploy:** Netlify (`dist/` as publish directory)

If content module errors appear after adding new MDX files, clear the `.astro` cache directory.

---

## Recipes

All recipe authoring and editing follows the **`add-recipe` skill** (`.claude/skills/add-recipe/`) — file placement, MDX structure, ingredient/unit conventions, and typography.

Two rules that apply to any change touching recipe files:
- **Always set `lastUpdated`** in frontmatter to the current date when a file is created or modified.
- **Always update the relevant index page** when a recipe is added, renamed, or removed.
