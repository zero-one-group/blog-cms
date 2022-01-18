import fastify, { FastifyPluginAsync } from 'fastify';
import { Transaction } from 'objection';

import {
  HeroModel,
  CarouselModel,
  ContentModel,
  ProjectModel,
  FormModel,
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

async function deleteProject(projectId: number) {
  await FormModel.query().whereIn('project_id', projectId).del();
  await ProjectModel.query().where('project_id', projectId).del();
}

export const project: FastifyPluginAsync = async function (
  fastify
): Promise<void> {
  fastify.get('/', async function (request, reply) {
    const payload = await getByUserId(request.query as QueryViewProjectData);
    reply.send(payload);
  });
  fastify.delete<{ Params: { id: string } }>(
    '/:id',
    async function (request, reply) {
      await deleteProject(+request.params.id);
      reply.send({ 200: `project id ${request.params.id} deleted!` });
    }
  );
};
