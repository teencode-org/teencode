const chai = require('chai');
const supertest = require('supertest');
const app = require('../distServer');

const expect = chai.expect;
const api = supertest(app);

describe('Route Test', () => {
  it('should return html with meta tags on blog route', (done) => {
    api.get('/blog/2/a-certain-blog').expect(200).end((err, res) => {
      expect(res.text).to.contain('<meta id="og-title"');
      expect(res.text).to.contain('<meta id="meta-description"');
      expect(res.text).to.contain('<meta id="og-url"');
      expect(res.text).to.contain('<meta id="og-image"');
      expect(res.text).to.contain('<meta id="og-type"');
      expect(res.text).to.contain('<meta name="description"');
      expect(res.text).to.contain('<meta name="twitter:card"');
      expect(res.text).to.contain('<meta name="twitter:site"');
      expect(res.text).to.contain('<meta name="twitter:domain"');
      expect(res.text).to.contain('<meta name="twitter:title"');
      expect(res.text).to.contain('<meta name="twitter:description"');
      expect(res.text).to.contain('<meta name="twitter:image"');
      done();
    });
  });

  it('should return the index page for every other route', (done) => {
    api.get('/all-other-route').expect(200).end((err, res) => {
      expect(res.text).to.not.contain('<meta id="og-title"');
      expect(res.text).to.not.contain('<meta id="meta-description"');
      expect(res.text).to.not.contain('<meta id="og-url"');
      expect(res.text).to.not.contain('<meta id="og-image"');
      expect(res.text).to.not.contain('<meta id="og-type"');
      expect(res.text).to.not.contain('<meta name="description"');
      expect(res.text).to.not.contain('<meta name="twitter:card"');
      expect(res.text).to.not.contain('<meta name="twitter:site"');
      expect(res.text).to.not.contain('<meta name="twitter:domain"');
      expect(res.text).to.not.contain('<meta name="twitter:title"');
      expect(res.text).to.not.contain('<meta name="twitter:description"');
      expect(res.text).to.not.contain('<meta name="twitter:image"');
      done();
    });
  });
});