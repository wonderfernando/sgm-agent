import Link from "next/link";
import { ReactNode } from "react";
import { Bell, CarFront, HomeIcon, IdCard, LogOut, NotebookPen, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Layout({children}: {children:ReactNode}) {
    return (<main className="flex flex-col h-screen">
        <header className="bg-blue-950 h-16 text-white p-4 flex justify-between items-center">
            <span className="font-medium text-sm">Seja Bem vindo Agente Manuel Jorge</span>
            <Link href="/auth/entrar"><Button variant={"ghost"} className="hover:bg-black/10 hover:text-muted"><LogOut/></Button></Link>
        </header>
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
        <div className="h-20 bg-blue-500 flex gap-4 items-center justify-between px-4 text-muted">
            <Link href="/" className="flex  bg-transparent flex-col items-center "><HomeIcon className="h-6 w-6"/> <span className="max-sm:hidden">Inicio</span></Link>
            <Link href="/profile" className="flex  bg-transparent flex-col items-center "><IdCard className="h-6 w-6"/> <span className="max-sm:hidden">Perfil</span></Link>
            <Link href="/multas" className="flex  bg-transparent flex-col items-center "><NotebookPen className="h-6 w-6"/> <span className="max-sm:hidden">Multas</span></Link>
            <Link href="/automobilistas" className="flex  bg-transparent flex-col items-center "><User2 className="h-6 w-6"/> <span className="max-sm:hidden">Automobista</span></Link>
            <Link href="/viaturas" className="flex  bg-transparent flex-col items-center "><CarFront className="h-6 w-6"/> <span className="max-sm:hidden">Viarura</span></Link>
            <Link href="/roubos" className="flex  bg-transparent flex-col items-center "><Bell className="h-6 w-6"/><span className="max-sm:hidden">Roubos</span></Link>
        </div>
    </main>)
}