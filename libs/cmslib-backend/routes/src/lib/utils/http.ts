import { FastifyInstance, FastifyReply } from 'fastify';

export async function safelyRun<T>(
  fastify: FastifyInstance,
  reply: FastifyReply,
  promise: Promise<T>
): Promise<T> {
  const [err, results] = await fastify.to(promise);
  if (err) {
    fastify.log.error(err.message);
    const badRequestErrors = [
      'DataError',
      'ForeignKeyViolationError',
      'AuthenticationError',
      'UniqueViolationError',
    ];
    if (badRequestErrors.includes(err.name)) {
      reply.badRequest(err.message);
    } else if (err.name === 'NotFoundError') {
      reply.notFound(err.message);
    } else if (err.name === 'AuthorizationError') {
      reply.unauthorized(err.message);
    } else {
      reply.internalServerError(err.message);
    }
  }
  return results;
}
