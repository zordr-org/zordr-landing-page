import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold text-foreground">ZORDR</span>
            <a
              href="mailto:info@zordr.in"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              info@zordr.in
            </a>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-2">
              About Zordr
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/zordr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZORDR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
