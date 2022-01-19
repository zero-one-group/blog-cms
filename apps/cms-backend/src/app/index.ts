import 'make-promises-safe';

import { FastifyPluginAsync } from 'fastify';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import * as Knex from 'knex';
import { Model } from 'objection';
import { join } from 'path';
import { project, form } from '@cms-blog/cmslib-backend/routes';
import fastifyCors from 'fastify-cors';

import config from '../../../../knexfile';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (fastify): Promise<void> => {
  // Place here your custom code!
  const knexInstance: Knex = Knex(config);
  Model.knex(knexInstance);

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  // void fastify.register(AutoLoad, {
  //   dir: join(__dirname, 'plugins')
  // });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(fastifyCors, { origin: true });
  fastify.register(project, { prefix: '/project' });
  fastify.register(form, { prefix: '/form' });
};

export default app;
export { app };
