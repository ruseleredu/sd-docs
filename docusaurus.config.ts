import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23", // Use 24-hour format
});
const utc3Time = formatter.format(new Date());
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} sd-docs, Inc. Built with Docusaurus at ${utc3Time} UTC-3.`;

// 1. Import the labData array
// https://gemini.google.com/share/c52111cbf825
// Adjust the path as needed.
const { labData } = require("./src/data/labData");
// OR: import { labData } from './src/data/labData';

// 2. Create the Docusaurus-compatible array format
const labDropdownItems = labData.map((lab) => ({
  // Docusaurus expects 'label'. We use your 'conteudo' property for the text.
  //label: lab.conteudo,
  label: `${lab.tarefa} - ${lab.conteudo}`,
  // Docusaurus expects 'to' (for internal links). We use your 'hrefi' property.
  to: lab.hrefi,
}));

const { quizData } = require("./src/data/quizData");

// 2. Create the Docusaurus-compatible array format
const quizDropdownItems = quizData.map((quiz) => ({
  // Docusaurus expects 'label'. We use your 'descricao' property for the text.
  //label: lab.conteudo,
  label: `${quiz.quiz} - ${quiz.descricao}`,
  // Docusaurus expects 'to' (for internal links). We use your 'hrefi' property.
  to: quiz.hrefi,
}));

const config: Config = {
  title: "ELT72B - Sistemas Digitais",
  tagline:
    "Possibilitar ao aluno analisar, sintetizar e desenvolver circuitos digitais combinacionais e sequenciais.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://ruseleredu.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/sd-docs/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ruseleredu", // Usually your GitHub org/user name.
  projectName: "sd-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true, // Diagrams can be rendered using Mermaid in a code block.
    hooks: {
      onBrokenMarkdownLinks: "warn", // or 'throw'
    },
  },
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  themes: ["@docusaurus/theme-mermaid"],

  // Include the KaTeX CSS in your config under stylesheets:
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-WcoG4HRXMzYzfCgiyfrySxx90XSl2rxY5mnVY5TwtWE6KLrArNKn0T/mOgNL0Mmi",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/sd-docs/edit/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/sd-docs/edit/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "lab", // Unique ID for this docs instance
        path: "lab-docs", // Path to your LAB docs folder
        routeBasePath: "lab", // Base URL for these docs (e.g., yoursite.com/lab/...)
        sidebarPath: require.resolve("./labsidebars.js"), // Separate sidebar for LAB docs
        // ... other options specific to your LAB docs
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "ead", // Unique ID for this docs instance
        path: "ead-docs", // Path to your EaD docs folder
        routeBasePath: "ead", // Base URL for these docs (e.g., yoursite.com/ead/...)
        sidebarPath: require.resolve("./eadsidebars.js"), // Separate sidebar for EaD docs
        // ... other options specific to your EaD docs
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "utfpr", // Unique ID for this docs instance
        path: "utfpr", // Path to your API docs folder
        routeBasePath: "utfpr", // Base URL for these docs (e.g., yoursite.com/api/...)
        sidebarPath: require.resolve("./sidebarsutfpr.js"), // Separate sidebar for API docs
        // 👇 Add this line for the last update time
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        // ... other options specific to your API docs
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "pjts", // Unique ID for this docs instance
        path: "pjts-docs", // Path to your API docs folder
        routeBasePath: "pjts", // Base URL for these docs (e.g., yoursite.com/api/...)
        sidebarPath: require.resolve("./sidebarspjts.js"), // Separate sidebar for API docs
        // 👇 Add this line for the last update time
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        // ... other options specific to your API docs
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "ELT72B",
      logo: {
        alt: "ELT72B Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          label: "UTFPR",
          to: "/utfpr/about", // Link to a page in your UTFPR docs
          type: "dropdown",
          position: "left",
          items: [
            {
              to: "/utfpr/ELT72B/folder", // Link to a page in your UTFPR docs
              label: "ELT72B - Sistemas Digitais",
            },
          ],
        },
        {
          to: "/ead/intro", // Link to a page in your EaD docs
          label: "EaD",
          type: "dropdown",
          position: "left",
          activeBaseRegex: `/ead/`, // Highlight when any EaD doc is active
          items: [...quizDropdownItems],
        },
        {
          to: "/lab/intro", // Link to a page in your LAB docs
          label: "LABs",
          type: "dropdown",
          position: "left",
          activeBaseRegex: `/lab/`, // Highlight when any LAB doc is active
          items: [...labDropdownItems],
        },
        {
          label: "Projetos",
          to: "/pjts/intro", // Link to a page in your UTFPR docs
          type: "dropdown",
          position: "left",
          items: [
            {
              to: "/pjts/2025.2", // Link to a page in your PJTS docs
              label: "Semestre 2025.2",
            },
            {
              to: "/pjts/2025.1", // Link to a page in your PJTS docs
              label: "Semestre 2025.1",
            },
            {
              to: "/pjts/2024.2", // Link to a page in your PJTS docs
              label: "Semestre 2024.2",
            },
            {
              to: "/pjts/2024.1", // Link to a page in your PJTS docs
              label: "Semestre 2024.1",
            },
          ],
        },
       // { to: "/blog", label: "Blog", position: "right" },
       { to: "/pdf/CT2026.pdf", label: "Calendário", position: "right", target: '_blank'},
        {
          href: "https://github.com/ruseleredu/sd-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "UTFPR",
          items: [
            {
              label: "Moodle",
              href: "https://moodle.utfpr.edu.br/",
            },
            {
              label: "Webmail",
              href: "https://webmail.utfpr.edu.br/",
            },
            {
              label: "Sistemas",
              href: "https://sistemas2.utfpr.edu.br/",
            },
            {
              label: "SEI",
              href: "https://sei.utfpr.edu.br/",
            },
            {
              label: "Chat",
              href: "https://chat.utfpr.edu.br/",
            },
            {
              label: "Ajuda",
              href: "https://ajuda.utfpr.edu.br/",
            },
            {
              label: "Calendário",
              href: "https://www.utfpr.edu.br/alunos/calendario",
            },
            {
              label: "TCC",
              href: "https://nupet.daelt.ct.utfpr.edu.br/tcc/engenharia/index.html",
            },
          ],
        },
        {
          title: "Sistemas",
          items: [
            {
              label: "Sigepe",
              href: "https://sougov.sigepe.gov.br/sougov/Home",
            },
            {
              label: "Consulta Diários",
              href: "https://sistemas2.utfpr.edu.br/url/1141",
            },
            {
              label: "Permanências",
              href: "https://sistemas2.utfpr.edu.br/url/1026",
            },
            {
              label: "Planejamento",
              href: "https://sistemas2.utfpr.edu.br/url/1890",
            },
            {
              label: "Lançamentos",
              href: "https://sistemas2.utfpr.edu.br/url/1514",
            },
            {
              label: "Mapa de Professor",
              href: "https://sistemas2.utfpr.edu.br/url/1022",
            },
            {
              label: "Mapa de Sala",
              href: "https://sistemas2.utfpr.edu.br/url/1934",
            },
          ],
        },
        {
          title: "Desenvolvedor",
          items: [
            {
              label: "Visual Studio Code",
              href: "https://code.visualstudio.com/download",
            },
            {
              label: "Git SCM",
              href: "https://git-scm.com/downloads",
            },
            {
              label: "GitHub CLI",
              href: "https://cli.github.com/",
            },
            {
              label: "GitHub Desktop",
              href: "https://desktop.github.com/download/",
            },
            {
              label: "PlatformIO",
              href: "https://platformio.org//install/ide?install=vscode",
            },
            {
              label: "Arduino IDE",
              href: "https://www.arduino.cc/en/software/",
            },
          ],
        },
        {
          title: "Ferramentas",
          items: [
            {
              label: "Karnaugh Map Solver",
              href: "https://wredan.github.io/Karnaugh-Map-Solver/",
            },
            {
              label: "Tinkercad Circuits",
              href: "https://www.tinkercad.com/circuits",
            },
            {
              label: "Logic circuit simplification",
              href: "http://www.32x8.com/index.html",
            },
            {
              label: "Quine McCluskey Solver",
              href: "https://quinemccluskey.geeekyboy.com/",
            },
            {
              label: "PlatformIO",
              href: "https://platformio.org//install/ide?install=vscode",
            },
            {
              label: "WinGet",
              href: "https://winget.run/",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/@Rusla82",
            },
            {
              label: "YouTube Edu",
              href: "https://www.youtube.com/@adrianoruseler653",
            },
            {
              label: "GitHub",
              href: "https://github.com/AdrianoRuseler/",
            },
            {
              label: "GitHub Edu",
              href: "https://github.com/ruseleredu/",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/adrianoruseler/",
            },
            {
              label: "ResearchGate",
              href: "https://www.researchgate.net/profile/Adriano-Ruseler/",
            },
            {
              label: "ORCID",
              href: "https://orcid.org/0000-0003-0915-9483",
            },
          ],
        },
      ],
      copyright: COPYRIGHT_STRING,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "autohotkey",
        "arduino",
        "apacheconf",
        "nginx",
        "bash",
        "matlab",
        "powershell",
        "ini",
        "latex",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
