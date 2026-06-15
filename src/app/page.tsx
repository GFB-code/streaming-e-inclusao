import Image from "next/image";
import Rodape from "@/data/Rodape";
import Artigo1 from "@/data/Artigo1";
import Artigo2 from "@/data/Artigo2";
import Artigo3 from "@/data/Artigo3";
import Page from "@/data/Page";

export default function Home() {
  return (
    <div className="bg-neutral-500">
      <Page />
      <div className="flex flex-row m-auto">
      <Artigo1 />
      <Artigo2 />
      <Artigo3 />
      </div>
      <Rodape />
    </div>
  );
}
