import { useState } from "react";
import Button from "./components/Button/Button";
import ResetCss from "./components/ResetCss/ResetCss";
import Input from "./components/Input/Input";
import Textarea from "./components/Textarea/Textarea";
import Image from "./components/Image/Image";
import "./styles/main.scss";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Flex from "./components/Flex/Flex";
import { Typography } from "./components/Typography";
import { Card } from "./components/Card";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <ResetCss />
      <div>hello</div>
      <Card variant="vertical">
        <Image
          src={"/office.jpeg"}
          alt={"office-image"}
          width={506}
          height={256}
          responsive
        />
        <Card.container>
          <Typography size="3xl" weight="bold" as="h4">
            Lorem Ipsum is simply Lorem Ipsum is simply
          </Typography>
          <Typography size="xl" as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </Typography>
          <Button>Read more</Button>
        </Card.container>
      </Card>
      <Card variant="horizontal">
        <Image
          src={"/office.jpeg"}
          alt={"office-image"}
          width={506}
          height={256}
        />
        <Card.container variant="horizontal">
          <Typography size="3xl" weight="bold" as="h4">
            Lorem Ipsum is simply Lorem Ipsum is simply
          </Typography>
          <Typography size="xl" as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </Typography>
          <Button>Read more</Button>
        </Card.container>
      </Card>
      <Card variant="product">
        <Image
          src={"/iphoneProduct.png"}
          alt={"iphone"}
          width={211}
          height={211}
        />
        <Card.container variant="product">
          <Typography size="3xl" weight="bold" as="h4">
            Lorem Ipsum is simply Lorem Ipsum is simply
          </Typography>
          <Flex justifyContent="space-between" alignItems="center">
            <Typography size="4xl" as="p" weight="bold">
              599$
            </Typography>
            <Button size="sm">Add to Cart</Button>
          </Flex>
        </Card.container>
      </Card>
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
