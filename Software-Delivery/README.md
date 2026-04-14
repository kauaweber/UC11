# Software Delivery

## Requisitos Funcionais

- 01: Cadastro de usuários (clientes, entregadores e restaurantes)
- 02: Login e autenticação de usuários  
- 03: Cadastro e gerenciamento de restaurantes  
- 04: Cadastro de produtos/cardápio  
- 05: Busca de restaurantes e produtos  
- 06: Realização de pedidos  
- 07: Cálculo automático do valor total (produtos + taxa de entrega)  
- 08: Escolha da forma de pagamento (cartão, dinheiro, pix)  
- 09: Acompanhamento do pedido em tempo real  
- 10: Notificações sobre o status do pedido  
- 11: Cancelamento de pedidos  
- 12: Avaliação de restaurantes e entregadores  
- 13: Histórico de pedidos  

---

## Requisitos Não Funcionais

- 01: Interface simples e fácil de usar (usabilidade)  
- 02: Tempo de resposta rápido (desempenho)  
- 03: Sistema disponível 24h por dia (disponibilidade)  
- 04: Segurança dos dados dos usuários (criptografia, login seguro)  
- 05: Compatível com celular e computador (responsividade)  
- 06: Capacidade de atender muitos usuários ao mesmo tempo (escalabilidade)  
- 07: Backup automático dos dados  
- 08: Integração com APIs de pagamento (ex: Pix, cartão)  
- 09: Localização em tempo real (GPS)  
- 10: Facilidade de manutenção do sistema  

---

## Testes do Cadastro de Usuário

- 01: Cadastro com dados válidos → Deve cadastrar com sucesso  
- 02: Cadastro com campos vazios → Deve exibir erro  
- 03: Cadastro com email inválido → Deve exibir erro de validação  
- 04: Cadastro com senha fraca → Deve exibir erro  
- 05: Cadastro com usuário já existente → Deve informar que já existe  

---

## Testes do Movimento de Entrega

- 01: Atualização de status → Deve mudar de "preparando" para "entregue"  
- 02: Atribuição de entregador → Deve vincular entregador ao pedido  
- 03: Rastreamento em tempo real → Deve mostrar localização correta  
- 04: Finalização da entrega → Deve marcar como entregue  
- 05: Falha na entrega → Deve registrar erro ou reentrega  