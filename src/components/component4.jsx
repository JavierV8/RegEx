import React, { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [result1, setResult1] = useState(null);
  const text = '2passs';

  useEffect(() => {
      setResult1(/^[123]/.test(text).toString());
  }, []);

  return (
    <div className="App">
      <div className="box">
        <p>check if the code begins with 1, 2, or 3</p>
        <p>{`/^[123]/.test(text)`}</p>
        <h3>Text</h3>
        <p>{text}</p>

        <h3>Result</h3>
        <p>{result1}</p>
      </div>
    </div>
  );
}

export default App;