import { DataSourceOptions } from "typeorm";
import { ClienteEntity } from "./cliente/cliente.entity";
import { ServicoEntity } from "./servico/servico.entity";
import { ItemEntity } from "./item/entities/item.entity";
import { UnidadeEntity } from "./unidade/entities/unidade.entity";
import { PrecoEntity } from "./preco/entities/preco.entity";
import { PedidoEntity } from "./pedido/entities/pedido.entity";
import { PedidoPrecoEntity } from "./pedido-preco/entities/pedido-preco.entity";

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    database: 'laundree',
    port: 5432,
    username: 'postgres',
    password: '12345',
    synchronize: true,
    entities: [
        ClienteEntity,
        ServicoEntity,
        ItemEntity,
        UnidadeEntity,
        PrecoEntity,
        PedidoEntity,
        PedidoPrecoEntity
    ]
}

export default config;