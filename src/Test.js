import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

// Option 1 - Not using children prop

// export default function Test() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Slow counter?!?</h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
//       <SlowComponent />
//     </div>
//   );
// }


// Option 2 - Using children prop

export default function Test() {
    return (
        <Counter>
            <SlowComponent/>
        </Counter>
    );
}


function Counter ({children}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Slow counter?!?</h1>
            <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
            {children}
        </div>
    )
}
