import 'babel-polyfill';
import GET from '../GET';
import { expect } from 'chai';

describe('test GET', function() {
  describe('getShortenUrl', function() {
    it('should return shortened url', async function() {
        let url = await GET.getShortenUrl();
        expect(url).to.have.string('http://bit.ly');
      });
    })
});

