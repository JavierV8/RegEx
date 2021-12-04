import React, { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [result1, setResult1] = useState(null);
  const text = "123456";

  useEffect(() => {
      setResult1((/^(\d{4}|\d{6})$/.test(text)).toString());
  }, []);

  return (
    <div className="App">
      <div className="box">
        <p>Return wheter if value contain exactly 4 digits or exactly 6 digits.</p>
        <p>{`/^(\d{4}|\d{6})$/.test(pin)`}</p>
        <h3>Text</h3>
        <p>{text}</p>

        <h3>Result</h3>
        <p>{result1}</p>
      </div>
    </div>
  );
}

export default App;