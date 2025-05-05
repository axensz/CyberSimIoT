const fs = require("fs")
const path = require("path")

// Asegúrate de que el directorio 'out' existe
const outDir = path.join(process.cwd(), "out")
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

// Crea el archivo .nojekyll
const nojekyllPath = path.join(outDir, ".nojekyll")
fs.writeFileSync(nojekyllPath, "")

console.log('Archivo .nojekyll creado en el directorio "out"')
