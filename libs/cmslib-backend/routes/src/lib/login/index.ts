// import * as bcrypt from 'bcryptjs';
// import { FastifyPluginAsync } from 'fastify';
// import { ModelObject } from 'objection';

// import { UsersModel } from '@cms-blog/cmslib-backend/model';
// import {
//   throwAuthenticationError,
//   throwAuthorizationError,
// } from '../utils/error-handling';
// import * as http from '../utils/http';

// const TOKENS = new Map();

// // interfaces
// export type User = ModelObject<UsersModel>;

// interface Credentials {
//   username: string;
//   password: string;
// }

// interface Token {
//   token: string;
// }

// // services
// async function findUser(username: string): Promise<User | undefined> {
//   return UsersModel.query()
//     .where({ username })
//     .withGraphFetched('projects')
//     .first();
// }

// async function updateLastLogin(userId: number): Promise<number> {
//   return UsersModel.query().findById(userId).patch({ last_login: new Date() });
// }

// function generateToken(): string {
//   const token = new Date().toISOString() + Math.random();
//   return Buffer.from(token).toString('base64');
// }

// export function saveToken(token: string, username: string): void {
//   TOKENS.set(token, username);
// }

// async function login(creds: Credentials): Promise<Token> {
//   const user = await findUser(creds.username);
//   if (!user) throwAuthenticationError();
//   const compare = await bcrypt.compare(creds.password, user.password);
//   if (!compare) throwAuthenticationError();
//   await updateLastLogin(user.id);
//   const token = generateToken();
//   saveToken(token, user.username);
//   return { token };
// }

// export async function getUser(token: string): Promise<User> {
//   const username = TOKENS.get(token);
//   if (!username) throwAuthorizationError();
//   const user = await findUser(username);
//   if (!user) throwAuthorizationError();
//   return user;
// }

// // fastify
// const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
//   fastify.post<{ Body: Credentials }>(
//     '/login',
//     async function (request, reply) {
//       return http.safelyRun(fastify, reply, login(request.body));
//     }
//   );

//   fastify.get('/logout', async function (request) {
//     // TOKENS.delete(request.token);
//     return { message: 'Logout Successful' };
//   });

//   fastify.get('/current_user', async function (request, reply) {
//     reply.send(request.user);
//   });
// };

// export default plugin;
