import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Card from "../common/Card";

const agentData = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 22 },
  { month: "Apr", value: 28 },
  { month: "May", value: 38 },
  { month: "Jun", value: 45 },
];

const adminData = [
  { month: "Jan", users: 42000, listings: 18000, deals: 8500 },
  { month: "Feb", users: 48000, listings: 21000, deals: 9200 },
  { month: "Mar", users: 55000, listings: 24000, deals: 10500 },
  { month: "Apr", users: 62000, listings: 28000, deals: 11800 },
  { month: "May", users: 72000, listings: 32000, deals: 13200 },
  { month: "Jun", users: 85000, listings: 38000, deals: 15000 },
];

export function AgentPerformanceChart() {
  return (
    <Card>
      <h3 className="font-bold text-navy text-lg mb-6">Performance Overview (2026)</h3>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={agentData}>
          <defs>
            <linearGradient id="agentGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#2563eb" fill="url(#agentGradient)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export function PlatformGrowthChart() {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h3 className="font-bold text-navy text-lg">Platform Growth (2026)</h3>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary" /> Users</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-600" /> Listings</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-success" /> Deals</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={adminData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip formatter={(v) => v.toLocaleString()} />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="listings" stroke="#7c3aed" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="deals" stroke="#10b981" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
