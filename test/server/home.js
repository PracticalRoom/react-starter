import expect from 'expect';
import {load} from 'cheerio';
import request from 'supertest';
import server from '../../app/server';

describe('A request for the `/` route', function () {
  before(async function () {
    this.response = await request(server).get('/');
    this.$ = load(this.response.text);
  });

  it('responds with the home page', async function () {
    expect(this.response.status).toEqual(200);
    expect(this.$('h1').text()).toEqual('React Starter / Underdog.io');
  });
});
