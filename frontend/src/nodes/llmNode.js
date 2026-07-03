import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      width={220}
      minHeight={120}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: "35%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-prompt`,
          style: { top: "70%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <p style={{ margin: 0 }}>
        This is an LLM node.
      </p>
    </BaseNode>
  );
};