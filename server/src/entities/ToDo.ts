import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class ToDo {

  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  description!: string;

  @Property()
  isCompleted!: boolean;

}