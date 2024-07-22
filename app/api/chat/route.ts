import { ollama } from "ollama-ai-provider";
import { streamText } from "ai";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = await streamText({
    model: ollama("gemma2"),
    messages,
  });

  return result.toAIStreamResponse();
}