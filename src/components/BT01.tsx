import { useState } from "react";
export default function BT01() {
  const [title, setTitle] = useState<string>("");
  document.title = title;
  return (
    <>
      BT01 <br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nhập tiêu đề"
      />{" "}
      <br />
    </>
  );
}
