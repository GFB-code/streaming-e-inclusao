import Image from "next/image";
import Rodape from "@/data/Rodape";
import Artigo from "@/data/Artigo";

export default function Home() {
  return (
    <div>
      <Artigo></Artigo>
      <Rodape />
    </div>
  );
}
