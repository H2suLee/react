import { useState } from "react";
// - value를 state로 만들기
// - Increase 버튼 함수 만들기 (+함수형 인자로)
// - Reset 버튼 함수 만들기

export default function App() {
  // let value = 0;
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>value: {value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase value
      </button>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        Reset value
      </button>
    </div>
  );
}
