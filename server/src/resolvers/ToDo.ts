import { ToDo } from "../entities/ToDo";
import { MyContext } from "src/types";
import { Query, Resolver, Ctx } from "type-graphql";

@Resolver()
export class ToDoResolver {
  @Query(() => [ToDo])
  todos(@Ctx() { em }: MyContext): Promise<ToDo[]> {
    return em.find(ToDo, {});
  }
}
