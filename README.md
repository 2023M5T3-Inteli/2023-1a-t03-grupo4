# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="imagens/logo-inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Desenvolvimento de serviços em cloud computing

## Cumulonimbus

### Integrantes: <a href="https://www.linkedin.com/in/beatriz-hirasaki-leite-b2261923a/">Beatriz Hirasaki</a>, <a href="https://www.linkedin.com/in/felipe-gomes-526186232/">Felipe Gomes</a>, <a href="https://www.linkedin.com/in/gabrielriostorres/">Gabriel Rios</a>, <a href="https://www.linkedin.com/in/mateus-neves-3b767123b/">Mateus Neves</a>, <a href="https://www.linkedin.com/in/mike-mouadeb-24b781224/">Mike Mouadeb</a>, <a href="https://www.linkedin.com/in/priscila-falc%C3%A3o-3435a1244/">Priscila Falcão</a> e <a href="https://www.linkedin.com/in/wagner-estevam/">Wagner Estevam</a>. 

## Descrição

### 💻 Projeto
<br><br>
O projeto é uma aplicação web em cloud, baseado na arquitetura de 3 camadas, contendo: front-end, back-end e banco de dados hospedados na AWS.
<br><br>
<p align="center">
<img src="imagens/Logo-Full_Name_NoBG.png" alt="Cumulonimbus" border="0" style="max-width: 100px;"g>
=======
</p>


➕ MAIS SOBRE
<br><br>
Muitos profissionais de T.I se interessam por aprender novas tecnologias. Por exemplo, uma pessoa que trabalha com Front-end usando JavaScript quer aprender Ciência de Dados e programar em Python. Assim, pôde se observar essa demanda na Dell, onde alguns profissionais estão saindo da empresa por não estarem se sentindo desafiados e não estarem tendo oportunidades de ganhar novos conhecimentos. Isso tem gerado preocupação para a empresa que busca novos mecanismos para a permanência de deus colaboradores.
<br><br>
Neste sentido, com o objetivo de manter o engajamento de seus funcionários, o grupo Cumulonimbus desenvolveu uma aplicação web em nuvem, a fim de centralizar e conectar essa demanda dos funcionários de adquirirem novos conhecimentos com a oferta de projetos temporários que há na companhia. Com a segurança e escalabilidade que os serviços em nuvem oferecem, o projeto conta com a estrutura da AWS para desenvolver as suas diferentes camadas da aplicação.
<br><br>

## 💾 Estrutura de pastas
|📂[imagens](/imagens)<br>
|📂[src](/src)<br>
  &emsp;|📂[Back-end](/src/backend)<br>
      &emsp; &emsp;|📂[src](/src/backend/src)<br>
      &emsp; &emsp; &emsp;|📂[auth](/src/backend/src/auth)<br>
      &emsp; &emsp; &emsp;|📂[controller](/src/backend/src/controller)<br>
      &emsp; &emsp; &emsp;|📂[module](/src/backend/src/module)<br>
      &emsp; &emsp; &emsp; &emsp;|📂[dto](/src/backend/src/module/dto)<br>
      &emsp; &emsp; &emsp; &emsp;|📂[entity](/src/backend/src/module/entity)<br>
      &emsp; &emsp; &emsp;|📂[services](/src/backend/src/services)<br>
  &emsp;|📂 [Front-end](/src/frontend)<br>
  &emsp; &emsp;|📂[build](/src/frontend/build)<br>
  &emsp; &emsp; &emsp;|📂[static](/src/frontend/build/static)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[css](/src/frontend/build/static/css)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[js](/src/frontend/build/static/js)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[media](/src/frontend/build/static/media)<br>
  &emsp; &emsp;|📂[public](/src/frontend/public)<br>
  &emsp; &emsp;|📂[src](/src/frontend/src)<br>
  &emsp; &emsp; &emsp;|📂[assets](/src/frontend/src/assets)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[images](/src/frontend/src/assets/images)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[svg/DellLogo](/src/frontend/src/assets/svg/DellLogo)<br>
  &emsp; &emsp; &emsp;|📂[components](/src/frontend/src/components)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[Modal](/src/frontend/src/components/Modal)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[Ranking](/src/frontend/src/components/Ranking)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[components_css](/src/frontend/src/components/components_css)<br>
  &emsp; &emsp; &emsp;|📂[pages](/src/frontend/src/pages)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[addProject](/src/frontend/src/pages/addProject)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[home](/src/frontend/src/pages/home)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[login](/src/frontend/src/pages/login)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[profile](/src/frontend/src/pages/profile)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[projects](/src/frontend/src/pages/projects)<br>
  &emsp; &emsp; &emsp; &emsp;|📂[submit](/src/frontend/src/pages/submit)<br>
  &emsp; &emsp; &emsp;|📂[routes](/src/frontend/src/routes)<br>
  &emsp; &emsp; &emsp;|📂[scripts](/src/frontend/src/scripts)<br>
  &emsp; &emsp; &emsp;|📂[styles](/src/frontend/src/styles)<br>
  &emsp; &emsp; &emsp;|📂[themes](/src/frontend/src/themes)<br>
|📄[readme.md](/README.md)<br>


## 🛠 Instalação

1 - Clone do GitHub atual
<br>
2 - Para rodar localmente o projeto, é necessário:
&emsp 2.1 - Rodar no prompt de comando dentro da pasta backend/src o comando ```npm run start:dev``` ;
&emsp 2.2 - Rodar no prompt de comando dentro da pasta frontend/src o comando ```npm start``` ;
<br>
3 - O projeto já está pronto para teste local.
<br>

## 💻 Configuração para Aplicação

1 - Criação de VPC e subredes na AWS
<br>
2 - Criação de EC2 na AWS
<br>
3 - Criação de LoadBalancer na AWS
<br>
4 - Criação de RDS na AWS
<br>
5 - Configuração de variáveis de ambiente para a ligação com os serviços AWS
<br>
6 - Criação de S3 na AWS

## 📄 Histórico de lançamentos

A cada atualização os detalhes devem ser lançados aqui.

* Sprint 1 - 10/02/2023
    * Wireframe
    * Arquitetura do sistema V1
    * Matriz SWOT
    * Value Proposition Canvas 
    * Diagrama de sequência do fluxo de dados
    * 5 Forças de Potter
    * Matriz de risco
    * Casos de uso
    * Especificação dos requisitos
* Sprint 2 - 24/02/2023
    * Desenvolvimento GitFlow
    * Definição da arquitetura de pastas
    * Produção de VPCs e subredes
    * Produção de instâncias na EC2
    * Produção de buckets no S3
    * Modelo lógico de dados
    * Modelo conceitual de dados
    * Endpoints TDD
    * Arquitetura da solução V2
    * Adaptação do wireframe para os requistos do cliente
* Sprint 3 - 10/03/2023
    * Back-end com enpoints funcionais
    * Documentação API
    * Front-end em React
    * Arquitetura da solução V3
    * Produção de banco de dados no RDS
* Sprint 4 - 24/03/2023
    * Mudança de ORM (TypeORM)
    * Parte da integração
* Sprint 5 - 07/04/2023
    * Finalização da integração
    * Ajuste de erros
    * Manual do usuário

## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. <https://github.com/iuricode/readme-template>
2. <https://github.com/gabrieldejesus/readme-model>
3. <https://creativecommons.org/share-your-work/>
4. <https://freesound.org/>
5. Músicas por: <a href="https://freesound.org/people/DaveJf/sounds/616544/"> DaveJf </a> e <a href="https://freesound.org/people/DRFX/sounds/338986/"> DRFX </a> ambas com Licença CC 0.
