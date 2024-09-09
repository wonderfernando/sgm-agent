import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableBody, TableRow, Table, TableCell, TableHeader, TableHead } from "@/components/ui/table";
import { Search } from "lucide-react";
import Link from "next/link";


export default function AutomobolistasPages() {
    return (
        <div className="p-4">
            <h1 className="text-lg font-bold mb-4">Automobilistas</h1>
            <form className="flex">
                <Input placeholder="Procurar automobilista" className="rounded-r-none" />
                <Button className="rounded-l-none" variant={"secondary"}><Search /></Button>
            </form>
            <div className="pt-4 flex flex-col gap-2">
                <Link href="/automobilistas/1">
                    <div className="flex gap-2 items-center justify-start  rounded-lg shadow-sm ring-1 ring-zinc-100 h-20">
                        <img src="/images/9720027.jpg" className="w-20 rounded-l-lg" alt="" />
                        <div className="flex flex-col text-sm justify-start flex-1 text-zinc-500">
                            <span>Nome: Fernando Silva</span>
                            <span>BI: 123456789</span>
                            <span>Telefone: 123456789</span>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}