import { PedidoEntity } from "src/pedido/entities/pedido.entity";
import { PrecoEntity } from "src/preco/entities/preco.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pedidos_precos' })
export class PedidoPrecoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => PedidoEntity)
    @JoinColumn({ name: 'id' })
    pedido: PedidoEntity;

    @ManyToOne(() => PrecoEntity)
    @JoinColumn({ name: 'id' })
    preco: PrecoEntity;

    @Column()
    item: string;

    @Column()
    servico: string;

    @Column()
    unidade: string;

    @Column('numeric', { name: 'preco_unitario', precision: 8, scale: 2 })
    precoUnitario: number;

    @Column('numeric', { precision: 8, scale: 2 })
    quantidade: number;

    @Column('numeric', { precision: 8, scale: 2 })
    total: number;
}
