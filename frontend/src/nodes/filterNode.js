import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-true`,
          style: { top: "35%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-false`,
          style: { top: "70%" },
        },
      ]}
    >
      <p style={{ margin: 0 }}>Filters incoming data.</p>
    </BaseNode>
  );
};