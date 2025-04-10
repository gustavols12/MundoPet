
# 🐶 Mundo Pet

Aplicação de e-commerce voltada para produtos pets. O usuário pode visualizar produtos, adicionar itens ao carrinho, aplicar cupons de desconto e finalizar a compra via WhatsApp.

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

## 🧩 Funcionalidades

- Listagem de produtos
- Página de detalhes dos produtos
- Aplicação de cupons de desconto
- Escolha de forma de pagamento
- Finalização do pedido via WhatsApp

## 🌐 API

A aplicação utiliza uma API hospedada na plataforma Render:

🔗 **https://mundopet-api-1.onrender.com/db**

- Endpoint de produtos: `/products`

A API foi migrada do ambiente local (`json-server`) para um ambiente online, para garantir acessibilidade em produção. O arquivo `db.json` ainda está presente na raiz do projeto como referência.

## 🖥️ Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/gustavols12/MundoPet.git
   ```

2. Instale as dependências:
   ```bash
   cd MundoPet
   npm install
   ```

3. Execute o projeto:
   ```bash
   npm run dev
   ```

A aplicação estará disponível em: `http://localhost:5173`

## 💡 Cupons de desconto válidos

- `primeira`
- `primeira10`
- `mundopet`
- `mundopet10`

Aplicam 10% de desconto no total do pedido.

## 📦 Estrutura de pastas

```
src/
├── components/
├── context/
│   └── CartContext.tsx
├── pages/
│   ├── home/
│   ├── detail/
│   └── cart/
├── services/
│   └── api.ts
└── App.tsx
```



