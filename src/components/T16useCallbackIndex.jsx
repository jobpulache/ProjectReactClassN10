import { useState, useCallback } from "react";
import Todos from "./T16useCallbackTodos";

// The React useCallback Hook returns a memoized callback function.
// Think of memoization as caching a value so that it does not need to be recalculated.
// The useCallback Hook only runs when one of its dependencies update.
// This can improve performance.
// The useCallback and useMemo Hooks are similar. 
// The main difference is that useMemo returns a memoized VALUE 
// and useCallback returns a memoized FUNCTION. 

export default function T16useCallbackIndex () {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // Use the useCallback Hook to prevent the Todos component from re-rendering needlessly
  
  const addTodo = useCallback(() => {
    alert("se re-renderizó")
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  /*
  const addTodo = () => {
    alert("se re-renderizó")
    setTodos((t) => [...t, "New Todo"]);
  };
*/
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

// You will notice that the Todos component re-renders even when the todos do not change.
// Why does this not work? We are using memo, 
//  so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.
// This is because of something called "referential equality".
// Every time a component re-renders, its functions get recreated. 
// Because of this, the addTodo function has actually changed.