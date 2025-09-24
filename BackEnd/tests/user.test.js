import supertest from 'supertest';
import app from '../server.js';

test('POST /auth/login retorna Authenticated!', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: 'rossinipedro613@gmail.com',
        password: 'jenjenS2'
    });

    expect(res.body.message).toBe('Authenticated!');
});