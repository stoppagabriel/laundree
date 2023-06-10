import { Injectable } from '@nestjs/common';
import { CreatePedidoPrecoDto } from './dto/create-pedido-preco.dto';
import { UpdatePedidoPrecoDto } from './dto/update-pedido-preco.dto';
import { PedidoEntity } from 'src/pedido/entities/pedido.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PrecoEntity } from 'src/preco/entities/preco.entity';
import { HttpException } from '@nestjs/common';
import { PedidoPrecoEntity } from './entities/pedido-preco.entity';

@Injectable()
export class PedidoPrecoService {
  constructor(
    @InjectRepository(PedidoEntity)
    private pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(PrecoEntity)
    private precoRepository: Repository<PrecoEntity>,
    @InjectRepository(PedidoPrecoEntity)
    private pedidoPrecoRepository: Repository<PedidoPrecoEntity>
  ){}
  async create(createPedidoPrecoDto: CreatePedidoPrecoDto) {
    const preco = await this.precoRepository.findOneBy({ id: createPedidoPrecoDto.precoId });
    if (!preco) throw new HttpException("Preço não encontrado", 404);

    const pedido = await this.pedidoRepository.findOneBy({ id: createPedidoPrecoDto.pedidoId });
    if (!pedido) throw new HttpException("Pedido não encontrado", 404);

    const newPedidoPreco = this.pedidoPrecoRepository.create(createPedidoPrecoDto);
    newPedidoPreco.preco = preco;
    newPedidoPreco.pedido = pedido;

    return this.pedidoPrecoRepository.save(newPedidoPreco);
  }

  findAll() {
    return this.pedidoPrecoRepository.find({});
  }

  findOne(id: number) {
    return this.pedidoPrecoRepository.findOneBy({ id });
  }

  update(id: number, updatePedidoPrecoDto: UpdatePedidoPrecoDto) {
    return `This action updates a #${id} pedidoPreco`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoPreco`;
  }
}
