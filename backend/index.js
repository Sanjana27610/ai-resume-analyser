import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import pdfParse from "pdf-parse";

const app = express();

app.use(cors());

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdfParse(dataBuffer);

    fs.unlinkSync(req.file.path);

    res.json({
      message: "Resume uploaded successfully!",
      text: data.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error reading PDF",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});