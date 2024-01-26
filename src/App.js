import "./App.css";
import Bill from "./Bill";
import Result from "./Result";
import Service from "./Service";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [parc, setParc] = useState(0);
  const [parc1, setParc1] = useState(0);

  const sum = bill * [(parc + parc1) / 2 / 100];

  return (
    <div>
      <Bill bill={bill} onBill={setBill} />

      <Service parc={parc} onParc={setParc}>
        how did u get the bill?
      </Service>
      <Service parc={parc1} onParc={setParc1}>
        how did your friend like the Service?
      </Service>

      <Result bill={bill} parc={parc} sum={sum} />
    </div>
  );
}

export default App;
