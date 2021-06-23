import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class ToDo {
  @PrimaryKey()
  id!: number;

  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  description!: string;

  @Property({ default: false })
  isCompleted!: boolean;
}
