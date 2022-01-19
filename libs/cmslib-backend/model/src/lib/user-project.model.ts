import { ModelObject } from 'objection';

import { TableName } from '../../../interface/src/lib/tablename';
import { BaseModel } from './base.model';

export class UserProjectModel extends BaseModel {
  site_id!: number;
  user_id!: number;

  static tableName: TableName.USER_PROJECT;
}

export type UserProjectEntity = ModelObject<UserProjectModel>;
