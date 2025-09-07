import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Banknote, Shield, TrendingDown, Zap } from "lucide-react";

const PostExit = () => {
  const exitChallenges = [
    "Gestione di liquidità improvvisa e massiccia",
    "Diversificazione da concentrazione azionaria",
    "Ottimizzazione fiscale della cessione",
    "Reinvestimento strategico del capitale",
    "Protezione patrimoniale e successoria"
  ];

  const services = [
    {
      icon: Banknote,
      title: "Gestione Liquidità Post-Exit",
      description: "Strategie immediate per gestire i flussi di cassa e ottimizzare la liquidità derivante dalla vendita."
    },
    {
      icon: TrendingDown,
      title: "Diversificazione Strategica",
      description: "Passaggio da concentrazione azionaria a portafoglio diversificato con asset allocation ottimale."
    },
    {
      icon: Shield,
      title: "Tax Planning Avanzato",
      description: "Strutture legali e fiscali per minimizzare l'impatto delle imposte sulla cessione d'azienda."
    },
    {
      icon: Zap,
      title: "Nuovo Lifestyle Planning",
      description: "Pianificazione finanziaria per sostenere il nuovo stile di vita post-imprenditoriale."
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
                  <span className="text-sm font-medium">Per Imprenditori Post-Exit</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  Gestione patrimoniale 
                  <span className="text-accent"> post-exit</span>
                  <br />
                  Il nuovo capitolo inizia qui
                </h1>
                
                <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/80 leading-relaxed">
                  Hai venduto la tua azienda? Ti accompagniamo nella gestione strategica della liquidità 
                  e nella costruzione del tuo nuovo futuro patrimoniale.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-wealth px-8 py-4"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Consulenza post-exit gratuita
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10 w-80 h-80 bg-primary-foreground/10 rounded-2xl flex items-center justify-center border border-primary-foreground/20">
                    <Zap className="h-32 w-32 text-primary-foreground/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">€50M+</div>
                <p className="text-muted-foreground">Liquidità post-exit gestita</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">25+</div>
                <p className="text-muted-foreground">Exit di successo supportate</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">18 mesi</div>
                <p className="text-muted-foreground">Tempo medio di diversificazione</p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Le sfide uniche del post-exit
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dopo anni di focus imprenditoriale, gestire patrimoni liquidi richiede competenze e strategie diverse
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exitChallenges.map((challenge, index) => (
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

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Il nostro approccio post-exit
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Metodo strutturato per trasformare il successo imprenditoriale in libertà finanziaria duratura
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Il processo in 90 giorni
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dalla liquidità concentrata al portafoglio diversificato in 3 mesi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full text-white font-bold text-xl mb-6">1</div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Analisi e Pianificazione</h3>
                <p className="text-muted-foreground">Valutazione completa della situazione patrimoniale e definizione degli obiettivi post-exit</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full text-white font-bold text-xl mb-6">2</div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Strutturazione</h3>
                <p className="text-muted-foreground">Implementazione delle strutture fiscali e degli strumenti di investimento ottimali</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full text-white font-bold text-xl mb-6">3</div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Diversificazione</h3>
                <p className="text-muted-foreground">Allocazione graduale del capitale su asset class diverse con monitoraggio continuo</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Hai appena concluso una exit di successo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Non lasciare che la mancanza di pianificazione vanifichi anni di duro lavoro imprenditoriale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-wealth px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Consulenza post-exit gratuita
              </Button>
              <Button variant="outline" size="lg" className="btn-wealth px-8 py-4">
                Scarica la guida post-exit
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PostExit;