import React, { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [result1, setResult1] = useState(null);
  const text = "multiopticas.com monorepo.multi categoria";

  useEffect(() => {
    setResult1(text.match(/opti|co/));
  }, []);
console.log(result1)
  return (
    <div className="App">
      <div className="box">
        <p>Return all words that contain one of the following words (car, house, table)</p>
        <p>{``}</p>
        <h3>Text</h3>
        <p>{text}</p>

        <h3>Result</h3>
        <p>{result1}</p>
      </div>
    </div>
  );
}

export default App;