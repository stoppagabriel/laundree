import { ItemEntity } from "src/item/entities/item.entity";
import { PedidoEntity } from "src/pedido/entities/pedido.entity";
import { ServicoEntity } from "src/servico/servico.entity";
import { UnidadeEntity } from "src/unidade/entities/unidade.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'precos' })
export class PrecoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('numeric', { precision: 8, scale: 2 })
    preco: number;

    @ManyToOne(() => ItemEntity, item => item.preco)
    item: ItemEntity;

    @ManyToOne(() => ServicoEntity, servico => servico.preco)
    servico: ServicoEntity;

    @ManyToOne(() => UnidadeEntity, unidade => unidade.preco)
    unidade: UnidadeEntity;
}
