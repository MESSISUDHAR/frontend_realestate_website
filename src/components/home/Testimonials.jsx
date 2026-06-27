import { Star } from "lucide-react";
import Avatar from "../common/Avatar";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-medium mb-1">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">What Our Users Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl border border-border p-6 shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="pt-4 border-t border-border flex items-center gap-3">
                <Avatar initial={t.initial} color={t.color} size="md" />
                <div>
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
