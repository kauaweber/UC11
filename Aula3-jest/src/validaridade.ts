export function validaridade(idade: number): boolean {
    if (idade >= 18) {
        return true;
    }
    return false;
}