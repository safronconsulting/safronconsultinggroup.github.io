import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Database, Globe, Layers, Cpu, ShieldCheck, Link } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Transforming Enterprises through SAP, AI & Sustainable Innovation" 
        description="Safron is the trusted partner for enterprises undertaking complex digital transformation. Precise, strategic, and outcome-driven."
      />
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-secondary">
          {/* Background Image overlay with dark gradient */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.png" 
              alt="Abstract digital enterprise network" 
              className="w-full h-full object-cover opacity-40 object-center mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Global Enterprise Consulting
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Transforming Enterprises through <span className="text-primary">SAP, AI & Sustainable Innovation</span>.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
                Safron is the trusted partner for global organizations undertaking complex digital transformation. Precise execution, strategic foresight, and outcome-driven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-none bg-primary text-secondary hover:bg-primary/90 h-14 px-8 text-base font-medium">
                  Explore Capabilities <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-none border-white text-white hover:bg-white/10 h-14 px-8 text-base font-medium bg-transparent">
                  Our Framework
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FRAMEWORK SECTION */}
        <section id="framework" className="py-24 bg-white relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">The Safron Framework</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">Architecture for Enduring Transformation</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  True enterprise transformation requires more than technical deployment. Our proprietary framework bridges the gap between ambitious corporate strategy and ground-level operational reality.
                </p>
                
                <div className="space-y-8">
                  {[
                    { title: "Strategic Alignment", desc: "Mapping technology investments directly to board-level objectives and sustainability metrics." },
                    { title: "Intelligent Core", desc: "Building a clean, modern SAP foundation enhanced by embedded artificial intelligence." },
                    { title: "Agile Innovation", desc: "Deploying decoupled extensions and data products that iterate faster than the core." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-none bg-secondary/5 text-secondary flex items-center justify-center font-bold text-lg border border-secondary/10">
                        0{i+1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-secondary mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-none overflow-hidden relative">
                  <img 
                    src="/images/framework.png" 
                    alt="Abstract strategic framework" 
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative frame */}
                  <div className="absolute inset-0 border border-primary/20 m-4 pointer-events-none mix-blend-multiply" />
                </div>
                {/* Accent block */}
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary -z-10 hidden md:block" />
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section id="capabilities" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Enterprise Capabilities</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Expertise at Global Scale</h3>
              <p className="text-gray-600">
                We deliver comprehensive services across the transformation lifecycle, from initial roadmap design through to managed innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Database className="w-8 h-8 text-primary" />, title: "SAP S/4HANA Transition", desc: "Greenfield implementations, strategic brownfield migrations, and clean-core architecture for the next era of ERP." },
                { icon: <Cpu className="w-8 h-8 text-primary" />, title: "Enterprise AI Integration", desc: "Operationalizing generative and predictive AI within secure enterprise boundaries to drive process automation." },
                { icon: <Globe className="w-8 h-8 text-primary" />, title: "Sustainable Innovation", desc: "Embedding ESG tracking, circular economy processes, and carbon accounting directly into operational systems." },
                { icon: <Layers className="w-8 h-8 text-primary" />, title: "Business Architecture", desc: "Redesigning operating models and organizational structures to fully leverage modern digital capabilities." },
                { icon: <BarChart3 className="w-8 h-8 text-primary" />, title: "Data Strategy", desc: "Establishing enterprise data fabrics that provide single-source-of-truth analytics across disparate business units." },
                { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "Managed Services", desc: "Continuous optimization and proactive management of complex SAP and data environments." }
              ].map((cap, i) => (
                <div key={i} className="bg-white p-8 border border-gray-100 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-6 p-4 bg-gray-50 inline-block group-hover:bg-primary/5 transition-colors">
                    {cap.icon}
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-3">{cap.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section id="industries" className="py-24 bg-secondary text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Industries</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Domain-Specific Precision</h3>
                <p className="text-gray-400">
                  Transformation strategies must respect the unique regulatory, competitive, and operational realities of your sector.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {[
                { name: "Banking & Financial Services", desc: "Core modernization, risk management, and digital customer experiences." },
                { name: "Insurance", desc: "Claims automation, policy administration systems, and actuarial analytics." },
                { name: "Retail", desc: "Omnichannel commerce, intelligent supply chain, and personalized loyalty." },
                { name: "Manufacturing", desc: "Industry 4.0, predictive maintenance, and sustainable shop floors." }
              ].map((industry, i) => (
                <div key={i} className="bg-secondary p-8 hover:bg-white/5 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                    <ArrowRight className="text-primary w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{industry.name}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SAFRON */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">The Safron Difference</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">Why Leading Enterprises Choose Us</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We reject the standard consulting playbook of generic frameworks and rotating teams. Our approach is distinguished by senior involvement, uncompromising precision, and guaranteed outcomes.
                </p>
                <Button asChild variant="outline" className="rounded-none border-secondary text-secondary hover:bg-secondary hover:text-white transition-all h-12 px-8">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { value: "01", title: "Uncompromising Quality", desc: "We deploy highly concentrated teams of senior experts rather than armies of juniors." },
                  { value: "02", title: "Outcome Assured", desc: "Our commercial models align our success directly with the realization of your business case." },
                  { value: "03", title: "Platform Agnostic", desc: "While we excel in SAP, our architectures ensure you are never locked into rigid, legacy paradigms." },
                  { value: "04", title: "Future-Proofed", desc: "Every architecture we design is evaluated against the 10-year horizon of AI and sustainability mandates." }
                ].map((diff, i) => (
                  <div key={i} className="border-l border-primary/30 pl-6 py-2">
                    <span className="block text-sm font-mono font-bold text-primary mb-2">{diff.value}</span>
                    <h4 className="text-lg font-bold text-secondary mb-2">{diff.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{diff.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS PREVIEW */}
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Latest Insights</h2>
                <h3 className="text-3xl font-bold text-secondary">Thought Leadership</h3>
              </div>
              <Button asChild variant="link" className="text-primary hover:text-secondary p-0">
                <Link href="/insights">View All Insights <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white border border-gray-100 group cursor-pointer">
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <div className="w-full h-full bg-secondary/5 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                      [ Insight Graphic ]
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">Research Report</div>
                    <h4 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors">The Future of Clean Core Architecture in the AI Era</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">Exploring how decoupling extensions allows enterprises to maintain a pristine ERP while rapidly innovating with generative AI.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="py-24 bg-secondary relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to initiate your transformation?</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a confidential executive briefing to discuss your organization's digital roadmap and SAP strategy.
            </p>
            <Button size="lg" asChild className="rounded-none bg-primary text-secondary hover:bg-white hover:text-secondary h-14 px-10 text-lg font-medium transition-colors">
              <a href="mailto:contact@safron-example.com">Contact Our Partners</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
