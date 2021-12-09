import React, { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [result1, setResult1] = useState(null);
  const text = "Codewars is a great place to find a great code";

  useEffect(() => {
    // \b means word boundary
    // then negative lookahead (war|code)\b : 
    // does not match substring if it is war or code
    // and ends with \b
    // then match \w+ (word characters)
    // with another word boundary
    setResult1(text.match(/\b(?!(war|code)\b)\w+\b/gi).map(e => e+", "));
  }, []);

  return (
    <div className="App">
      <div className="box">
        <p>Write a regex pattern that will match any word except code and war, but still match words that are formed with them (e.g., codewars, barcode, beware, warfare, warm). This also means you can match codecode or warwar.</p>
        <p>{`text.match(/\b(?!(war|code)\b)\w+\b/gi`}</p>
        <h3>Text</h3>
        <p>{text}</p>

        <h3>Result</h3>
        <p>{result1}</p>
      </div>
    </div>
  );
}

export default App;