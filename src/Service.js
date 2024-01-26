export default function Service({ parc, onParc, children }) {
  return (
    <div>
      <span>{children} </span>
      <select value={parc} onChange={(e) => onParc(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={10}>It was Okay (5%)</option>
        <option value={15}>It was Good (10%)</option>
        <option value={15}>It was Super (15%)</option>
        <option value={20}>Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}
