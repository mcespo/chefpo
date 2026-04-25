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
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" },
      ],
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
