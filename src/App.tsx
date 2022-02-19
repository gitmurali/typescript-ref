import { Product } from "./Product/Product";
import "./styles.css";

export default function App() {
  const phillips = new Product("light");
  console.log(phillips);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
