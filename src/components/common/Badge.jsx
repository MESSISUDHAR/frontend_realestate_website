const variants = {
  buy: "bg-blue-100 text-primary",
  rent: "bg-purple-100 text-purple-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-orange-100 text-orange-700",
  premium: "bg-amber-100 text-amber-700",
  default: "bg-surface text-muted border border-border",
  purple: "bg-purple-100 text-purple-700",
};

export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}
