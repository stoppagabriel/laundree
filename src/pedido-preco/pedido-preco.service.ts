import { Injectable } from '@nestjs/common';
import { CreatePedidoPrecoDto } from './dto/create-pedido-preco.dto';
import { UpdatePedidoPrecoDto } from './dto/update-pedido-preco.dto';

@Injectable()
export class PedidoPrecoService {
  create(createPedidoPrecoDto: CreatePedidoPrecoDto) {
    return 'This action adds a new pedidoPreco';
  }

  findAll() {
    return `This action returns all pedidoPreco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoPreco`;
  }

  update(id: number, updatePedidoPrecoDto: UpdatePedidoPrecoDto) {
    return `This action updates a #${id} pedidoPreco`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoPreco`;
  }
}
