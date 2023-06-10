import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { ClienteEntity } from './cliente.entity';
import { PedidoEntity } from 'src/pedido/entities/pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity, PedidoEntity])],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
