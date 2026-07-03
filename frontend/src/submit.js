import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const data = await response.json();

      alert(
        `Pipeline Summary

Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (error) {
      console.error(error);
      alert("Could not connect to backend.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 22px",
          border: "none",
          borderRadius: "8px",
          background: "#4F46E5",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};