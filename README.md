# 🧪 Testes Automatizados com Cypress - Projeto SauceDemo

Projeto básico destinado a testar a aplicação web [SauceDemo](https://www.saucedemo.com/) aplicando o padrão **Page Object**, com foco em organização, reusabilidade e boas práticas na automação de testes end-to-end usando o Cypress.

---

## ⚙️ Tecnologias utilizadas

- **Node.js** na versão `v22.17.0`
- **Cypress** na versão `13.13.3`
- **Git** na versão `2.48.1.windows.1`
- **VScode** na versão `1.101.2`

---

## 📚 Documentações

- [Documentação Node.js](https://nodejs.org/)
- [Documentação Cypress](https://docs.cypress.io/)
- [Documentação NVM](https://github.com/nvm-sh/nvm)

---

## 🧰 Como instalar o ambiente

Abrir algum terminal e digitar:

🔁 1. Fazer o clone do repositório e redirecionar para a pasta
```bash
git clone https://github.com/Railson95/qa-soucedemo-automation-cypress.git
cd qa-soucedemo-automation-cypress
```

✅ 2. Verificar se o Node.js está instalado

```bash
node -v
```
Se o retorno for algo como v22.17.0, o Node já está instalado. Caso contrário, siga os passos abaixo.

🛠️ 3. Instalar o NVM (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.nvm/nvm.sh
```

📦 4. Instalar o Node.js na versão correta
```bash
nvm install 22.17.0
```

📁 5. Instalar o Cypress
Dentro da pasta do projeto, execute:
```bash
npm install cypress@13.13.3 --save-dev
```

▶️ Como rodar os testes
- Execute o seguinte comando para abrir a interface visual do Cypress, permitindo executar os testes criados.

```bash
npx cypress open
```

🗂️ Pré-requisitos
Node.js na versão 22.17.0

- npm (instalado junto com o Node.js)
- Git (opcional, mas recomendado)

✍️ Autor
Railson Martins da Mata
Projeto educacional com fins de prática em automação de testes com Cypress, explorando o padrão Page Object.