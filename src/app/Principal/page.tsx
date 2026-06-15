import Image from "next/image";
import Rodape from "@/data/Rodape";
import Artigo from "@/data/Artigo1";
import Layout from "@/data/Layout";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-br from-neutral-600 to-neutral-800 min-h-screen">
        <Layout />
      </main>
      <Rodape />
    </>
  );
}
