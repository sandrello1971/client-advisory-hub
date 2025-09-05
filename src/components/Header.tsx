import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-heading font-bold text-primary">
              WealthGuard<span className="text-accent">.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <span className="text-wealth cursor-pointer hover:text-foreground transition-colors">Per Chi</span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-3">
                  <a href="/dirigenti" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Dirigenti & Professionisti
                  </a>
                  <a href="/post-exit" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Post-Exit
                  </a>
                  <a href="/famiglie-hnwi" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Famiglie HNWI
                  </a>
                </div>
              </div>
            </div>
            <a href="/servizi" className="text-wealth hover:text-foreground transition-colors">Servizi</a>
            <a href="/risorse" className="text-wealth hover:text-foreground transition-colors">Risorse</a>
            <a href="/chi-siamo" className="text-wealth hover:text-foreground transition-colors">Chi Siamo</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="btn-wealth">
              <Phone className="h-4 w-4 mr-2" />
              Contatti
            </Button>
            <Button variant="wealth" size="sm" className="btn-wealth">
              <Calendar className="h-4 w-4 mr-2" />
              Prenota Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground px-3 py-2">Per Chi</div>
                <a href="/dirigenti" className="block px-6 py-2 text-sm text-muted-foreground">
                  Dirigenti & Professionisti
                </a>
                <a href="/post-exit" className="block px-6 py-2 text-sm text-muted-foreground">
                  Post-Exit
                </a>
                <a href="/famiglie-hnwi" className="block px-6 py-2 text-sm text-muted-foreground">
                  Famiglie HNWI
                </a>
              </div>
              <a href="/servizi" className="block px-3 py-2 text-base text-muted-foreground">Servizi</a>
              <a href="/risorse" className="block px-3 py-2 text-base text-muted-foreground">Risorse</a>
              <a href="/chi-siamo" className="block px-3 py-2 text-base text-muted-foreground">Chi Siamo</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Contatti
                </Button>
                <Button variant="wealth" size="sm" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Prenota Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;