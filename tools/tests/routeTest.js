const chai = require('chai');
const supertest = require('supertest');
const nock = require('nock');
// const app = require('../srcServer');
const config = require('../../src/js/config/');

const expect = chai.expect;

module.exports = (app) => {
  const api = supertest(app);
  describe('Blog Route Test', () => {
    beforeEach(function () {
      const blogResponse = {
        blog: {
          id: 'no-blog',
          title: "A test blog title.",
          story: "\u003ch1\u003eDOM Elements\u003c/h1\u003e\r\n\u003cdiv\u003e\u0026nbsp;\u003c/div\u003e\r\n\u003cp\u003eReact implements a browser-independent DOM system for performance and cross-browser compatibility. We took the opportunity to clean up a few rough edges in browser DOM implementations.\u003c/p\u003e\r\n\u003cp\u003eInReact, all DOM properties and attributes (including event handlers) should be camelCased. For example, the HTML attribute\u0026nbsp;tabindex\u0026nbsp;corresponds to the attribute\u0026nbsp;tabIndex\u0026nbsp;in React. The exception is\u0026nbsp;aria-*\u0026nbsp;and\u0026nbsp;data-*\u0026nbsp;attributes, which should be lowercased.",
          featured_image_url: "https://files.slack.com/files-tmb/T02R3LKBA-F6J4ARZC1-60f24554e7/img_4358_720.jpg",
          author: {
            id: 2,
            name: "Innocent Amadi"
          }
        }
      };

      // Mock the TMDB configuration request response
      nock(config.host)
        .get('/blogs/no-blog')
        .reply(200, blogResponse);
    });

    it('should return html with meta tags on blog route', (done) => {
      api.get('/blogs/no-blog/a-certain-blog').expect(200).end((err, res) => {
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
  });
};
