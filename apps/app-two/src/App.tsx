import { useState } from "react";
import { Button, Checkbox } from "@mono/shared";
import { ComponentOne } from "@mono/app-one";

export const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>App Two</h1>
      <ComponentOne />
      <Checkbox
        id="agree"
        label="I agree to the terms"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Button onClick={() => alert(`Checked: ${checked}`)}>Submit</Button>
    </div>
  );
};
