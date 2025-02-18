import { useState } from "react";

function Greeting({ name }: { name: string }) {
  console.log("Greeting render", Date.now());
  return (
    <p>Hello, {name ? <strong>{name}!</strong> : <em>name not set...</em>}</p>
  );
}

function App() {
  console.log("App render", Date.now());
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <h1>With useState</h1>
      <label>
        Enter your name:
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            setName(inputValue);
          }}
        >
          Set Name
        </button>
      </label>
      <Greeting name={name} />
    </div>
  );
}

export default App;
