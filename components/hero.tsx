"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern-dark"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Talleres de Ciberseguridad IoT Accesibles con Simulaciones Reales
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              CyberSimIoT ofrece talleres de capacitación prácticos y accesibles para ayudar a estudiantes y
              profesionales a aprender a proteger dispositivos de Internet de las Cosas (IoT) a través de escenarios de
              simulación de ataques reales.
            </p>
          </div>

          <Button size="lg" onClick={scrollToAbout} className="group">
            Aprender Más
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Visual Element - Simulación IoT Mejorada */}
          <div className="relative mt-8 w-full max-w-3xl rounded-lg border bg-background/50 p-4">
            <div className="aspect-[16/9] overflow-hidden rounded bg-muted/30 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Red de conexión */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 450"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Líneas de conexión animadas */}
                  <line
                    x1="200"
                    y1="100"
                    x2="400"
                    y2="225"
                    className="stroke-primary/30 stroke-[1.5]"
                    strokeDasharray="5,5"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line
                    x1="600"
                    y1="100"
                    x2="400"
                    y2="225"
                    className="stroke-primary/30 stroke-[1.5]"
                    strokeDasharray="5,5"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line
                    x1="150"
                    y1="225"
                    x2="400"
                    y2="225"
                    className="stroke-primary/30 stroke-[1.5]"
                    strokeDasharray="5,5"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line
                    x1="650"
                    y1="225"
                    x2="400"
                    y2="225"
                    className="stroke-primary/30 stroke-[1.5]"
                    strokeDasharray="5,5"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line
                    x1="200"
                    y1="350"
                    x2="400"
                    y2="225"
                    className="stroke-primary/30 stroke-[1.5]"
                    strokeDasharray="5,5"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line
                    x1="600"
                    y1="350"
                    x2="400"
                    y2="225"
                    className="stroke-primary/30 stroke-[1.5]"
                    strokeDasharray="5,5"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="3s" repeatCount="indefinite" />
                  </line>

                  {/* Círculos de datos animados */}
                  <circle cx="300" cy="162" r="4" className="fill-primary/80">
                    <animate attributeName="cx" values="200;400" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="100;225" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="500" cy="162" r="4" className="fill-primary/80">
                    <animate attributeName="cx" values="600;400" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="100;225" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="275" cy="225" r="4" className="fill-primary/80">
                    <animate attributeName="cx" values="150;400" dur="5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="525" cy="225" r="4" className="fill-primary/80">
                    <animate attributeName="cx" values="650;400" dur="4.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="287" r="4" className="fill-destructive/80">
                    <animate attributeName="cx" values="200;400" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="350;225" dur="6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="500" cy="287" r="4" className="fill-primary/80">
                    <animate attributeName="cx" values="600;400" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="350;225" dur="5s" repeatCount="indefinite" />
                  </circle>
                </svg>

                {/* Dispositivos IoT */}
                <div className="grid grid-cols-3 gap-8 p-12 w-full h-full relative z-10">
                  {/* Router/Hub Central */}
                  <div className="col-start-2 row-start-2 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-md border-2 border-primary/20 animate-pulse"></div>
                    <div className="w-16 h-16 rounded-md bg-primary/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10 text-primary"
                      >
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                        <path d="M15 2v2" />
                        <path d="M15 20v2" />
                        <path d="M2 15h2" />
                        <path d="M20 15h2" />
                      </svg>
                    </div>
                    <div
                      className="absolute -inset-4 bg-primary/5 rounded-full animate-ping opacity-75"
                      style={{ animationDuration: "3s" }}
                    ></div>
                  </div>

                  {/* Dispositivo IoT - Cámara */}
                  <div className="col-start-1 row-start-1 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-primary/80"
                      >
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                    </div>
                  </div>

                  {/* Dispositivo IoT - Termostato */}
                  <div className="col-start-3 row-start-1 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-primary/80"
                      >
                        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Dispositivo IoT - Bombilla */}
                  <div className="col-start-1 row-start-2 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-primary/80"
                      >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                    </div>
                  </div>

                  {/* Dispositivo IoT - Cerradura */}
                  <div className="col-start-3 row-start-2 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-primary/80"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                  </div>

                  {/* Dispositivo IoT - Altavoz */}
                  <div className="col-start-1 row-start-3 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-primary/80"
                      >
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                        <circle cx="12" cy="14" r="4" />
                        <line x1="12" y1="6" x2="12.01" y2="6" />
                      </svg>
                    </div>
                  </div>

                  {/* Dispositivo IoT - Amenaza/Hacker */}
                  <div className="col-start-3 row-start-3 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-md bg-destructive/10 flex items-center justify-center animate-pulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-destructive/80"
                      >
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                        <path d="M3.58 17.36a2 2 0 0 1-.28-2.8l7.29-10.29a2 2 0 0 1 2.82 0l7.29 10.29a2 2 0 0 1-.28 2.8C19.85 18 18.94 18 18 18H6c-.94 0-1.85 0-2.42-.64Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Escudo de protección */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="400"
                      cy="225"
                      r="180"
                      fill="none"
                      stroke="currentColor"
                      className="text-primary"
                      strokeWidth="1"
                      strokeDasharray="10,5"
                    >
                      <animate attributeName="r" values="180;190;180" dur="5s" repeatCount="indefinite" />
                      <animate attributeName="stroke-width" values="1;2;1" dur="5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
              <div>Simulación de Red IoT</div>
              <div>Seguro • Interactivo • Educativo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
