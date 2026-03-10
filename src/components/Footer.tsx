import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="space-y-2">
            <span className="text-lg font-black text-foreground">ZORDR</span>
            <p className="text-sm text-muted-foreground max-w-xs">
              The operating system for campus food and commerce.
            </p>
            <a href="mailto:info@zordr.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors block pt-1">
              info@zordr.in
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Platform</p>
              <div className="flex flex-col gap-2">
                <Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Product</Link>
                <Link to="/ecosystem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ecosystem</Link>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Company</p>
              <div className="flex flex-col gap-2">
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Follow</p>
              <a href="https://linkedin.com/company/zordr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Linkedin size={16} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZORDR. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;