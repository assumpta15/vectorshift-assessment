import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const DatabaseNode = ({ id }) => {
  return (
    <BaseNode
      title="Database"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-query`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-result`,
        },
      ]}
    >
      <p style={{ margin: 0 }}>Stores and retrieves data.</p>
    </BaseNode>
  );
};