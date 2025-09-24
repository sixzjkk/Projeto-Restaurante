import supertest from 'supertest';
import app from '../server.js';

test('POST /auth/login return Authenticated!', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: 'rossinipedro613@gmail.com',
        password: 'jenjenS2'
    });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Authenticated!');
});

test('POST /auth/login return User not found', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: '',
        password: ''
    });

    expect(res.status).toBe(404);
    expect(res.body.message).toBe('User not found');
});

test('POST /auth/login return Incorrect password', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: 'rossinipedro613@gmail.com',
        password: 'jenjen'
    });

    expect(res.status).toBe(401)
    expect(res.body.message).toBe('Incorrect password');
});