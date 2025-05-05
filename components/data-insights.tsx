"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function DataInsights() {
  const [activeTab, setActiveTab] = useState("interest")

  const interestData = [
    { name: "Capacitación práctica", value: 88 },
    { name: "Pagarían por talleres", value: 81 },
    { name: "Nunca asistieron", value: 75 },
  ]

  const formatData = [
    { name: "Virtual", value: 45 },
    { name: "Presencial", value: 35 },
    { name: "Híbrido", value: 20 },
  ]

  return (
    <section id="data-insights" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Aspectos Destacados de la Encuesta
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl">
            Nuestros talleres están diseñados en base a datos reales de participantes potenciales, asegurando que
            satisfagamos las necesidades reales de nuestra comunidad.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="interest">Interés y Experiencia</TabsTrigger>
                <TabsTrigger value="format">Preferencias de Formato</TabsTrigger>
              </TabsList>

              <TabsContent value="interest" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Hallazgos Clave</h3>
                  <p className="text-muted-foreground">
                    Nuestra encuesta reveló un fuerte interés en la capacitación práctica en seguridad IoT, con la
                    mayoría de los encuestados sin haber asistido a cursos similares antes.
                  </p>

                  <div className="h-[300px] mt-8">
                    <ChartContainer
                      config={{
                        value: {
                          label: "Porcentaje",
                          color: "hsl(var(--primary))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={interestData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 100]} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="value" fill="var(--color-value)" name="Porcentaje (%)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  <div className="grid gap-4 mt-6 md:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <div className="text-3xl font-bold text-primary">88%</div>
                      <p className="text-sm text-muted-foreground">Desean capacitación práctica en seguridad de IoT</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-3xl font-bold text-primary">81%</div>
                      <p className="text-sm text-muted-foreground">Pagarían por talleres prácticos</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-3xl font-bold text-primary">75%</div>
                      <p className="text-sm text-muted-foreground">
                        Nunca han asistido a cursos de IoT o ciberseguridad
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="format" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Preferencias de Formato</h3>
                  <p className="text-muted-foreground">
                    Los participantes mostraron preferencias mixtas para los formatos de talleres, con una ligera
                    preferencia por las opciones virtuales.
                  </p>

                  <div className="h-[300px] mt-8">
                    <ChartContainer
                      config={{
                        value: {
                          label: "Porcentaje",
                          color: "hsl(var(--primary))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={formatData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 100]} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="value" fill="var(--color-value)" name="Porcentaje (%)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  <div className="p-4 border rounded-lg mt-6">
                    <h4 className="font-medium mb-2">Conclusión Clave</h4>
                    <p className="text-sm text-muted-foreground">
                      Para acomodar diversas preferencias, ofrecemos opciones de talleres tanto virtuales como
                      presenciales, con formatos híbridos para temas avanzados.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
