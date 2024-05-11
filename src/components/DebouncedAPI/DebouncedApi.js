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

// import React, { useState, useEffect } from 'react';

// function DebouncedSearch() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);

//     // Function to fetch posts from JSONPlaceholder API
//     async function fetchPosts(query) {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`);
//         const data = await response.json();
//         return data;
//     }

//     // Debounce function
//     function debounce(func, delay) {
//         let timeoutId;
//         return function() {
//             const context = this;
//             const args = arguments;
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(context, args);
//             }, delay);
//         };
//     }

//     // Function to handle user input and debounce fetching of posts
//     const debouncedFetch = debounce(async (query) => {
//         const posts = await fetchPosts(query);
//         setSearchResults(posts);
//     }, 300);

//     // Event handler for input change
//     const handleInputChange = (event) => {
//         const query = event.target.value.trim();
//         setSearchTerm(query);
//     };

//     // Effect to trigger debounced fetch when searchTerm changes
//     useEffect(() => {
//         if (searchTerm !== '') {
//             debouncedFetch(searchTerm);
//         } else {
//             setSearchResults([]);
//         }
//     }, [searchTerm, debouncedFetch]);

//     // Render function
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search posts..."
//                 value={searchTerm}
//                 onChange={handleInputChange}
//             />
//             <div>
//                 {searchResults.map(post => (
//                     <div key={post.id}>{post.title}</div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default DebouncedSearch;
