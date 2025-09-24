import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/userRoutes.js';

const port = 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

export default app;