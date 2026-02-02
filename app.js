import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware !');
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware !');
  res.send('<h1>Hello from Express!</h1>');
  // res.json()
});

// const server = http.createServer(app);

// server.listen({
//   port: 3000,
// });
