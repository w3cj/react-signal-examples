import { Signal, $ } from "use-signals";

const signals = {
  name: new Signal.State("name not set"),
  inputValue: new Signal.State(""),
};

function Greeting({ name }: { name: Signal.State<string> }) {
  console.log("Greeting render", Date.now());
  return <p>Hello, <strong>{$(name)}!</strong></p>;
}


function App() {
  console.log("App render", Date.now());

  return (
    <div>
      <h1>With use-signals</h1>
      <label>
        Enter your name:
        <input
          value={$(signals.inputValue)}
          onChange={(e) => signals.inputValue.set(e.target.value)}
        />
        <button
          onClick={() => {
            signals.name.set(signals.inputValue.get());
          }}
        >
          Set Name
        </button>
      </label>
      <Greeting name={signals.name} />
    </div>
  );
}

export default App;
