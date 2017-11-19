import 'babel-polyfill';
import { expect } from 'chai';

var request = require('supertest');
var app = require('../server');

describe('test GET', function() {
  describe('getShortenUrl', function() {
    it('should return shortened url', function(done) {
        request(app)
        .get('/shortenedUrl')
        .end(function(err, res){
          expect(res.body.url).to.have.string('http://bit.ly');
          done(err);
        });
      });
    })
});

