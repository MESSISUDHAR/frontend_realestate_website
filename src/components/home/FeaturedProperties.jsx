import { Link } from "react-router-dom";
import SectionHeader from "../common/SectionHeader";
import PropertyCard from "../property/PropertyCard";
import { properties } from "../../data/properties";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Handpicked for you"
          title="Featured Properties"
          link="/listings"
          linkText="View all properties →"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
