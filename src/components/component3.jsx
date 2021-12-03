import React, { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [result1, setResult1] = useState(null);
  const text = 'passs';

  useEffect(() => {
    /**
        - `^`        Start from the beginning of the string.
        - `[]`       Allow any character specified, including...
        - `a-z`      anything from a to z,
        - `0-9`      anything from 0 to 9,
        - `_`        and underscore.
        - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
        - `$`        End the string right after specified amount of allowed characters is given.
    */
      setResult1(/^[0-9a-z_]{4,16}$/.test(text).toString());
  }, []);

  return (
    <div className="App">
      <div className="box">
        <p>Write a simple regex to validate a username. Allowed characters are (lowercase letters, numbers, underscore)</p>
        <p>{`/^[0-9a-z_]{4,16}$/.test(text)`}</p>
        <h3>Text</h3>
        <p>{text}</p>

        <h3>Result</h3>
        <p>{result1}</p>
      </div>
    </div>
  );
}

export default App;