import { ArrowRight, Clock, BarChart3, Users, LayoutDashboard, Smartphone, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-8 border border-brand-border bg-white hover:border-brand-orange transition-all duration-300 group">
    <Icon className="text-brand-orange mb-6 group-hover:scale-110 transition-transform" size={32} />
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-brand-grey leading-relaxed">{desc}</p>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* 1. HERO SECTION [cite: 22] */}
      <section className="pt-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
          Revolutionizing campus <br />
          <span className="text-brand-orange">Food experience</span> [cite: 23]
        </h1>
        <p className="text-xl md:text-2xl text-brand-grey max-w-3xl mx-auto mb-10 leading-relaxed">
          ZORDR helps colleges streamline food ordering, reduce queues,
          and increase vendor revenue. [cite: 24]
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="w-full sm:w-auto bg-brand-orange text-white px-10 py-4 font-bold text-lg hover:bg-black transition-all">
            Book a Demo [cite: 26]
          </Link>
          <Link to="/product" className="group flex items-center gap-2 font-bold px-6 py-4 hover:text-brand-orange transition-colors">
            Explore Ecosystem <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /> [cite: 13, 108]
          </Link>
        </div>
      </section>

      {/* 2. LOGO CLOUD (Looping Motion) [cite: 36] 
      <section className="border-y border-brand-border py-12 bg-white overflow-hidden">
        <p className="text-center text-sm font-bold text-brand-grey uppercase tracking-widest mb-8">Trusted by partner colleges [cite: 7, 34]</p>
        <div className="flex justify-around items-center opacity-50 grayscale gap-12 px-6">
          {/* Placeholder for looping animation */}{/*
          <span className="text-2xl font-black">COLLEGE LOGO</span>
          <span className="text-2xl font-black">UNIVERSITY LOGO</span>
          <span className="text-2xl font-black">INSTITUTE LOGO</span>
          <span className="text-2xl font-black">ACADEMY LOGO</span>
        </div>
      </section>
      */}

      {/* 3. PROBLEM SECTION [cite: 27] */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's broken? [cite: 28]</h2>
          <p className="text-brand-grey text-lg">Current campus dining suffers from massive inefficiencies. [cite: 30]</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Clock}
            title="Long Queues"
            desc="Students waste 40% of their breaks simply standing in line."
          />
          <FeatureCard
            icon={Users}
            title="Manual Operations"
            desc="Vendors struggle with chaotic paper-based order management."
          />
          <FeatureCard
            icon={BarChart3}
            title="Zero Visibility"
            desc="Colleges have no data on vendor performance or student satisfaction."
          />
        </div>
      </section>

      {/* 4. PLATFORM OVERVIEW (3 Products) [cite: 61, 180] */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">The ZORDR Ecosystem [cite: 59, 108]</h2>
            <p className="text-brand-grey text-lg">A complete solution for all stakeholders. [cite: 189, 193]</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Student App [cite: 63] */}
            <div className="space-y-6">
              <Smartphone className="text-brand-orange" size={40} />
              <h3 className="text-2xl font-bold">Student App [cite: 64]</h3>
              <ul className="space-y-3 text-brand-grey">
                <li>• Browse digital menus [cite: 69]</li>
                <li>• Skip long queues [cite: 125]</li>
                <li>• Instant pickup alerts [cite: 71]</li>
              </ul>
            </div>

            {/* Vendor Dashboard [cite: 65] */}
            <div className="space-y-6">
              <LayoutDashboard className="text-brand-orange" size={40} />
              <h3 className="text-2xl font-bold">Vendor Dashboard [cite: 75]</h3>
              <ul className="space-y-3 text-brand-grey">
                <li>• Order preparation flow [cite: 78]</li>
                <li>• Digital menu management [cite: 120]</li>
                <li>• Live sales analytics [cite: 82]</li>
              </ul>
            </div>

            {/* Admin Panel [cite: 66] */}
            <div className="space-y-6">
              <Building2 className="text-brand-orange" size={40} />
              <h3 className="text-2xl font-bold">Campus Admin [cite: 84]</h3>
              <ul className="space-y-3 text-brand-grey">
                <li>• Operational control [cite: 47]</li>
                <li>• Vendor performance data [cite: 86]</li>
                <li>• Digitalization of campus [cite: 115]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA [cite: 55] */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-orange p-12 md:p-20 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to digitize your campus food?
          </h2>
          <Link to="/contact" className="inline-block bg-black text-white px-12 py-5 font-bold text-lg hover:scale-105 transition-transform">
            Book a Demo [cite: 57, 155]
          </Link>
        </div>
      </section>
    </div>
  );
}