import { ModelObject } from 'objection';
import { GraphFetchedProjectModel } from '@cms-blog/cmslib-backend/model';

type FormData = {
  image_url: string;
  header: string;
  subheader: string;
};

export type CreateForm = {
  user_id: number;
  project_name: string;
  descriptions: string;
  hero: FormData[];
  carousel: FormData[];
  content: FormData[];
};

export interface QueryViewFormData {
  project_id?: number;
}

export type ProjectFormData = ModelObject<GraphFetchedProjectModel>;
