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
  QueryViewFormData,
  CreateForm,
  ProjectFormData,
  ProjectData,
} from '@cms-blog/cmslib-backend/interface';

// controller
async function getByProjectId(
  query: QueryViewFormData
): Promise<ProjectFormData> {
  return (await GraphFetchedProjectModel.query()
    .where('id', query.project_id)
    .withGraphFetched('form_records.[hero, carousel, content]')
    .first()) as ProjectFormData;
}

async function saveRecords(
  payload: CreateForm,
  projectId: number,
  trx: Transaction
) {
  for (const record of payload.hero) {
    await HeroModel.query(trx).insert({
      image_url: record.image_url,
      header: record.header,
      subheader: record.subheader,
      project_id: projectId,
    });
  }
  for (const record of payload.carousel) {
    await CarouselModel.query(trx).insert({
      image_url: record.image_url,
      header: record.header,
      subheader: record.subheader,
      project_id: projectId,
    });
  }
  for (const record of payload.content) {
    await ContentModel.query(trx).insert({
      image_url: record.image_url,
      header: record.header,
      subheader: record.subheader,
      project_id: projectId,
    });
  }
  await FormModel.query(trx).insert({ project_id: projectId });
}

async function create(payload: CreateForm): Promise<ProjectData> {
  return ProjectModel.transaction(async (trx) => {
    const projectData = {
      ...payload,
      hero: undefined,
      carousel: undefined,
      content: undefined,
    };
    const project = await ProjectModel.query(trx).insert(projectData);
    await saveRecords(payload, project.id, trx);
    return project;
  });
}

async function deleteRecords(projectId: number, trx: Transaction) {
  const records = await FormModel.query(trx).where('project_id', projectId);
  // const paramsIds = records.map((rec) => rec.project_id);
  await FormModel.query(trx).whereIn('project_id', projectId).del();
  await ProjectModel.query(trx).where('project_id', projectId).del();
}

async function update(id: number, payload: CreateForm): Promise<ProjectData> {
  return ProjectModel.transaction(async (trx) => {
    const projectData = {
      ...payload,
      hero: undefined,
      carousel: undefined,
      content: undefined,
    };
    const project = await ProjectModel.query(trx).patchAndFetchById(
      id,
      projectData
    );
    // await deleteRecords(id, trx);
    await saveRecords(payload, project.id, trx);
    return project;
  });
}

// services
export const form: FastifyPluginAsync = async function (
  fastify
): Promise<void> {
  fastify.get('/', async function (request, reply) {
    const response = await getByProjectId(request.query as QueryViewFormData);
    reply.send(response);
  });

  fastify.post<{ Body: CreateForm }>('/', async function (request, reply) {
    await create(request.body);
    reply.send({ 200: 'success!' });
  });

  fastify.put<{ Body: CreateForm; Params: { id: string } }>(
    '/',
    async function (request, reply) {
      await update(+request.params.id as number, request.body as CreateForm);
      reply.send({ 200: 'success!' });
    }
  );
};
