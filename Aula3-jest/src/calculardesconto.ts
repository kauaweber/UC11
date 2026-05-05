export function calculardesconto(valor: number): number {
    if (valor > 100){
        return valor * 0.9;
    }
    return valor;
}