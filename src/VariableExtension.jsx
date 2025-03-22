import { Node, mergeAttributes } from "@tiptap/core";

export const Variable = Node.create({
  name: "variable",
  group: "inline",
  inline: true,
  atom: true, // Ensures the variable is treated as a single unit

  addAttributes() {
    return {
      id: { default: null },
      label: { default: "" },
    };
  },

  parseHTML() {
    return [{ tag: "span[data-variable]" }];
  },

  renderHTML({ node }) {
    return [
      "span",
      mergeAttributes({ 
        "data-variable": node.attrs.id, 
        class: "variable-token",
        style: "background: #f0f0f0; padding: 2px 6px; border-radius: 5px; font-weight: bold; color: #333;"
      }),
      `{{${node.attrs.label}}}`,
    ];
  },
  
  addNodeView() {
    return ({ node, editor, getPos }) => {
      const wrapper = document.createElement("span");
      wrapper.classList.add("variable-token");
      wrapper.textContent = `{{${node.attrs.label}}}`;

      // Remove button
      const removeBtn = document.createElement("span");
      removeBtn.innerHTML = " ×";
      removeBtn.classList.add("remove-btn");
      removeBtn.style.cursor = "pointer";
      removeBtn.style.marginLeft = "4px";
      removeBtn.style.color = "red";

      removeBtn.onclick = () => {
        if (typeof getPos === "function") {
          editor.chain().focus().deleteRange({ from: getPos(), to: getPos() + node.nodeSize }).run();
        }
      };

      wrapper.appendChild(removeBtn);
      return { dom: wrapper };
    };
  },
});
