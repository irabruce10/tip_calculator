export default function Result({ bill, parc, handleReset, sum }) {
  return (
    <div>
      <h1>
        you pay €{bill + sum} (€{bill}+€{sum})
      </h1>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
