'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _praiseModel = require('../models/praiseModel.js');

var _praiseModel2 = _interopRequireDefault(_praiseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var indexController = {
	index: function index() {
		var _this = this;

		return function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return ctx.render('index', { title: '点赞项目' });

							case 2:
								ctx.body = _context.sent;

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this);
			}));

			return function (_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}();
	},
	addpraise: function addpraise() {
		var _this2 = this;

		return function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
				var data;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _praiseModel2.default.addpraise();

							case 2:
								data = _context2.sent;

								console.log(data);
								ctx.body = data;

							case 5:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x3, _x4) {
				return _ref2.apply(this, arguments);
			};
		}();
	},
	selectpraise: function selectpraise() {
		var _this3 = this;

		return function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx, next) {
				var data;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return _praiseModel2.default.selectpraise();

							case 2:
								data = _context3.sent;

								console.log(data);
								ctx.body = data;

							case 5:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x5, _x6) {
				return _ref3.apply(this, arguments);
			};
		}();
	}
};

exports.default = indexController;