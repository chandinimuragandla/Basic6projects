import React, { useState, useEffect } from 'react';

function DataFetchComponent() {
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')  
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);  
        setLoading(false);  
      })
      .catch((error) => {
        setError(error);  
        setLoading(false);
      });
  }, []);  

  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h2>Fetched Data:</h2>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>{item.title}</li>  
        ))}
      </ul>
    </div>
  );
}

export default DataFetchComponent;
