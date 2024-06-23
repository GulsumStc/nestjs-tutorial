import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('items')
export class Item {

  constructor(item: Partial<Item>) { // Partial allows us to pass an object with only the properties that we want to update
    Object.assign(this, item);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  public: boolean;

  @Column('json', { nullable: true }) 
  additionalInfo: Record<string, any>; // Record<string, any> allows us to store any type of data in the database 




}


