import { Bell, CarFront, HomeIcon, IdCard, NotebookPen, User2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col bg-black min-h-screen">
        <div className="flex-1 bg-white">
          <h1>sfsa</h1>
        </div>
        <div className="h-20 bg-blue-500 flex gap-4 items-center justify-between px-4 text-muted">
            <Link href="" className="flex  bg-transparent flex-col items-center "><HomeIcon className="h-6 w-6"/> <span className="max-md:hidden">Inicio</span></Link>
            <Link href="" className="flex  bg-transparent flex-col items-center "><IdCard className="h-6 w-6"/> <span className="max-md:hidden">Perfil</span></Link>
            <Link href="" className="flex  bg-transparent flex-col items-center "><NotebookPen className="h-6 w-6"/> <span className="max-md:hidden">Multas</span></Link>
            <Link href="" className="flex  bg-transparent flex-col items-center "><User2 className="h-6 w-6"/> <span className="max-md:hidden">Automobista</span></Link>
            <Link href="" className="flex  bg-transparent flex-col items-center "><CarFront className="h-6 w-6"/> <span className="max-md:hidden">Viarura</span></Link>
            <Link href="" className="flex  bg-transparent flex-col items-center "><Bell className="h-6 w-6"/><span className="max-md:hidden">Roubos</span></Link>
        </div>
    </main>
  );
}