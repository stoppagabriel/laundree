import { PedidoEntity } from 'src/pedido/entities/pedido.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clientes' })
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    doc: string;

    @Column()
    nome: string;

    @Column({ nullable: true })
    rua: string;

    @Column({ nullable: true })
    numero: number;

    @Column({ nullable: true })
    complemento: string;

    @Column({ nullable: true })
    bairro: string;

    @Column({ nullable: true })
    cep: string;

    @Column({ nullable: true })
    cidade: string;

    @Column({ nullable: true })
    uf: string;

    @Column({ name: 'cod_fone', type: 'varchar', nullable: true, length: 2, default: '41' })
    codFone: string;

    @Column({ type: 'varchar', nullable: true, length: 9 })
    fone: string;

    @Column({ name: 'cod_celular', type: 'varchar', nullable: true, length: 2 })
    codCelular: string;

    @Column({ type: 'varchar', nullable: true, length: 9 })
    celular: string;

    @Column({ nullable: true })
    email: string;

    @Column({ type: 'text', nullable: true })
    observacoes: string;

    @OneToMany(() => PedidoEntity, pedido => pedido.cliente)
    pedidos: PedidoEntity[];
}
