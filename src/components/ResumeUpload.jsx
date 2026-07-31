import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleAnalyze = () => {
    if (!file) {
      alert("Please select a PDF resume first!");
      return;
    }

    alert(`Analyzing: ${file.name}`);
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