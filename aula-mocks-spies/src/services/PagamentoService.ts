

export class PagamentoService {
    processarPagamento(valor: number): boolean {
      console.log(`Pagamento processado no valor de R$ ${valor}`);
      return true;
    }
  }