import Image from "next/image";
import Rodape from "@/data/Rodape";
import Artigo from "@/data/Artigo1";
import Layout from "@/data/Layout";
export default function Home() {
  return (
    <div className="bg-neutral-500">
      <Layout />
      <Rodape />
    </div>
  );
}
