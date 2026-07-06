import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO 
        title="Insights & Research" 
        description="Latest thought leadership, research, and insights on enterprise architecture, SAP, and artificial intelligence from Safron."
      />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Insights & Research</h1>
            <p className="text-lg text-gray-600">
              Thought leadership and architectural perspectives from our managing partners and principal engineers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Articles */}
            {[
              {
                category: "Whitepaper",
                title: "The Clean Core Imperative: Preparing SAP for GenAI",
                desc: "A comprehensive guide to decoupling custom code and preparing enterprise ERPs for the next generation of artificial intelligence.",
                date: "October 12, 2023"
              },
              {
                category: "Case Study",
                title: "Sustainable Manufacturing via Digital Twins",
                desc: "How a global automotive manufacturer reduced carbon intensity by 14% through real-time operational mirroring.",
                date: "September 28, 2023"
              },
              {
                category: "Perspective",
                title: "Beyond the Hype: Pragmatic AI in Financial Services",
                desc: "Cutting through the noise to identify the highest-ROI use cases for large language models in banking operations.",
                date: "September 15, 2023"
              },
              {
                category: "Research",
                title: "The Architecture of Resilience",
                desc: "Supply chain lessons learned and the technical foundations required to withstand global disruption.",
                date: "August 30, 2023"
              },
              {
                category: "Brief",
                title: "Data Fabric vs. Data Mesh",
                desc: "Navigating the modern data architecture landscape for disparate global enterprises.",
                date: "August 12, 2023"
              },
              {
                category: "Methodology",
                title: "Value-Driven Cloud Migration",
                desc: "Why lift-and-shift strategies fail, and how to redesign for cloud-native agility.",
                date: "July 22, 2023"
              }
            ].map((article, i) => (
              <article key={i} className="bg-white border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">{article.category}</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow text-sm leading-relaxed">
                  {article.desc}
                </p>
                <div className="flex items-center text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors px-8 py-4 text-sm font-bold tracking-wide uppercase">
              Load More Insights
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
