import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Art42",
  description: "Art42 Documentation",
  base: "/tokeniart/",
  outDir: "./../github-pages",
  themeConfig: {
    sidebar: [
      { text: "Introduction", link: "/" },
      { text: "Metadata", link: "/metadata" },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/woolimi/tokeniart" }],
  },
});
