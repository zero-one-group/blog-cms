import * as Knex from 'knex';

import { TableName } from '../../../interface/src/lib/tablename';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TableName.PROJECTS, (t) => {
    t.bigInteger('id').notNullable().unique().primary();
    t.text('project_name').notNullable();
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

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableName.PROJECTS);
}
