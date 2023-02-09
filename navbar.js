module.exports = {
  logo: {
    alt: "logo",
    src: "img/favicon.png",
  },
  items: [
    // { to: "/blog", label: "博客", position: "left" }, // 或 position: 'right'
    {
      position: "left",
      label: "手册",
      to: "/docs",
    },
    {
      to: "/docs/frameworks/react/overview",
      label: "React",
      position: "left",
    },
    {
      to: "/docs/frameworks/vue3/overview",
      label: "Vue 3",
      position: "left",
    },
    {
      to: "/docs/frameworks/vue2/overview",
      label: "Vue 2",
      position: "left",
    },
    {
      href: "https://github.com/esmyy",
      label: "GitHub",
      position: "right",
    },
  ],
};
