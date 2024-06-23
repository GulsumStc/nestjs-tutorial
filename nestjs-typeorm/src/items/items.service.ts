import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item) 
    private readonly itemRepo: Repository<Item>,
    private readonly entityManager: EntityManager) { }
  
  async create(createItemDto: CreateItemDto): Promise<Item> {

    const newItem = plainToInstance(Item, createItemDto);
    return await this.entityManager.save(newItem);

  }

  async findAll() {
    return await this.itemRepo.find();
    // return this.entityManager.find(Item);
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
