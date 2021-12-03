import React, { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [result1, setResult1] = useState(null);
  const text = "GolDeNSanDyWateRyBeaChSuNN";

  useEffect(() => {
      setResult1((text.match(/sand|water|fish|sun/ig) || []).length);
      //setResult1(text.split(/sand|water|fish|sun/gi).length - 1);
  }, []);

  return (
    <div className="App">
      <div className="box">
        <p>Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).</p>
        <p>{`(beach.match(/sand|water|fish|sun/ig) || []).length`}</p>
        <h3>Text</h3>
        <p>{text}</p>

        <h3>Result</h3>
        <p>{result1}</p>
      </div>
    </div>
  );
}

export default App;