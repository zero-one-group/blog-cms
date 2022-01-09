import fastify, { FastifyPluginAsync } from 'fastify';
import { Transaction } from 'objection';

import {
  HeroModel,
  CarouselModel,
  ContentModel,
  ProjectModel,
  GraphFetchedProjectModel,
} from '@cms-blog/cmslib-backend/model';
import {
  QueryViewProjectData,
  CreateProjectForm,
  ProjectData,
} from '@cms-blog/cmslib-backend/interface';

// controller
async function getByUserId(
  query: QueryViewProjectData
): Promise<ProjectData[]> {
  return await ProjectModel.query().where('user_id', query.user_id);
}

export const project: FastifyPluginAsync = async function (
  fastify
): Promise<void> {
  fastify.get('/', async function (request, reply) {
    const payload = await getByUserId(request.query as QueryViewProjectData);
    reply.send(payload);
  });
};
