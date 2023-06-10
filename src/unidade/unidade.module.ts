import { Module } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { UnidadeController } from './unidade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadeEntity } from './entities/unidade.entity';
import { PrecoEntity } from 'src/preco/entities/preco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnidadeEntity, PrecoEntity])],
  controllers: [UnidadeController],
  providers: [UnidadeService]
})
export class UnidadeModule {}
