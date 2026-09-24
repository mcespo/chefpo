// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeVintage from "starlight-theme-vintage";

// https://astro.build/config
export default defineConfig({
  // Astro 6.4+ leaves these undefined by default, and Starlight's bundled
  // @astrojs/mdx only enables GFM (tables!) when explicitly true.
  markdown: { gfm: true, smartypants: true },
  integrations: [
    starlight({
      plugins: [starlightThemeVintage()],
      title: "Chefpo",
      components: {
        SocialIcons: "./src/components/overrides/SocialIcons.astro",
      },
      sidebar: [
        {
          label: "Meals",
          autogenerate: { directory: "meals" },
        },
        {
          label: "Drinks",
          autogenerate: { directory: "drinks" },
        },
      ],
    }),
  ],
});
