import { ClienteEntity } from "src/cliente/cliente.entity";
import { PrecoEntity } from "src/preco/entities/preco.entity";
import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    JoinTable,
    OneToMany
} from "typeorm";
import { PedidoPrecoEntity } from "src/pedido-preco/entities/pedido-preco.entity";

@Entity({ name: 'pedidos' })
export class PedidoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'cliente_nome' })
    clienteNome: string;

    @Column({ name: 'cliente_endereco' })
    clienteEndereco: string;

    @Column({ nullable: true })
    funcionario: string;

    @Column({ name: 'data_entrada', type: 'timestamp', default: new Date() })
    dataEntrada: Date;

    @Column({
        name: 'hora_entrada',
        type: 'time',
        default: (new Date()).toLocaleTimeString()
    })
    horaEntrada: string;

    @Column({ name: 'data_prev_entrega' })
    dataPrevEntrega: Date;

    @Column({ name: 'hora_prev_entrega' })
    horaPrevEntrega: string;

    @Column({ name: 'min_prev_entrega' })
    minPrevEntrega: string;

    @Column({ type: 'text' })
    observacoes: string;

    @Column({ name: 'preco_leva_traz', type: 'numeric', precision: 8, scale: 2 })
    precoLevaTraz: number;

    @Column({ name: 'preco_servico_expresso', type: 'numeric', precision: 8, scale: 2 })
    precoServicoExpresso: number;

    @Column({ name: 'desconto_reais', type: 'numeric', precision: 8, scale: 2 })
    descontoReais: number;

    @Column({ name: 'preco_total', type: 'numeric', precision: 8, scale: 2 })
    precoTotal: number;

    @Column({ type: 'boolean', default: true })
    ativo: boolean;

    @Column({ type: 'char', length: 2, default: 'BC' })
    status: string;

    @ManyToOne(() => ClienteEntity, cliente => cliente.pedidos)
    cliente: ClienteEntity;

    @OneToMany(() => PedidoPrecoEntity, pedidoPreco => pedidoPreco.pedido)
    pedidoPreco: PedidoPrecoEntity[];
}
