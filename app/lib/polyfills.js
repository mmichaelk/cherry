// TODO: test it on old browsers
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = Promise;
}

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
