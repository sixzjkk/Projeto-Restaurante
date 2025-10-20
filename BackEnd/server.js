import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes.js';
import mesaRoutes from './routes/mesaRoutes.js';

const port = 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', usuarioRoutes);
app.use('/mesas', mesaRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

export default app;