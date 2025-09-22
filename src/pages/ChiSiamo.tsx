import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Award, Users, Target, Heart, Shield, TrendingUp } from "lucide-react";

const ChiSiamo = () => {
  const values = [
    {
      icon: Shield,
      title: "Trasparenza Totale",
      description: "Tutte le strategie sono condivise al fine di raggiungere gli obiettivi prefissati."
    },
    {
      icon: Heart,
      title: "Relazione Umana",
      description: "Advisory personalizzato con consulenti esperti, non algoritmi o call center."
    },
    {
      icon: TrendingUp,
      title: "Competenza Verificabile",
      description: "Risultati misurabili, metodologie evidence-based e formazione continua."
    }
  ];

  const team = [
    {
      name: "Felice",
      role: "Founder & Senior Advisor",
      description: "25+ anni di esperienza nella gestione patrimoniale per HNWI e famiglie. Ex-dirigente di primarie banche private.",
      expertise: ["Wealth Management", "Family Office", "Tax Planning", "Estate Planning"]
    }
  ];

  const certifications = [
    "CFP® Certified Financial Planner",
    "CFA Institute Member", 
    "EFPA European Financial Advisor"
  ];

  const stats = [
    { number: "200+", label: "Famiglie affidate" },
    { number: "€500M+", label: "Patrimoni gestiti" },
    { number: "25+", label: "Anni di esperienza" },
    { number: "98%", label: "Clienti soddisfatti" }
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
                  <span className="text-sm font-medium">Chi Siamo</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  <span className="text-accent">Consulenza patrimoniale</span> con regole chiare
                  <br />
                  Nessuna sorpresa
                </h1>
                
                <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/80 leading-relaxed">
                  Siamo consulenti patrimoniali specializzati in gestione patrimoniale 
                  per dirigenti, imprenditori post-exit e famiglie HNWI.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/393396005487" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-wealth px-8 py-4">
                      <Calendar className="h-5 w-5 mr-2" />
                      Prenota call gratuita
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-primary-foreground/30 shadow-elegant">
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
        </section>

        {/* CV Felice Eugenio Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                  Felice Eugenio Andolfi
                </h2>
                <p className="text-xl text-muted-foreground">
                  Founder & Consulente Patrimoniale
                </p>
              </div>
              
              <Card className="card-wealth">
                <CardContent className="p-8">
                  <div className="prose max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      Ciao sono Felice Eugenio, laureato in Economia e Commercio presso l'Università 
                      Cattolica di Milano con votazione 110/110 e mi considero un macroeconomista votato 
                      alla finanza. Dal 2001 svolgo l'attività di consulente finanziario e in questo 
                      lasso di tempo ho maturato grandi esperienze in importanti gruppi bancari nazionali 
                      ed internazionali, sviluppando competenze chiave nel campo del passaggio generazionale, 
                      nella costruzione di trust e fiduciarie nella gestione delle esigenze corporate per 
                      le PMI e nell'applicazione dei principi macroeconomici nella costruzione di portafogli. 
                      In ogni mio progetto sono ispirato a valori che derivano dalle arti marziali, 
                      quali: Impegno, passione, costanza, lealtà e disciplina.
                    </p>
                    
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      Il mio obiettivo è quello di essere un supporto affidabile nelle decisioni delle 
                      famiglie e delle imprese. Ciò che mi distingue è la specificità delle competenze 
                      acquisite, rendendole semplici e di facile applicazione.
                    </p>
                    
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Nella vita privata sono un praticante ed istruttore di arti marziali e sono socio 
                      fondatore di un'associazione di volontariato per il recupero delle fragilità sociali. 
                      Sono qui per creare valore, benessere e serenità.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                I nostri valori
              </h2>
              <p className="text-xl text-muted-foreground">
                La differenza sta nell'approccio: umano, trasparente, competente
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {values.map((value, index) => (
                <Card key={index} className="card-wealth text-center">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Come lavoriamo
              </h2>
              <p className="text-xl text-muted-foreground">
                La differenza sta nell'approccio: umano, trasparente, competente
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  ❌ Come NON lavoriamo
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Non promettiamo rendimenti irrealistici</li>
                  <li>Non utilizziamo strategie speculative</li>
                  <li>Non deleghiamo a algoritmi o call center</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  ✅ Come lavoriamo
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Advisory fee trasparenti comunicate ex-ante</li>
                  <li>Selezione indipendente degli strumenti migliori</li>
                  <li>Approccio evidence-based e prudente</li>
                  <li>Relazione diretta con consulenti qualificati</li>
                  <li>Monitoraggio continuo e reporting dettagliato</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Vuoi conoscerci di persona?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Il primo incontro è sempre gratuito e senza impegno. 
              Parliamo delle tue esigenze e valutiamo insieme se possiamo aiutarti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/393396005487" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-wealth px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Prenota incontro gratuito
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-wealth px-8 py-4"
                onClick={() => document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contattaci per informazioni
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ChiSiamo;
