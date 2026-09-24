# chefpo Recipe Style Guide

## Frontmatter

```yaml
---
title: Recipe Title
description: A brief description.
lastUpdated: YYYY-MM-DD
hero:
  tagline: T A G L I N E !   # optional — spaced caps for personality
---
```

- **Always set `lastUpdated`** to the current date when a file is created or modified.
- `title:` is the recipe name only — no source appended.
- `description:` is plain text — no links.
- **Omit `hero.image` entirely** until real recipe images exist. Never reference placeholder assets.
- `tagline` is optional — include it when it adds personality.

## Imports

```mdx
import { Steps, Aside, Tabs, TabItem } from "@astrojs/starlight/components";
import VideoFrame from "../../../../components/VideoFrame.astro";
```

- Import only what the file uses.
- VideoFrame path depends on location:
  - `meals/<subcategory>/`: `../../../../components/VideoFrame.astro`
  - `drinks/`: `../../../components/VideoFrame.astro`

## Page Structure

```
## Recipe Title, Source Name
<VideoFrame ... />   (only if a URL was provided)
### Description
### Ingredients
### Tools
### Recipe
<Aside>s             (optional tips/notes)
<NutritionFacts />   (always — see Nutrition below)
```

**`##` heading:**
- Source known → `## Recipe Title, Source Name` (credits the author or channel).
- No source (original or unknown) → `## Recipe Title`, no comma.
- The VideoFrame `title` must match the `##` heading exactly.

## Description

- 2–4 sentences.
- Credit the source with a link when a URL is available: `Based on the recipe by [Cookie and Kate](https://cookieandkate.com/...).` — link the **source name**, not the word "recipe".
- Yield or timing inline when useful: `**Yield:** About 8 waffles`
- Keep the owner's personal voice when cleaning up their text.

### Dietary Badges

Below the yield line, add `<Badge>`s: diet labels as `success`, allergens as `caution`. Use only what applies.

```mdx
<Badge text="Vegetarian" variant="success" />
<Badge text="Eggs" variant="caution" />
<Badge text="Dairy" variant="caution" />
<Badge text="Gluten" variant="caution" />
```

Common allergens to check: Dairy, Eggs, Gluten, Tree nuts, Peanuts, Soy, Fish, Shellfish, Sesame.

## Ingredients Table

Two columns, `Item` | `Amount`. A third `Notes` column is fine for brief clarifications.

- **Lowercase** item names.
- **Weight first:** grams, then volume or count in parentheses: `390g (2½ cups)`.
- Whole items: `x2`, `x1`.
- Optional ingredients: `(optional)` inline in the item name.
- Clearly distinct groups (dry/wet, batter/topping) → a `####` subheading above each table.

```md
| Item              | Amount         |
| ----------------- | -------------- |
| all-purpose flour | 390g (2½ cups) |
| large eggs        | x2             |
| vanilla extract   | 5g (1 tsp)     |
```

### Conversions

1. Always grams first, volume second in parentheses.
2. If the source gives volume only, apply a realistic common conversion for that substance:
   - water / milk: 1 cup = 240g
   - all-purpose flour: 1 cup = 120–130g
   - butter: 1 tbsp = 14g
3. If a reliable conversion is uncertain, keep volume only and put `check weight` in the `Notes` column. **Do not guess.**
4. Leave non-convertible amounts as-is: `pinch of cinnamon`, `as needed`, `to taste`.

## Tools Table

Single column with an `Items` header. Lowercase, one item per row.

## Recipe Steps

Wrap all steps in `<Steps>`, with a blank line between numbered items:

```mdx
<Steps>
1. **Mix dry ingredients:** Whisk the flour, sugar, and salt.

2. Step two.
</Steps>
```

- Bold the leading action when it helps scanning.
- Plain, direct language — first person where natural.
- Don't over-explain; trust the cook.
- Reference measured items by weight: "add the 240g of milk", not "add 1 cup of milk".

## Typography

- **Temperatures:** °F first, °C in parentheses — `400°F (200°C)`
- **Ranges:** en dashes — `15–20 minutes`, `3–4 cups`
- **Fractions:** unicode — `½`, `¼`, `¾`, not `1/2`
- **Emojis:** welcome for personality, sparing inside steps

## Nutrition

Every recipe ends with a `<NutritionFacts />` panel (`src/components/NutritionFacts.astro`) at the bottom of the page, after any Asides. Import path mirrors VideoFrame's.

**Sourcing, in order of preference:**
1. Published nutrition info from the source (recipe site, cookbook, video description) — use it and say so.
2. Otherwise, estimate it from the ingredients yourself: add up each ingredient's grams using USDA FoodData Central values (or the label for branded items like protein powder), then divide by the servings. Don't guess a number for the whole dish.

**Fields:** `calories`, `servings`, `servingSize` (e.g. `"1 biscuit"`), fat / saturated fat, cholesterol, sodium, carbs, fiber, total + added sugars, protein, plus vitamin D / calcium / iron / potassium, with `…Dv` percentages. Round calories to the nearest 10 and grams to whole numbers (one decimal below 2). Daily Values are based on a 2,000-calorie diet: fat 78g, sat fat 20g, cholesterol 300mg, sodium 2,300mg, carbs 275g, fiber 28g, added sugars 50g, vitamin D 20mcg, calcium 1,300mg, iron 18mg, potassium 4,700mg.

**Estimate note:** When values are estimated, add a short `<Aside type="note">` after the panel saying so and listing the assumptions that move the numbers the most: salt brand, dairy fat level, optional toppings, branded ingredients.

**Variations:** If the recipe uses version tabs, put the panels under a `### Nutrition` heading in a matching `<Tabs syncKey>` group, one panel per version.

```mdx
<NutritionFacts
  calories={250}
  servings={10}
  servingSize="1 slice"
  fat={10}          fatDv={13}
  saturatedFat={2}  saturatedFatDv={10}
  cholesterol={45}  cholesterolDv={15}
  sodium={320}      sodiumDv={14}
  carbs={35}        carbsDv={13}
  fiber={2}         fiberDv={7}
  totalSugars={8}
  addedSugars={6}   addedSugarsDv={12}
  protein={4}
  calcium={120}     calciumDv={9}
  iron={2}          ironDv={11}
  potassium={180}   potassiumDv={4}
/>
```

## Components

### VideoFrame

Convert YouTube URLs to embed form:
- `https://www.youtube.com/watch?v=ABC123` → `https://www.youtube.com/embed/ABC123`
- `https://youtu.be/ABC123` → `https://www.youtube.com/embed/ABC123`

```mdx
<VideoFrame
  title="Recipe Title, Source Name"
  link="https://www.youtube.com/embed/VIDEO_ID"
/>
```

**Never invent or guess a video URL.** If none was provided, omit the component and its import; the user will supply it later.

### Aside

For tips, notes, or warnings outside the main steps. Types: `tip`, `note`, `caution`, `danger`.

```mdx
<Aside type="tip">
  Your tip here.
</Aside>
```

### Tabs / TabItem

For distinct method variations (slow cooker vs pressure cooker) or multi-day processes split by day. Use `syncKey` so multiple tab groups stay in sync. Drop headings inside tabs to `####`.

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
