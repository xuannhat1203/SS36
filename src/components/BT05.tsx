import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function BT05() {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    console.log(intervalId);
  }, []);

  return <div>Thời gian hiện tại: {time.format("HH:mm:ss")}</div>;
}
