'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//父类，点赞后count+1
var PraiseButton = function () {
	function PraiseButton(element, limit) {
		_classCallCheck(this, PraiseButton);

		this.count = 0;
		this.element = element;
		this.limit = limit;
		this.clickElement();
	}

	_createClass(PraiseButton, [{
		key: 'addPraise',
		value: function addPraise() {
			this.count = addOne(this.count);
		}
	}, {
		key: 'clickElement',
		value: function clickElement() {
			var _this = this;
			$(this.element).find('.hand').click(function () {
				if (_this.count + 1 >= _this.limit) {
					//变为灰色
					$(this).css('filter', 'grayscale(100%)');
					$(this).unbind("click");
				}
				_this.addPraise();
				_this.showAnimate();
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
		    limit = _ref.limit;

		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, element, limit));
	}

	return Thumb;
}(PraiseButton);

exports.default = Thumb;
