# Sistema de Cadastro e Gestão de Eventos

Requisitos Funcionais:

    RF01 - Cadastro de Usuário

| ID   | Requisito | Descrição                    | Entrada                                      | Resultado Esperado             | Tipo     |
| ---- | --------- | ---------------------------- | -------------------------------------------- | ------------------------------ | -------- |
| CT01 | RF01      | Cadastro com dados válidos   | Nome, email único, senha válida, data válida | Usuário cadastrado com sucesso | Positivo |
| CT02 | RF01      | Cadastro com email duplicado | Email já existente                           | Sistema deve impedir cadastro  | Negativo |
| CT03 | RF01      | Campo nome vazio             | Nome vazio                                   | Sistema deve exibir erro       | Negativo |
| CT04 | RF01      | Email inválido               | "emailsemformato"                            | Sistema deve rejeitar          | Negativo |
| CT05 | RF01      | Senha fora do padrão         | "123"                                        | Sistema deve rejeitar          | Negativo |
| CT06 | RF01      | Data de nascimento inválida  | "14/02/1440"                                 | Sistema deve rejeitar          | Negativo |
| CT07 | RF01      | Limite de caracteres no nome | Nome muito longo                             | Sistema deve validar limite    | Negativo |

    RF02 - Login de Usuário 

| ID   | Requisito | Descrição                | Entrada                     | Resultado Esperado       | Tipo     |
| ---- | --------- | ------------------------ | --------------------------- | ------------------------ | -------- |
| CT08 | RF02      | Login com dados corretos | Email e senha válidos       | Login realizado          | Positivo |
| CT09 | RF02      | Senha incorreta          | Email válido + senha errada | Acesso negado            | Negativo |
| CT10 | RF02      | Email não cadastrado     | Email inexistente           | Acesso negado            | Negativo |
| CT11 | RF02      | Campos vazios            | Email e senha vazios        | Sistema deve exibir erro | Negativo |

    RF03 - Cadastro de Evento

| ID   | Requisito | Descrição                        | Entrada                                 | Resultado Esperado          | Tipo     |
| ---- | --------- | -------------------------------- | --------------------------------------- | --------------------------- | -------- |
| CT12 | RF03      | Cadastro válido                  | Nome, descrição, data futura, vagas > 0 | Evento criado               | Positivo |
| CT13 | RF03      | Data no passado                  | Data já ocorrida                        | Sistema deve rejeitar       | Negativo |
| CT14 | RF03      | Número de participantes inválido | Valor negativo ou zero                  | Sistema deve rejeitar       | Negativo |
| CT15 | RF03      | Campos obrigatórios vazios       | Nome ou data vazio                      | Sistema deve rejeitar       | Negativo |
| CT16 | RF03      | Nome muito longo                 | Texto grande                            | Sistema deve validar limite | Negativo |

    RF04 - Listagem de Eventos

| ID   | Requisito | Descrição                 | Entrada                  | Resultado Esperado          | Tipo     |
| ---- | --------- | ------------------------- | ------------------------ | --------------------------- | -------- |
| CT17 | RF04      | Listar eventos existentes | Eventos cadastrados      | Lista exibida corretamente  | Positivo |
| CT18 | RF04      | Listar sem eventos        | Nenhum evento cadastrado | Lista vazia exibida         | Positivo |
| CT19 | RF04      | Verificar campos exibidos | Eventos cadastrados      | Nome, data e vagas exibidos | Positivo |

    RF05 - Inscrição em Evento

| ID   | Requisito | Descrição               | Entrada                                 | Resultado Esperado    | Tipo     |
| ---- | --------- | ----------------------- | --------------------------------------- | --------------------- | -------- |
| CT20 | RF05      | Inscrição válida        | Usuário autenticado + evento disponível | Inscrição realizada   | Positivo |
| CT21 | RF05      | Inscrição duplicada     | Mesmo usuário no mesmo evento           | Sistema deve impedir  | Negativo |
| CT22 | RF05      | Evento lotado           | Evento sem vagas                        | Sistema deve impedir  | Negativo |
| CT23 | RF05      | Evento já ocorrido      | Data passada                            | Sistema deve impedir  | Negativo |
| CT24 | RF05      | Usuário não autenticado | Sem login                               | Sistema deve bloquear | Negativo |

    RF06 - Cancelamento de Inscrição

| ID   | Requisito | Descrição                   | Entrada                | Resultado Esperado           | Tipo     |
| ---- | --------- | --------------------------- | ---------------------- | ---------------------------- | -------- |
| CT25 | RF06      | Cancelamento válido         | Usuário inscrito       | Inscrição cancelada          | Positivo |
| CT26 | RF06      | Cancelar sem inscrição      | Usuário não inscrito   | Sistema deve impedir         | Negativo |
| CT27 | RF06      | Verificar liberação de vaga | Cancelamento realizado | Vaga disponível incrementada | Positivo |

Requisitos Não Funcionais:

    RNF01 - Validação de Campos

| ID   | Requisito | Descrição                  | Entrada              | Resultado Esperado       | Tipo     |
| ---- | --------- | -------------------------- | -------------------- | ------------------------ | -------- |
| CT28 | RNF01     | Campos obrigatórios vazios | Qualquer campo vazio | Sistema deve exibir erro | Negativo |


    RNF02 - Segurança de Senha

| ID   | Requisito | Descrição             | Entrada    | Resultado Esperado | Tipo     |
| ---- | --------- | --------------------- | ---------- | ------------------ | -------- |
| CT29 | RNF02     | Senha válida          | "Kaua_67"  | Aceita             | Positivo |
| CT30 | RNF02     | Sem maiúscula         | "kaua_67"  | Rejeitada          | Negativo |
| CT31 | RNF02     | Sem número            | "Kauannnn" | Rejeitada          | Negativo |
| CT32 | RNF02     | Menos de 8 caracteres | "Kau"      | Rejeitada          | Negativo |

    RNF03 - Tempo de Resposta

| ID   | Requisito | Descrição         | Entrada                    | Resultado Esperado    | Tipo     |
| ---- | --------- | ----------------- | -------------------------- | --------------------- | -------- |
| CT33 | RNF03     | Tempo de listagem | Muitos eventos cadastrados | Resposta ≤ 2 segundos | Positivo |


    RNF04 - Compatibilidade

| ID   | Requisito | Descrição        | Entrada           | Resultado Esperado    | Tipo     |
| ---- | --------- | ---------------- | ----------------- | --------------------- | -------- |
| CT34 | RNF04     | Chrome           | Acesso ao sistema | Funciona corretamente | Positivo |
| CT35 | RNF04     | Firefox          | Acesso ao sistema | Funciona corretamente | Positivo |
| CT36 | RNF04     | Edge             | Acesso ao sistema | Funciona corretamente | Positivo |

    RNF05 - Integridade de Dados

| ID   | Requisito | Descrição                      | Entrada        | Resultado Esperado            | Tipo     |
| ---- | --------- | ------------------------------ | -------------- | ----------------------------- | -------- |
| CT37 | RNF05     | Verificar duplicidade de email | Email repetido | Sistema deve impedir cadastro | Negativo |
