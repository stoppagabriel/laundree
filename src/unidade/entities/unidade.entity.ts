import { PrecoEntity } from "src/preco/entities/preco.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: 'unidades' })
export class UnidadeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unidade: string;

    @OneToMany(() => PrecoEntity, preco => preco.unidade)
    preco: PrecoEntity[];
}
