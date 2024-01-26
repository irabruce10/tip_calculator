export default function Service({ parc, onParc, children }) {
  return (
    <div>
      <span>{children} </span>
      <select value={parc} onChange={(e) => onParc(+e.target.value)}>
        <option value={0}>0</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
}
