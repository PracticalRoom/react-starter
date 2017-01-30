import {jsdom} from 'jsdom';

export function createDOM () {
  before(function () {
    global.document = jsdom();
    global.window = global.document.defaultView;
  });

  after(function () {
    delete global.window;
    delete global.document;
  });
}
