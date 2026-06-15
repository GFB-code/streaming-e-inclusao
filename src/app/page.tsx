import Image from "next/image";
import Rodape from "@/data/Rodape";
import Artigo1 from "@/data/Artigo1";
import Artigo2 from "@/data/Artigo2";
import Artigo3 from "@/data/Artigo3";
import Page from "@/data/Page";

export default function Home() {
  return (
    <main className="bg-neutral-600 min-h-screen text-white py-8 px-4">
      <Page />
      
      <section className="max-w-6xl mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          <Artigo1 />
          <Artigo2 />
          <Artigo3 />
        </div>
      </section>
      
      <Rodape />
    </main>
  );
}
