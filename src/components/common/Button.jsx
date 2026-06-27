const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-sm",
  secondary: "bg-white text-primary border border-primary hover:bg-primary-light",
  outline: "bg-white text-navy-light border border-border hover:bg-surface",
  ghost: "bg-transparent text-muted hover:bg-surface hover:text-navy-light",
  white: "bg-white text-primary hover:bg-gray-50 shadow-sm",
  danger: "bg-transparent text-danger hover:bg-red-50",
  icon: "bg-primary-light text-primary hover:bg-blue-100 p-2.5",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const responsiveWidth = variant === "icon" ? "" : "w-full sm:w-auto";

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-w-0 max-w-full ${responsiveWidth} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
