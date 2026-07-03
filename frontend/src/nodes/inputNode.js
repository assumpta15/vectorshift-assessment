import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(
    data?.inputType || "Text"
  );

  return (
    <BaseNode
      title="Input"
      width={220}
      minHeight={120}
      handles={[
        {
          type: "source",
          position: Position.Right,
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
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option>Text</option>
          <option>File</option>
        </select>
      </label>
    </BaseNode>
  );
};