# 🐾 MundoPet

**MundoPet** é uma aplicação de e-commerce voltada para produtos pet, desenvolvida com **React**, **TypeScript** e **Vite**. Ela permite ao usuário navegar entre produtos, visualizar detalhes, adicionar ao carrinho e aplicar cupons e formas de pagamento. Os dados do carrinho são persistidos no `localStorage`, mesmo após a atualização da página.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 💻 Como Rodar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/gustavols12/MundoPet.git
cd MundoPet
npm install
npm run dev

## 🛒 Funcionalidades
Listagem de produtos

° Página de detalhes do produto

° Carrinho com persistência no localStorage

° Aplicação de cupons

° Seleção de formas de pagamento

° Navegação entre páginas com React Router

## 📂 Estrutura do Projeto
bash
Copiar
Editar
src/
├── components/       # Componentes reutilizáveis (Header, Layout, etc.)
├── context/          # Contexto do carrinho de compras
├── pages/            # Páginas principais (home, cart, detail, notFound)
├── services/         # Conexão com a API
├── App.tsx           # Componente principal da aplicação
└── main.tsx          # Ponto de entrada da aplicação
