const request = require('supertest');
const {app,} = require('../app.js');

test('when making GET REQUEST TO /PING WE GET BACK {message:pong}',done =>{
    request(app)
    .get('/ping')
    .then(response =>{
        expect(response.body).toEqual({"message":"pong"});
        done();
    })
})