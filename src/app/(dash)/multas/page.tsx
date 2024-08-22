import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectValue,SelectTrigger } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export default function Aplicar() {
    return(
        <div className="flex flex-col p-8 gap-2">
            <div className="grid grid-cols-2 gap-4">
            <Select>
             <SelectTrigger>
               <SelectValue placeholder="Estado" />
               <SelectContent>
                 <SelectItem value="hoje">Papo</SelectItem>
                 <SelectItem value="hoje">Pendente</SelectItem>
               </SelectContent>
             </SelectTrigger>
           </Select>
           <Select>
             <SelectTrigger>
               <SelectValue placeholder="Filtrar as multas" />
               <SelectContent>
                 <SelectItem value="hoje">Hoje</SelectItem>
                 <SelectItem value="hoje">Essa semana</SelectItem>
                 <SelectItem value="hoje">Esse mes</SelectItem>
                 <SelectItem value="hoje">Esse ano</SelectItem>
               </SelectContent>
             </SelectTrigger>
           </Select>
            </div>
           <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome</TableHead>
                            <TableHead>
                              Data
                            </TableHead>
                            <TableHead>
                              Nº de infracoes
                            </TableHead>
                            <TableHead>
                              Total
                            </TableHead>
                            <TableHead>
                              Estado
                            </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Jose Augusto</TableCell>
                                <TableCell>10 de Agosto 2024</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>25.000kz</TableCell>
                                <TableCell><Badge className="bg-green-600">Pago</Badge></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Manuel Longa</TableCell>
                                <TableCell>20 de Julho 2024</TableCell>
                                <TableCell>4</TableCell>
                                <TableCell>19.000kz</TableCell>
                                <TableCell><Badge variant={"destructive"}>Pendente</Badge></TableCell>
                            </TableRow>
                    
                        </TableBody>
                    </Table>
                </div>
        </div>
    )
}