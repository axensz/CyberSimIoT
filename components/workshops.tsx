import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Workshops() {
  const features = [
    "Simulaciones en vivo de ataques de IoT",
    "Opciones virtuales y presenciales",
    "Costo asequible (menos de 100.000 COP)",
    "Contenido basado en datos de encuestas públicas",
    "Certificación incluida",
  ]

  return (
    <section id="workshops" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Características de los Talleres
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl">
            Nuestros talleres están diseñados para proporcionar experiencia práctica con escenarios reales de seguridad
            IoT.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full lg:col-span-1 bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">¿Por qué elegir nuestros talleres?</h3>
              <p className="mb-6">
                Los talleres de CyberSimIoT ofrecen una combinación única de conocimiento teórico y aplicación práctica,
                haciendo que los conceptos complejos de ciberseguridad sean accesibles para todos.
              </p>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <p className="text-sm italic">
                  "El enfoque práctico para la capacitación en seguridad IoT llena un vacío crítico en la educación
                  sobre ciberseguridad."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-2">
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h4 className="font-bold mb-2">Taller para Principiantes</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Introducción a los fundamentos de seguridad IoT y detección básica de amenazas.
                  </p>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span>Duración:</span>
                      <span>4 horas</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Formato:</span>
                      <span>Virtual o Presencial</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Precio:</span>
                      <span>80.000 COP</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="font-bold mb-2">Taller Avanzado</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Profundización en vulnerabilidades complejas de IoT y estrategias avanzadas de mitigación.
                  </p>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span>Duración:</span>
                      <span>8 horas</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Formato:</span>
                      <span>Presencial</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Precio:</span>
                      <span>150.000 COP</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
