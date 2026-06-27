import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import TopAgents from "../components/home/TopAgents";
import NestHubAdvantage from "../components/home/NestHubAdvantage";
import Testimonials from "../components/home/Testimonials";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <FeaturedProperties />
      <TopAgents />
      <NestHubAdvantage />
      <Testimonials />
      <CTABanner />
    </MainLayout>
  );
}
