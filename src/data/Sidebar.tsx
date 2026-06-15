import Link from "next/link"
export default function Sidebar() {
  return (
    <nav className="bg-sky-700 flex gap-4 px-5 py-2">
      <Link href={"/"} className="bg-blue-950 rounded px-3 py-1 text-white hover:bg-blue-900 transition-colors">Home</Link>
      <Link href={"/Principal"} className="bg-blue-950 rounded px-3 py-1 text-white hover:bg-blue-900 transition-colors">Principal</Link>
      <Link href={"/Equipe"} className="bg-blue-950 rounded px-3 py-1 text-white hover:bg-blue-900 transition-colors">Equipe</Link>
    </nav>
  )}