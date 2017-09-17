'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;

var _syncanoServer = require('syncano-server');

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run(ctx) {
  const { response } = (0, _syncanoServer2.default)(ctx);

  response.json({ msg: 'Hello World!' });
}

run({
  args: global.ARGS,
  meta: global.META,
  setResponse: global.setResponse,
  HttpResponse: global.HttpResponse
});