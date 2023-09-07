import { OpenAI } from "langchain/llms/openai";
/* import dotenv from "dotenv";

dotenv.config(); */

const llm = new OpenAI({
  openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY, //process.env.VITE_OPENAI_API_KEY,
  temperature: 0.9
});

const result = await llm.predict("What is the name of our galaxy ?");
console.log(result);
