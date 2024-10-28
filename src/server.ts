
import Fastify from 'fastify';
import { fastifyStatic } from '@fastify/static';

import { cacheHeader } from 'pretty-cache-header';

import path from 'path';

const app = Fastify({});

await app.register(fastifyStatic,{
  root: path.resolve(`./public` ),
  prefix: '/',
  cacheControl: true,
  setHeaders(res) {
    const cacheHeaderText = cacheHeader({
      public: true, 
      maxAge: '1 year',
      immutable: true });
    res.setHeader('cache-control', cacheHeaderText);
  },
});

// Run the server!
try {
  const address = await app.listen({
    port: 3000,
    host: 'localhost',
  });
  console.log(`Server is running on port ${address}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
