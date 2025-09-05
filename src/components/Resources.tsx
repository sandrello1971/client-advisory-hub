import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle, Users, TrendingUp } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Checklist RSU & Stock Option",
      subtitle: "Guida per dirigenti tech",
      description: "Piano di vendita, ottimizzazione fiscale e gestione del rischio concentrazione per le vostre partecipazioni aziendale.",
      downloadCount: "2,400+",
      tag: "Per Dirigenti",
      tagColor: "bg-blue-100 text-blue-700"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Post-Exit Playbook",
      subtitle: "I primi 90 giorni cruciali",
      description: "Roadmap completa per gestire la liquidità post-vendita: dal primo giorno fino all'implementazione della strategia definitiva.",
      downloadCount: "1,800+",
      tag: "Post-Exit", 
      tagColor: "bg-emerald-100 text-emerald-700"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Template Family Charter",
      subtitle: "Governance familiare",
      description: "Framework per allineare la famiglia sui valori, governance e passaggio generazionale del patrimonio.",
      downloadCount: "950+",
      tag: "Famiglie HNWI",
      tagColor: "bg-purple-100 text-purple-700"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6 heading-wealth">
            Risorse gratuite per iniziare
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Guide pratiche e checklist sviluppate dalla nostra esperienza con oltre 200 famiglie. 
            Scaricabili gratuitamente, senza impegno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="group">
              <div className="card-wealth h-full flex flex-col hover:shadow-accent transition-all duration-500 group-hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10">
                    {resource.icon}
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${resource.tagColor}`}>
                    {resource.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-heading font-bold mb-2">{resource.title}</h3>
                  <p className="text-accent font-medium text-sm mb-3">{resource.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {resource.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Download className="h-4 w-4 mr-2" />
                  <span>{resource.downloadCount} downloads</span>
                </div>

                {/* CTA */}
                <Button 
                  variant="wealth" 
                  className="w-full group-hover:shadow-accent transition-shadow"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Scarica gratis
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <div className="card-accent">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Cercare qualcosa di più specifico?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Il nostro blog contiene oltre 50 articoli su consulenza patrimoniale indipendente, 
                ottimizzazione fiscale e gestione del wealth per professionisti e imprenditori.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="wealth">
                  Esplora il Blog
                </Button>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-emerald-500" />
                    <span>Sempre aggiornato</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-emerald-500" />
                    <span>Senza paywall</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;