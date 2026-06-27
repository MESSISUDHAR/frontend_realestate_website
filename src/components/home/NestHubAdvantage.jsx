import { Shield, BarChart3, Users, Wallet } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { advantages } from "../../data/testimonials";

const iconMap = {
  shield: Shield,
  chart: BarChart3,
  users: Users,
  wallet: Wallet,
};

const iconColors = ["bg-blue-100 text-primary", "bg-purple-100 text-purple-600", "bg-green-100 text-green-600", "bg-amber-100 text-amber-600"];

export default function NestHubAdvantage() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader subtitle="Why choose us" title="The NestHub Advantage" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                <div className={`w-12 h-12 rounded-xl ${iconColors[i]} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
