import { useState } from "react";

export default function UsecustomHook(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  // Define a function that increments the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return [counter, incrementCounter];
}
