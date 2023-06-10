import { 
    Body, 
    Controller, 
    Get, 
    Post, 
    Delete, 
    Param, 
    ParseIntPipe, 
    Put 
} from '@nestjs/common';
import { ServicoService } from './servico.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';

@Controller('servicos')
export class ServicoController {
    constructor(
        private readonly servicoService: ServicoService
    ){}

    @Get()
    getAll() {
        return this.servicoService.getAll();
    }

    @Get()
    getSingle(@Param('id', ParseIntPipe) id: number) {
        return this.servicoService.getSingle(id);
    }

    @Post()
    post(@Body() createServicoDto: CreateServicoDto) {
        return this.servicoService.post(createServicoDto);
    }

    @Put()
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() updateServicoDto: UpdateServicoDto
    ) {
        await this.servicoService.update(id, updateServicoDto);
    }

    @Delete()
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.servicoService.delete(id);
    }
}
