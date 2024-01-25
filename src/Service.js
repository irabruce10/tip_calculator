export default function Service({ parc, onParc }) {
  let a = [0, 3];
  return (
    <div>
      <span>How did u like the Service </span>
      <select value={parc} onChange={(e) => onParc(e.target.value)}>
        <option value={0}>0</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
}
