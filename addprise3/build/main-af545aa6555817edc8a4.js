webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function addOne(x) {
	return x + 1;
}

exports.default = addOne;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function throttle(fn, timeout) {
	var timer;
	return function () {
		if (!timer) {
			timer = setTimeout(function () {
				timer = null;
			}, timeout);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return fn.apply(this, args);
		}
	};
}

exports.default = throttle;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(5);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addone = __webpack_require__(0);

var _addone2 = _interopRequireDefault(_addone);

var _throttle = __webpack_require__(1);

var _throttle2 = _interopRequireDefault(_throttle);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//绑定插件
jQuery.fn.extend({
	initPraise: function initPraise(limit, callback) {
		return new _index2.default({
			element: this,
			limit: limit,
			callback: callback
		});
	}
});
//使用插件
$('#hand-wrapper').initPraise(10, function () {
	axios.get('/praise/add').then(function (response) {
		if (response.data.success) {
			var currentNum = parseInt($("#currentPraise").text());
			$("#currentPraise").text(currentNum + 1);
		} else {
			console.log(response.data);
		}
	});
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttle = __webpack_require__(1);

var _throttle2 = _interopRequireDefault(_throttle);

var _addone = __webpack_require__(0);

var _addone2 = _interopRequireDefault(_addone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//父类，点赞后count+1
var PraiseButton = function () {
	function PraiseButton(element, limit, callback) {
		_classCallCheck(this, PraiseButton);

		this.count = 0;
		this.element = element;
		this.limit = limit;
		this.callback = callback;
		this.clickElement();
	}

	_createClass(PraiseButton, [{
		key: 'addPraise',
		value: function addPraise() {
			this.count = (0, _addone2.default)(this.count);
		}
	}, {
		key: 'clickElement',
		value: function clickElement() {
			var _this = this;
			var op = function op() {
				if (_this.count + 1 >= _this.limit) {
					//变为灰色
					$(this).css('filter', 'grayscale(100%)');
					$(this).unbind("click");
				}
				_this.addPraise();
				_this.showAnimate();
				_this.callback();
			};
			//绑定节流函数
			var createThrottle = (0, _throttle2.default)(op, 1000);
			$(this.element).find('.hand').click(function () {
				createThrottle();
			});
		}
	}, {
		key: 'showAnimate',
		value: function showAnimate() {
			var addone = $('<div class="hand-small">+' + this.count + '</div>');
			$(this.element).find('.hand').append(addone);
			$(addone).addClass('animate');
		}
	}]);

	return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(_ref) {
		var element = _ref.element,
		    limit = _ref.limit,
		    callback = _ref.callback;

		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, element, limit, callback));
	}

	return Thumb;
}(PraiseButton);

exports.default = Thumb;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[2]);