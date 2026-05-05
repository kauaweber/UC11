import { calculardesconto } from "../src/calculardesconto";

describe('função calcularDesconto', () => {

    it('deve aplicar desconto quando valor é maior que 100', () => {
        expect(calculardesconto(200)).toBe(180);
    });
    
    it('não deve aplicar desconto quando valor é menor ou igual a 100', () => {
        expect(calculardesconto(100)).toBe(100);
    });

});