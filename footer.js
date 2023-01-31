const footer = {
  style: "dark",
  links: [
    {
      title: "Docs",
      items: [
        {
          label: "Tutorial",
          docId: "intro",
          to: "/docs/intro",
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          label: "Stack Overflow",
          href: "https://stackoverflow.com/questions/tagged/docusaurus",
        },
        {
          label: "Discord",
          href: "https://discordapp.com/invite/docusaurus",
        },
        {
          label: "Twitter",
          href: "https://twitter.com/docusaurus",
        },
      ],
    },
    {
      title: "More",
      items: [
        {
          label: "Blog",
          to: "https://www.esmyy.com/blog",
        },
        {
          label: "GitHub",
          href: "https://github.com/facebook/docusaurus",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
};

module.exports = footer;
