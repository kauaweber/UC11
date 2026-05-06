// export function calcularFrete(valor: number): number {
//     if (valor > 200) {
//         return 0;
//     } else {
//         return 20;
//     }
// }

export function calcularFrete(valor: number): number {
  const frete = valor > 200;
    return frete ? 0 : 20;
}

