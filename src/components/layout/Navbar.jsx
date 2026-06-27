import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Heart,
  Bell,
  ChevronDown,
  LayoutDashboard,
  UserCog,
  Shield,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Button from "../common/Button";
import Avatar from "../common/Avatar";
import { Logo } from "./MainLayout";

const navLinks = [
  { name: "Buy", path: "/buy" },
  { name: "Rent", path: "/rent" },
  { name: "Commercial", path: "/commercial" },
  { name: "New Projects", path: "/new-projects" },
];

export default function Navbar() {
  const [userOpen, setUserOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1 text-xs md:text-sm font-medium transition-colors whitespace-nowrap pb-2 border-b-2 ${
                  isActive(link.path)
                    ? "text-primary border-primary"
                    : "text-muted hover:text-navy border-transparent hover:border-muted"
                }`}
              >
                {link.name}
                <ChevronDown className="w-4 h-4" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface text-navy transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:flex p-2 rounded-lg hover:bg-surface text-muted hover:text-navy transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex p-2 rounded-lg hover:bg-surface text-muted hover:text-navy transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full" />
            </button>

            <div className="relative hidden md:block" ref={dropdownRef}>
              <button
                onClick={() => setUserOpen(!userOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-surface transition-colors"
              >
                <Avatar initial="AR" size="sm" />
                <span className="text-sm font-medium text-navy-light hidden lg:inline">Arjun R.</span>
                <ChevronDown className="w-4 h-4 text-muted hidden lg:inline" />
              </button>

              {userOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-border py-2 z-50">
                  <div className="px-4 py-3 border-b border-border">
                    <p className="font-semibold text-navy">Arjun Reddy</p>
                    <p className="text-sm text-muted">arjun.r@email.com</p>
                  </div>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-light hover:bg-surface"
                    onClick={() => setUserOpen(false)}
                  >
                    <LayoutDashboard className="w-4 h-4" /> My Dashboard
                  </Link>
                  <Link
                    to="/agent-dashboard"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-light hover:bg-surface"
                    onClick={() => setUserOpen(false)}
                  >
                    <UserCog className="w-4 h-4" /> Agent Dashboard
                  </Link>
                  <Link
                    to="/admin-dashboard"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-light hover:bg-surface"
                    onClick={() => setUserOpen(false)}
                  >
                    <Shield className="w-4 h-4" /> Admin Panel
                  </Link>
                  <div className="border-t border-border mt-1 pt-1">
                    <Link
                      to="/login"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-danger hover:bg-red-50"
                      onClick={() => setUserOpen(false)}
                    >
                      <LogOut className="w-4 h-4" /> Sign out
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/listings" className="hidden sm:block">
              <Button size="sm">Post Property</Button>
            </Link>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3 bg-surface">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded transition-colors ${
                  isActive(link.path)
                    ? "bg-primary-light text-primary border-l-4 border-primary pl-3"
                    : "text-muted hover:text-navy hover:bg-white"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-border pt-3 mt-3">
              <Link 
                to="/dashboard" 
                className="block px-4 py-2 text-sm font-medium text-navy hover:bg-white rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                My Dashboard
              </Link>
              <Link 
                to="/login" 
                className="block px-4 py-2 text-sm text-danger hover:bg-red-50 rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Sign out
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
