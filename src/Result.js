export default function Result({ bill, onBill, parc, handleBill, sum, onSum }) {
  return (
    <div>
      <h1>
        you pay {bill} and {parc} {sum} {onSum}
      </h1>
    </div>
  );
}
