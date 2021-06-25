import { ToDo } from "../entities/ToDo";
import { MyContext } from "src/types";
import { Query, Resolver, Ctx, Arg, Mutation } from "type-graphql";

@Resolver()
export class ToDoResolver {
  @Query(() => [ToDo])
  todos(@Ctx() { em }: MyContext): Promise<ToDo[]> {
    return em.find(ToDo, {});
  }

  @Query(() => ToDo, { nullable: true })
  todo(@Arg("id") id: number, @Ctx() { em }: MyContext): Promise<ToDo | null> {
    return em.findOne(ToDo, { id });
  }

  @Mutation(() => ToDo)
  async createToDo(
    @Arg("description") description: string,
    @Ctx() { em }: MyContext
  ): Promise<ToDo> {
    const todo = em.create(ToDo, { description });
    await em.persistAndFlush(todo);
    return todo;
  }

  // TASK change to update and persist in one query
  @Mutation(() => ToDo, { nullable: true })
  async updateToDo(
    @Arg("id") id: number,
    @Arg("description") description: string,
    @Ctx() { em }: MyContext
  ): Promise<ToDo | null> {
    const todo = await em.findOne(ToDo, { id });
    if (!todo) {
      return null;
    }
    todo.description = description;
    await em.persistAndFlush(todo);
    return todo;
  }

  @Mutation(() => Boolean)
  async deleteToDo(
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    await em.nativeDelete(ToDo, { id });
    return true;
  }
}
