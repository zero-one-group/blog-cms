import * as Knex from 'knex';

import {TableName} from '../../../interface/src/lib/tablename';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TableName.CONTENTS, (t) => {
    t.bigInteger('id').notNullable().unique().primary();
    t.text('image_url').notNullable();
    t.text('header').notNullable();
    t.text('subheader').notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableName.CONTENTS);
}
