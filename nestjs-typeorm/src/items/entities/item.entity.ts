import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Listing } from './listing.entity';
import { listenerCount } from 'process';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Comment } from './comment.entity';
import { Tag } from './tag-entity';


@Entity('items')
export class Item extends AbstractEntity<Item> {

  // constructor(item: Partial<Item>) { // Partial allows us to pass an object with only the properties that we want to update
  //   Object.assign(this, item);
  // }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  public: boolean;


  /* 
      Relationship Declaration with Eager Loading 
      You can specify eager loading directly in the relationship declaration:
      @OneToMany(type => Listing, listing => listing.item, { eager: true })
      listings: Listing[];
      or Query with Eager Loading

      Lazy Loading: Use Promise in the relationship declaration.
      Eager Loading: Set { eager: true } in the relationship declaration or use the relations option in queries.

  */


  @OneToOne(() => Listing, { cascade: true })// cascade: when we create an item, we want to create a listing as well
  @JoinColumn()
  // @RelationId((item: Item) => item.listing) // to get the id of the listing
  listing: Listing;




  @OneToMany(() => Comment, (comment) => comment.item, {cascade: true})
  comments: Comment[]
  
  @ManyToMany(() => Tag, { cascade: true })
    @JoinTable() // owner side
  tag: Tag[];



  @Column('json', { nullable: true }) 
  additionalInfo: Record<string, any>; // Record<string, any> allows us to store any type of data in the database 




}


