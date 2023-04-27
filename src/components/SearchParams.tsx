import React, { useState } from "react";
import { searchMovies, MovieResult } from "../services/new-api-client";

const SearchParams: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<MovieResult[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    const response = await searchMovies(query);
    setResults(response.results);
  };

  return (
    <div>
      <div>
        <input type="text" value={query} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchParams;
