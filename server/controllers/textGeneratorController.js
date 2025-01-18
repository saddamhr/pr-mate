import { generateText } from "../models/textGenerator.js";

/**
 * Handle text generation requests.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>}
 */
export const generateTextHandler = async (req, res) => {
  const { title } = req.body;

  try {
    const result = await generateText(title);
    res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
