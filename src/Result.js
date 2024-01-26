export default function Result({ bill, onBill, parc, handleBill, sum, onSum }) {
  return (
    <div>
      <h1>
        you pay €{bill + sum} (€{bill}+€{sum})
      </h1>

      <button>Reset</button>
    </div>
  );
}
