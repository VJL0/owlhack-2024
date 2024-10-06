"use server";

import { INSTRUCTIONS } from "@/db";

export async function createChatMessage(message) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          INSTRUCTIONS,
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);
    return "Error fetching data from OpenAI: " + error.message;
  }
}
