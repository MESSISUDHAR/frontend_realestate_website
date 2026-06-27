export default function Input({ label, icon: Icon, className = "", ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-navy-light mb-1.5">{label}</label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
        )}
        <input
          className={`w-full border border-border rounded-xl bg-white text-navy-light placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${Icon ? "pl-10 pr-4 py-3" : "px-4 py-3"}`}
          {...props}
        />
      </div>
    </div>
  );
}
