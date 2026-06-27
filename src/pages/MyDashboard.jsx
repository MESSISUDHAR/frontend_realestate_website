import { Link } from "react-router-dom";
import {
  Heart, Search, Calendar, Settings, Bell, LogOut, BadgeCheck, Camera,
} from "lucide-react";
import DashboardLayout, { DashboardPageHeader, SidebarNav } from "../components/layout/DashboardLayout";
import PropertyCard from "../components/property/PropertyCard";
import Card from "../components/common/Card";
import { properties } from "../data/properties";

const savedProperties = properties.filter((p) => p.savedDate);

const navItems = [
  { id: "saved", label: "Saved Properties", icon: Heart, badge: 3, to: "/dashboard" },
  { id: "searches", label: "Saved Searches", icon: Search, badge: 3 },
  { id: "appointments", label: "Appointments", icon: Calendar, badge: 2 },
  { id: "settings", label: "Profile Settings", icon: Settings },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "logout", label: "Sign Out", icon: LogOut, danger: true, to: "/login" },
];

export default function MyDashboard() {
  const sidebar = (
    <>
      <Card>
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-primary flex items-center justify-center text-white text-2xl font-bold mx-auto">
              AR
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-border rounded-full flex items-center justify-center shadow-sm">
              <Camera className="w-3.5 h-3.5 text-muted" />
            </button>
          </div>
          <h2 className="font-bold text-navy text-lg">Arjun Reddy</h2>
          <p className="text-sm text-muted">arjun.r@email.com</p>
          <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-success bg-green-50 px-3 py-1 rounded-full">
            <BadgeCheck className="w-3.5 h-3.5" /> Verified Account
          </span>
          <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-border">
            {[
              { label: "Saved", value: "3" },
              { label: "Searches", value: "3" },
              { label: "Visits", value: "2" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-bold text-navy">{stat.value}</p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <SidebarNav items={navItems} activeId="saved" />
    </>
  );

  return (
    <DashboardLayout sidebar={sidebar}>
      <DashboardPageHeader
        title="Saved Properties"
        actions={
          <Link to="/listings" className="text-primary font-medium text-sm hover:underline">
            Browse more
          </Link>
        }
      />
      <div className="space-y-4">
        {savedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} layout="list" />
        ))}
      </div>
    </DashboardLayout>
  );
}
