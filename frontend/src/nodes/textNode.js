import { useMemo, useRef, useState, useEffect } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");

  const [nodeSize, setNodeSize] = useState({
    width: 250,
    height: 160,
  });

  const textareaRef = useRef(null);

  useEffect(() => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;

    // Reset height so scrollHeight is recalculated
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;

    setNodeSize({
      width: Math.max(250, Math.min(textarea.scrollWidth + 40, 500)),
      height: Math.max(160, textarea.scrollHeight + 70),
    });
  }, [text]);

  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

    const vars = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (!vars.includes(match[1])) {
        vars.push(match[1]);
      }
    }

    return vars;
  }, [text]);

  const handles = [
    ...variables.map((variable, index) => ({
      type: "target",
      position: Position.Left,
      id: `${id}-${variable}`,
      style: {
        top: `${((index + 1) * 100) / (variables.length + 1)}%`,
      },
    })),
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
  ];


  return (
    <BaseNode
      title="Text"
      width={nodeSize.width}
      minHeight={nodeSize.height}
      handles={handles}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          minHeight: "100px",
          resize: "none",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #CBD5E1",
          boxSizing: "border-box",
          overflow: "hidden",
          fontFamily: "inherit",
          fontSize: "14px",
        }}
      />
    </BaseNode>
  );
};