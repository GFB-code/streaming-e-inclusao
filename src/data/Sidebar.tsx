import Link from "next/link"
export default function Sidebar() {
  return (
    <nav className="max-h-[30px] bg-sky-700 gap-4 flex flex-row px-5">
      <Link href={"/"} className="bg-blue-950 rounded px-1 my-1" >Home</Link>
      <Link href={"/Principal"} className="bg-blue-950 rounded px-1 my-1" >Principal</Link>
      <Link href={"/Equipe"} className="bg-blue-950 rounded px-1 my-1" >Equipe</Link>
      
    </nav>
  )}