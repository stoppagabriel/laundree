import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PrecoService } from './preco.service';
import { CreatePrecoDto } from './dto/create-preco.dto';
import { UpdatePrecoDto } from './dto/update-preco.dto';

@Controller('precos')
export class PrecoController {
  constructor(private readonly precoService: PrecoService) {}

  @Post()
  create(@Body() createPrecoDto: CreatePrecoDto) {
    return this.precoService.create(createPrecoDto);
  }

  @Get()
  findAll() {
    return this.precoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.precoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updatePrecoDto: UpdatePrecoDto
  ) {
    return this.precoService.update(id, updatePrecoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.precoService.remove(id);
  }
}
