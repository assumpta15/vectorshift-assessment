import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-request`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <p style={{ margin: 0 }}>Makes an API request.</p>
    </BaseNode>
  );
};