export default function Avatar({ initial, name, size = "md", color = "bg-purple-600", className = "" }) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
    xl: "w-20 h-20 text-2xl",
  };

  const display = initial || (name ? name.charAt(0).toUpperCase() : "?");

  return (
    <div
      className={`${sizes[size]} ${color} rounded-full flex items-center justify-center text-white font-semibold shrink-0 ${className}`}
      title={name}
    >
      {display}
    </div>
  );
}
