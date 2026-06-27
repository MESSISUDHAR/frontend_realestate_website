import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-purple-600 px-8 py-12 md:px-16 md:py-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-white/80 text-sm mb-2">Are you a property owner or agent?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                List Your Property for Free
              </h2>
              <p className="text-white/80 leading-relaxed">
                Reach 5 lakh+ genuine buyers and tenants. Get verified leads, manage inquiries, and close deals faster.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/listings">
                <Button variant="white" size="lg" className="w-full sm:w-auto">Post for Free</Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto border border-white/40 text-white hover:bg-white/10">
                  Agent Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
