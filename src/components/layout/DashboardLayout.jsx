import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function DashboardLayout({ children, sidebar }) {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          <aside className="space-y-4">{sidebar}</aside>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function DashboardPageHeader({ title, subtitle, actions }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-navy">{title}</h1>
        {subtitle && <p className="text-muted mt-1">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}

export function SidebarNav({ items, activeId }) {
  return (
    <nav className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      <ul>
        {items.map((item) => {
          const isActive = item.id === activeId;
          const content = (
            <>
              {item.icon && <item.icon className="w-5 h-5 shrink-0" />}
              <span className="flex-1">{item.label}</span>
              {item.badge != null && (
                <span className="bg-primary-light text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </>
          );

          const className = `flex items-center gap-3 px-4 py-3.5 text-sm font-medium transition-colors border-l-[3px] ${
            isActive
              ? "bg-primary-light text-primary border-primary"
              : item.danger
                ? "text-danger border-transparent hover:bg-red-50"
                : "text-navy-light border-transparent hover:bg-surface"
          }`;

          return (
            <li key={item.id}>
              {item.to ? (
                <Link to={item.to} className={className}>{content}</Link>
              ) : (
                <button className={`w-full ${className}`}>{content}</button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
