import { Button } from "@/components/ui/button";
import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => setHidden((prev) => !prev)}>Click me</Button>
      {!hidden && <p>Bumbaclut</p>}
    </div>
  );
}

export default App;
