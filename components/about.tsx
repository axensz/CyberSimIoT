import { Shield, Users, DollarSign } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Educar sobre los riesgos de IoT",
      description:
        "Proporcionamos educación integral sobre los riesgos de seguridad asociados con dispositivos y redes IoT.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Capacitación práctica del mundo real",
      description:
        "Nuestros talleres incluyen simulaciones prácticas del mundo real que preparan a los participantes para desafíos reales de ciberseguridad.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Educación asequible en seguridad digital",
      description:
        "Creemos en hacer que la educación en ciberseguridad sea accesible para todos, independientemente de las limitaciones presupuestarias.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestra Misión</h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl">
            CyberSimIoT cierra la brecha entre el conocimiento teórico y la aplicación práctica en ciberseguridad IoT,
            atendiendo tanto a profesionales como a estudiantes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
              <div className="mb-4 rounded-full bg-primary/10 p-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
