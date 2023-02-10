const mermaid = require("mermaid");
const path = require("path");
const fs = require("fs");
const append = function () {
  const sc = document.createElement("script");
  sc.setAttribute("type", "module");
  sc.innerHTML = `import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs';
  import mindmap from 'https://cdn.jsdelivr.net/npm/@mermaid-js/mermaid-mindmap@9/dist/mermaid-mindmap.esm.min.mjs';
  await mermaid.registerExternalDiagrams([mindmap]);`;
  document.head.append(sc);

  const div = document.createElement("div");
  div.innerHTML = "dddddddd";
  document.body.append(div);
};

module.exports = function (context, options) {
  return {
    name: "mindmap-plugin",
    injectHtmlTags({ content }) {
      return {
        postBodyTags: [
          fs.readFileSync("./mindmap-init.html", { encoding: "utf-8" }),
        ],
      };
    },
  };
};

//   `<script type="module">import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs';
//   await mermaid.initialize({ startOnLoad: true });
//   window.mermaid = mermaid;
// import mindmap from 'https://cdn.jsdelivr.net/npm/@mermaid-js/mermaid-mindmap@9/dist/mermaid-mindmap.esm.min.mjs';
// window.mindmap = mindmap;
// await window.mermaid.registerExternalDiagrams([window.mindmap])`,
