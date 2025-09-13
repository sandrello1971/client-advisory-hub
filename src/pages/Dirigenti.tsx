import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, TrendingUp, Shield, Users, Target } from "lucide-react";

const Dirigenti = () => {
  const challenges = [
    "Gestione dei benefit e stock option aziendali",
    "Ottimizzazione fiscale di bonus e incentivi variabili", 
    "Diversificazione del patrimonio oltre l'azienda",
    "Pianificazione successoria e protezione patrimoniale",
    "Gestione della liquidità da exit o IPO"
  ];

  const solutions = [
    {
      icon: TrendingUp,
      title: "Gestione Patrimoniale Integrata",
      description: "Coordiniamo i tuoi investimenti personali con i benefit aziendali per massimizzare il rendimento complessivo."
    },
    {
      icon: Shield,
      title: "Ottimizzazione Fiscale e Gestione del Rischio Assicurativo",
      description: "Strutture legali per minimizzare l'impatto fiscale su stock option, bonus e altri strumenti di incentivazione. Gestione del rischio intrinseco e armonizzazione fiscale attraverso strumenti assicurativi."
    },
    {
      icon: Users,
      title: "Advisory Strategico",
      description: "Supporto nelle decisioni di carriera che impattano il patrimonio: cambio azienda, promozioni, opportunità di equity."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
                  <span className="text-sm font-medium">Per Dirigenti & Professionisti</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  Gestione patrimoniale per 
                  <span className="text-accent"> dirigenti</span> e 
                  <span className="text-accent"> professionisti</span>
                </h1>
                
                <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/80 leading-relaxed">
                  Soluzioni specifiche per chi ha patrimoni complessi derivanti da carriere di successo, 
                  stock option e benefit aziendali.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-wealth px-8 py-4"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Prenota consulenza specializzata
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10 w-80 h-80 bg-primary-foreground/10 rounded-2xl flex items-center justify-center border border-primary-foreground/20">
                    <Target className="h-32 w-32 text-primary-foreground/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Le sfide patrimoniali dei dirigenti
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ogni dirigente e professionista di successo affronta sfide uniche nella gestione del proprio patrimonio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <p className="text-foreground font-medium">{challenge}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Le nostre soluzioni specifiche
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Approccio personalizzato per dirigenti con patrimoni complessi e esigenze sofisticate
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                      <solution.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Pronto a ottimizzare il tuo patrimonio professionale?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Parliamo delle tue esigenze specifiche e di come possiamo aiutarti a massimizzare il valore del tuo patrimonio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-wealth px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Prenota valutazione gratuita
              </Button>
              <Button variant="outline" size="lg" className="btn-wealth px-8 py-4">
                Scarica la guida per dirigenti
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dirigenti;