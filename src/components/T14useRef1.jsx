// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

import { useState, useEffect, useRef } from "react";

// useRef to track "application renders"
export default function T14useRef1() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  // It's like doing this: const count = {current: 0}. We can access the count by using count.current.

  useEffect(() => {
    count.current = count.current + 1;
  });

  // Como consecuencia del cambio en INPUTVALUE se dispara el USEEFFECT
  // El valor de COUNT se mantiene a pesar de lanzarse varias veces el USEEFFECT

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}