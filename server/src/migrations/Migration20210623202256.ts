import { Migration } from '@mikro-orm/migrations';

export class Migration20210623202256 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "to_do" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "description" varchar(255) not null, "is_completed" bool not null default false);');
  }

}
