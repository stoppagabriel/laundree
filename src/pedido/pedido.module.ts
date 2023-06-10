import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { ClienteEntity } from 'src/cliente/cliente.entity';
import { PrecoEntity } from 'src/preco/entities/preco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity, ClienteEntity, PrecoEntity])],
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule { }
