import React, { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [result1, setResult1] = useState(null);
  const text = "This is Tucker. He would like a hug. 3/10 someone hug him";
  const rating = 11;

  useEffect(() => {
    setResult1(text.replace(/\d(?=\/)/, rating));
  }, []);
console.log(result1)
  return (
    <div className="App">
      <div className="box">
        <p>Replace first number to the one given "11"</p>
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