import { HttpException, Injectable } from '@nestjs/common';
import { CreatePrecoDto } from './dto/create-preco.dto';
import { UpdatePrecoDto } from './dto/update-preco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEntity } from 'src/item/entities/item.entity';
import { ServicoEntity } from 'src/servico/servico.entity';
import { UnidadeEntity } from 'src/unidade/entities/unidade.entity';
import { PrecoEntity } from './entities/preco.entity';

@Injectable()
export class PrecoService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
    @InjectRepository(ServicoEntity)
    private readonly servicoRepository: Repository<ServicoEntity>,
    @InjectRepository(UnidadeEntity)
    private readonly unidadeRepository: Repository<UnidadeEntity>,
    @InjectRepository(PrecoEntity)
    private readonly precoRepository: Repository<PrecoEntity>
  ) { }
  async create(createPrecoDto: CreatePrecoDto) {
    const item = await this.itemRepository.findOneBy({ id: createPrecoDto.item });
    if (!item) throw new HttpException("Item não encontrado", 404);

    const servico = await this.servicoRepository.findOneBy({ id: createPrecoDto.servico });
    if (!servico) throw new HttpException("Serviço não encontrado", 404);

    const unidade = await this.unidadeRepository.findOneBy({ id: createPrecoDto.unidade });
    if (!unidade) throw new HttpException("Unidade não encontrada", 404);

    const newPreco = this.precoRepository.create({ preco: createPrecoDto.preco });
    newPreco.item = item;
    newPreco.servico = servico;
    newPreco.unidade = unidade;

    return this.precoRepository.save(newPreco);
  }

  findAll() {
    return this.precoRepository.find({
      relations: ['item', 'servico', 'unidade']
    });
  }

  findOne(id: number) {
    return this.precoRepository.findOne({
      where: { id },
      relations: ['item', 'servico', 'unidade']
    });
  }

  update(id: number, updatePrecoDto: UpdatePrecoDto) {
    return this.precoRepository.update({ id }, updatePrecoDto);
  }

  remove(id: number) {
    return this.precoRepository.delete({ id });
  }
}
