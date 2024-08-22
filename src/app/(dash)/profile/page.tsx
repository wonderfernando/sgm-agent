import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

export default function ProfilePage() {
    return (
        <div className="p-8 flex flex-col gap-2">
            <div className="flex rounded-lg bg-slate-100 shadow-sm p-8 items-center gap-4">
                <img src="./images/avatar.png"/>
                <div>
                    <ul>
                        <li>Nome: Germana da Silva</li>
                        <li>Nº de Agente: 0000231313</li>
                        <li>Provincia: Luanda</li>
                        <li>Morada: Maianga</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}