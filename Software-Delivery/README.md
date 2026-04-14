# Software Delivery

## Requisitos Funcionais

- Cadastro de usuários (clientes, entregadores e restaurantes)
- Login e autenticação de usuários  
- Cadastro e gerenciamento de restaurantes  
- Cadastro de produtos/cardápio  
- Busca de restaurantes e produtos  
- Realização de pedidos  
- Cálculo automático do valor total (produtos + taxa de entrega)  
- Escolha da forma de pagamento (cartão, dinheiro, pix)  
- Acompanhamento do pedido em tempo real  
- Notificações sobre o status do pedido  
- Cancelamento de pedidos  
- Avaliação de restaurantes e entregadores  
- Histórico de pedidos  

---

## Requisitos Não Funcionais

- Interface simples e fácil de usar (usabilidade)  
- Tempo de resposta rápido (desempenho)  
- Sistema disponível 24h por dia (disponibilidade)  
- Segurança dos dados dos usuários (criptografia, login seguro)  
- Compatível com celular e computador (responsividade)  
- Capacidade de atender muitos usuários ao mesmo tempo (escalabilidade)  
- Backup automático dos dados  
- Integração com APIs de pagamento (ex: Pix, cartão)  
- Localização em tempo real (GPS)  
- Facilidade de manutenção do sistema  

---

## Testes do Cadastro de Usuário

- CT01: Cadastro com dados válidos → Deve cadastrar com sucesso  
- CT02: Cadastro com campos vazios → Deve exibir erro  
- CT03: Cadastro com email inválido → Deve exibir erro de validação  
- CT04: Cadastro com senha fraca → Deve exibir erro  
- CT05: Cadastro com usuário já existente → Deve informar que já existe  

---

## Testes do Movimento de Entrega

- CT06: Atualização de status → Deve mudar de "preparando" para "entregue"  
- CT07: Atribuição de entregador → Deve vincular entregador ao pedido  
- CT08: Rastreamento em tempo real → Deve mostrar localização correta  
- CT09: Finalização da entrega → Deve marcar como entregue  
- CT10: Falha na entrega → Deve registrar erro ou reentrega  