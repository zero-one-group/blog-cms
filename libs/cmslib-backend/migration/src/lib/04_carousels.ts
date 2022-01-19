import * as Knex from 'knex';

import { TableName } from '../../../interface/src/lib/tablename';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TableName.CAROUSELS, (t) => {
    t.bigInteger('id').notNullable().unique().primary();
    t.text('image_url').notNullable();
    t.text('header').notNullable();
    t.text('subheader').notNullable();
    t.bigInteger('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable(TableName.PROJECTS)
      .onDelete('CASCADE')
      .index();
    t.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
    t.timestamp('updated_at', { useTz: true });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableName.CAROUSELS);
}
