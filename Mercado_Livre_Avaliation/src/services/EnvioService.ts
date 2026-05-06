
export class EnvioService { 
    constructor(private transportadoraService: any) {} 
   
    processarEnvio(peso: number, cep: string): string { 
      if (!cep) { 
        throw new Error('CEP obrigatório!'); 
      } 
   
      if (peso > 50) { 
        throw new Error('Peso excede o limite permitido!'); 
      } 
   
      const frete = peso <= 10 ? 20 : 40; 
   
      const aprovado = this.transportadoraService.enviar(peso, cep, frete); 
   
      if (!aprovado) { 
        throw new Error('Envio recusado pela transportadora!'); 
      } 
   
      return 'Envio processado com sucesso'; 
    } 
  }