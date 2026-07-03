import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  return (
    <BaseNode
      title="Output"
      width={220}
      minHeight={120}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-value`,
        },
      ]}
    >
      <label
        style={{
          display: "block",
          marginBottom: 10,
        }}
      >
        Name
        <input
          style={{ width: "100%" }}
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>

      <label
        style={{
          display: "block",
        }}
      >
        Type
        <select
          style={{ width: "100%" }}
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};