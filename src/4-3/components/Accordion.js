import { useState } from "react";
function Accordion({ title, content }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div
        style={{
          background: "#666",
          color: "white",
          fontWeight: "bold",
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => {
          setToggle((t) => !t);
        }}
      >
        <div>{title}</div>
        <div>{toggle ? "-" : "+"}</div>
      </div>

      {toggle && (
        <div
          style={{
            border: "1px solid #999",
            padding: 20,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Accordion;
