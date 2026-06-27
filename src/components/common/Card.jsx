export default function Card({ children, className = "", padding = true }) {
  return (
    <div className={`bg-white rounded-2xl border border-border shadow-sm ${padding ? "p-5 md:p-6" : ""} ${className}`}>
      {children}
    </div>
  );
}
