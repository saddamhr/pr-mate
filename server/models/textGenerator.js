import ollama from "ollama";
import dotenv from "dotenv";

dotenv.config();

async function generateText(title) {
  try {
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

    const response = await ollama.chat({
      model: "llama3.2",
      messages: [{ role: "user", content: prompt }],
    });

    return response.message.content;
  } catch (error) {
    console.error("Error generating text:", error);
  }
}

export default generateText;
