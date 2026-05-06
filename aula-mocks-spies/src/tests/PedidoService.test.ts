import { PagamentoService } from "../services/PagamentoService";
import { PedidoService } from "../services/PedidoService";


describe('PedidoService', () => {
  it('deve finalizar pedido quando pagamento for aprovado', () => {
    const mockPagamentoService = {
      processarPagamento: jest.fn().mockReturnValue(true),
    };

    const pedidoService = new PedidoService(
      mockPagamentoService as any
    );

    const resultado = pedidoService.finalizarPedido(100);

    expect(resultado).toBe('Pedido finalizado com sucesso');

    expect(
      mockPagamentoService.processarPagamento
    ).toHaveBeenCalledWith(100);
  });

  it('deve lançar erro quando valor do pedido for zero', () => {
    const mockPagamentoService = {
      processarPagamento: jest.fn()
    };
  
    const pedidoService = new PedidoService(mockPagamentoService as any);
  
    expect(() => pedidoService.finalizarPedido(0)).toThrow(
      'Valor do pedido deve ser maior que zero'
    );
  
    expect(mockPagamentoService.processarPagamento).not.toHaveBeenCalled();
  });
  it('deve lançar erro quando pagamento não for aprovado', () => {
    const mockPagamentoService = {
      processarPagamento: jest.fn().mockReturnValue(false)
    };
  
    const pedidoService = new PedidoService(mockPagamentoService as any);
  
    expect(() => pedidoService.finalizarPedido(100)).toThrow(
      'Pagamento não aprovado'
    );
  
    expect(
      mockPagamentoService.processarPagamento
    ).toHaveBeenCalledWith(100);
  });

  it('deve observar se o pagamento real foi chamado usando spy', () => {
    const pagamentoService = new PagamentoService();
  
    const spy = jest.spyOn(
      pagamentoService,
      'processarPagamento'
    );
  
    const pedidoService = new PedidoService(pagamentoService);
  
    const resultado = pedidoService.finalizarPedido(150);
  
    expect(resultado).toBe('Pedido finalizado com sucesso');
  
    expect(spy).toHaveBeenCalledWith(150);
  });

  it('deve lançar erro quando valor do pedido for maior que 1000', () => {
    const mockPagamentoService = {
      processarPagamento: jest.fn()
    };
  
    const pedidoService = new PedidoService(mockPagamentoService as any);
  
    expect(() => pedidoService.finalizarPedido(1500)).toThrow('Valor acima do limite permitido');
  
    expect(mockPagamentoService.processarPagamento).not.toHaveBeenCalled();

  });

  
  
});