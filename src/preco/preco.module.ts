import { Module } from '@nestjs/common';
import { PrecoService } from './preco.service';
import { PrecoController } from './preco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrecoEntity } from './entities/preco.entity';
import { ItemEntity } from 'src/item/entities/item.entity';
import { ServicoEntity } from 'src/servico/servico.entity';
import { UnidadeEntity } from 'src/unidade/entities/unidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    PrecoEntity,
    ItemEntity,
    ServicoEntity,
    UnidadeEntity
  ])],
  controllers: [PrecoController],
  providers: [PrecoService]
})
export class PrecoModule {}
