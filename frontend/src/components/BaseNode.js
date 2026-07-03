import { Handle } from "reactflow";

export const BaseNode = ({
  title,
  children,
  handles = [],
  width = 220,
  minHeight = 100,
}) => {
  return (
    <div
      style={{
        width,
        minHeight,
        background: "#ffffff",
        borderRadius: "14px",
        border: "1px solid #E5E7EB",
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
        overflow: "hidden",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          background: "#4F46E5",
          color: "#fff",
          padding: "12px 16px",
          fontWeight: 600,
          fontSize: "15px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {children}
      </div>

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};