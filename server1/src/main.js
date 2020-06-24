import express from 'express';
import cors from 'cors';

//Cors adicionado

const server = express();

const enableCors = cors({ origin: 'http://localhost:3000' });

server.get('/status', (_, response) => {
  response.send({
    status: 'okay',
  });
});

server
  .options('/authenticate', enableCors)
  .post('/authenticate', enableCors, express.json(), (request, response) => {
    console.log('E-mail', request.body.email, 'Senha', request.body.password);

    response.send({
      okay: true,
    });
  });

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOST_NAME = process.env.HOST_NAME || '127.0.0.1';

server.listen(PORT, HOST_NAME, () => {
  console.log(`Ouvindo ${HOST_NAME}:${PORT}`);
});
