### Oauth Autenticação

<p>Aqui aprendi fazer login com o google e github, tive que criar um novo projeto no google cloud platform, configurar um novo projeto com as urls permitidas, depois criei as credenciais e o projeto funcionou corretamente, no github o processo foi semelhante, criei um projeto, adicionei as urls criei as credenciais e configurei o projeto, foi minha primeira experiência com esse tipo de login.</p>

<img src=""/>

### Features

- [x] Api de login com Google e Github [Backend]
- [x] Lista de atrativos [Frontend]
- [x] Sistema de rotas com react-router-dom [Frontend]

### Pré requisitos
Antes de iniciar você precisa ter o [Node](https://nodejs.org/en/) instalado na sua máquina. É bom também ter um editor de código como [VSCode](https://code.visualstudio.com/).

```bash
    # Clone o repositório
    $ git clone <https://github.com/d8web/Mern-oauth-google-and-github/>

    # Acesse a pasta do projeto que acabou de clonar
    $ cd Mern-oauth-google-and-github/backend

    # Instale as dependências
    $ npm install ou yarn

    # Executar o projeto
    $ npm start ou yarn start

    # O servidor vai iniciar no endereço http://localhost:5000

    # Acesse a pasta do projeto que acabou de clonar
    $ cd Mern-oauth-google-and-github/frontend

    # Instale as dependências
    $ npm install ou yarn

    # Executar o projeto
    $ npm start ou yarn start

    # O servidor vai iniciar no endereço http://localhost:3000
```

### Configurações do projeto

Para o projeto rodar você precisa configurar suas credenciais no arquivo passport.js [backend].

<ul style="list-style: none">
    <li>GOOGLE_CLIENT_ID</li>
    <li>GOOGLE_CLIENT_SECRET</li>
    <li>GITHUB_CLIENT_ID</li>
    <li>GITHUB_CLIENT_SECRET</li>
</ul>

### Tecnologias

Neste projeto foram usadas as seguintes tecnologias

- [React JS](https://pt-br.reactjs.org/)
- [Node JS](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Passport](https://www.passportjs.org/)

<hr/>
Criado com dedicação por <a href="https://github.com/d8web/" target="_blank">Daniel</a>.