import { calcularFrete } from "../src/calcularFrete";


describe ('função calcularFrete', () => {

    it('deve retornar 0 quando valor é maior que 200', () => {
        expect(calcularFrete(250)).toBe(0);
    });
    
    it('deve retornar 20 quando valor é menor ou igual a 200', () => {
        expect(calcularFrete(150)).toBe(20);
    });

});