import { multiplicacao } from '../src/multiplicacao';

test('deve multiplica dois numeros', () => {
    expect(multiplicacao(2, 3)).toBe(6);

});