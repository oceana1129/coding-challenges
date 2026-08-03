/**
 * This is a follow-up to useCounter. In this version, the counter behavior 
 * stays the same, but the returned methods should be memoized; the same 
 * function instance is returned across re-renders when its dependencies 
 * have not changed.


export default function Component() {
  const { count, increment, decrement, reset, setCount } = useCounter();

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
 */

import { useState, useCallback, useMemo } from "react";
/**
 * @param number initialValue
 * @return Object
 */
export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue])
  return useMemo(
    () => ({
      count,
      increment,
      decrement,
      reset,
      setCount,
    }),
    [count, increment, decrement, reset]
  );
}
