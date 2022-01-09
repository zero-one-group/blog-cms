import * as Knex from 'knex';

import { TableName } from '../../../interface/src/lib/tablename';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TableName.PROJECTS, (t) => {
    t.bigInteger('id').notNullable().unique().primary();
    t.bigInteger('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable(TableName.USERS)
      .onDelete('CASCADE')
      .index();
    t.text('project_name').notNullable();
    t.timestamp('created_at', { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
    t.timestamp('updated_at', { useTz: true });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableName.PROJECTS);
}
