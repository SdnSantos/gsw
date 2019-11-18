# Desafio GSW - SMS

#### Resumo do Desafio: Criar uma aplicação em NodeJS para o envio de SMSs por um celular sem o teclado QWERTY, mandando a sequência de números para o envio de uma frase no sms e vice-versa.

  O projeto foi feito em NodeJS usando o princípio do TDD para a parte da lógica no qual inclui a transformação da mensagem em uma sequência numérica e também para o contrário, ao mandar a sequência de números é feita a conversão para letras.
    
  O TDD consiste em três etapas:
  
    - RED: o teste falha
    
    - GREEN: o teste passa podendo ser escrito sem ser com a melhor lógica
    
    - REFACTOR: Refatoração da lógica
    
    
   Para aplicação do TDD no projeto foi usado a biblioteca Jest, segue a documentação: https://jestjs.io/docs/en/getting-started e para usar o jest com sucrase: https://www.npmjs.com/package/@sucrase/jest-plugin.
   
   Obs.: Sucrase é uma biblioteca para o uso do ECMAScript, ou seja, para usar o Javascript com suas atualizações. Ao usar o sucrase há a necessidade de buildar a aplicação antes de fazer o seu deploy.
   
   Foi usado como banco de dados o MongoDB, utilizei o mongoDB Atlas pela internet.
   
   A aplicação poderá ser testada tanto localmente como pela web, pois foi feito o deploy no Heroku.
   
  ### LOCAL:
  
  Faça o download da aplicação pelo github no link:
  
    https://github.com/SdnSantos/gsw/archive/master.zip
    
  Extraia em algum local da máquina.
  
  Abra o projeto no visual studio code ou no editor de preferência.
  
  Executar no terminal o comando yarn, para baixar os módulos do projeto (irá baixar a pasta node_modules).
  
  Para executar dar o comando: yarn start
  
  Para executar os testes: yarn test
  
  ![yarn test](https://github.com/SdnSantos/gsw/blob/master/src/images/yarn%20test.png)
  
  ### WEB: 
  
  Pela web basta usar o link do heroku:
    
      https://backend-gsw.herokuapp.com/
      
  ### ROTAS:
  
  ![Rotas Insomnia](https://github.com/SdnSantos/gsw/blob/master/src/images/Rotas%20Insomnia.png)
  
  Foi usado o Insomnia para a verificação das rotas, na onde estiver: 
  
    base_url considerar http:localhost:3333,
    base_url_web considerar https://backend-gsw.herokuapp.com/
    
  Configurei essas rotas padrão conforme imagem abaixo em Base Environment:
    
  ![Base Environment](https://github.com/SdnSantos/gsw/blob/master/src/images/Base%20Environment.png) 
    
  ### Criar Contatos: 
  
  Criação de contatos, que na lógica que usei serão os destinatários das SMSs, ou seja, os contatos do celular
  
    rota: base_url_web/destinatarios
    
  Abaixo temos uma imagem dos contatos no mongoDB Atlas:
  
  ![contatos](https://github.com/SdnSantos/gsw/blob/master/src/images/Contatos.png)
  
  ### Listar Contatos:
  
    rota: base_url_web/destinatarios
    
  ### Criar SMS:
  
  Na parte de criação de SMS, usei a seguinte lógica, a pessoa terá que passar para a rota a mensagem de texto ou a sequência, daí o programa irá converter de acordo.
     
     rota: base_url_web/smss
     
  Abaixo temos uma palavra enviada como teste e é convertido para a sequência de números.
  
  ![Envio da palavra](https://github.com/SdnSantos/gsw/blob/master/src/images/Enviando%20a%20palavra.png)
  
 Agora o envio é de uma sequência de números para a conversão em letras.
 
 ![Envio de numeros](https://github.com/SdnSantos/gsw/blob/master/src/images/Enviando%20a%20sequencia%20de%20numeros.png)
  
 Envio de uma frase: OI, TUDO BEM?
 
 ![OI](https://github.com/SdnSantos/gsw/blob/master/src/images/Enviando%20OI.png)
 
 Resposta do OI: TUDO BEM SIM E VOCÊ?
 
 ![RESPOSTA](https://github.com/SdnSantos/gsw/blob/master/src/images/Resposta%20ao%20OI.png)
  
  
  ### Listar SMS:
  
    rota: base_url_web/smss
  
  ![Listagem de smss](https://github.com/SdnSantos/gsw/blob/master/src/images/Rota%20de%20listagem%20de%20smss.png)
  
 ### Listar Logs:
 
  Todas as rotas acessadas são salvas no banco na tabela logs para o controle da aplicação, as rotas de criação de SMSs salvam o usuário que envia a mensagem.
  
    rota: base_url_web/smss
  
  Abaixo temos a imagem de logs da aplicação.
  
  ![logs](https://github.com/SdnSantos/gsw/blob/master/src/images/Rota%20de%20logs.png)
  
  ### Pontos Positivos de se usar o TDD e o JEST:
  
  Com a ferramenta do Jest podemos ver o CODE COVERAGE da aplicação, que são informações das linhas de código que os testes não alcançaram, a porcentagem de testes feitos...
    
  Code Coverage:
    
  ![Code Coverage](https://github.com/SdnSantos/gsw/blob/master/src/images/Coverage.png)
    
  Abaixo o Code Coverage dos Schemas:
    
  ![Schemas](https://github.com/SdnSantos/gsw/blob/master/src/images/Coverage%20Schemas.png)
    
  Abaixo o Code Coverage dos Controllers:
    
  ![Controllers](https://github.com/SdnSantos/gsw/blob/master/src/images/Coverage%20Controllers.png)
    
  ![ContatoController](https://github.com/SdnSantos/gsw/blob/master/src/images/Coverage%20ContatoController.png)
    
  ![LogController](https://github.com/SdnSantos/gsw/blob/master/src/images/Coverage%20LogController.png)
    
  ### Próximas fases:
    
  Implementação da alteração de Contatos e deleção, já as outras rotas partindo do princípio que se você mandou a mensagem não tem como apagar, apenas o destinatário que a recebeu, então não seria implementado mais rotas.
      
  Validações das Informações como:
      
    Se está passando um email no campo email
        
    Se o número de telefone tem a quantidade certa de números
        
    Se o contato que quer criar já não existe no banco
        
   Ainda há centenas de funcionalidades para melhorar o projeto, mas fica para a próxima, só com essa parte já foi adquirido uma experiência muito boa.
       

        
        
    
    
    
    
    
    
 
