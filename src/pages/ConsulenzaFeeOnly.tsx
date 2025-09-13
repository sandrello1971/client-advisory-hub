import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Shield, TrendingUp, Users, Award, DollarSign } from "lucide-react";

const ConsulenzaFeeOnly = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Nessun Conflitto d'Interesse",
      description: "Pagate solo per la consulenza, non per i prodotti venduti. I nostri consigli sono sempre nel vostro interesse."
    },
    {
      icon: TrendingUp,
      title: "Trasparenza Totale",
      description: "Tutti i costi comunicati ex-ante. Nessuna commissione nascosta o sorpresa."
    },
    {
      icon: Users,
      title: "Consulenza Personalizzata",
      description: "Strategia su misura per i vostri obiettivi, non per i nostri margini."
    },
    {
      icon: Award,
      title: "Competenza Indipendente",
      description: "Selezione oggettiva degli strumenti migliori dal mercato globale."
    }
  ];

  const services = [
    {
      title: "Analisi Patrimoniale Completa",
      description: "Valutazione approfondita di patrimonio, rischi e opportunità",
      features: ["Asset allocation strategica", "Analisi fiscale", "Risk assessment", "Benchmark personalizzati"]
    },
    {
      title: "Pianificazione Finanziaria",
      description: "Roadmap per raggiungere i vostri obiettivi di lungo termine",
      features: ["Obiettivi quantificati", "Timeline realistiche", "Stress test scenarios", "Revisioni periodiche"]
    },
    {
      title: "Selezione Investimenti",
      description: "Scelta indipendente dei migliori strumenti per voi",
      features: ["Due diligence approfondita", "Benchmark trasparenti", "Monitoring continuo", "Reportistica dettagliata"]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
                <span className="text-sm font-medium">Consulenza Fee-Only</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                <span className="text-accent">Consulenza Fee-Only:</span>
                <br />
                Solo i vostri interessi contano
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/80 leading-relaxed">
                Paghi solo per la consulenza, non per i prodotti venduti. 
                Trasparenza totale, competenza indipendente, risultati misurabili.
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-wealth px-8 py-4"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Scopri il modello Fee-Only
              </Button>
            </div>
          </div>
        </section>

        {/* What is Fee-Only Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                  Cos'è la Consulenza Fee-Only?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Un modello di consulenza dove pagate solo per il consiglio, non per i prodotti
                </p>
              </div>
              
              <Card className="card-wealth mb-12">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-4 text-red-600">
                        ❌ Consulenza Tradizionale
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li>• Guadagni dalle commissioni sui prodotti</li>
                        <li>• Conflitto d'interesse intrinseco</li>
                        <li>• Costi spesso non trasparenti</li>
                        <li>• Focus sulla vendita, non sulla strategia</li>
                        <li>• Limitata selezione di prodotti</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-4 text-green-600">
                        ✅ Consulenza Fee-Only
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li>• Compenso solo dalla consulenza</li>
                        <li>• Interessi allineati con il cliente</li>
                        <li>• Trasparenza totale sui costi</li>
                        <li>• Focus su strategia e risultati</li>
                        <li>• Accesso al mercato globale</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                I vantaggi del Fee-Only
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Perché sempre più investitori sofisticati scelgono consulenti indipendenti
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                        <advantage.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                          {advantage.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
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
                Come funziona la nostra consulenza
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un processo strutturato per massimizzare i vostri risultati
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                        <span className="text-xl font-heading font-bold text-accent">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Transparency Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                  Trasparenza sui costi
                </h2>
                <p className="text-xl text-muted-foreground">
                  Nessuna sorpresa, nessun costo nascosto
                </p>
              </div>
              
              <Card className="card-accent">
                <CardContent className="p-8 text-center">
                  <DollarSign className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Advisory Fee Trasparenti
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Tutti i costi comunicati ex-ante. Il compenso viene concordato in base al servizio richiesto 
                    e comunicato chiaramente prima dell'inizio della consulenza.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-background/50 rounded-lg">
                      <h4 className="font-heading font-bold text-foreground mb-2">Analisi Iniziale</h4>
                      <p className="text-sm text-muted-foreground">Costo fisso concordato</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-lg">
                      <h4 className="font-heading font-bold text-foreground mb-2">Advisory Continuativo</h4>
                      <p className="text-sm text-muted-foreground">Fee annuale trasparente</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-lg">
                      <h4 className="font-heading font-bold text-foreground mb-2">Progetti Speciali</h4>
                      <p className="text-sm text-muted-foreground">Preventivo dettagliato</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Scopri la differenza del Fee-Only
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Il primo incontro è gratuito e senza impegno. 
              Scopri come la consulenza indipendente può fare la differenza per il tuo patrimonio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-wealth px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Prenota incontro gratuito
              </Button>
              <Button variant="outline" size="lg" className="btn-wealth px-8 py-4">
                Scopri i nostri casi studio
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ConsulenzaFeeOnly;