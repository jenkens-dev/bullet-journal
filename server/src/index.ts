import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { ToDo } from "./entities/ToDo";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [ToDo],
    dbName: "bulletjournal",
    type: "postgresql",
    debug: !__prod__,
  });

  const todo = orm.em.create(ToDo, {description: "Program for 30 minutes", isCompleted: false});
  await orm.em.persistAndFlush(todo)
};

main().catch((err) => {
  console.log(err);
});
