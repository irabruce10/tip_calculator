import "./App.css";
import Bill from "./Bill";
import Result from "./Result";
import Service from "./Service";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [parc, setParc] = useState(0);
  const [sum, setSum] = useState(0);

  function handleBill() {
    setSum = bill + parc;
  }

  return (
    <div>
      <Bill bill={bill} onBill={setBill} handleBill={handleBill} />

      <Service parc={parc} onParc={setParc} handleBill={handleBill} />

      <Result
        bill={bill}
        onBill={setBill}
        parc={parc}
        handleBill={handleBill}
        sum={sum}
        onSum={setSum}
      />
    </div>
  );
}

export default App;
