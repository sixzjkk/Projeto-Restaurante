import supertest from 'supertest';
import app from '../server.js';

test('POST /auth/register return Registration failed (no name)', async () => {
    const res = await supertest(app).post('/auth/register').send({
        name: '',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('Registration failed');
    expect(res.status).toBe(400);
});

test('POST /auth/register return Registration failed (no email)', async () => {
    const res = await supertest(app).post('/auth/register').send({
        name: 'Admin',
        email: '',
        password: 'adminS2',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('Registration failed');
    expect(res.status).toBe(400);
});

test('POST /auth/register return Registration failed (no password)', async () => {
    const res = await supertest(app).post('/auth/register').send({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: '',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('Registration failed');
    expect(res.status).toBe(400);
});

test('POST /auth/register return Registration failed (no confirmPassword)', async () => {
    const res = await supertest(app).post('/auth/register').send({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: ''
    });

    expect(res.body.message).toBe('Registration failed');
    expect(res.status).toBe(400);
});

test('POST /auth/register return Registration failed (confirmPassword incorrect)', async () => {
    const res = await supertest(app).post('/auth/register').send({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'admin'
    });

    expect(res.body.message).toBe('Registration failed');
    expect(res.status).toBe(400);
});

test('POST /auth/register return Registration successful', async () => {
    const res = await supertest(app).post('/auth/register').send({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'adminS2'
    });

    expect(res.body.message).toBe('Registration successful');
    expect(res.status).toBe(200);
});

test('POST /auth/register return Email already registered', async () => {
    const res = await supertest(app).post('/auth/register').send({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'adminS2',
        confirmPassword: 'adminS2'
    });

    expect(res.body.message).toBe('Email already registered');
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

test('POST /auth/login return User not found', async () => {
    const res = await supertest(app).post('/auth/login').send({
        email: '',
        password: ''
    });

    expect(res.body.message).toBe('User not found');
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