import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, Sparkles, ShieldCheck, CircleDollarSign, Award } from "lucide-react";
import Button from "../common/Button";

const tabs = ["Buy", "Rent", "Commercial", "Land"];
const filterChips = ["2 BHK", "3 BHK", "Under ₹50L", "Ready to Move", "New Launch"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/listings?q=${encodeURIComponent(search || "Bengaluru")}`);
  };

  return (
    <section className="relative min-h-[520px] md:min-h-[600px] flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative flex-1 flex flex-col items-center justify-center px-4 pt-12 pb-32 md:pb-40 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-white text-sm font-medium">India&apos;s #1 Real Estate Platform</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
          Find Your <span className="gradient-text">Perfect Home</span>
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-xl mb-8">
          Explore 5 lakh+ verified properties across 500+ cities. Buy, rent, or invest with confidence.
        </p>

        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-2 md:p-3">
          <div className="flex border-b border-border mb-3 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? "text-primary border-primary"
                    : "text-muted border-transparent hover:text-navy"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 p-1">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by city, locality, or project name..."
                className="w-full pl-10 pr-4 py-3 bg-surface rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button type="submit" className="shrink-0">
              <Search className="w-4 h-4" />
              Search
            </Button>
          </form>

          <div className="flex flex-wrap gap-2 px-1 pt-3 pb-1">
            {filterChips.map((chip) => (
              <button
                key={chip}
                className="px-3 py-1.5 text-xs font-medium border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10">
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            RERA Verified
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <CircleDollarSign className="w-5 h-5 text-blue-400" />
            Zero Brokerage
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <Award className="w-5 h-5 text-amber-400" />
            Trusted by 12L+
          </div>
        </div>
      </div>
    </section>
  );
}
