<div align="center"><a href="https://github.com/Noctho01/Timemail"><img height="60px" src="https://img.shields.io/badge/%E2%8C%9A%20TIME-MAIL%20%20%F0%9F%93%A7-blue"></a></div>

#

Ola!👋 me chamo Vinicius Rodrigues e fiz essa pequena api para colocar em pratica o que estou aprendendo na area de desenvolvimento back-end.

Esta API consiste em agendar o envio de emails para seus destinatarios, com o tempo irei adicionar mais features em versoes futuras
(Convido a qualquer um que queira agregar a esse projeto com o intuito de praticar seus conhecimentos em back-end)

#

### ⛳ END POINTS
~~~
GET /agendar_email
~~~
![img1](https://github.com/Noctho01/Timemail/blob/main/documentacao/img1.png)

**1** . metodo GET com a URL de acesso host/agendar_email para

**2** . Resposta:
~~~~json
{
  "remetente" : "remetenteEmail@mail.com",
  "service" : "gmail por exemplo",
  "psw" : "suaSenha123",
  "psw_confirmation" : "suaSenha123",
  "assunto" : "foo",
  "texto" : "bar",
  "destinatarios" : [
      {
          "endereco" : "destinatarioEmail@mailcom",
          "date" : "* * * * * *"
      }
   ]
}
~~~~
### "remetente" [String]
endereco de email que será responsavel pelo envio da mensagem;

### "service" [String]
servico de email a qual o endereço em <remetente> se refere;

### "psw" & "psw_confirmation" [String]
senha acesso ao seu email e a confirmacão;

### "assunto" [String]
assunto da mensagem de email

### "texto" [String]
texto com a mensagem que sera enviada ao(s) destinatario(s)

### "destinatarios" [Array]
Lista de objetos referentes aos destinatarios da mensagem
  ### "endereco"
  endereço de email do destinatario
  
  ### "date"
  marca o time de envio do email
  em date cada * representa um registro segundos, minutos, horas, dia, mes, dia_da_semna(ex: sunday) nessa respectiva ordem
  Exemplo:
  ~~~~json
  "date" : "0 30 12 5 1 monday"
  ~~~~

~~~
POST /agendar_email
~~~~
