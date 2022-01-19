import { Model } from 'objection';

import { TableName } from '../../../interface/src/lib/tablename';
import { ProjectModel } from './project.model';
import { BaseModel } from './base.model';

export class CarouselModel extends BaseModel {
  header!: string;
  subheader!: string;
  image_url!: string;
  project_id!: number;
  created_at!: Date;
  updated_at!: Date;

  static tableName = TableName.CAROUSELS;
}

export class GraphFetchedCarouselModel extends CarouselModel {
  carousel!: CarouselModel;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static relationMappings = (): any => ({
    project: {
      modelClass: ProjectModel,
      relation: Model.BelongsToOneRelation,
      join: {
        from: `${TableName.CAROUSELS}.project_id`,
        to: `${TableName.PROJECTS}.id`,
      },
    },
  });
}
