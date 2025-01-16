import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import generateText from "./models/textGenerator.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/generate", async (req, res) => {
  const { title } = req.body;
  try {
    const result = await generateText(title);
    res.json(result);
  } catch (error) {
    console.error("Error generating text:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
