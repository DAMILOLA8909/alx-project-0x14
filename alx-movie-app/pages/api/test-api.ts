import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Environment variables check:");
  console.log("MOVIE_API_KEY exists:", !!process.env.MOVIE_API_KEY);
  console.log("MOVIE_API_KEY starts with:", process.env.MOVIE_API_KEY?.substring(0, 10) + "...");
  
  return res.status(200).json({
    apiKeyExists: !!process.env.MOVIE_API_KEY,
    apiKeyLength: process.env.MOVIE_API_KEY?.length,
    message: process.env.MOVIE_API_KEY ? "API key loaded" : "No API key found",
    allEnvVars: Object.keys(process.env).filter(key => key.includes('MOVIE') || key.includes('API'))
  });
}