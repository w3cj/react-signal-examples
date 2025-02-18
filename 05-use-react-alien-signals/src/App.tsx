// import { useState } from "react";
import { createSignal, useSignal } from "react-alien-signals";

const inputValueSignal = createSignal("");
const nameSignal = createSignal("");

function Greeting({ name }: { name: string }) {
  console.log("Greeting render", Date.now());
  return (
    <p>Hello, {name ? <strong>{name}!</strong> : <em>name not set...</em>}</p>
  );
}

function App() {
  console.log("App render", Date.now());
  const [inputValue, setInputValue] = useSignal(inputValueSignal);
  const [name, setName] = useSignal(nameSignal);

  return (
    <div>
      <h1>With <a href="https://github.com/Rajaniraiyn/react-alien-signals">react-alien-signals</a></h1>
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
