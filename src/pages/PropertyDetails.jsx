import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin, Bed, Bath, Maximize, Star, Phone, Heart, Share2,
  ShieldCheck, Calendar, Building, ChevronLeft,
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import Avatar from "../components/common/Avatar";
import Card from "../components/common/Card";
import { getPropertyById } from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = getPropertyById(id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Property not found</h1>
          <Link to="/listings"><Button>Browse Listings</Button></Link>
        </div>
      </MainLayout>
    );
  }

  const isRent = property.type === "rent";

  return (
    <MainLayout>
      <div className="bg-surface min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/listings" className="inline-flex items-center gap-1 text-sm text-primary font-medium mb-4 hover:underline">
            <ChevronLeft className="w-4 h-4" /> Back to listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <img
                  src={property.images[activeImage] || property.image}
                  alt={property.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                {property.images.length > 1 && (
                  <div className="flex gap-2 p-3 overflow-x-auto">
                    {property.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                          activeImage === i ? "border-primary" : "border-transparent"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Card>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant={isRent ? "rent" : "buy"}>{isRent ? "For Rent" : "For Buy"}</Badge>
                      {property.tags?.map((tag) => (
                        <Badge key={tag} variant="default">{tag}</Badge>
                      ))}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-navy">{property.title}</h1>
                    <p className="flex items-center gap-1 text-muted mt-2">
                      <MapPin className="w-4 h-4" /> {property.location}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2.5 rounded-xl border border-border hover:bg-surface"><Heart className="w-5 h-5" /></button>
                    <button className="p-2.5 rounded-xl border border-border hover:bg-surface"><Share2 className="w-5 h-5" /></button>
                  </div>
                </div>

                <p className="text-3xl font-bold text-primary mb-6">{property.price}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-surface rounded-xl mb-6">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-primary" />
                    <div><p className="font-semibold">{property.bhk}</p><p className="text-xs text-muted">Bedrooms</p></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-primary" />
                    <div><p className="font-semibold">{property.baths}</p><p className="text-xs text-muted">Bathrooms</p></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-primary" />
                    <div><p className="font-semibold">{property.area}</p><p className="text-xs text-muted">Area</p></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <div><p className="font-semibold">{property.rating}</p><p className="text-xs text-muted">Rating</p></div>
                  </div>
                </div>

                <h2 className="font-bold text-navy mb-3">Description</h2>
                <p className="text-muted leading-relaxed mb-6">{property.description}</p>

                <h2 className="font-bold text-navy mb-3">Amenities</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.amenities?.map((a) => (
                    <span key={a} className="px-3 py-1.5 bg-surface text-sm text-muted rounded-full">{a}</span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-surface rounded-xl">
                    <ShieldCheck className="w-5 h-5 text-success" />
                    <div><p className="text-sm font-medium">RERA Verified</p><p className="text-xs text-muted">Approved listing</p></div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-surface rounded-xl">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div><p className="text-sm font-medium">{property.possession}</p><p className="text-xs text-muted">Possession</p></div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-surface rounded-xl">
                    <Building className="w-5 h-5 text-primary" />
                    <div><p className="text-sm font-medium">{property.propertyType}</p><p className="text-xs text-muted">Property Type</p></div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="sticky top-24">
                <h3 className="font-bold text-navy mb-4">Contact Agent</h3>
                <div className="flex items-center gap-3 mb-6">
                  <Avatar initial={property.agent.initial} color={property.agent.color} size="lg" />
                  <div>
                    <p className="font-bold text-navy">{property.agent.name}</p>
                    <p className="text-sm text-muted">Property Advisor</p>
                    <p className="flex items-center gap-1 text-sm text-success mt-0.5">
                      <Star className="w-3.5 h-3.5 fill-current" /> 4.9 · 142 reviews
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full"><Phone className="w-4 h-4" /> Call Agent</Button>
                  <Button variant="outline" className="w-full">Schedule Visit</Button>
                  <Button variant="secondary" className="w-full">Send Inquiry</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
