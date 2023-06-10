import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from './cliente.entity';
import { Repository } from 'typeorm';
import { ClienteFilter } from './types/ClienteFilter';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(ClienteEntity)
        private readonly clienteRepository: Repository<ClienteEntity>
    ){}

    getAll(): Promise<ClienteEntity[]> {
        return this.clienteRepository.find();
    }

    getWho(queries: ClienteFilter): Promise<ClienteEntity[]> {
        return this.clienteRepository.findBy(queries);
    }

    create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
        const newCliente = this.clienteRepository.create(createClienteDto);
        return this.clienteRepository.save(newCliente);
    }

    update(id: number, updateClienteDto: UpdateClienteDto) {
        return this.clienteRepository.update({ id }, updateClienteDto);
    }
}
