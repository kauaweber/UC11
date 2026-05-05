import { validaridade } from "../src/validaridade";

describe('Função validarIdade', () => {

    it('deve retornar false para idades maiores ou iguais a 18', () => {
        expect(validaridade(18)).toBeTruthy();
     
    });

    it('deve retornar true para idades menores que 18', () => {
        expect(validaridade(17)).toBeFalsy();
       
    });

});