import { ehpar } from "../src/ehpar";

describe('Função ehPar', () => {

    it('deve retornar true para números pares', () => {
        expect(ehpar(4)).toBeTruthy();
    });

    it('deve retornar false para números ímpares', () => {
        expect(ehpar(3)).toBeFalsy();
    });

});