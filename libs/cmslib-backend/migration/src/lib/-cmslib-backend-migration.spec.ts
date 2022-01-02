import { cmslibBackendMigration } from './-cmslib-backend-migration';

describe('cmslibBackendMigration', () => {
  it('should work', () => {
    expect(cmslibBackendMigration()).toEqual('-cmslib-backend-migration');
  });
});
