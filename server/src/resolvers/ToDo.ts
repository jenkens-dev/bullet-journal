import { ToDo } from "../entities/ToDo";
import { MyContext } from "src/types";
import { Query, Resolver, Ctx, Arg, Int } from "type-graphql";

@Resolver()
export class ToDoResolver {
  @Query(() => [ToDo])
  todos(@Ctx() { em }: MyContext): Promise<ToDo[]> {
    return em.find(ToDo, {});
  }

  @Query(() => ToDo, { nullable: true })
  todo(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: MyContext
  ): Promise<ToDo | null> {
    return em.findOne(ToDo, { id });
  }
}
