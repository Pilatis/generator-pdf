import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4710/api/data');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="App">
      <div className="bg-white p-8">
        <div className="qr-code"></div>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre> // Mostra os dados em formato JSON legível
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>
    </div>
  )
}

export default App
