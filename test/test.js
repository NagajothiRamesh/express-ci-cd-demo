const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello schlenkians !');
});

describe('GET /', () => {
  it('should return Hello World', (done) => {
    request(app)
      .get('/')
      .expect('Hello World!')
      .expect(200, done);
  });
});
