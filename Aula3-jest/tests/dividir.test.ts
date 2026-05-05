import { dividir } from '../src/dividir';

describe('funçao dividir', () => {

    it('deve dividir dois números corretamente', () => {
        expect(dividir(10, 2)).toBe(5);
    });

    it('deve lançar um erro ao tentar dividir por zero', () => {
        expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida.");
    });

});