import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/') // Backend se data fetch kar raha hai
      .then(response => {
        console.log(response.data); // Debugging ke liye
        setData(response.data.message);
      })
      .catch(error => {
        console.error("Error fetching data!", error);
      });
  }, []);

  return (
    <div>
      <h1>🔥 Welcome to My Digital Marketing Tools Website 🔥</h1>
      <p>Backend Response: {data}</p>
    </div>
  );
}

export default App;
