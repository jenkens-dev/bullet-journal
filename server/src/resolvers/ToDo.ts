import { ToDo } from "../entities/ToDo";
import { Query, Resolver, Arg, Mutation } from "type-graphql";

@Resolver()
export class ToDoResolver {
  @Query(() => [ToDo])
  todos(): Promise<ToDo[]> {
    return ToDo.find();
  }

  @Query(() => ToDo)
  todo(@Arg("id") id: number): Promise<ToDo | undefined> {
    return ToDo.findOne(id);
  }

  @Mutation(() => ToDo)
  async createToDo(@Arg("description") description: string): Promise<ToDo> {
    return ToDo.create({ description }).save();
  }

  @Mutation(() => ToDo, { nullable: true })
  async updateToDo(
    @Arg("id") id: number,
    @Arg("description") description: string
  ): Promise<ToDo | null> {
    const todo = await ToDo.findOne(id);

    if (!todo) {
      return null;
    }

    todo.description = description;
    return await ToDo.save(todo);
  }

  @Mutation(() => Boolean)
  async deleteToDo(@Arg("id") id: number): Promise<boolean> {
    await ToDo.delete(id);
    return true;
  }
}
