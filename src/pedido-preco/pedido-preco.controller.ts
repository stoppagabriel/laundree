import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoPrecoService } from './pedido-preco.service';
import { CreatePedidoPrecoDto } from './dto/create-pedido-preco.dto';
import { UpdatePedidoPrecoDto } from './dto/update-pedido-preco.dto';

@Controller('pedido-preco')
export class PedidoPrecoController {
  constructor(private readonly pedidoPrecoService: PedidoPrecoService) {}

  @Post()
  create(@Body() createPedidoPrecoDto: CreatePedidoPrecoDto) {
    return this.pedidoPrecoService.create(createPedidoPrecoDto);
  }

  @Get()
  findAll() {
    return this.pedidoPrecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoPrecoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoPrecoDto: UpdatePedidoPrecoDto) {
    return this.pedidoPrecoService.update(+id, updatePedidoPrecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoPrecoService.remove(+id);
  }
}
