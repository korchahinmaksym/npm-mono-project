import { useState } from "react";
import { Input } from "@mono/shared";

export const ComponentOne = () => {
  return (
    <div>
      <h1>Component From App One</h1>
    </div>
  );
};

export const App = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>App One</h1>
      <Input
        id="name"
        label="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Value: {value}</p>
    </div>
  );
};
