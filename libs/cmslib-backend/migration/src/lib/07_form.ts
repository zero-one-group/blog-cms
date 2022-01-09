import * as Knex from 'knex';

import { TableName } from '../../../interface/src/lib/tablename';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TableName.FORM, (t) => {
    t.bigInteger('id').notNullable().unique().primary();
    t.bigInteger('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable(TableName.PROJECTS)
      .onDelete('CASCADE')
      .index();
    t.bigInteger('hero_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable(TableName.HEROS)
      .onDelete('CASCADE')
      .index();
    t.bigInteger('carousel_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable(TableName.CAROUSELS)
      .onDelete('CASCADE')
      .index();
    t.bigInteger('content_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable(TableName.CONTENTS)
      .onDelete('CASCADE')
      .index();
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists(TableName.FORM);
}
