// When you have component logic that needs to be used by multiple components, 
// we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: useFetch.

import useFetch from "../hooks/T18customHooksUseFetch";

const T18customHooksIndex = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default T18customHooksIndex;