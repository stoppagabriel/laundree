import { Module } from '@nestjs/common';
import { PedidoPrecoService } from './pedido-preco.service';
import { PedidoPrecoController } from './pedido-preco.controller';
import { PrecoEntity } from 'src/preco/entities/preco.entity';
import { PedidoEntity } from 'src/pedido/entities/pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoPrecoEntity } from './entities/pedido-preco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoPrecoEntity, PedidoEntity, PrecoEntity])],
  controllers: [PedidoPrecoController],
  providers: [PedidoPrecoService]
})
export class PedidoPrecoModule { }
