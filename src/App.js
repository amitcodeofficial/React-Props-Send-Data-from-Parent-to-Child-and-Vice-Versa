import React, { useState, useEffect } from 'react';
import './style.css';
import SnackBarU from './components/SnackBarU';

export default function App() {
  const [snack, setSnack] = useState(false);

  const g = (e) => {
    e.preventDefault();
    setSnack(true);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={(e) => g(e)}>Submit</button>
      <SnackBarU response="Hello" Status={snack} hello={snack => setSnack(snack)} />
    </div>
  );
}
