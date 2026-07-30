import Navbar from "../components/Navbar";
import { useState } from "react";

function Home() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a resume first!");
      return;
    }

    alert("Resume uploaded! Next step: AI analysis 🚀");
  };

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Upload Your Resume</h2>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        <br /><br />

        <button onClick={handleUpload}>Analyze Resume</button>

        {file && (
          <p style={{ marginTop: "10px" }}>
            Selected: {file.name}
          </p>
        )}

        <div style={{ marginTop: "30px" }}>
          <h3>Analysis Result</h3>
          <p>Score: --</p>
          <p>Suggestions will appear here...</p>
        </div>
      </div>
    </>
  );
}

export default Home;


