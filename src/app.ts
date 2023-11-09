import fastify from 'fastify';
import { transactionsRoutes } from './routes/transactions';
import fastifyCookie from '@fastify/cookie';

export const app = fastify();

// GET POST PUT PATCH DELETE

app.register(fastifyCookie);

// app.addHook('preHandler', async (request) => {
//   console.log(`${request.method} - ${request.url}`);
// });

app.register(transactionsRoutes, {
  prefix: '/transactions',
});
