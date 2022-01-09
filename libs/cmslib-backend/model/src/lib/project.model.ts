import { TableName } from '@cms-blog//cmslib-backend/interface';
import { BaseModel } from './base.model';

export class ProjectModel extends BaseModel {
  project_name!: string;

  static tableName = TableName.PROJECTS;
}
