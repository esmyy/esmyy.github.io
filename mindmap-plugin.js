const mermaid = require("mermaid");
const path = require("path");
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
          `<script type="module">
            import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs";
      import mindmap from "https://cdn.jsdelivr.net/npm/@mermaid-js/mermaid-mindmap@9/dist/mermaid-mindmap.esm.min.mjs";
      mermaid.registerExternalDiagrams([mindmap]).then(() => {
        const maps = document.querySelectorAll(
          'div.mindmap[data-processed="true"]'
        );
        maps.forEach((v) => {
          v.removeAttribute("data-processed");
          v.innerHTML = v.getAttribute("data-mindmap-src");
        });
        mermaid.init(undefined, maps);
      });
          </script>`,
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
