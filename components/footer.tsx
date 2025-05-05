import { Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CyberSimIoT</span>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mb-4">
              Camilo Andrés Guzmán
              <br />
              Jorge Andrés Torres Vanegas
              <br />
              Juanita Guzmán Cataño
            </p>
            <p>&copy; {new Date().getFullYear()} CyberSimIoT. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
