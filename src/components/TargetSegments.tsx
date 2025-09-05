import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, TrendingUp, Users } from "lucide-react";

const TargetSegments = () => {
  const segments = [
    {
      icon: <Briefcase className="h-8 w-8 text-accent" />,
      title: "Dirigenti & Professionisti",
      subtitle: "€300K - €1,5M di patrimonio",
      pain: "RSU, stock option, portfolio frammentato?",
      benefit: "Audit completo, consolidamento, ottimizzazione fiscale",
      href: "/dirigenti",
      color: "from-accent/10 to-accent/5"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Post-Exit",
      subtitle: "€1,5M - €5M da liquidità",
      pain: "Pressure commerciale, market timing, complessità?",
      benefit: "Playbook 90 giorni, filtro indipendente, roadmap fiscale",
      href: "/post-exit",
      color: "from-primary/10 to-primary/5"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Famiglie HNWI",
      subtitle: "≥€3M patrimonio familiare",
      pain: "Governance familiare, coordinamento consulenti?",
      benefit: "Family charter, cabina di regia, massima discrezione",
      href: "/famiglie-hnwi",
      color: "from-secondary/20 to-secondary/10"
    }
  ];

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6 heading-wealth">
            Soluzioni su misura per ogni patrimonio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tre approcci specializzati per affrontare le sfide specifiche di dirigenti, 
            imprenditori e famiglie patrimoniali.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div key={index} className="group">
              <div className={`card-wealth bg-gradient-to-br ${segment.color} hover:shadow-accent transition-all duration-500 group-hover:-translate-y-2`}>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-soft mb-4">
                    {segment.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{segment.title}</h3>
                  <p className="text-sm text-accent font-medium">{segment.subtitle}</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                    <p className="text-sm font-medium text-destructive">❌ {segment.pain}</p>
                  </div>
                  
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-emerald-700">✅ {segment.benefit}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-accent/10 transition-colors"
                    asChild
                  >
                    <a href={segment.href}>
                      Scopri come possiamo aiutarti
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Non siete sicuri quale approccio fa per voi? 
            <Button variant="link" className="p-0 ml-1 text-accent">
              Parliamone insieme
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetSegments;