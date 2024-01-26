export default function Result({ bill, parc, handleReset, sum }) {
  return (
    <div>
      <h1>
        you pay Total: €{bill + sum} (Bill:€{bill}+ Tip:€{sum})
      </h1>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
