import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="About Safron" 
        description="Learn about Safron, a premier enterprise consulting firm focused on SAP, AI, and sustainable innovation."
      />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">About Safron</h1>
          
          <div className="prose prose-lg max-w-none prose-headings:text-secondary prose-p:text-gray-600">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Safron is a global enterprise consulting firm specializing in complex digital transformations. We partner with the world's leading organizations to deploy modern architectures anchored in SAP, augmented by artificial intelligence, and driven by sustainable innovation.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
            <p>
              To architect and deliver technology foundations that enable global enterprises to operate with unprecedented agility, foresight, and responsibility.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Leadership & Expertise</h2>
            <p>
              Our firm was founded by former technology executives and managing partners from top-tier global consultancies who believed enterprise transformation required a more precise, senior-led approach. Today, we deploy concentrated teams of domain experts to solve the most intractable architectural challenges.
            </p>
            
            <div className="my-16 p-8 bg-gray-50 border-l-4 border-primary">
              <p className="text-lg font-medium text-secondary italic m-0">
                "We do not believe in transformation for transformation's sake. Every technical decision must trace directly back to a measurable business outcome or a tangible sustainability goal."
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Global Presence</h2>
            <p>
              Operating globally, our partners and architects support multi-national deployments across North America, Europe, and Asia-Pacific.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
