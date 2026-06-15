import Image from "next/image";
import Rodape from "@/data/Rodape";
import Artigo from "@/data/Artigo1";
import Layout from "@/data/Layout";
export default function Home() {
  return (
    <main className="bg-neutral-500 h-screen">
      <h1 className="text-center text-xl">Feito por: </h1>
      <div className="flex flex-col-2 max-w-1/2 m-auto mt-10">
        <div className="w-80 h-1/4 m-auto p-5 bg-sky-950 hover:bg-sky-900 rounded">
        <p>Aluno: Gustavo Fernandes Barbosa</p>
        <p>Turma: 2DSB</p>
        </div>

        <div className="w-80 h-1/4 m-auto p-5 bg-sky-950 hover:bg-sky-900 rounded">
        <p>Aluno: Manoel Carlos</p>
        <p>Turma: 2DSB</p>
        </div>
      </div>
    </main>
  );
}
