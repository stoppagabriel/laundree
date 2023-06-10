import { PrecoEntity } from "src/preco/entities/preco.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'itens' })
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item: string;

    @OneToMany(() => PrecoEntity, preco => preco.item)
    preco: PrecoEntity[];
}
