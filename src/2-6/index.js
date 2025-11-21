import ReactDOM from "react-dom";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const noBullet = {
  listStyle: "none",
};

const oddColor = {
  color: "blue",
};

const element = (
  <div style={{ display: "flex" }}>
    {num
      .filter((n) => n >= 2)
      .filter((n) => n != 5)
      .map((i, idx) => (
        <ul style={noBullet}>
          {num.map((j) => (
            <li>
              <h4 style={i % 2 === 1 ? oddColor : {}}>
                {i} x {j} = {i * j}
              </h4>
            </li>
          ))}
        </ul>
      ))}
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
