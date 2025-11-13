import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Alaric Voss' Barovian Journal",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://manoamaro.github.io/alaric-voss-journal/",
    ignorePatterns: ["private", "_templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Spectral SC",
        body: "Spectral",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f4efe5",
          lightgray: "#cec5b3",
          gray: "#7a7265",
          darkgray: "#2f2833",
          dark: "#1b1421",
          secondary: "#5a3d8a",
          tertiary: "#9b1d20",
          highlight: "rgba(90, 61, 138, 0.18)",
          textHighlight: "#f1c27d66",
        },
        darkMode: {
          light: "#120d16",
          lightgray: "#2a1f31",
          gray: "#584968",
          darkgray: "#d7ccb5",
          dark: "#f4efe5",
          secondary: "#b28bff",
          tertiary: "#e04f3f",
          highlight: "rgba(178, 139, 255, 0.26)",
          textHighlight: "#d4a15a66",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
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
    ],
  },
}

export default config
