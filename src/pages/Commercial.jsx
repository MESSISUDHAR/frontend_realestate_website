import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import PropertyCard from "../components/property/PropertyCard";
import FilterSidebar from "../components/listing/FilterSidebar";
import { properties } from "../data/properties";

export default function CommercialProperties() {
  const [filters, setFilters] = useState({});

  const filteredProperties = properties.filter((prop) => {
    if (prop.type !== "Commercial") return false;
    if (filters.propertyTypes?.length && !filters.propertyTypes.includes(prop.type)) return false;
    if (filters.bhk?.length && !filters.bhk.includes(prop.bhk)) return false;
    if (filters.priceRange) {
      const ranges = { "Under 50L": [0, 5000000], "50L-1CR": [5000000, 10000000], "1-2 Cr": [10000000, 20000000], "2Cr+": [20000000, Infinity] };
      const [min, max] = ranges[filters.priceRange];
      if (prop.price < min || prop.price > max) return false;
    }
    if (filters.minPrice && prop.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && prop.price > parseInt(filters.maxPrice)) return false;
    return true;
  });

  return (
    <MainLayout>
      <div className="bg-surface min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-2">Commercial Properties</h1>
            <p className="text-muted">Explore commercial real estate opportunities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <FilterSidebar filters={filters} onChange={setFilters} />

            <div className="lg:col-span-3">
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredProperties.map((prop) => (
                    <PropertyCard key={prop.id} property={prop} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-border p-12 text-center">
                  <p className="text-muted text-lg">No commercial properties found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
