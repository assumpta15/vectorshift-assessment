export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        width: "120px",
        height: "80px",
        borderRadius: "14px",
        background: "#ffffff",
        border: "1px solid #E5E7EB",
        boxShadow: "0 6px 18px rgba(15,23,42,.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all .25s ease",
        userSelect: "none",
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: "50%",
          background: "#4F46E5",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          marginBottom: "8px",
        }}
      >
        {label.charAt(0)}
      </div>

      <span
        style={{
          fontWeight: 600,
          color: "#334155",
          fontSize: "14px",
        }}
      >
        {label}
      </span>
    </div>
  );
};