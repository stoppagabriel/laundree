import {
    Controller,
    Get,
    Post,
    Put,
    Body,
    Query,
    Param,
    ParseIntPipe
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ClienteFilter } from './types/ClienteFilter';

@Controller('clientes')
export class ClienteController {
    constructor(
        private readonly clienteService: ClienteService
    ) { }

    @Get()
    getWhoCliente(@Query() queryFilters: ClienteFilter) {
        return this.clienteService.getWho(queryFilters);
    }

    @Post()
    createCliente(@Body() createClienteDto: CreateClienteDto) {
        return this.clienteService.create(createClienteDto);
    }

    @Put(':id')
    updateCliente(
        @Param('id', ParseIntPipe) id: number,
        @Body() createClienteDto: CreateClienteDto
    ) {
        return this.clienteService.update(id, createClienteDto);
    }
}
