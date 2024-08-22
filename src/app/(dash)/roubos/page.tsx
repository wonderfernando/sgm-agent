import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableBody, TableRow, Table, TableCell, TableHeader, TableHead } from "@/components/ui/table";
import { AlertTriangle, Search } from "lucide-react";
import Link from "next/link";


export default function RoubosPage() {
    return (
        <div className="p-4">
            <h1 className="text-lg font-bold mb-4 flex gap-2 items-center">Viaturas em Alerta <AlertTriangle className="text-red-800"/></h1>
            <form className="flex">
                <Input placeholder="Procurar viatura" className="rounded-r-none" />
                <Button className="rounded-l-none" variant={"secondary"}><Search /></Button>
            </form>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Matriula</TableHead>
                            <TableHead>Proprietario</TableHead>
                            <TableHead>Cor</TableHead>
                            <TableHead>Marca</TableHead>
                            <TableHead>Modelo</TableHead>                       
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>LD-4B-5A</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Jose Matunda</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>JPreto</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Toyota</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Hiace</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>LD-4B-5A</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Jose Matunda</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>JPreto</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Toyota</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Hiace</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>LD-4B-5A</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Jose Matunda</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>JPreto</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Toyota</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Hiace</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>LD-4B-5A</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Jose Matunda</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>JPreto</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Toyota</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Hiace</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>LD-4B-5A</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Jose Matunda</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>JPreto</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Toyota</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Hiace</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>LD-4B-5A</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Jose Matunda</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>JPreto</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Toyota</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Hiace</p></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Link href="/automobilistas/1"><p>LD-4B-5A</p>  </Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Jose Matunda</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>JPreto</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Toyota</p></Link></TableCell>
                                <TableCell><Link href="/automobilistas/1"><p>Hiace</p></Link></TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}