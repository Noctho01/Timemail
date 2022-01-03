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

#

~~~
POST /agendar_email
~~~~
