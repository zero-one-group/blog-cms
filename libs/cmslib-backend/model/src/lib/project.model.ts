import { TableName } from '../../../interface/src/lib/tablename';
import { BaseModel } from './base.model';
import { GraphFetchedFormModel } from './form.model';
import { Model } from 'objection';

export class ProjectModel extends BaseModel {
  user_id!: number;
  project_name!: string;
  created_at!: Date;
  updated_at!: Date;

  static tableName = TableName.PROJECTS;
}

export class GraphFetchedProjectModel extends ProjectModel {
  form_records!: GraphFetchedFormModel[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static relationMappings = (): any => ({
    form_records: {
      modelClass: GraphFetchedFormModel,
      relation: Model.HasManyRelation,
      join: {
        from: `${TableName.PROJECTS}.id`,
        to: `${TableName.FORM}.project_id`,
      },
    },
  });
}
