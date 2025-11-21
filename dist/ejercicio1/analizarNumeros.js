"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analizarNumeros = analizarNumeros;
function analizarNumeros(numeros) {
    if (numeros.length === 0) {
        throw new Error("La lista no puede estar vacía");
    }
    const max = Math.max(...numeros);
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const promedio = suma / numeros.length;
    const total = numeros.length;
    return {
        max,
        promedio,
        total
    };
}
//# sourceMappingURL=analizarNumeros.js.map