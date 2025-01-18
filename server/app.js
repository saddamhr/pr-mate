import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import textRoutes from "./routes/textRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import logger from "./utils/logger.js";
import config from "./config/config.js";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", textRoutes);

// Global Error Handler
app.use(errorHandler);

// Start Server
app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
