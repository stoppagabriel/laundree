import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './entities/item.entity';
import { PrecoEntity } from 'src/preco/entities/preco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity, PrecoEntity])],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
