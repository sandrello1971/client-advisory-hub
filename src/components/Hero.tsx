import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Download, ArrowRight } from "lucide-react";

const Hero = () => {
  const proofPoints = [
    "Trasparenza compensi: ex-ante ed ex-post",
    "Architettura aperta e verificabile", 
    "Processo documentato e policy conflitti",
    "Riservatezza garantita"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,_hsl(var(--accent))_0%,_transparent_50%)] opacity-10"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
              <span className="text-sm font-medium">Consulenza patrimoniale trasparente</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Consulenza patrimoniale{" "}
              <span className="text-accent font-bold">con regole chiare</span>
              <br />
              Nessuna sorpresa
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Advisory 100% umano per dirigenti, imprenditori post-exit e famiglie HNWI. 
              Trasparenza totale, competenza verificabile.
            </p>

            {/* Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto lg:mx-0">
              {proofPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-wealth px-8 py-4"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Prenota valutazione gratuita (30 min)
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 btn-wealth px-8 py-4"
              >
                <Download className="h-5 w-5 mr-2" />
                Scarica la guida trasparenza compensi
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/70">
                Oltre 200 famiglie affidate • Patrimoni da €300K a €50M+ gestiti
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background circles */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-primary-foreground/20 rounded-full blur-2xl"></div>
              
              {/* Main profile image */}
              <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-primary-foreground/30 shadow-elegant">
                <img 
                  src="/lovable-uploads/f57f2270-40c3-4b6b-bb9c-84162e77626c.png" 
                  alt="Felice - Consulente Patrimoniale"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-5 w-5 text-primary-foreground/50 rotate-90" />
      </div>
    </section>
  );
};

export default Hero;