import React, { useState } from "react";

const UploadFileProgress = () => {
  const [progress, setProgress] = useState(0);

  const handleFileUpload = async e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload", true);

    xhr.upload.addEventListener("progress", handleProgress);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("Upload successful");
      }
    };

    xhr.send(formData);
  };

  const handleProgress = event => {
    if (event.lengthComputable) {
      const percentage = Math.round((event.loaded / event.total) * 100);
      setProgress(percentage);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {progress > 0 && <p>Upload Progress: {progress}%</p>}
    </div>
  );
};

export default UploadFileProgress;
