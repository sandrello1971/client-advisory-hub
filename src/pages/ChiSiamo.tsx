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
                  Siamo consulenti patrimoniali indipendenti specializzati in gestione patrimoniale 
                  per dirigenti, imprenditori post-exit e famiglie HNWI.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-wealth px-8 py-4"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Conosciamoci di persona
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10 w-96 h-96 rounded-full overflow-hidden border-4 border-primary-foreground/30 shadow-elegant">
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

        {/* Stats Section */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-heading font-bold text-accent mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
                La nostra missione
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Restituire fiducia nella consulenza patrimoniale attraverso trasparenza, competenza. 
                Crediamo che ogni cliente meriti consigli onesti e risultati misurabili.
              </p>
              <blockquote className="text-2xl font-heading italic text-foreground border-l-4 border-accent pl-6">
                "La gestione patrimoniale non dovrebbe essere un mistero. 
                Ogni cliente ha il diritto di capire esattamente cosa fa il suo consulente e perchè lo fa."
              </blockquote>
              <cite className="text-muted-foreground mt-4 block">- Felice, Founder</cite>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                I nostri valori
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quattro principi che guidano ogni decisione e ogni consiglio che diamo ai nostri clienti
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                        <value.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Il team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professionisti qualificati con esperienza consolidata nella gestione patrimoniale
              </p>
            </div>
            
            {team.map((member, index) => (
              <Card key={index} className="card-wealth max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4">
                        Aree di specializzazione:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {member.expertise.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Certificazioni e qualifiche
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Formazione continua e certificazioni internazionali per garantire i più alti standard professionali
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-accent mx-auto mb-4" />
                    <p className="text-sm font-medium text-foreground">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                  Perché scegliere noi?
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
              <Button size="lg" className="btn-wealth px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Prenota incontro gratuito
              </Button>
              <Button variant="outline" size="lg" className="btn-wealth px-8 py-4">
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