import axios, { AxiosResponse } from "axios";

export interface MovieResult {
  id: number;
  title: string;
  // Add any other properties you need here
};

interface ApiResponse {
  results: MovieResult[];
  // Add any other properties you need here
};

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c19fe0195a141b5cb0aca869dd69bd9b",
  },
});

export const searchMovies = async (query: string): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await apiClient.get(
    "/search/movie",
    {
      params: {
        query,
      },
    }
  );
  return response.data;
};

