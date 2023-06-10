import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoPrecoDto } from './create-pedido-preco.dto';

export class UpdatePedidoPrecoDto extends PartialType(CreatePedidoPrecoDto) {}
