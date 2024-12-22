import React, { useState, useEffect } from 'react';
import { useData } from './hook/useData';
import Header from './components/Header';

function App() {
  const { data, getDataPdf } = useData();

  useEffect(() => {
    getDataPdf();
  }, [])

  return (
    <div className="App">
      <div className="bg-white p-8">
        <Header>
        <div className="qr-code"></div>
        </Header>
      </div>
    </div>
  )
}

export default App
