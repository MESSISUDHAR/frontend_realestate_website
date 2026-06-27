import { MapPin, Phone, Star } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import { agents } from "../../data/agents";

export default function TopAgents() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Connect with experts"
          title="Top Agents"
          link="#"
          linkText="View all agents →"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-2xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-xl ${agent.color} flex items-center justify-center text-white text-xl font-bold mb-4`}>
                {agent.initial}
              </div>
              <h3 className="font-bold text-navy">{agent.name}</h3>
              <p className="flex items-center gap-1 text-sm text-muted mt-1">
                <MapPin className="w-3.5 h-3.5" /> {agent.location}
              </p>
              <span className="inline-block mt-3 text-xs font-medium bg-primary-light text-primary px-3 py-1 rounded-full">
                {agent.tag}
              </span>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                <div>
                  <p className="font-bold text-navy">{agent.deals}</p>
                  <p className="text-xs text-muted">Deals</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-navy">{agent.rating}</span>
                  <span className="text-xs text-muted">Rating</span>
                </div>
                <Button variant="icon" size="sm" aria-label="Call agent">
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
