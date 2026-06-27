import { useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import Button from "../common/Button";

const propertyTypes = ["Apartment", "Villa", "Plot", "Commercial", "PG / Co-living"];
const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"];
const priceRanges = ["Under 50L", "50L-1CR", "1-2 Cr", "2Cr+"];
const possessionOptions = ["Ready to Move", "Within 1 Year", "1-2 Years", "2-3 Years", "3+ Years"];
const amenityOptions = [
  "Swimming Pool", "Gym", "Parking", "Clubhouse", "Power Backup",
  "Lift", "Garden", "Security", "Children Play Area", "EV Charging",
];

export default function FilterSidebar({ filters, onChange, onApply }) {
  const [showMore, setShowMore] = useState(false);

  const toggleArray = (key, value) => {
    const arr = filters[key] || [];
    const next = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
    onChange({ ...filters, [key]: next });
  };

  const setSingle = (key, value) => {
    onChange({ ...filters, [key]: filters[key] === value ? "" : value });
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-4 sm:p-5 sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-navy">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-navy mb-3">Property Type</h4>
          <div className="space-y-2">
            {propertyTypes.map((type) => (
              <label key={type} className="flex items-center gap-2 text-xs sm:text-sm text-muted cursor-pointer hover:text-navy transition-colors">
                <input
                  type="checkbox"
                  checked={(filters.propertyTypes || []).includes(type)}
                  onChange={() => toggleArray("propertyTypes", type)}
                  className="rounded border-border text-primary focus:ring-primary cursor-pointer"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-navy mb-3">BHK Type</h4>
          <div className="flex flex-wrap gap-2">
            {bhkOptions.map((bhk) => (
              <button
                key={bhk}
                onClick={() => toggleArray("bhk", bhk)}
                className={`px-2 sm:px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors hover:scale-105 active:scale-95 ${
                  (filters.bhk || []).includes(bhk)
                    ? "bg-primary-light border-primary text-primary shadow-sm"
                    : "border-border text-muted hover:border-primary hover:bg-surface"
                }`}
              >
                {bhk}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-navy mb-3">Price Range</h4>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <input
              type="text"
              placeholder="Min ₹"
              value={filters.minPrice || ""}
              onChange={(e) => onChange({ ...filters, minPrice: e.target.value })}
              className="px-2 sm:px-3 py-2 text-xs sm:text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
            <input
              type="text"
              placeholder="Max ₹"
              value={filters.maxPrice || ""}
              onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
              className="px-2 sm:px-3 py-2 text-xs sm:text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <button
                key={range}
                onClick={() => setSingle("priceRange", range)}
                className={`px-2 sm:px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors hover:scale-105 active:scale-95 ${
                  filters.priceRange === range
                    ? "bg-primary-light border-primary text-primary shadow-sm"
                    : "border-border text-muted hover:border-primary hover:bg-surface"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {showMore && (
          <>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-navy mb-3">Possession Status</h4>
              <div className="space-y-2">
                {possessionOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-xs sm:text-sm text-muted cursor-pointer hover:text-navy transition-colors">
                    <input
                      type="radio"
                      name="possession"
                      checked={filters.possession === opt}
                      onChange={() => setSingle("possession", opt)}
                      className="text-primary focus:ring-primary cursor-pointer"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-navy mb-3">Amenities</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {amenityOptions.map((a) => (
                  <label key={a} className="flex items-center gap-2 text-xs sm:text-sm text-muted cursor-pointer hover:text-navy transition-colors">
                    <input
                      type="checkbox"
                      checked={(filters.amenities || []).includes(a)}
                      onChange={() => toggleArray("amenities", a)}
                      className="rounded border-border text-primary focus:ring-primary cursor-pointer"
                    />
                    {a}
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2 text-xs sm:text-sm text-primary font-medium hover:text-primary-dark transition-colors w-full justify-center sm:justify-start"
        >
          <SlidersHorizontal className="w-4 h-4" />
          {showMore ? "Show less filters" : "More filters"}
        </button>

        <Button className="w-full active:scale-95 transition-transform" onClick={onApply}>Apply Filters</Button>
      </div>
    </div>
  );
}
