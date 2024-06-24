import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Listing } from './listing.entity';
import { listenerCount } from 'process';


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

  @OneToOne(() => Listing, { cascade: true })// cascade: when we create an item, we want to create a listing as well
  @JoinColumn()
  listing: Listing;

  @Column('json', { nullable: true }) 
  additionalInfo: Record<string, any>; // Record<string, any> allows us to store any type of data in the database 




}


