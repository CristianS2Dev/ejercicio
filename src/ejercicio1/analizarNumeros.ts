
export function analizarNumeros(numeros: number[]) {

    if (numeros.length === 0) {
        throw new Error("La lista no puede estar vacía");
    }


    const max: number = Math.max(...numeros);

    const suma: number = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

    const promedio: number = suma / numeros.length;

    const total: number = numeros.length;

    
    return {
        max,
        promedio,
        total
    };
}