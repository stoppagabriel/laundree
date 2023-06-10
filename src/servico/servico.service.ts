import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicoEntity } from './servico.entity';
import { Repository } from 'typeorm';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';

@Injectable()
export class ServicoService {
    constructor(
        @InjectRepository(ServicoEntity)
        private readonly servicoRepository: Repository<ServicoEntity>
    ) {}

    getAll(): Promise<ServicoEntity[]> {
        return this.servicoRepository.find();
    }

    getSingle(id: number): Promise<ServicoEntity> {
        return this.servicoRepository.findOneBy({ id })
    } 

    post(createServicoDto: CreateServicoDto) {
        const newServico = this.servicoRepository.create(createServicoDto);
        return this.servicoRepository.save(newServico);
    }

    update(id: number, updateServicoDto: UpdateServicoDto) {
        return this.servicoRepository.update({ id }, updateServicoDto);
    }

    delete(id: number) {
        this.servicoRepository.delete({ id });
    }
}
