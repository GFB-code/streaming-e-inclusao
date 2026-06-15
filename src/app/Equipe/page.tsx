import Image from "next/image";
import Rodape from "@/data/Rodape";
import Artigo from "@/data/Artigo1";
import Layout from "@/data/Layout";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-600 to-neutral-800 text-[#ffffff] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-12 text-blue-400">Feito por:</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-sky-700 p-8 rounded-lg hover:bg-sky-600 transition-colors text-center">
            <p className="text-neutral-300 mb-2">Aluno:</p>
            <h2 className="text-2xl font-bold text-white mb-4">Gustavo Fernandes Barbosa</h2>
            <p className="text-neutral-300">Turma: <span className="text-white font-semibold">2DSB</span></p>
          </div>

          <div className="bg-sky-700 p-8 rounded-lg hover:bg-sky-600 transition-colors text-center">
            <p className="text-neutral-300 mb-2">Aluno:</p>
            <h2 className="text-2xl font-bold text-white mb-4">Manoel Carlos</h2>
            <p className="text-neutral-300">Turma: <span className="text-white font-semibold">2DSB</span></p>
          </div>
        </section>
      </div>
    </main>
  );
}
