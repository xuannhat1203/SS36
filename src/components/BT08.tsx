import { useEffect, useState } from "react";
export default function BT08() {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(setCurrentDate);
  console.log(11111, currentDate);
  const [season, setSeason] = useState<string>("");
  useEffect(() => {
    if (
      currentDate.getMonth() + 1 + 1 >= 1 &&
      currentDate.getMonth() + 1 + 1 <= 3
    ) {
      setSeason("Mùa Xuân");
    } else if (
      currentDate.getMonth() + 1 >= 4 &&
      currentDate.getMonth() + 1 <= 6
    ) {
      setSeason("Mùa Hạ");
    } else if (
      currentDate.getMonth() + 1 >= 7 &&
      currentDate.getMonth() + 1 <= 9
    ) {
      setSeason("Mùa Thu");
    } else if (
      currentDate.getMonth() + 1 >= 10 &&
      currentDate.getMonth() + 1 <= 12
    ) {
      setSeason("Mùa Đông");
    }
  }, [currentDate]);
  return (
    <div>
      <p>Bây giờ là tháng: {currentDate.getMonth() + 1}</p>
      <p>Mùa hiện tại: {season}</p>
    </div>
  );
}
