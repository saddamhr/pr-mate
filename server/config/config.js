import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 5001,
  MODEL_NAME: process.env.MODEL_NAME || "llama3.2",
};

export default config;
