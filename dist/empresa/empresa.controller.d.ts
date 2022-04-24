import { CreateEmpresaDto } from './dto/createEmpresa.dto';
import { EmpresaService } from './empresa.service';
export declare class EmpresaController {
    private readonly empresaService;
    constructor(empresaService: EmpresaService);
    findAll(): Promise<import("./empresa.entity").Empresa[]>;
    create(dto: CreateEmpresaDto): Promise<{
        data: import("./empresa.entity").Empresa;
    }>;
}
