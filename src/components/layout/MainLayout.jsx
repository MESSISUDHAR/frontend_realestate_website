import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children, showFooter = true }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}

export function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-primary flex items-center justify-center">
        <Building2 className="w-5 h-5 text-white" />
      </div>
      <span className={`text-xl font-bold ${light ? "text-white" : "text-navy"}`}>
        NestHub
      </span>
    </Link>
  );
}
