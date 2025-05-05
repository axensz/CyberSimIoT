const fs = require("fs")
const path = require("path")

// Crear .nojekyll en la raíz del proyecto
fs.writeFileSync(path.join(process.cwd(), ".nojekyll"), "")
console.log("Archivo .nojekyll creado en la raíz del proyecto")

// Asegurarse de que el directorio 'out' existe
const outDir = path.join(process.cwd(), "out")
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

// Crear .nojekyll en el directorio 'out'
fs.writeFileSync(path.join(outDir, ".nojekyll"), "")
console.log('Archivo .nojekyll creado en el directorio "out"')
