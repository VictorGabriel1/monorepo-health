# Monorepo Health

## Descrição

Este projeto é um monorepo para uma aplicação de saúde que inclui uma API, um front-end web e um aplicativo móvel. Utiliza `pnpm` para gerenciamento de pacotes, `Docker` para a API e `Android Studio` para o aplicativo móvel.

## Requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados no seu sistema:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) ou [Rancher Desktop](https://rancherdesktop.io/)
- [Android Studio](https://developer.android.com/studio)

## Instalação

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/VictorGabriel1/monorepo-health.git
cd monorepo-health
```

### Passo 2: Instale as Dependências

```bash
pnpm install
```

### Passo 3: Configure o Ambiente

- Docker: Certifique-se de que o Docker está em execução, pois vamos utilizá-lo para rodar a API.
- Rancher Desktop: Se você estiver usando o Rancher Desktop, inicie-o.

### Passo 4: Configure o Android Studio

1. Baixe e instale o Android Studio.
2. Configure um emulador Android:
   - Abra o Android Studio.
   - Vá para Configurações > AVD Manager.
   - Crie um novo dispositivo virtual.
3. Configure variáveis de ambiente:
   - Certifique-se de que `ANDROID_HOME` e `JAVA_HOME` estão configurados corretamente.

### Passo 5: Execute o Docker

- O Docker está programado para rodar na porta `5432`, verifique se a porta está disponível, pois a API se conecta com o banco nessa porta, em outro caso se for necessário alterar a porta, nos arquivos de config [packages/api/src/config/dataSource.ts](https://github.com/VictorGabriel1/monorepo-health/tree/master/packages/api/src/config/dataSource.ts) e [packages/api/src/config/typeORMconfig.ts](https://github.com/VictorGabriel1/monorepo-health/tree/master/packages/api/src/config/typeORMconfig.ts)

- Execute o Docker Compose para iniciar os serviços:
  ```bash
  docker-compose up
  ```

## Executando o Projeto

#### Aqui será necessário rodar todos os serviços em terminais diferentes, para que diminuir a chance de algo dar errado, e para conseguir usar alguns terminais, como o Metro (Terminal do React Native) por exemplo, onde você pode apertar "A" ou "R" caso o aplicativo não carregue, ou em algum erro de carragemento. Caso a API mostre um erro de conexão com o banco de dados, por favor, reinicie o computador e tente novamente, não desita.

- ### Executar a API

  A API estará disponível em `http://localhost:3001`. O Swagger dela estará disponível também, para a visulização e teste de todas as rotas, na em `http://localhost:3001/health/api#`

  ```bash
  pnpm api
  ```

- ### Executar o Front-end Web

  A aplicação web estará disponível em `http://localhost:3000`.

  ```bash
  pnpm web
  ```

- ### Executar o Aplicativo Android

  - Certifique-se de que um emulador Android está em execução ou um dispositivo está conectado via USB.

  ```bash
  pnpm android
  ```

## Funcionalidades

- Web: No aplicativo Web você é um médico, que pode logar ou se cadastar na plataforma, para ver a saúde de seus pacientes que também estão na plataforma, e lançar informações sobre suas consultas com eles no sistema.
- App: No App você é um paciente, onde pode se cadastrar ou logar para ter acesso a suas informações médicas, como suas últimas consultas, exames, resultados, e recomendações médicas para você, diretamente do seu médico.
