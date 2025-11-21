export function mostrarResultados(numeros:any, resultado : any): void {
    
    console.log(`Lista analizada: [${numeros.join(", ")}]`);
    console.log(`Numero mas grande: ${resultado.max}`);
    console.log(`Promedio: ${resultado.promedio.toFixed(2)}`);
    console.log(`Total de elementos: ${resultado.total}`);

    console.log("===========================\n");
}