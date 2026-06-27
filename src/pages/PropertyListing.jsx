import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { MapPin, Search, X, SlidersHorizontal, LayoutGrid, List, Map, ChevronDown, ChevronsUpDown } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import FilterSidebar from "../components/listing/FilterSidebar";
import PropertyCard from "../components/property/PropertyCard";
import Button from "../components/common/Button";
import { properties } from "../data/properties";

export default function PropertyListing() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "Bengaluru";

  const [location, setLocation] = useState(initialQuery);
  const [listingType, setListingType] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    propertyTypes: [],
    bhk: [],
    amenities: [],
    possession: "",
    priceRange: "",
    minPrice: "",
    maxPrice: "",
  });

  const filtered = useMemo(() => {
    let result = [...properties];

    if (listingType !== "all") {
      result = result.filter((p) => p.type === listingType);
    }

    if (filters.propertyTypes.length) {
      result = result.filter((p) => filters.propertyTypes.includes(p.propertyType));
    }

    if (filters.bhk.length) {
      result = result.filter((p) => filters.bhk.some((b) => p.bhk.includes(b.replace(" BHK", ""))));
    }

    if (filters.possession) {
      result = result.filter((p) => p.possession === filters.possession);
    }

    if (filters.amenities.length) {
      result = result.filter((p) =>
        filters.amenities.every((a) => p.amenities?.includes(a))
      );
    }

    if (sortBy === "price-low") result.sort((a, b) => a.priceValue - b.priceValue);
    else if (sortBy === "price-high") result.sort((a, b) => b.priceValue - a.priceValue);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [listingType, filters, sortBy]);

  return (
    <MainLayout>
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <div className="flex-1 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-surface rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {location && (
                  <button onClick={() => setLocation("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-navy">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <Button><Search className="w-4 h-4" /> Search</Button>
            </div>

            <div className="flex items-center gap-2">
              {["all", "buy", "rent"].map((type) => (
                <button
                  key={type}
                  onClick={() => setListingType(type)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl capitalize transition-colors ${
                    listingType === type ? "bg-primary-light text-primary" : "text-muted hover:bg-surface"
                  }`}
                >
                  {type === "all" ? "All" : type}
                </button>
              ))}
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
            <FilterSidebar filters={filters} onChange={setFilters} onApply={() => {}} />

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-xl font-bold text-navy">
                    {filtered.length} Properties in {location || "Bengaluru"}
                  </h1>
                  <p className="text-sm text-muted">Showing verified & RERA-approved listings</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none pl-3 pr-8 py-2 text-sm border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="latest">Latest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                  </div>
                  <div className="flex border border-border rounded-xl overflow-hidden">
                    {[
                      { mode: "grid", Icon: LayoutGrid },
                      { mode: "list", Icon: List },
                      { mode: "map", Icon: Map },
                    ].map(({ mode, Icon }) => (
                      <button
                        key={mode}
                        onClick={() => setViewMode(mode)}
                        className={`p-2 ${viewMode === mode ? "bg-primary-light text-primary" : "text-muted hover:bg-surface"}`}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {viewMode === "map" ? (
                <div className="bg-white rounded-2xl border border-border h-96 flex items-center justify-center text-muted">
                  Map view coming soon
                </div>
              ) : (
                <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" : "space-y-4"}>
                  {filtered.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      layout={viewMode === "list" ? "list" : "grid"}
                    />
                  ))}
                </div>
              )}

              <div className="flex justify-center mt-10">
                <Button variant="outline">
                  <ChevronsUpDown className="w-4 h-4" /> Load More Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
