import React, { useState } from "react";

const RandomQuote = () => {
  // Define an array of quotes
  const quotes = [
    "The best way to predict the future is to create it.",
    "Life is what happens when you're busy making other plans.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there."
  ];

  // State to hold the current random quote
  const [quote, setQuote] = useState(quotes[0]);

  // Function to generate a new random quote
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h2>Random Quote Generator</h2>
      <p>{quote}</p>
      <button onClick={generateRandomQuote}>Get New Quote</button>
    </div>
  );
};

export default RandomQuote;
