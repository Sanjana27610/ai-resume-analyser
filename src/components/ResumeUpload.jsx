import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleAnalyze = () => {
    if (!file) {
      alert("Please select a PDF resume first!");
      return;
    }

    alert(`Analyzing ${file.name}...`);
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white shadow-2xl rounded-2xl p-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        📄 Upload Your Resume
      </h2>

      <div className="border-2 border-dashed border-blue-500 rounded-xl p-10 text-center">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-5"
        />

        {file ? (
          <p className="text-green-600 font-semibold">
            ✅ {file.name}
          </p>
        ) : (
          <p className="text-gray-500">
            Drag & Drop your PDF or choose a file
          </p>
        )}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleAnalyze}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
        >
          🚀 Analyze Resume
        </button>
      </div>
    </div>
  );
}

export default ResumeUpload;