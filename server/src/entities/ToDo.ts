import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity()
export class ToDo {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column({ default: false })
  isCompleted!: boolean;
}
