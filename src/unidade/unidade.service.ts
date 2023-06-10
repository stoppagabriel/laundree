import { Injectable } from '@nestjs/common';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UnidadeEntity } from './entities/unidade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnidadeService {
  constructor(
    @InjectRepository(UnidadeEntity)
    private readonly unidadeRepository: Repository<UnidadeEntity>
  ) {}

  create(createUnidadeDto: CreateUnidadeDto) {
    const newUnidade = this.unidadeRepository.create(createUnidadeDto);
    return this.unidadeRepository.save(newUnidade);
  }

  findAll() {
    return this.unidadeRepository.find();
  }

  findOne(id: number) {
    return this.unidadeRepository.findOneBy({ id });
  }

  update(id: number, updateUnidadeDto: UpdateUnidadeDto) {
    return this.unidadeRepository.update(id, updateUnidadeDto);
  }

  remove(id: number) {
    return this.unidadeRepository.delete(id);
  }
}
