import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Ir al banco",
    complete: false,
  },
  {
    id: 2,
    title: "Gimnasio",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      // Mapear todos los TODOs y cambiar el atributo COMPLETE de TODO modificado en la interfaz
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function T15useReducer() {
  // REDUCER se encargará de actualizar el atributo COMPLETE de los TODOS
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  // El HANDLECOMPLETE dispara la ejecución del USEREDUCER con DISPATCH
  // le pasa el atributo TYPE de ACTION
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}