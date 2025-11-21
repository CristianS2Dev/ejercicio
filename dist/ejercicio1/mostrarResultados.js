"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarResultados = mostrarResultados;
function mostrarResultados(numeros, resultado) {
    console.log(`Lista analizada: [${numeros.join(", ")}]`);
    console.log(`Numero mas grande: ${resultado.max}`);
    console.log(`Promedio: ${resultado.promedio.toFixed(2)}`);
    console.log(`Total de elementos: ${resultado.total}`);
    console.log("===========================\n");
}
//# sourceMappingURL=mostrarResultados.js.map