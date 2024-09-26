import { useState } from "react";
import Button from "./components/Button/Button";
import ResetCss from "./components/ResetCss/ResetCss";
import Input from "./components/Input/Input";
import Textarea from "./components/Textarea/Textarea";
import "./styles/main.scss";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import { Card1, Card2, Card3, Card4 } from "./testComponents/Cardtest";
import Header1, { Header2, Header3, Header4 } from "./testComponents/Headertest";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <ResetCss />

      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <div>hello</div>
      <div>
        <Button>Hello</Button>
        <Button onClick={() => setCount(count + 1)} variant="primary" size="sm">
          Hello
        </Button>
        <Button variant="secondary" size="md">
          Hello
        </Button>
        <Button variant="tertiary" size="lg">
          Hello
        </Button>
      </div>
      <Input type="file" size="md" />
      <Input
        variant="primary"
        placeholder="Password..."
        size="sm"
        label="Password"
        type="password"
        required
      />
      <Input
        variant="warning"
        placeholder="Password..."
        rounded="sm"
        size="sm"
      />
      <Input
        variant="danger"
        placeholder="Password..."
        rounded="md"
        size="md"
      />
      <Textarea
        placeholder="dupka"
        size="sm"
        label="Password"
        variant="success"
      />
      {/* <Image src={testImage} alt={"image"} width={200} height={200} />   */}
      <div>{count}</div>
      <Breadcrumbs list={["dupa", "kupa", "zupa"]} separator={"/"} />
    </>
  );
}

export default App;
