import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Kutty AI Backend Running 🚀");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  // Temporary demo reply (we connect real AI next)
  res.json({
    reply: `You said: ${message}`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

