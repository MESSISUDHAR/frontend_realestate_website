import { Link } from "react-router-dom";
import {
  LayoutDashboard, Home, PlusCircle, MessageSquare, Bell, Star, BadgeCheck,
  Eye, MessageCircle, Calendar, DollarSign,
} from "lucide-react";
import DashboardLayout, { DashboardPageHeader, SidebarNav } from "../components/layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import { AgentPerformanceChart } from "../components/dashboard/Charts";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { agents } from "../data/agents";

const agent = agents[0];

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard, to: "/agent-dashboard" },
  { id: "listings", label: "My Listings", icon: Home },
  { id: "add", label: "Add Property", icon: PlusCircle },
  { id: "inquiries", label: "Inquiries", icon: MessageSquare },
];

const recentInquiries = [
  { name: "Rahul Mehta", property: "Prestige Lakeside Habitat", time: "2 hours ago" },
  { name: "Sneha Kapoor", property: "Brigade Cornerstone Utopia", time: "5 hours ago" },
  { name: "Karthik Iyer", property: "Mantri Tranquil", time: "1 day ago" },
];

export default function AgentDashboard() {
  const sidebar = (
    <>
      <Card>
        <div className={`w-16 h-16 rounded-xl ${agent.color} flex items-center justify-center text-white text-2xl font-bold mb-4`}>
          {agent.initial}
        </div>
        <h2 className="font-bold text-navy text-lg">{agent.name}</h2>
        <p className="text-sm text-muted">{agent.title}</p>
        <p className="flex items-center gap-1 text-sm mt-1">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          {agent.rating} ({agent.reviews} reviews)
        </p>
        {agent.reraCertified && (
          <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-success bg-green-50 px-3 py-1 rounded-full">
            <BadgeCheck className="w-3.5 h-3.5" /> RERA Certified
          </span>
        )}
        <div className="grid grid-cols-2 gap-2 mt-5">
          {[
            { label: "Total Deals", value: agent.stats.deals },
            { label: "Active Listings", value: agent.stats.listings },
            { label: "Value Closed", value: agent.stats.valueClosed },
            { label: "Response Rate", value: agent.stats.responseRate },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface rounded-xl p-3">
              <p className="font-bold text-navy text-sm">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Card>
      <SidebarNav items={navItems} activeId="overview" />
    </>
  );

  return (
    <DashboardLayout sidebar={sidebar}>
      <DashboardPageHeader
        title="Agent Dashboard"
        subtitle={`Welcome back, ${agent.name}`}
        actions={
          <>
            <button className="p-2.5 rounded-xl bg-white border border-border hover:bg-surface">
              <Bell className="w-5 h-5 text-muted" />
            </button>
            <Button><PlusCircle className="w-4 h-4" /> Add Property</Button>
          </>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard icon={Eye} value="4,534" label="Total Views" trend="↑ +18% vs last month" trendUp iconBg="bg-blue-100" iconColor="text-primary" />
        <StatCard icon={MessageCircle} value="128" label="Inquiries" trend="↑ +12% vs last month" trendUp iconBg="bg-purple-100" iconColor="text-purple-600" />
        <StatCard icon={Calendar} value="24" label="Site Visits" trend="↑ +8% vs last month" trendUp iconBg="bg-green-100" iconColor="text-green-600" />
        <StatCard icon={DollarSign} value="₹12.4 Cr" label="Deals Closed" trend="↑ +22% vs last month" trendUp iconBg="bg-amber-100" iconColor="text-amber-600" />
      </div>

      <div className="mb-6">
        <AgentPerformanceChart />
      </div>

      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-navy">Recent Inquiries</h3>
          <Link to="#" className="text-sm text-primary font-medium hover:underline">View all</Link>
        </div>
        <div className="divide-y divide-border">
          {recentInquiries.map((inq) => (
            <div key={inq.name} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
              <div>
                <p className="font-medium text-navy">{inq.name}</p>
                <p className="text-sm text-muted">{inq.property}</p>
              </div>
              <span className="text-xs text-muted">{inq.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
}
