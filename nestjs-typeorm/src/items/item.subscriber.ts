import { Logger } from "@nestjs/common";
import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { Item } from "./entities/item.entity";


@EventSubscriber()
export class ItemSubscriber implements EntitySubscriberInterface {

  private readonly logger = new Logger(ItemSubscriber.name);

  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);

  }

  /**
   * Method to listen to changes in the Item entity.
   * It returns the Item entity as the event to listen to.
   *
   * @return {typeof Item} The Item entity.
   */
  listenTo() { 
    // Returns the Item entity to listen to for changes.
    return Item;
  }

  beforeInsert(event: InsertEvent<any>): void | Promise<any> {
    this.logger.log(`BEFORE ITEM INSERTED: `, JSON.stringify(event.entity));
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    this.logger.log(`AFTER ITEM INSERTED: `, JSON.stringify(event.entity));
  }

  




}