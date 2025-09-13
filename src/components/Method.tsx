import { Search, FileText, BarChart } from "lucide-react";

const Method = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-accent" />,
      number: "01",
      title: "Valutazione",
      description: "Audit completo della vostra situazione patrimoniale attuale",
      details: [
        "Analisi costi attuali e trasparenza future",
        "Mappatura rischi e coperture",
        "Identificazione opportunità di ottimizzazione"
      ]
    },
    {
      icon: <FileText className="h-10 w-10 text-accent" />,
      number: "02", 
      title: "Piano",
      description: "Investment Policy Statement personalizzato e roadmap implementativa",
      details: [
        "Obiettivi SMART e timeline realistiche",
        "Asset allocation strategica",
        "Coordinate fiscali e successorie"
      ]
    },
    {
      icon: <BarChart className="h-10 w-10 text-accent" />,
      number: "03",
      title: "Monitoraggio", 
      description: "Reporting periodico e adeguamenti pro-attivi",
      details: [
        "Dashboard KPI one-page",
        "Review periodico delle performance",
        "Aggiornamenti normativi e opportunità"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6 heading-wealth">
            Il nostro metodo: semplice, trasparente, efficace
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processo strutturato che mette i vostri obiettivi al centro con un focus chiaro e condiviso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-accent/30 z-0 transform translate-x-6"></div>
              )}

              <div className="relative z-10 text-center lg:text-left">
                {/* Step Number */}
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-accent shadow-accent">
                    {step.icon}
                  </div>
                  <div className="ml-4 lg:ml-6">
                    <div className="text-4xl font-heading font-bold text-accent/30">{step.number}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-bold">{step.title}</h3>
                  <p className="text-wealth">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card-accent max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-4">
              Pronti per iniziare?
            </h3>
            <p className="text-muted-foreground mb-6">
              La prima valutazione include sempre una mappa del profilo del rischio e degli obiettivi. 
              30 minuti per capire come lavoriamo con regole chiare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors btn-wealth">
                Prenota la tua valutazione gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;