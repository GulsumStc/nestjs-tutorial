import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Listing {


  constructor(listing: Partial<Listing>) { 
    Object.assign(this, listing);
  }


  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string

  @Column()
  rating: number

  

}