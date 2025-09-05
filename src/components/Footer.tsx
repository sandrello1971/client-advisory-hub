import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, Shield, FileText, Calendar } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/a6805bc3-edfd-4096-ac4f-5abc8eb27326.png" 
              alt="Finanza & Futuro Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Consulenza patrimoniale fee-only per dirigenti, imprenditori e famiglie HNWI. 
              Indipendenza, trasparenza, discrezione.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Servizi</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="/consulenza-fee-only" className="hover:text-accent transition-colors">Consulenza Fee-Only</a></li>
              <li><a href="/advisory-post-exit" className="hover:text-accent transition-colors">Advisory Post-Exit</a></li>
              <li><a href="/wealth-management" className="hover:text-accent transition-colors">Wealth Management Discreto</a></li>
              <li><a href="/family-governance" className="hover:text-accent transition-colors">Family Governance</a></li>
            </ul>
          </div>

          {/* Target Segments */}
          <div>
            <h4 className="font-heading font-bold mb-4">Per Chi</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="/dirigenti" className="hover:text-accent transition-colors">Dirigenti & Professionisti</a></li>
              <li><a href="/post-exit" className="hover:text-accent transition-colors">Imprenditori Post-Exit</a></li>
              <li><a href="/famiglie-hnwi" className="hover:text-accent transition-colors">Famiglie HNWI</a></li>
              <li><a href="/case-study" className="hover:text-accent transition-colors">Case Study</a></li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Risorse</h4>
            <ul className="space-y-3 text-primary-foreground/80 mb-6">
              <li><a href="/blog" className="hover:text-accent transition-colors">Blog & Approfondimenti</a></li>
              <li><a href="/guide" className="hover:text-accent transition-colors">Guide Gratuite</a></li>
              <li><a href="/faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="/chi-siamo" className="hover:text-accent transition-colors">Chi Siamo</a></li>
            </ul>

            {/* Quick Contact */}
            <div className="space-y-3">
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full justify-start"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Prenota Call
              </Button>
              <div className="flex items-center text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mr-2" />
                <span>+39 02 1234 5678</span>
              </div>
              <div className="flex items-center text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@wealthguard.it</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} Tutti i diritti riservati.
            </div>

            {/* Compliance Links */}
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/60">
              <a href="/privacy" className="hover:text-accent transition-colors flex items-center">
                <Shield className="h-3 w-3 mr-1" />
                Privacy Policy
              </a>
              <a href="/disclaimer" className="hover:text-accent transition-colors flex items-center">
                <FileText className="h-3 w-3 mr-1" />
                Disclaimer
              </a>
              <a href="/cookie" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>

            {/* Regulatory Notice */}
            <div className="text-xs text-primary-foreground/50 max-w-md text-center lg:text-right">
              Consulenza finanziaria indipendente fee-only. 
              Non distribuiamo prodotti di investimento.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;