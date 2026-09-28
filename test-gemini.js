const { askGemini } = require("./src/utils/gemini");

async function testGemini() {
  console.log("Testing Gemini API connection...");
  try {
    const response = await askGemini("What is the capital of France? Answer in one word.");
    console.log("\nSuccess! Gemini replied:");
    console.log(response);
  } catch (error) {
    console.error("\nFailed to connect to Gemini API.");
    console.error("Error details:", error.message);
    if (error.message.includes("API_KEY_INVALID") || error.message.includes("key")) {
      console.log("\nMake sure you have replaced 'your_gemini_api_key' in your .env file with a real API key!");
    }
  }
  process.exit();
}

testGemini();
