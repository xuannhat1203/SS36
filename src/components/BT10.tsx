import { useEffect, useState, useRef } from "react";

export default function BT10() {
  const [keyPressed, setKeyPressed] = useState<string>("");
  const [keyCode, setKeyCode] = useState<number | null>(null);
  const keys = useRef<string>("");
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keys.current = event.key;
      setKeyPressed(event.key);
      setKeyCode(event.keyCode || event.which);
    };
    window.addEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div>
      <p>Bạn đang ấn phím: {keyPressed}</p>
      <p>Mã phím: {keyCode}</p>
    </div>
  );
}
