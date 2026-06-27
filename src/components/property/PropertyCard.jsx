import { Link } from "react-router-dom";
import { MapPin, Phone, Star } from "lucide-react";
import Badge from "../common/Badge";
import Avatar from "../common/Avatar";
import Button from "../common/Button";

const tagVariant = {
  "New Launch": "success",
  Premium: "premium",
  "Ready to Move": "buy",
  Trending: "warning",
  "RERA Approved": "success",
  "Fully Furnished": "purple",
};

export default function PropertyCard({ property, layout = "grid" }) {
  const isRent = property.type === "rent";

  if (layout === "list") {
    return (
      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col sm:flex-row">
        <Link to={`/property/${property.id}`} className="sm:w-72 shrink-0">
          <img src={property.image} alt={property.title} className="w-full h-48 sm:h-full object-cover" />
        </Link>
        <div className="flex-1 p-5 relative">
          <button className="absolute top-4 right-4 p-1.5 text-muted hover:text-danger transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </button>
          <Badge variant={isRent ? "rent" : "buy"} className="mb-2">
            {isRent ? "For Rent" : "For Buy"}
          </Badge>
          <Link to={`/property/${property.id}`}>
            <h3 className="font-bold text-navy text-lg hover:text-primary transition-colors">{property.title}</h3>
          </Link>
          <p className="flex items-center gap-1 text-sm text-muted mt-1">
            <MapPin className="w-4 h-4" /> {property.location}
          </p>
          <p className="text-xl font-bold text-primary mt-2">{property.price}</p>
          <p className="text-sm text-muted mt-1">{property.bhk} · {property.area}</p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <Link to={`/property/${property.id}`} className="text-sm text-primary font-medium hover:underline">
              View details →
            </Link>
            <div className="flex items-center gap-3">
              {property.savedDate && (
                <span className="text-xs text-muted">Saved {property.savedDate}</span>
              )}
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4" /> Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
      <Link to={`/property/${property.id}`} className="block relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-52 object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {property.tags?.map((tag) => (
            <Badge key={tag} variant={tagVariant[tag] || "default"}>{tag}</Badge>
          ))}
        </div>
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50"
          onClick={(e) => e.preventDefault()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </button>
        <div className="absolute bottom-3 left-3">
          <Badge variant={isRent ? "rent" : "buy"}>{isRent ? "For Rent" : "For Buy"}</Badge>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/property/${property.id}`}>
            <h3 className="font-bold text-navy hover:text-primary transition-colors line-clamp-1">{property.title}</h3>
          </Link>
          <span className="flex items-center gap-0.5 text-sm text-success font-medium shrink-0">
            <Star className="w-4 h-4 fill-current" /> {property.rating}
          </span>
        </div>
        <p className="flex items-center gap-1 text-sm text-muted mt-1">
          <MapPin className="w-3.5 h-3.5" /> {property.location}
        </p>
        <p className="text-xl font-bold text-primary mt-2">{property.price}</p>
        <p className="text-sm text-muted mt-1">
          {property.bhk} · {property.baths} · {property.area}
        </p>
        {property.amenities && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {property.amenities.slice(0, 4).map((a) => (
              <span key={a} className="text-xs bg-surface text-muted px-2 py-0.5 rounded-full">{a}</span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Avatar initial={property.agent.initial} color={property.agent.color} size="sm" />
            <span className="text-sm font-medium">{property.agent.name}</span>
          </div>
          <Button variant="outline" size="sm">
            <Phone className="w-3.5 h-3.5" /> Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
