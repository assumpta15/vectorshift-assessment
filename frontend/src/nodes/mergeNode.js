import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-left`,
          style: { top: "35%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-right`,
          style: { top: "70%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <p style={{ margin: 0 }}>Combines multiple inputs.</p>
    </BaseNode>
  );
};