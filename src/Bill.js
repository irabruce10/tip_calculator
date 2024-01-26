export default function Bill({ bill, onBill }) {
  return (
    <div>
      <span>How much the Bill </span>
      <input
        value={bill}
        onChange={(e) => onBill(+e.target.value)}
        placeholder="The Bill....................................."
      />
    </div>
  );
}
