import React, { FC } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
}

const Hello: FC<Greeting> = ({ name }) => <Button>Hello {name}</Button>;

export default Hello;
