import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-extrabold text-[#FF9019]">404</h1>
      <p className="text-xl mt-4 text-[#1d1d1d] font-semibold">
        Opa! Página não encontrada.
      </p>
      <p className="mt-2 text-[#555]">
        Parece que você tentou acessar uma página que não existe.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-[#FF9019] text-white font-bold rounded hover:brightness-110 transition-all"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
