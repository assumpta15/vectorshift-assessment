import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "20px",
        background: "#F8FAFC",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <h2
        style={{
          margin: "0 0 16px",
          color: "#1E293B",
        }}
      >
        Pipeline Nodes
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        <DraggableNode type="api" label="API" />
        <DraggableNode type="database" label="Database" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="merge" label="Merge" />
        <DraggableNode type="delay" label="Delay" />
      </div>
    </div>
  );
};