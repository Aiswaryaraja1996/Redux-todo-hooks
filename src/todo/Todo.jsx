import TodoInput from "./TodoInput";
import Navbar from "../navbar/Navbar";

export default function Todo() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>TODO LIST</h1>
        <TodoInput />
      </div>
    </div>
  );
}
