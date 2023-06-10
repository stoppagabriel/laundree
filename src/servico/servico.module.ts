import { Module } from '@nestjs/common';
import { ServicoController } from './servico.controller';
import { ServicoService } from './servico.service';
import { ServicoEntity } from './servico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrecoEntity } from 'src/preco/entities/preco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServicoEntity, PrecoEntity])],
  controllers: [ServicoController],
  providers: [ServicoService]
})
export class ServicoModule {}
