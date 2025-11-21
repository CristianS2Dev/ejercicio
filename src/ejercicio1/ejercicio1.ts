/**
 * EJERCICIO 1: Operaciones con Arrays
 * 
 * Objetivo: Practicar tipos básicos, funciones tipadas y estructuras de control
 */

// Definimos un tipo para el resultado
interface ResultadoAnalisis {
    max: number;
    promedio: number;
    total: number;
}

/**
 * Analiza una lista de números y devuelve estadísticas
 * @param numeros - Array de números a analizar
 * @returns Objeto con el máximo, promedio y total
 */
function analizarNumeros(numeros: number[]): ResultadoAnalisis {
    // Validación: verificar que el array no esté vacío
    if (numeros.length === 0) {
        throw new Error("El array no puede estar vacío");
    }

    // Encontrar el número más grande usando Math.max
    const max: number = Math.max(...numeros);

    // Calcular el promedio usando reduce
    const suma: number = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const promedio: number = suma / numeros.length;

    // Obtener el total de elementos
    const total: number = numeros.length;

    // Retornar el resultado
    return {
        max,
        promedio,
        total
    };
}

/**
 * Función alternativa usando bucle for (más tradicional)
 */
function analizarNumerosConFor(numeros: number[]): ResultadoAnalisis {
    if (numeros.length === 0) {
        throw new Error("El array no puede estar vacío");
    }

    let max: number = numeros[0];
    let suma: number = 0;

    // Recorrer el array con for
    for (let i = 0; i < numeros.length; i++) {
        // Actualizar máximo si encontramos uno mayor
        if (numeros[i] > max) {
            max = numeros[i];
        }
        // Sumar para calcular promedio
        suma += numeros[i];
    }

    return {
        max,
        promedio: suma / numeros.length,
        total: numeros.length
    };
}

/**
 * Función para mostrar resultados de forma legible
 */
function mostrarResultados(numeros: number[], resultado: ResultadoAnalisis): void {
    console.log("\n=== Análisis de Números ===");
    console.log(`Lista analizada: [${numeros.join(", ")}]`);
    console.log(`Número más grande: ${resultado.max}`);
    console.log(`Promedio: ${resultado.promedio.toFixed(2)}`);
    console.log(`Total de elementos: ${resultado.total}`);
    console.log("===========================\n");
}

// EJEMPLOS DE USO
console.log("🔢 EJERCICIO 1: Operaciones con Arrays\n");

// Ejemplo 1: Lista simple
const lista1: number[] = [5, 12, 8, 21, 3, 15];
const resultado1 = analizarNumeros(lista1);
mostrarResultados(lista1, resultado1);

// Ejemplo 2: Lista con números negativos
const lista2: number[] = [-10, 25, -5, 30, 0, 15];
const resultado2 = analizarNumeros(lista2);
mostrarResultados(lista2, resultado2);

// Ejemplo 3: Usando la función con for
const lista3: number[] = [100, 200, 150, 175, 225];
const resultado3 = analizarNumerosConFor(lista3);
console.log("Usando método alternativo (for):");
mostrarResultados(lista3, resultado3);

// Ejemplo 4: Manejo de errores
try {
    const listaVacia: number[] = [];
    analizarNumeros(listaVacia);
} catch (error: any) {
    console.log(`❌ Error capturado: ${error.message}\n`);
}
