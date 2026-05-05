import { PagamentoService } from './PagamentoService';

export class PedidoService {
  constructor(private pagamentoService: PagamentoService) {}

  finalizarPedido(valor: number): string {
    if (valor <= 0) {
      throw new Error('Valor do pedido deve ser maior que zero');
    }

    if (valor > 1000) {
        throw new Error('Valor acima do limite permitido');
    }

    const pagamentoAprovado = this.pagamentoService.processarPagamento(valor);
    
    if (!pagamentoAprovado) {
      throw new Error('Pagamento não aprovado');
    }

    return 'Pedido finalizado com sucesso';
  }
  
}