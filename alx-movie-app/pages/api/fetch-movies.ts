import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    try {
      console.log("API Key exists:", !!process.env.MOVIE_API_KEY)
      console.log("API Key length:", process.env.MOVIE_API_KEY?.length)
      
      const { year, page, genre } = request.body;
      const date = new Date();
      
      // Build the query parameters
      const queryParams = new URLSearchParams({
        year: year ? year.toString() : date.getFullYear().toString(),
        sort: 'year.decr',
        limit: '12',
        page: page ? page.toString() : '1',
      });
      
      if (genre && genre !== "All") {
        queryParams.append('genre', genre);
      }
      
      const url = `https://moviesdatabase.p.rapidapi.com/titles?${queryParams.toString()}`;
      
      console.log("Fetching from URL:", url);
      
      const resp = await fetch(url, {
        headers: {
          "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
          "x-rapidapi-key": process.env.MOVIE_API_KEY || '',
        },
      });

      console.log("RapidAPI Response Status:", resp.status);
      console.log("RapidAPI Response Headers:", Object.fromEntries(resp.headers.entries()));

      if (!resp.ok) {
        const errorText = await resp.text();
        console.error("RapidAPI Error Response:", errorText);
        throw new Error(`RapidAPI Error: ${resp.status} ${resp.statusText}`);
      }

      const moviesResponse = await resp.json();
      console.log("RapidAPI Success Response:", moviesResponse);
      
      const movies: MoviesProps[] = moviesResponse.results || [];

      return response.status(200).json({
        success: true,
        movies,
        total: moviesResponse.total || 0
      });
    } catch (error: any) {
      console.error("Error in fetch-movies API:", error);
      return response.status(500).json({ 
        success: false,
        error: error.message || "Internal server error",
        message: "Check your API key and network connection"
      });
    }
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).json({ 
      success: false,
      error: `Method ${request.method} Not Allowed` 
    });
  }
}