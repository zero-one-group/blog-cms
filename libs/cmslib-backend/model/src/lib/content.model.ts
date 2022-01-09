import { Model } from 'objection';

import { TableName } from '../../../interface/src/lib/tablename';
import { ProjectModel } from './project.model';
import { BaseModel } from './base.model';

export class ContentModel extends BaseModel {
  header!: string;
  subheader!: string;
  image_url!: string;
  project_id!: number;
  created_at!: Date;
  updated_at!: Date;

  static tableName = TableName.CONTENTS;
}

export class GraphFetchedContentModel extends ContentModel {
  content!: ContentModel;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static relationMappings = (): any => ({
    project: {
      modelClass: ProjectModel,
      relation: Model.BelongsToOneRelation,
      join: {
        from: `${TableName.CONTENTS}.project_id`,
        to: `${TableName.PROJECTS}.id`,
      },
    },
  });
}
