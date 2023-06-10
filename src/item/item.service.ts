import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>
  ) {}

  create(createItemDto: CreateItemDto) {
    const newItem = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(newItem);
  }

  findAll() {
    return this.itemRepository.find();
  }

  findOne(id: number) {
    return this.itemRepository.findOneBy({ id });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.itemRepository.update({ id }, updateItemDto);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }
}
