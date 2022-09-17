import React, { useMemo, useState } from "react";

function MemoHook() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("Multicount");
      return count * 5;
    },
    [count]
  )

  return (
    <div>
      <h1>UseMemo hook in react</h1>
      <h2>count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}

export default MemoHook;
