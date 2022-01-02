import * as Knex from 'knex';

import {TableName} from '../../../interface/src/lib/tablename';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TableName.USERS, (t) => {
    t.bigInteger('id').notNullable().unique().primary();
    t.text('name').notNullable();
    t.text('username').unique().notNullable();
    t.text('email').unique().notNullable();
    t.boolean('admin').defaultTo(false);
    t.boolean('is_active').defaultTo(false);
    t.timestamp('last_login', {useTz: true});
    t.string('password').notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableName.USERS);
}
