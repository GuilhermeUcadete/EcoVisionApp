# 🌱 EcoVisionApp# 🌱 Eco **EcoVisionApp** é um aplicativo mobile desenvolvido com React Native (Expo) que tem como objetivo promover a sustentabilidade através de monitoramento, alertas e visualização de dados ambientais.

---

## 📱 Funcionalidades

- 📊 Dashboard com métricas ambientais
- 🚨 Sistema de alertas
- 🗺️ Visualização em mapa
- 📈 Análise de dados
- ⚙️ Configurações personalizadas
- 🔐 Tela de login
- 📡 Integração com dados externos

---

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- Node.js
- APIs externas
- ESLint

---

## 📂 Estrutura do projeto

```bash
EcoVisionApp/
│
├── app/                 # Telas principais do app
│   ├── alerts.js
│   ├── analysis.js
│   ├── dashboard.js
│   ├── index.js
│   ├── login.js
│   ├── map.js
│   └── settings.js
│
├── components/          # Componentes reutilizáveis
│   ├── AlertCard.js
│   ├── CustomButton.js
│   ├── Header.js
│   ├── MapCard.js
│   └── MetricCard.js
│
├── services/            # Integração com APIs e serviços externos
│   ├── api.js
│   └── satelliteService.js
│
├── utils/               # Funções auxiliares
│   └── helpers.js
│
├── constants/           # Constantes do projeto
│   └── colors.js
│
├── app.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── eslint.config.js

🚀 Como executar o projeto

1. Clone o repositório

```
Shellgit clone https://github.com/GuilhermeUcadete/EcoVisionApp.gitMostrar mais linhas
```

2. Acesse a pasta do projeto

```
cd EcoVisionAppMostrar
```

3. Instale as dependências

```
npm install
```

4. Execute o projeto

```
npx expo start --tunnel
```

📡 Integrações
O aplicativo utiliza:

APIs externas para obtenção de dados
Serviços de satélite para monitoramento ambiental (via satelliteService.js)


🎯 Objetivo
O EcoVisionApp foi desenvolvido com o objetivo de ajudar usuários a compreenderem melhor o ambiente, fornecendo informações úteis para incentivar decisões mais sustentáveis.

📚 Aprendizados
Durante o desenvolvimento deste projeto, foram aplicados conceitos de:

Desenvolvimento mobile com React Native
Estruturação de projetos
Consumo de APIs
Organização de código em componentes reutilizáveis
Boas práticas de versionamento com Git e GitHub
└── README.md

