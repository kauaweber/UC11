import { statusaluno } from "../src/statusaluno";

describe("funçao statusaluno", () => {
    it("deve retornar aprovado com nota acima ou igual 70 e frequencia superior a 75", () => {
        expect(statusaluno(70, 80)).toBe("Aprovado");
    });
    
    it("deve retornar recuperaçao com nota acima ou igual 70 e frequencia inferior ou igual a 75", () => {
        expect(statusaluno(70, 72)).toBe("Recuperaçao");
    });

    it("deve retornar reprovado com nota abaixo 70 e frequencia inferior ou igual a 75", () => {
        expect(statusaluno(60, 75)).toBe("Reprovado");
    });
})