import supertest from 'supertest';
import app from '../server.js';

test('POST /auth/cadastro return Todos os campos são obrigatórios! (no nome)', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: '',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('Todos os campos são obrigatórios!');
    expect(res.status).toBe(400);
});

test('POST /auth/cadastro return Todos os campos são obrigatórios! (no email)', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: '',
        password: 'adminS2',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('Todos os campos são obrigatórios!');
    expect(res.status).toBe(400);
});

test('POST /auth/cadastro return Todos os campos são obrigatórios! (no password)', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: 'admin@gmail.com',
        password: '',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('Todos os campos são obrigatórios!');
    expect(res.status).toBe(400);
});

test('POST /auth/cadastro return Cadastro bem sucedido!', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'adminS2'
    });

    expect(res.body.message).toBe('Cadastro bem sucedido!');
    expect(res.status).toBe(200);
});

test('POST /auth/cadastro return Email já registrado!', async () => {
    const res = await supertest(app).post('/auth/cadastro').send({
        nome: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'adminS2'
    });

    expect(res.body.message).toBe('Email já registrado!');
    expect(res.status).toBe(409);
});

test('POST /auth/login return Autenticado!', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: 'admin@gmail.com',
        password: 'adminS2'
    });

    expect(res.body.message).toBe('Autenticado!');
    expect(res.status).toBe(200);
});

test('POST /auth/login return Usuário não encontrado!', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: '',
        password: ''
    });

    expect(res.body.message).toBe('Usuário não encontrado!');
    expect(res.status).toBe(404);
});

test('POST /auth/login return Senha incorreta!', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: 'admin@gmail.com',
        password: 'admin'
    });

    expect(res.body.message).toBe('Senha incorreta!');
    expect(res.status).toBe(401)
});