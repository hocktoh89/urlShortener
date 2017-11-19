import 'babel-polyfill';
import { expect } from 'chai';

var request = require('supertest');
var app = require('../server');

describe('test GET', function() {
  describe('getShortenUrl', function() {
    it('should return shortened url', function(done) {
      const longUrl = 'https://www.khanacademy.org/computing/computer-science/informationtheory/info-theory/v/language-of-coins-2-8-proto-writing';      
        request(app)
        .get(`/shortenedUrl/?longUrl=${longUrl}`)
        .end(function(err, res){
          expect(res.body.url).to.have.string('http://bit.ly');
          done(err);
        });
      });
    })
});

