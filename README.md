
# 🐾 MundoPet

**MundoPet** é uma aplicação web que simula funcionalidades de um e-commerce voltado para o universo pet. Desenvolvida com **React.js**, **TypeScript**, **Tailwind CSS** e **JSON Server**, a aplicação permite ao usuário visualizar produtos, acessar detalhes, adicionar ao carrinho, aplicar cupons e escolher formas de pagamento.

---

## 🚀 Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [JSON Server](https://github.com/typicode/json-server)

---

## 💻 Como Rodar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/gustavols12/MundoPet.git
cd MundoPet
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de API fake com o JSON Server:**

```bash
npx json-server --watch db.json --port 3000
```

4. **Rode o servidor de desenvolvimento do Vite:**

```bash
npm run dev
```

5. **Acesse no navegador:**

```
http://localhost:5173
```

---

## 🛒 Funcionalidades

- ✅ Listagem de produtos populares
- ✅ Página de detalhes do produto
- ✅ Adicionar e remover produtos do carrinho
- ✅ Persistência do carrinho com `localStorage`
- ✅ Aplicação de cupons de desconto
- ✅ Seleção de formas de pagamento
- ✅ Navegação entre páginas com React Router
- ✅ Estilização com Tailwind CSS

---

## 📂 Estrutura do Projeto

```bash
src/
├── components/       # Componentes reutilizáveis (Header, Layout, etc.)
├── context/          # Lógica global (ex: carrinho de compras)
├── pages/            # Páginas principais (Home, Cart, Detail, NotFound)
├── services/         # Integração com API fake (JSON Server)
├── App.tsx           # Componente principal da aplicação
└── main.tsx          # Ponto de entrada da aplicação
```

---

## 📦 Observações

- O estado do carrinho é gerenciado por meio do **React Context**.
- A API fake está em `db.json`, e é utilizada para simular requisições HTTP reais.

---

## ✨ Resultado

Acesse o repositório e confira a aplicação em funcionamento!

🔗 [MundoPet no GitHub](https://github.com/gustavols12/MundoPet)

