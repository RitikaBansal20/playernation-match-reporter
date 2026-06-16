import axios from "axios";

const GROQ_API_KEY =process.env.EXPO_PUBLIC_GROQ_API_KEY;
console.log(
  "GROQ KEY:",
  process.env.EXPO_PUBLIC_GROQ_API_KEY
);

export async function generateAIReport(
  prompt: string
) {
  const response =
    await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model:
          "llama-3.1-8b-instant",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
      }
    );

  return response.data.choices[0]
    .message.content;
}