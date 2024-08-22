import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Automobilista() {
    return (
        <div className="p-8">
            <div className="flex rounded-lg bg-slate-100 shadow-sm p-8 items-center gap-4">
                <Image alt="" width={104} height={124} src="/images/avatar.png" />
                <div>
                    <ul>
                        <li>Nome: Germana da Silva</li>
                        <li>Nº do Bi: 0000231313</li>
                        <li>Nº da carta: 8312993131a</li>
                        <li>Telefone: 9211312312</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="mb-4 text-lg font-bold">Aplicar multa</h1>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                        <Checkbox id="multa-1" />
                        <label htmlFor="multa-1">Passar em cima da passadera</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Checkbox id="multa-2" />
                        <label htmlFor="multa-2">Acima da velocidade permitida</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Checkbox id="multa-3" />
                        <label htmlFor="multa-3">Excesso de lotacao</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Checkbox id="multa-4" />
                        <label htmlFor="multa-4">Falar ao telefone</label>
                    </div>
                </div>
                <div className="flex flex-col gap-1 mt-6 mb-4">
                    <p>Anotacoes da multa</p>
                    <Textarea className="w-full" placeholder="Descreve" />
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Total a pagar: 100.000kz</h1>
                    <Button>Aplicar</Button>
                </div>
            </div>

            <div className="mt-8">
                <h1 className="font-bold text-lg">Outras multas</h1>
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>
                              Data
                            </TableHead>
                            <TableHead>
                              Nº de infracoes
                            </TableHead>
                            <TableHead>
                              Total
                            </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>10 de Agosto 2024</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>25.000kZ</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>10 de Agosto 2024</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>25.000kZ</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>10 de Agosto 2024</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>25.000kZ</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}