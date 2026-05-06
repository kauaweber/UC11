export function statusaluno(nota: number, freq: number): string {
    if(nota >= 70 && freq >= 75) {
        return "Aprovado";
    } else if (nota >= 70 && freq <= 75) {
        return "Recuperaçao";
    }
    return "Reprovado";
}