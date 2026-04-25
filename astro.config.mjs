// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeVintage from "starlight-theme-vintage";

// https://astro.build/config
export default defineConfig({
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
