const request = require('supertest');
const { io } = require('socket.io-client');
const { app, server } = require('../server');

jest.setTimeout(10000); // Set timeout to 10 seconds

describe('Chat Server', () => {
    let client1, client2;

    beforeAll((done) => {
        server.listen(3001, done);
    });

    afterAll((done) => {
        if (client1) client1.close();
        if (client2) client2.close();
        server.close(done);
    });

    it('should serve the index.html file', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/html/);
    });

    it('should store and emit chat messages', (done) => {
        client1 = io('http://localhost:3001');
        client2 = io('http://localhost:3001');

        client1.on('connect', () => {
            client1.emit('chat message', { name: 'Client 1', message: 'Hello' });
        });

        client2.on('chat message', (msg) => {
            expect(msg).toEqual({ name: 'Client 1', message: 'Hello' });
            done();
        });
    });
});
