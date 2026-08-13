interface BadgeProps {
  text: string;
}
function Badge({ text }: BadgeProps) {
  return <span className="badge rounded-pill text-bg-primary">{text}</span>;
}

export default Badge;
