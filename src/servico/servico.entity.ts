import { PrecoEntity } from 'src/preco/entities/preco.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'servicos'})
export class ServicoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    servico: string;

    @OneToMany(() => PrecoEntity, preco => preco.servico)
    preco: PrecoEntity[];
}