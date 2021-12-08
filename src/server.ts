import express, { application, response } from 'express';

const app = express();
app.get('/', (request, response) => {
  return response.json({mesager: 'Hello word!'})
});
app.listen(5555);