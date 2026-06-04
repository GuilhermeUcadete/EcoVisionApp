# 🌱 EcoVisionApp

## 📖 Sobre o projeto

O **EcoVisionApp** é um aplicativo mobile desenvolvido com o objetivo de promover a conscientização ambiental e incentivar práticas mais sustentáveis no dia a dia. A aplicação utiliza tecnologias modernas de desenvolvimento, como React Native com Expo, para oferecer uma experiência acessível, intuitiva e funcional aos usuários.

O projeto foi pensado para centralizar informações ambientais relevantes em uma única plataforma, permitindo que o usuário acompanhe métricas, visualize dados em tempo real e receba alertas importantes relacionados ao meio ambiente. A presença de funcionalidades como dashboard, análise de dados, sistema de alertas e visualização em mapa torna a experiência mais completa e interativa.

Além disso, o EcoVisionApp integra serviços externos e APIs para coleta de dados, incluindo informações obtidas por meio de monitoramento e serviços relacionados a satélites. Isso possibilita uma análise mais precisa e atualizada do ambiente, auxiliando na tomada de decisões mais conscientes.

---

## Integrantes

Eduardo da Silva Lima (RM: 554804)

Estevam Melo (RM: 555124)

Enzo Bonacasatta (RM: 555372)

Guilherme Ulacco (RM: 558418)

Matheus Hostim (RM: 556517)

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
├── .gitignore
└── README.md
```

---

## 🚀 Como executar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/GuilhermeUcadete/EcoVisionApp.git
```

### 2. Acesse a pasta do projeto
```bash
cd EcoVisionApp
```

### 3. Instale as dependências
```bash
npm install
```

### 4. Execute o projeto
```bash
npx expo start --tunnel
```

---

## 📡 Integrações

O aplicativo utiliza:

- APIs externas para obtenção de dados  
- Serviços de satélite para monitoramento ambiental (`satelliteService.js`)  

---

## 🎯 Objetivo

O **EcoVisionApp** foi desenvolvido com o objetivo de ajudar usuários a compreenderem melhor o ambiente, fornecendo informações úteis para incentivar decisões mais sustentáveis.

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos de:

- Desenvolvimento mobile com React Native  
- Estruturação de projetos  
- Consumo de APIs  
- Organização de código em componentes reutilizáveis  
- Versionamento com Git e GitHub  

