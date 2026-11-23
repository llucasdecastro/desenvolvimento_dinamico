# Respostas — Tarefa de Pipes

Aluno: Lucas de Castro Paranhos Tourinho
Disciplina: Desenvolvimento Dinâmico · Prof. João Guedes de Brito
Projeto: agenda-unijorge

## Questões

**1. Por que não basta trocar `'cartao'` por `'Cartão de crédito'` dentro do objeto antes de mostrar? O que aconteceria ao editar esse participante e salvar?**

O backend espera o código `cartao`. Se eu trocar o valor dentro do objeto, o texto de tela passa a ser o dado. Ao editar e salvar, o objeto voltaria para a API com `'Cartão de crédito'`, que o sistema não reconhece como forma de pagamento. O pipe resolve isso porque só muda o que aparece na tela e o dado guardado continua `cartao`.

**2. Leia em voz alta a linha `{{ evento.titulo | slice:0:10 | uppercase }}`. Qual é a saída para `'Semana de Tecnologia'`?**

"Pegue `evento.titulo`, passe por `slice` de 0 a 10, e depois passe por `uppercase`." O `slice:0:10` devolve `Semana de ` (10 caracteres, contando o espaço no fim) e o `uppercase` deixa tudo em maiúsculas. A saída é `SEMANA DE ` (com um espaço no final).

**3. O `telefone` devolve o valor original quando não reconhece o formato. Por que isso é melhor do que devolver `''` ou `'inválido'`?**

Porque o pipe só formata, não valida. Devolver o valor original não esconde o dado: a pessoa ainda vê o que foi digitado e percebe o problema. `''` faria o telefone sumir da tela sem erro, e `'inválido'` seria um julgamento que não cabe ao pipe (o número pode estar certo, só em outro formato). Quem valida é o formulário.

**4. Por que o `diasPara` recebe o `hoje` como parâmetro? O que ficaria impossível de testar sem isso?**

Porque assim o teste pode passar uma data fixa (`new Date(2026, 10, 10)`) e o resultado fica sempre igual. Sem o parâmetro, o pipe leria a data real do computador, e a tabela do tipo "Faltam 10 dias" só estaria certa em um dia do ano. Os testes quebrariam amanhã.

**5. Com a tela aberta, um evento marcado como "Hoje" não muda para "Encerrado" à meia-noite. Por quê?**

Porque o pipe é puro: o Angular só chama o `transform` de novo quando o valor de entrada muda (a referência ou o texto da data). A data do evento continua a mesma, então o resultado antigo é reaproveitado e o "hoje" não é relido. Só atualiza ao recarregar a tela ou se a data mudar.

**6. Você precisa mostrar só os participantes que pagaram por Pix. Pipe ou `computed`? Justifique.**

`computed`. Pipe é para formatar um valor, e filtrar é trabalhar com a lista. Além disso, o pipe só roda de novo quando a referência da lista muda, então um `push` de um novo participante não atualizaria o filtro. O `computed` acompanha o que a lista tem dentro e recalcula sozinho.

## Desafio

**3. `mascaraEmail`: por que isso tem a ver com a LGPD, e por que o pipe não protege o dado de verdade?**

E-mail é dado pessoal, e a LGPD pede mostrar só o necessário (princípio da minimização), então esconder parte dele na lista pública reduz a exposição. Mas o pipe só muda o texto na tela: o e-mail inteiro continua dentro da resposta da API, e qualquer pessoa vê isso na aba Network do navegador. Para proteger de verdade, o backend não deve enviar o e-mail completo para quem não pode vê-lo.

## O que foi feito

- `app.config.ts`: `registerLocaleData` e `LOCALE_ID: 'pt-BR'`.
- Lista de eventos (`cadastro-evento`): `date`, `uppercase` e `number`.
- Pipes criados pelo CLI em `src/app/pipes/`: `telefone`, `formaPagamento` (com `Record<FormaPagamento, string>`), `iniciais` e `diasPara` (sem `new Date(texto)` e com `hoje` como parâmetro).
- Desafio: `titulo`, `resumo` (com parâmetro) e `mascaraEmail`.
- Tela de participantes (`/participantes`), com os pipes aplicados e dados fixos.
- Testes de todas as linhas das tabelas dos itens 4 a 7: `ng test` com 49 testes passando e `ng build` sem erro.
