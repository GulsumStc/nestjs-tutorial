import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from './entities/listing.entity';
@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item) 
    private readonly itemRepo: Repository<Item>,
    private readonly entityManager: EntityManager) { }
  
  async create(createItemDto: CreateItemDto): Promise<Item> {

    const listing = new Listing({
      ...createItemDto.listing,
      rating: 0

    });
    createItemDto.listing = listing;

    const newItem = plainToInstance(Item, createItemDto);
    return await this.entityManager.save(newItem);

  }

  async findAll() {
    return await this.itemRepo.find();
    // return this.entityManager.find(Item);
  }

  async findOne(id: number) {
    return  await this.itemRepo.findOneBy({ id });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemRepo.findOneBy({ id });
    item.public = updateItemDto.public;
    item.name = updateItemDto.name;
    item.additionalInfo = updateItemDto.additionalInfo;
    await this.entityManager.save(item);
    return item;
  }

  async remove(id: number) {
    return this.itemRepo.delete(id);
  }
}
