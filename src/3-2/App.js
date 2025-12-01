import Hello from "./components/Hello";
import World from "./components/World";
import Heading from "./components/Heading";

// Heading 이라는 컴포넌트를 만들고 Hello, World 컴포넌트를 통합하기
export default function App() {
  return (
    <div>
      <Heading type="h2">hello</Heading>

      <Hello />
      <World />
    </div>
  );
}
