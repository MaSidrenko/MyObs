import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FAF8F8", // фоновый светлый
          lightgray: "#E5E5E5", // светло-серый для блоков
          gray: "#B8B8B8", // текст серый
          darkgray: "#4E4E4E", // текст заголовков
          dark: "#2B2B2B", // основной текст
          secondary: "#D97B36", // оранжевый акцент
          tertiary: "#C7C7C7", // дополнительные элементы
          highlight: "rgba(217, 123, 54, 0.15)", // подсветка оранжевого
          textHighlight: "#D97B36AA", // подсветка текста
        },
        darkMode: {
          light: "#161618", // фон темный
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#D4D4D4",
          dark: "#EBEBEC",
          secondary: "#D97B36", // оранжевый акцент
          tertiary: "#4E4E4E",
          highlight: "rgba(217, 123, 54, 0.15)",
          textHighlight: "#D97B36AA",
        },
      },
      // colors: {
      //   lightMode: {
      //     light: "#faf8f8",
      //     lightgray: "#e5e5e5",
      //     gray: "#b8b8b8",
      //     darkgray: "#4e4e4e",
      //     dark: "#2b2b2b",
      //     secondary: "#284b63",
      //     tertiary: "#84a59d",
      //     highlight: "rgba(143, 159, 169, 0.15)",
      //     textHighlight: "#fff23688",
      //   },
      //   darkMode: {
      //     light: "#161618",
      //     lightgray: "#393639",
      //     gray: "#646464",
      //     darkgray: "#d4d4d4",
      //     dark: "#ebebec",
      //     secondary: "#7b97aa",
      //     tertiary: "#84a59d",
      //     highlight: "rgba(143, 159, 169, 0.15)",
      //     textHighlight: "#b3aa0288",
      //   },
      // },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
