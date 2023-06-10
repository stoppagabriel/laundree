import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Controller('unidade')
export class UnidadeController {
  constructor(private readonly unidadeService: UnidadeService) {}

  @Post()
  create(@Body() createUnidadeDto: CreateUnidadeDto) {
    return this.unidadeService.create(createUnidadeDto);
  }

  @Get()
  findAll() {
    return this.unidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.unidadeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateUnidadeDto: UpdateUnidadeDto
  ) {
    return this.unidadeService.update(id, updateUnidadeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.unidadeService.remove(id);
  }
}
