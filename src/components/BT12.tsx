import { useEffect, useState } from "react";

export default function BT12() {
  const [time, setTime] = useState<number>(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    if (timerId === null) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setTimerId(id);
    }
  };

  const handleEnd = () => {
    if (timerId !== null) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (timerId !== null) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

  return (
    <div>
      <p>Đếm thời gian {time}</p>
      <button onClick={handleStart}>Bắt đầu</button>
      <button onClick={handleEnd}>Dừng lại</button>
    </div>
  );
}
