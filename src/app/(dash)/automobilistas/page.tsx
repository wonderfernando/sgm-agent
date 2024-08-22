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
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome</TableHead>
                            <TableHead>Telefone</TableHead>
                            <TableHead>BI</TableHead>
                            <TableHead>Nº da Carta</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>Joao manuel</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>932423423</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>00042342409LA</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>213123131312</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>Joao manuel</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>932423423</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>00042342409LA</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>213123131312</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>Joao manuel</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>932423423</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>00042342409LA</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>213123131312</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>Joao manuel</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>932423423</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>00042342409LA</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>213123131312</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>Joao manuel</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>932423423</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>00042342409LA</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>213123131312</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>Joao manuel</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>932423423</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>00042342409LA</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>213123131312</p></Link></TableCell>
                            </TableRow>
                                    <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>Joao manuel</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>932423423</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>00042342409LA</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>213123131312</p></Link></TableCell>
                            </TableRow>
                       
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}