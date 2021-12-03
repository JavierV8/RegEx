import React, { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [result1, setResult1] = useState(null);
  const text = 'abraxxxasxd';

  useEffect(() => {
      setResult1(/^[^x]*xxx/.test(text).toString());
      //setResult1((text.substr(text.indexOf('x')+1,2) === 'xx').toString());
  }, []);

  return (
    <div className="App">
      <div className="box">
        <p>Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".</p>
        <p>{`/^[^x]*xxx/.test(text)`}</p>
        <h3>Text</h3>
        <p>{text}</p>

        <h3>Result</h3>
        <p>{result1}</p>
      </div>
    </div>
  );
}

export default App;