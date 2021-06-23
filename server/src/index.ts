import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  orm.getMigrator().up();
};

main().catch((err) => {
  console.log(err);
});
