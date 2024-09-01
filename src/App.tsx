import { useState } from "react";
import Button from "./components/Button/Button";
import ResetCss from "./components/ResetCss/ResetCss";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <ResetCss />
      <div>hello</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Button onClick={() => setCount(count + 1)} variant="primary" size="small">Hello</Button>
        <Button variant="secondary" size="medium">Hello</Button>
        <Button variant="tertiary" size="large">Hello</Button>
      </div>
      <div>{count}</div>
    </>
  );
}

export default App;
