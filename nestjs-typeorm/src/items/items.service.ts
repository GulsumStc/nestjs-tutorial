import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from './entities/listing.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';
import { Tag } from './entities/tag-entity';
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

    const tags = createItemDto.tag.map((createTagDto) => new Tag(createTagDto));
    createItemDto.tag = tags;

    const newItem = plainToInstance(Item, createItemDto);
    newItem.comments = [];// there is no comments yet

    return await this.entityManager.save(newItem);

  }


  async findAll() {
    return await this.itemRepo.find();
    // return this.entityManager.find(Item);
  }

  async findOne(id: number) {
    // return  await this.itemRepo.findOneBy({ id }); // that dont give relations data

    return await this.itemRepo.findOne({
      where: { id: id },
      relations: { listing: true, comments: true, tag: true }, // defined loading strategy : eager
    });

    /* 
    Query with Eager Loading
      You can specify eager loading at the query level using the relations option: */
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    
    
     const item = await this.itemRepo.findOneBy({ id });
        item.public = updateItemDto.public;
        const comments = updateItemDto.comments.map(
          (createCommentDto) => new Comment(createCommentDto),
        );
        item.comments = comments;
        await this.entityManager.save(item);
        return item; 

   
  }

  async remove(id: number) {
    return this.itemRepo.delete(id);
  }
}
