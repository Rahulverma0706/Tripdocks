import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Variable } from "./VariableExtension";

const VARIABLES = [
  { id: "user_name", label: "User Name" },
  { id: "company", label: "Company" },
  { id: "email", label: "Email Address" },
  { id: "date", label: "Current Date" },
];

const Editor = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });

  const editor = useEditor({
    extensions: [StarterKit, Underline, Variable],
    content: "",
    autofocus: true,
    onUpdate: ({ editor }) => {
      const { from } = editor.state.selection;
      const lastTwoChars = editor.state.doc.textBetween(from - 2, from, " ");
    
      if (lastTwoChars === "{{") {
        setTimeout(() => {
          const pos = editor.view.coordsAtPos(from);
          setPopoverPosition({
            top: pos.bottom + 30, // Adjust position further below input
            left: pos.left,
          });
          setShowPopover(true);
        }, 50);
      } else {
        setShowPopover(false);
      }
    },
  });

  const insertVariable = (variable) => {
    const { from } = editor.state.selection;
    const beforeText = editor.state.doc.textBetween(from - 2, from, " ");
    if (beforeText === "{{") {
      editor.chain().focus().deleteRange({ from: from - 2, to: from }).run();
    }
    editor.chain().focus().insertContent({
      type: "variable",
      attrs: { id: variable.id, label: variable.label },
    }).run();
    setShowPopover(false);
  };

  const exportContent = () => {
    if (!editor) return;
    console.log("JSON Output:", editor.getJSON());
    console.log("Text Output:", editor.getText());
    alert("Check Console for Exported Data!");
  };

  return (
    <div style={{ position: "relative", padding: "20px", border: "1px solid gray", width: "100%", margin: "auto" }}>
      <h2>TipTap Editor</h2>
      <div>
        <button onClick={() => editor.chain().focus().toggleBold().run()} style={{ marginRight: "5px" }}>B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} style={{ marginRight: "5px" }}>I</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>U</button>
      </div>
      <div className="editor-container" style={{ minHeight: "150px", padding: "10px", border: "1px solid lightgray" }}>
        <EditorContent editor={editor} />
      </div>
      <button onClick={exportContent} style={{ marginTop: "10px", padding: "8px 12px", background: "blue", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}>Export Content</button>

      {showPopover && (
        <div style={{ position: "absolute", top: popoverPosition.top, left: popoverPosition.left-775,  border: "1px solid #ccc", padding: "10px", zIndex: 1000, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", borderRadius: "5px", minWidth: "180px", backgroundColor:'white' }}>
          {VARIABLES.map((variable) => (
            <div key={variable.id} style={{ padding: "6px", cursor: "pointer",  color:'black', marginBottom: "2px", borderRadius: "3px" }}
              onMouseEnter={(e) => (e.target.style.background = "white")}
              onMouseLeave={(e) => (e.target.style.background = "black")}
              onClick={() => insertVariable(variable)}>
              <strong>{variable.label}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Editor;
