import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicoModule } from './servico/servico.module';
import { ItemModule } from './item/item.module';
import { UnidadeModule } from './unidade/unidade.module';
import { PrecoModule } from './preco/preco.module';
import { PedidoModule } from './pedido/pedido.module';
import { PedidoPrecoModule } from './pedido-preco/pedido-preco.module';
import ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ClienteModule,
    ServicoModule,
    ItemModule,
    UnidadeModule,
    PrecoModule,
    PedidoModule,
    PedidoPrecoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
