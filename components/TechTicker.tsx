export default function TechTicker({ items = [] }: { items?: string[] }) {
  const tickerItems = [...items, ...items];
  return (
    <div className="tech-ticker">
      <div className="track">
        {tickerItems.map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
    </div>
  );
}
