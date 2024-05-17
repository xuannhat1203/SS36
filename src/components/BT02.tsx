import { useState, useEffect } from "react";
export default function BT02() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click {count} lần</button>
    </div>
  );
}
