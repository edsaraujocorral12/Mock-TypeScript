import express from 'express';
import routes from './routes';

const app = express();


// function getId(): number {
//   return 19;
// }
// const myId = getId();

// // Inferência de Tipos
// function getUserName() {
//   return 'Edson';
// }
// const name = getUserName();
app.use(routes);


app.listen(3333);
