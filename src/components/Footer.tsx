import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Logo and Description */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/2e907c99-d5a8-4581-9a3a-fb4421890d41.png" 
                alt="WealthGuard Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Consulenza patrimoniale fee-only per dirigenti, imprenditori post-exit e famiglie HNWI. 
              Trasparenza totale, competenza verificabile.
            </p>
            <div className="flex space-x-4">
              {/* Social links could go here if needed */}
            </div>
          </div>

          {/* Services & Target */}
          <div>
            <h4 className="font-heading font-bold mb-4">Servizi & Per Chi</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="/servizi" className="hover:text-accent transition-colors">Consulenza Patrimoniale</a></li>
              <li><a href="/servizi" className="hover:text-accent transition-colors">Wealth Management</a></li>
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

            {/* Contact Information */}
            <div className="space-y-3">
              <a href="https://wa.me/393396005487" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full justify-start"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Prenota Call
                </Button>
              </a>
              
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div>
                  <strong>Indirizzo:</strong><br />
                  Via Alberto da Giussano 17<br />
                  20145 Milano
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>02 4987653</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>339 6005487</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>dott.andolfi@feliceeugenioandolfi.it</span>
                </div>
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
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/termini" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Termini di Servizio
              </a>
              <a href="/cookie" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
