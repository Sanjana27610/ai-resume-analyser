function ResultCard() {
  return (
    <div
      style={{
        width: "80%",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>AI Resume Analysis</h2>

      <p><strong>Resume Score:</strong> --/100</p>

      <p><strong>ATS Score:</strong> --/100</p>

      <h3>Strengths</h3>
      <ul>
        <li>Your strengths will appear here.</li>
      </ul>

      <h3>Weaknesses</h3>
      <ul>
        <li>Your weaknesses will appear here.</li>
      </ul>

      <h3>AI Suggestions</h3>
      <ul>
        <li>Suggestions will appear here.</li>
      </ul>
    </div>
  );
}

export default ResultCard;