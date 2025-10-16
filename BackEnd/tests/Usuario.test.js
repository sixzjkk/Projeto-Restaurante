import supertest from 'supertest';
import app from '../server.js';

test('POST /auth/cadastro return All fields are required! (no nome)', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: '',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('All fields are required!');
    expect(res.status).toBe(400);
});

test('POST /auth/cadastro return All fields are required! (no email)', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: '',
        password: 'adminS2',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('All fields are required!');
    expect(res.status).toBe(400);
});

test('POST /auth/cadastro return All fields are required! (no password)', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: 'admin@gmail.com',
        password: '',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('All fields are required!');
    expect(res.status).toBe(400);
});

test('POST /auth/cadastro return All fields are required! (no confirmPassword)', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: ''
    });

    expect(res.body.message).toBe('All fields are required!');
    expect(res.status).toBe(400);
});

test('POST /auth/cadastro return All fields are required! (confirmPassword incorrect)', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('All fields are required!');
    expect(res.status).toBe(400);
});

test('POST /auth/cadastro return Registration successful', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'adminS2'
    });

    expect(res.body.message).toBe('Registration successful');
    expect(res.status).toBe(200);
});

test('POST /auth/cadastro return Email already cadastroed', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'adminS2'
    });

    expect(res.body.message).toBe('Email already cadastroed');
    expect(res.status).toBe(409);
});

test('POST /auth/login return Authenticated!', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: 'admin@gmail.com',
        password: 'adminS2'
    });

    expect(res.body.message).toBe('Authenticated!');
    expect(res.status).toBe(200);
});

test('POST /auth/login return Usuario not found', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: '',
        password: ''
    });

    expect(res.body.message).toBe('Usuario not found');
    expect(res.status).toBe(404);
});

test('POST /auth/login return Incorrect password', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: 'admin@gmail.com',
        password: 'admin'
    });

    expect(res.body.message).toBe('Incorrect password');
    expect(res.status).toBe(401)
});