import { PedidoEntity } from "src/pedido/entities/pedido.entity";
import { PrecoEntity } from "src/preco/entities/preco.entity";

export class CreatePedidoPrecoDto {
    pedidoId: number;
    precoId: number;
    item: string;
}
