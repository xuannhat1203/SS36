import { useEffect, useRef, useState } from "react";

export default function BT07() {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Giá trị trước khi click: {prevCountRef.current} </p>
      <p>Giá trị sau khi click: {count} </p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
