import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { config as dotenvConfig } from 'dotenv';
import { User } from "src/entities/user.entity";
import { join } from 'path';

dotenvConfig(); // .env dosyasını yükler

const config: PostgresConnectionOptions = {
  type: "postgres",
  database: "testDB",
  host: "localhost",
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  // entities: [User],
  entities: [join(__dirname, '**', '*.entity.{ts,js}')], 
  synchronize: true,
  dropSchema: true, // drop the schema and create a new 
  
}

export default config;