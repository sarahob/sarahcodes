export default function NerdBadge({ children }: { children?: React.ReactNode }) {
  return <span className="nerd-badge">🛠️ {children ?? "I build for fun"}</span>;
}
