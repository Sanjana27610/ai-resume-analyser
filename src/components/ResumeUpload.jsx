import { useState } from "react";
import axios from "axios";

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a PDF resume first!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      alert("Resume uploaded successfully!");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Upload failed!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Upload Your Resume</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleAnalyze}>
        Analyze Resume
      </button>

      <br /><br />

      {file && <p>Selected File: {file.name}</p>}
    </div>
  );
}

export default ResumeUpload;