import React, { useEffect, useState } from "react";
export default function BT11() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files ? files[0] : null;
    setFile(selectedFiles);
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const render = new FileReader();
    render.onload = () => {
      setImageUrl(render.result as string);
    };
    render.readAsDataURL(file);
  }, [file]);
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <img src={imageUrl} alt="" />
    </div>
  );
}
