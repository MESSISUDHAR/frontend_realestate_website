export default function SectionHeader({ subtitle, title, link, linkText, className = "" }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 ${className}`}>
      <div>
        {subtitle && (
          <p className="text-primary text-sm font-medium mb-1">{subtitle}</p>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-navy">{title}</h2>
      </div>
      {link && (
        <a href={link} className="text-primary font-medium text-sm hover:underline whitespace-nowrap">
          {linkText || "View all →"}
        </a>
      )}
    </div>
  );
}
