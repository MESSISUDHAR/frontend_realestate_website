import {
  LayoutDashboard, Users, Building2, UserCog, BarChart3, Settings, Bell, Download,
  Shield, Home, IndianRupee, AlertTriangle,
} from "lucide-react";
import DashboardLayout, { DashboardPageHeader, SidebarNav } from "../components/layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import { PlatformGrowthChart } from "../components/dashboard/Charts";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Avatar from "../components/common/Avatar";

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard, to: "/admin-dashboard" },
  { id: "users", label: "User Management", icon: Users },
  { id: "properties", label: "Properties", icon: Building2 },
  { id: "agents", label: "Agents", icon: UserCog },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Platform Settings", icon: Settings },
];

export default function AdminDashboard() {
  const sidebar = (
    <>
      <Card>
        <div className="flex items-center gap-3">
          <Avatar initial="A" color="bg-orange-500" size="lg" />
          <div>
            <p className="font-bold text-navy">Super Admin</p>
            <p className="text-sm text-muted">admin@nesthub.in</p>
          </div>
        </div>
      </Card>
      <SidebarNav items={navItems} activeId="overview" />
    </>
  );

  return (
    <DashboardLayout sidebar={sidebar}>
      <DashboardPageHeader
        title="Admin Dashboard"
        subtitle="NestHub Platform Administration"
        actions={
          <>
            <button className="p-2.5 rounded-xl bg-white border border-border hover:bg-surface">
              <Bell className="w-5 h-5 text-muted" />
            </button>
            <Button variant="outline"><Download className="w-4 h-4" /> Export Report</Button>
          </>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <StatCard icon={Users} value="12.4L" label="Total Users" sublabel="Active this month" trend="+8.2%" trendUp iconBg="bg-blue-100" iconColor="text-primary" />
        <StatCard icon={IndianRupee} value="₹842 Cr" label="GMV (Jun)" sublabel="Gross merchandise value" trend="+15.4%" trendUp iconBg="bg-green-100" iconColor="text-green-600" />
        <StatCard icon={Building2} value="18,342" label="Active Listings" sublabel="Verified properties" trend="+6.1%" trendUp iconBg="bg-purple-100" iconColor="text-purple-600" />
        <StatCard icon={Shield} value="2,847" label="RERA Verified" sublabel="Compliance approved" trend="+4.3%" trendUp iconBg="bg-emerald-100" iconColor="text-emerald-600" />
        <StatCard icon={Home} value="4,521" label="Deals Closed" sublabel="This quarter" trend="+22%" trendUp iconBg="bg-amber-100" iconColor="text-amber-600" />
        <StatCard icon={AlertTriangle} value="142" label="Pending Reviews" sublabel="Requires action" trend="-22%" trendUp={false} iconBg="bg-red-100" iconColor="text-danger" />
      </div>

      <PlatformGrowthChart />
    </DashboardLayout>
  );
}
