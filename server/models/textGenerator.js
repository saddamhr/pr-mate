import ollama from "ollama";
import config from "../config/config.js";

/**
 * Generate text based on a ticket title using Ollama API.
 * @param {string} title - The ticket title.
 * @returns {Promise<string>} - The generated text.
 * @throws {Error} - Throws an error if the generation fails.
 */
export const generateText = async (title) => {
  const prompt = `
    Generate the following based on the ticket title "${title}":
    1. A branch name (e.g., fix/login-issue).
    2. A detailed pull request description.
    3. A concise commit message.
  
    Example Output:
    - Branch Name: [branch name]
    - PR Description: [detailed description]
    - Commit Message: [commit message]
  `;

  try {
    const response = await ollama.chat({
      model: config.MODEL_NAME,
      messages: [{ role: "user", content: prompt }],
    });
    return response.message.content;
  } catch (error) {
    throw new Error("Error generating text: " + error.message);
  }
};
