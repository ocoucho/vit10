import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    const res = await fetch('http://127.0.0.1:5000/api/quote');
    const data = await res.json();
    setQuote(data.quote);
  };

  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Quote of the Day</h1>
      <button 
        onClick={fetchQuote}
        style = {{
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '4px',
          backgroundColor: '#e3e3e3',
          border: '1px solid black',
          cursor: 'pointer',
        }}
      >
        Get Quote</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;