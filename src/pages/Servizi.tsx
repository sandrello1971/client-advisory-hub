import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, TrendingUp, Shield, FileText, Users, PieChart, Calculator } from "lucide-react";

const Servizi = () => {
  const coreServices = [
    {
      icon: TrendingUp,
      title: "Gestione Patrimoniale",
      description: "Asset allocation strategica, selezione investimenti e monitoraggio performance con approccio evidence-based.",
      features: ["Portafogli diversificati", "ETF e fondi selezionati", "Rebalancing sistematico", "Reporting trasparente"]
    },
    {
      icon: Calculator,
      title: "Tax Planning",
      description: "Ottimizzazione fiscale attraverso strumenti legali e strutture di investimento tax-efficient.",
      features: ["Regime amministrato", "PIR e PIC", "Fondi lussemburghesi", "Consulenza fiscale integrata"]
    },
    {
      icon: Shield,
      title: "Wealth Protection",
      description: "Protezione patrimoniale da rischi legali, familiari e imprenditoriali attraverso strutture dedicate.",
      features: ["Trust e vincoli familiari", "Polizze unit linked", "Segregazione patrimoniale", "Asset protection planning"]
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Pianificazione successoria per trasferire il patrimonio alle future generazioni in modo efficiente.",
      features: ["Testamenti e donazioni", "Patti di famiglia", "Trust successori", "Minimizzazione imposte successorie"]
    }
  ];

  const additionalServices = [
    {
      icon: PieChart,
      title: "Financial Planning",
      description: "Pianificazione finanziaria completa per raggiungere obiettivi di vita specifici."
    },
    {
      icon: Users,
      title: "Family Office",
      description: "Servizi integrati per famiglie HNWI con patrimoni complessi e multi-generazionali."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Analisi Patrimoniale",
      description: "Valutazione completa della situazione finanziaria attuale e definizione degli obiettivi."
    },
    {
      step: "2", 
      title: "Strategia Personalizzata",
      description: "Sviluppo di una strategia di investimento su misura basata su profilo di rischio e obiettivi."
    },
    {
      step: "3",
      title: "Implementazione",
      description: "Esecuzione della strategia attraverso strumenti selezionati e piattaforme ottimali."
    },
    {
      step: "4",
      title: "Monitoraggio Continuo",
      description: "Supervisione costante, rebalancing periodico e aggiornamenti strategici."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
                <span className="text-sm font-medium">I Nostri Servizi</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Servizi di 
                <span className="text-accent"> consulenza patrimoniale</span> integrata
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/80 leading-relaxed">
                Soluzioni complete per la gestione, protezione e crescita del tuo patrimonio. 
                Competenza e trasparenza in ogni servizio.
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-wealth px-8 py-4"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Scopri il servizio più adatto
              </Button>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                I nostri servizi principali
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quattro pilastri per una gestione patrimoniale completa e professionale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featIndex) => (
                        <div key={featIndex} className="flex items-center space-x-2">
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

        {/* Additional Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Servizi specialistici
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Soluzioni avanzate per esigenze specifiche e patrimoni complessi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Il nostro metodo in 4 step
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un approccio strutturato e trasparente per la gestione del tuo patrimonio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full text-white font-bold text-xl mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
                Trasparenza totale nei compensi
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                La nostra fee structure è sempre chiara e comunicata in anticipo. 
                Nessun costo nascosto, nessuna sorpresa.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="card-accent">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">Fee Management</h3>
                    <p className="text-muted-foreground text-sm">Commissioni di gestione competitive e trasparenti</p>
                  </CardContent>
                </Card>
                <Card className="card-accent">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">No Hidden Costs</h3>
                    <p className="text-muted-foreground text-sm">Tutti i costi comunicati ex-ante</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Quale servizio è più adatto alle tue esigenze?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ogni situazione patrimoniale è unica. Parliamo delle tue esigenze specifiche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-wealth px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Consulenza gratuita personalizzata
              </Button>
              <Button variant="outline" size="lg" className="btn-wealth px-8 py-4">
                Confronta i nostri servizi
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Servizi;