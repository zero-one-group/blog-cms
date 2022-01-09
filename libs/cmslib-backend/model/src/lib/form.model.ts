import { TableName } from '../../../interface/src/lib/tablename';
import { BaseModel } from './base.model';
import { GraphFetchedCarouselModel } from './carousel.model';
import { GraphFetchedHeroModel } from './hero.model';
import { GraphFetchedContentModel } from './content.model';
import { Model } from 'objection';

export class FormModel extends BaseModel {
  user_id!: number;
  hero_id!: number;
  carousel_id!: number;
  content_id!: number;
  project_id!: number;
  created_at!: Date;
  updated_at!: Date;

  static tableName = TableName.FORM;
}

export class GraphFetchedFormModel extends FormModel {
  carousel!: GraphFetchedCarouselModel[];
  hero!: GraphFetchedHeroModel[];
  content!: GraphFetchedContentModel[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static relationMappings = (): any => ({
    carousel: {
      modelClass: GraphFetchedCarouselModel,
      relation: Model.HasManyRelation,
      join: {
        from: `${TableName.FORM}.carousel_id`,
        to: `${TableName.CAROUSELS}.project_id`,
      },
    },
    hero: {
      modelClass: GraphFetchedHeroModel,
      relation: Model.HasManyRelation,
      join: {
        from: `${TableName.FORM}.hero_id`,
        to: `${TableName.HEROS}.project_id`,
      },
    },
    content: {
      modelClass: GraphFetchedContentModel,
      relation: Model.HasManyRelation,
      join: {
        from: `${TableName.FORM}.content_id`,
        to: `${TableName.CONTENTS}.project_id`,
      },
    },
  });
}
