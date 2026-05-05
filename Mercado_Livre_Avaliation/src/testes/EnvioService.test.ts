import { EnvioService } from '../services/EnvioService';

describe('EnvioService com mock', () => {

  const mockTransportadora = {
    enviar: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve processar envio com sucesso quando dados são válidos', () => {
    mockTransportadora.enviar.mockReturnValue(true);

    const service = new EnvioService(mockTransportadora);

    const resultado = service.processarEnvio(10, '06000-000');

    expect(resultado).toBe('Envio processado com sucesso');
    expect(mockTransportadora.enviar).toHaveBeenCalledWith(10, '06000-000', 20);
  });

  it('deve lançar erro quando CEP for vazio', () => {
    const service = new EnvioService(mockTransportadora);

    expect(() => service.processarEnvio(10, '')).toThrow('CEP obrigatório');

    expect(mockTransportadora.enviar).not.toHaveBeenCalled();
  });

  it('deve lançar erro quando peso passar de 50kg', () => {
    const service = new EnvioService(mockTransportadora);

    expect(() => service.processarEnvio(60, '06000-000'))
      .toThrow('Peso excede o limite permitido');

    expect(mockTransportadora.enviar).not.toHaveBeenCalled();
  });

  it('deve lançar erro quando transportadora recusar envio', () => {
    mockTransportadora.enviar.mockReturnValue(false);

    const service = new EnvioService(mockTransportadora);

    expect(() => service.processarEnvio(10, '06000-000'))
      .toThrow('Envio recusado pela transportadora');

    expect(mockTransportadora.enviar).toHaveBeenCalled();
  });

describe('EnvioService com spy', () => {
    class TransportadoraReal {
      enviar(peso: number, cep: string, frete: number): boolean {
        return true;
      }
    }
  
    it('deve chamar enviar usando spy', () => {
      const transportadora = new TransportadoraReal();
      const spy = jest.spyOn(transportadora, 'enviar');
  
      const service = new EnvioService(transportadora);
  
      const resultado = service.processarEnvio(5, '06000-000');
  
      expect(resultado).toBe('Envio processado com sucesso');
      expect(spy).toHaveBeenCalled();
    });
  });

});