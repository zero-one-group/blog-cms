import { Model } from 'objection';

import { TableName } from '../../../interface/src/lib/tablename';
import { BaseModel } from './base.model';
import { ProjectModel } from './project.model';

export class UsersModel extends BaseModel {
  name!: string;
  username!: string;
  email!: string;
  admin!: boolean;
  is_active!: boolean;
  last_login!: Date;
  password!: string;

  projects!: ProjectModel[];

  static tableName = TableName.USERS;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static relationMappings = (): any => ({
    projects: {
      modelClass: ProjectModel,
      relation: Model.ManyToManyRelation,
      join: {
        from: `${TableName.USERS}.id`,
        through: {
          from: `${TableName.USER_PROJECT}.user_id`,
          to: `${TableName.USER_PROJECT}.project_id`,
        },
        to: `${TableName.PROJECTS}.id`,
      },
    },
  });
}
