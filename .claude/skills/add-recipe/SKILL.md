---
name: add-recipe
description: Add or clean up a recipe on the chefpo site. Use whenever the user pastes a recipe (any format), shares a recipe URL or YouTube link, asks to add/create/convert a meal or drink, says "same format as the other recipes", or asks to edit an existing recipe's structure, ingredients, or steps.
---

# Add a Recipe

Turn user-supplied recipe content into a standard chefpo MDX page and register it on the index page.

## Workflow

1. **Pick the location.** Decide meal vs drink, and for meals the subcategory:
   - `meals/breakfast/` — morning food
   - `meals/baked-goods/` — breads, flatbreads, scones
   - `meals/mains/` — dinner and lunch dishes
   - `meals/pantry/` — base ingredients and preparations
   - `meals/treats/` — sweets and snacks
   - `drinks/` — flat list, no subcategories yet

   If the category is genuinely ambiguous, ask.

2. **Name the file** in lowercase kebab-case: `fruit-scone.mdx`. If a version of the same recipe already exists, suffix with the source abbreviation: `german-pancake-atk.mdx`.

3. **Write the page** starting from [template.mdx](template.mdx), following [style-guide.md](style-guide.md). Read the style guide before writing — it covers the ingredient table, unit conversions, and typography rules.
   - Use only what the user provided. Clean up and restructure; do not add ingredients, steps, or tips that weren't there.
   - Preserve the owner's personal voice in descriptions and notes.
   - Set `lastUpdated` to today's date.
   - For the full reference example, see `src/content/docs/meals/breakfast/oven-baked-french-toast.mdx`.

4. **Update the index page** — required, not optional:
   - Meals → `src/content/docs/meals/index.mdx`, in the matching category table
   - Drinks → `src/content/docs/drinks/index.mdx`, in the "All Drinks" table

   Add a row `| [Title](/meals/<subcategory>/<slug>/) | short lowercase one-liner |`, keep the table **alphabetical**, and bump the index page's `lastUpdated`.

   The sidebar autogenerates from the directories — no config change needed.

5. **Verify** if anything looks off: run `npm run build`. If content module errors appear after adding a new file, delete the `.astro` cache directory and retry.

## Editing an existing recipe

Apply the same style guide, bump `lastUpdated`, and update the index row if the title or one-liner changed.
