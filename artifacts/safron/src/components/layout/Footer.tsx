import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold tracking-tight">
                Safron<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed text-sm">
              The trusted partner for enterprises undertaking complex digital transformation. Precise, strategic, and outcome-driven.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-white">Expertise</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/#capabilities" className="hover:text-primary transition-colors">SAP Transformation</Link></li>
              <li><Link href="/#capabilities" className="hover:text-primary transition-colors">Enterprise AI</Link></li>
              <li><Link href="/#capabilities" className="hover:text-primary transition-colors">Sustainable Innovation</Link></li>
              <li><Link href="/#capabilities" className="hover:text-primary transition-colors">Data & Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Safron</Link></li>
              <li><Link href="/insights" className="hover:text-primary transition-colors">Insights & Research</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Safron Enterprise Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Insights</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
