import ReactDOM from "react-dom";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const element = (
  <div style={{ display: "flex" }}>
    {num
      .filter((i) => i !== 1 && i !== 5)
      .map((i) => {
        return (
          <div
            key={i}
            style={{
              marginRight: "20px",
              color: i % 2 === 1 ? "blue" : "black",
            }}
          >
            {num.map((j) => (
              <div key={j}>
                {i} x {j} = {i * j}
              </div>
            ))}
          </div>
        );
      })}
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
