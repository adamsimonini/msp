import express from 'express';
import { registerRoutes } from './routes';

const app = express()
const port = 3000

registerRoutes(app);

app.get('/', (req, res) => res.send('Allahu Akbar'))

app.listen(port, () => console.log(`MSP app listening on THE port ${port}!`))