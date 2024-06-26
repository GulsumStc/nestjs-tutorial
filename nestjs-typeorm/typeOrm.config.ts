import { DataSource } from "typeorm";
import { config } from 'dotenv';
import { ConfigService } from "@nestjs/config";
import { Item } from "src/items/entities/item.entity";
import { Listing } from "src/items/entities/listing.entity";
import { Tag } from "src/items/entities/tag-entity";

const configService = new ConfigService();


export default new DataSource({
  type: "postgres",
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [Item, Listing, Tag, Comment],
  synchronize: configService.get('DB_SYNCHRONIZE'), 
  migrations:['migrations/**']
})