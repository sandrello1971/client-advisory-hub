import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Crown, Shield, Users2, Landmark } from "lucide-react";

const FamiglieHNWI = () => {
  const wealthChallenges = [
    "Gestione multi-generazionale del patrimonio",
    "Ottimizzazione fiscale complessa e strutturata",
    "Protezione da rischi legali e reputazionali",
    "Educazione finanziaria delle nuove generazioni",
    "Governance familiare e prevenzione conflitti"
  ];

  const services = [
    {
      icon: Crown,
      title: "Family Office Services",
      description: "Servizi completi di family office per famiglie con patrimoni significativi: gestione, amministrazione e consulenza strategica."
    },
    {
      icon: Shield,
      title: "Wealth Protection",
      description: "Strutture di protezione patrimoniale avanzate per salvaguardare il patrimonio da rischi legali, fiscali e familiari."
    },
    {
      icon: Users2,
      title: "Next Generation Planning",
      description: "Programmi di educazione finanziaria e pianificazione successoria per preparare le nuove generazioni."
    },
    {
      icon: Landmark,
      title: "Philanthropic Advisory",
      description: "Consulenza per attività filantropiche, fondazioni private e strategie di impatto sociale."
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
                  <span className="text-sm font-medium">Per Famiglie HNWI</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  Family Office e 
                  <span className="text-accent"> gestione patrimoniale</span> per famiglie HNWI
                </h1>
                
                <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/80 leading-relaxed">
                  Soluzioni integrate per famiglie con patrimoni complessi che richiedono 
                  governance sofisticata e pianificazione multi-generazionale.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-wealth px-8 py-4"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Consulenza riservata famiglia
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10 w-80 h-80 bg-primary-foreground/10 rounded-2xl flex items-center justify-center border border-primary-foreground/20">
                    <Crown className="h-32 w-32 text-primary-foreground/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">€2B+</div>
                <p className="text-muted-foreground">Patrimoni familiari gestiti</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">50+</div>
                <p className="text-muted-foreground">Famiglie HNWI assistite</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">3</div>
                <p className="text-muted-foreground">Generazioni medie seguite</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">15+</div>
                <p className="text-muted-foreground">Anni di esperienza HNWI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
                Cosa significa essere una famiglia HNWI?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <Card className="card-accent">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">High Net Worth Families</h3>
                    <p className="text-muted-foreground mb-4">Patrimoni da €1M a €30M con esigenze di:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Diversificazione avanzata</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Tax planning strutturato</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Protezione patrimoniale</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="card-accent">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">Ultra High Net Worth</h3>
                    <p className="text-muted-foreground mb-4">Patrimoni oltre €30M con necessità di:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Family office dedicato</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Governance familiare</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Pianificazione dinastica</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Le sfide delle famiglie con grandi patrimoni
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Maggiore è il patrimonio, più complesse diventano le esigenze di gestione e protezione
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wealthChallenges.map((challenge, index) => (
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                I nostri servizi per famiglie HNWI
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Soluzioni integrate che vanno oltre la gestione patrimoniale tradizionale
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

        {/* Family Governance Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                  Family Governance: la chiave del successo multi-generazionale
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Il 70% dei patrimoni familiari si disperde entro la seconda generazione. 
                  La governance familiare è l'antidoto a questa statistica.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Family Constitution e Mission Statement</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Family Council e strutture decisionali</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Protocolli di comunicazione e conflitto</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Education programs per next generation</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 w-80 h-80 bg-muted/30 rounded-2xl flex items-center justify-center border border-border">
                    <Users2 className="h-32 w-32 text-muted-foreground/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              La tua famiglia ha un patrimonio significativo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutiamo in completa riservatezza delle esigenze specifiche della tua famiglia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-wealth px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Consulenza riservata famiglia
              </Button>
              <Button variant="outline" size="lg" className="btn-wealth px-8 py-4">
                Scarica la guida Family Office
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FamiglieHNWI;