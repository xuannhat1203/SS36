import { useState } from "react";

export default function BT09() {
  const [time, setTime] = useState<number>(0);
  setInterval(() => {
    setTime(time + 1);
  }, 1000);
  return (
    <div>
      <p>Thời gian đã trôi được: {time} giây</p>
    </div>
  );
}
