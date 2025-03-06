// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Chefpo",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Meals",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Pita", slug: "meals/pita" },
          ],
        },
      ],
    }),
  ],
});
