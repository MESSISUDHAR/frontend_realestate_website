import { TrendingUp, TrendingDown } from "lucide-react";
import Card from "../common/Card";

export default function StatCard({ icon: Icon, value, label, sublabel, trend, trendUp, iconBg = "bg-primary-light", iconColor = "text-primary" }) {
  return (
    <Card className="relative">
      {trend && (
        <div className={`absolute top-5 right-5 flex items-center gap-0.5 text-xs font-semibold ${trendUp ? "text-success" : "text-danger"}`}>
          {trendUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
          {trend}
        </div>
      )}
      <div className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-2xl md:text-3xl font-bold text-navy">{value}</p>
      <p className="font-medium text-navy-light mt-1">{label}</p>
      {sublabel && <p className="text-xs text-muted mt-1">{sublabel}</p>}
    </Card>
  );
}
