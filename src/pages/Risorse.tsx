import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen, Video, FileText, Calculator, CheckCircle, Calendar } from "lucide-react";

const Risorse = () => {
  const guides = [
    {
      icon: FileText,
      title: "Guida alla Trasparenza nei Compensi",
      subtitle: "Come scegliere un consulente",
      description: "Tutto quello che devi sapere sui costi della consulenza patrimoniale per evitare sorprese.",
      downloadCount: "2.3K",
      tag: "Guida Essenziale",
      tagColor: "bg-accent text-accent-foreground"
    },
    {
      icon: Calculator,
      title: "Tax Planning per HNWI",
      subtitle: "Strategie fiscali avanzate",
      description: "Guida completa all'ottimizzazione fiscale per patrimoni significativi e strutture complesse.",
      downloadCount: "1.8K",
      tag: "Advanced",
      tagColor: "bg-primary text-primary-foreground"
    },
    {
      icon: BookOpen,
      title: "Asset Allocation Strategica",
      subtitle: "Principi di diversificazione",
      description: "Metodologie evidence-based per costruire portafogli resilienti e performanti nel tempo.",
      downloadCount: "3.1K",
      tag: "Investment",
      tagColor: "bg-secondary text-secondary-foreground"
    },
    {
      icon: FileText,
      title: "Guida Post-Exit",
      subtitle: "Gestione liquidità da cessione",
      description: "Strategie specifiche per gestire patrimoni derivanti dalla vendita di aziende o partecipazioni.",
      downloadCount: "950",
      tag: "Specialistico",
      tagColor: "bg-accent text-accent-foreground"
    }
  ];

  const tools = [
    {
      icon: Calculator,
      title: "Calcolatore Rendimenti",
      description: "Simula i rendimenti dei tuoi investimenti con diversi scenari di asset allocation."
    },
    {
      icon: FileText,
      title: "Risk Assessment",
      description: "Valuta il tuo profilo di rischio e ricevi suggerimenti personalizzati."
    }
  ];

  const articles = [
    {
      title: "Come leggere il prospetto informativo di un fondo",
      category: "Educazione Finanziaria",
      readTime: "8 min",
      date: "15 Gen 2024"
    },
    {
      title: "Diversificazione geografica: Europa vs USA vs Mercati Emergenti",
      category: "Asset Allocation",
      readTime: "12 min", 
      date: "12 Gen 2024"
    },
    {
      title: "PIR e PIC: quando convengono davvero?",
      category: "Tax Planning",
      readTime: "10 min",
      date: "08 Gen 2024"
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
                <span className="text-sm font-medium">Risorse Gratuite</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Risorse e 
                <span className="text-accent"> guide gratuite</span> per investitori consapevoli
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/80 leading-relaxed">
                Guide pratiche, strumenti di calcolo e insights per prendere decisioni finanziarie 
                informate e gestire il tuo patrimonio in autonomia.
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-wealth px-8 py-4"
              >
                <Download className="h-5 w-5 mr-2" />
                Scarica la guida più popolare
              </Button>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Guide e documenti scaricabili
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Materiale pratico e concreto per approfondire temi di gestione patrimoniale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                        <guide.icon className="h-6 w-6 text-accent" />
                      </div>
                      <Badge className={guide.tagColor}>
                        {guide.tag}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-accent font-medium mb-3">
                      {guide.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {guide.downloadCount} download
                      </span>
                      <Button size="sm" className="btn-wealth">
                        <Download className="h-4 w-4 mr-2" />
                        Scarica gratis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Strumenti di calcolo
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tool interattivi per simulazioni e valutazioni patrimoniali
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                      <tool.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                      {tool.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    <Button variant="outline" size="sm" className="btn-wealth">
                      Utilizza strumento
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Ultimi articoli dal blog
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Approfondimenti, analisi e aggiornamenti dal mondo degli investimenti
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {articles.map((article, index) => (
                <Card key={index} className="card-wealth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-3 leading-tight">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {article.readTime} di lettura
                      </span>
                      <Button variant="ghost" size="sm">
                        Leggi →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg" className="btn-wealth px-8 py-4">
                <BookOpen className="h-5 w-5 mr-2" />
                Esplora tutti gli articoli
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
                Rimani aggiornato
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ricevi ogni settimana insights esclusivi, analisi di mercato e consigli pratici 
                per la gestione del tuo patrimonio.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Contenuti sempre aggiornati</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Niente spam, solo valore</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Cancellazione in un click</span>
                </div>
              </div>
              
              <Button size="lg" className="btn-wealth px-8 py-4">
                Iscriviti alla newsletter
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Vuoi una consulenza personalizzata?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Le guide sono un ottimo punto di partenza, ma ogni situazione è unica. 
              Parliamo delle tue esigenze specifiche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-wealth px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Prenota consulenza gratuita
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

export default Risorse;