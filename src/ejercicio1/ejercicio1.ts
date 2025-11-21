import { analizarNumeros } from './analizarNumeros';
import { mostrarResultados } from './mostrarResultados';


console.log("EJM: Operaciones con Arrays\n");

const lista1: number[] = [5, 12, 8, 21, 3, 15,255,10,33,47,89,150,350];
const resultado1 = analizarNumeros(lista1);
mostrarResultados(lista1, resultado1);


