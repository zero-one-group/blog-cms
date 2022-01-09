import { ModelObject } from 'objection';
import { ProjectModel } from '@cms-blog/cmslib-backend/model';

type FormData = {
  image_url: string;
  header: string;
  subheader: string;
};

export type CreateProjectForm = {
  Hero: FormData[];
  Carousel: FormData[];
  Content: FormData[];
};

export interface QueryViewProjectData {
  user_id?: number;
}

export type ProjectData = ModelObject<ProjectModel>;
