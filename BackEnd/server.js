import express from 'express';
import { userRoutes } from './routes/userRoutes.js';

const port = 3000;
const app = express();

app.use(express.json());
app.use('/auth', userRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});