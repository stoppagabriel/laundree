import { HttpException, Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { ClienteEntity } from 'src/cliente/cliente.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(PedidoEntity)
    private readonly pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(ClienteEntity)
    private readonly clienteRepository: Repository<ClienteEntity>
  ) { }

  async create(createPedidoDto: CreatePedidoDto) {
    const cliente = await this.clienteRepository.findOneBy({
      id: createPedidoDto.idCliente
    });

    if (!cliente) throw new HttpException('Cliente não encontrado', 404);

    const newPedido = this.pedidoRepository.create(createPedidoDto);
    newPedido.cliente = cliente;

    return this.pedidoRepository.save(newPedido);
  }

  findClienteWithPedidos(clienteId: number) {
    const cliente = this.clienteRepository.findOne({
      where: { id: clienteId },
      relations: ['pedidos']
    });

    if (!cliente) throw new HttpException('Cliente não encontrado', 404);

    return cliente;
  }

  findOne(id: number) {
    return this.pedidoRepository.findOne({
      where: { id },
      relations: ['cliente']
    });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoRepository.update({ id }, updatePedidoDto);
  }

  remove(id: number) {
    return this.pedidoRepository.delete({ id });
  }
}
