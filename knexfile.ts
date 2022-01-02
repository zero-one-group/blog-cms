const NODE_ENV = process.env.NODE_ENV || 'development';
const DATABASE_URL =
  process.env.DATABASE_URL ||
  'postgresql://postgres:postgres@localhost:5432/cms_backend?schema=public';

type ConnectionConfigType = {
  connectionString: string;
  ssl?: {
    rejectUnauthorized: boolean;
  };
};

const connectionConfig: ConnectionConfigType = {
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

if (!['staging', 'production'].includes(NODE_ENV)) {
  delete connectionConfig.ssl;
}

const config = {
  client: 'pg',
  connection: connectionConfig,
  migrations: {
    directory: './libs/cmslib-backend/migration/src/lib',
    extension: 'ts',
  },
};

export default config;
