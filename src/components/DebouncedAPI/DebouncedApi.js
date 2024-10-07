import { useEffect, useState } from "react";

const DebouncedApi = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };
  const debouncedFetch = debounce(query => {
    fetchPosts(query);
  }, 1000);

  useEffect(() => {
    if (searchTerm !== "") {
      debouncedFetch(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, debouncedFetch]);

  const fetchPosts = async query => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${query}`
      );
      const response = await data.json();
      setSearchResults(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSearhTerm = e => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="serch"
        value={searchTerm}
        onChange={handleSearhTerm}
      />
      {searchResults.map(post => (
        <div key={post.id}>
          <div>{post.title}</div>
        </div>
      ))}
    </div>
  );
};

export default DebouncedApi;
