"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//默认函子
var Functor = function () {
    function Functor(val) {
        _classCallCheck(this, Functor);

        this.val = val;
    }

    _createClass(Functor, [{
        key: "map",
        value: function map(f) {
            return new Functor(f(this.val));
        }
    }]);

    return Functor;
}();

Functor.of = function (val) {
    return new this(val);
};

//IO函子

var IO = function (_Functor) {
    _inherits(IO, _Functor);

    function IO(val) {
        _classCallCheck(this, IO);

        return _possibleConstructorReturn(this, (IO.__proto__ || Object.getPrototypeOf(IO)).call(this, val));
    }

    _createClass(IO, [{
        key: "map",
        value: function map(f) {
            return new IO(f(this.val));
        }
    }, {
        key: "join",
        value: function join() {
            return this.val;
        }
    }, {
        key: "flatMap",
        value: function flatMap(f) {
            return this.map(f).join();
        }
    }]);

    return IO;
}(Functor);
//清除延迟函数


function clearFnTimeout(fn) {
    fn.timeoutID && clearTimeout(fn.timeoutID);
    return fn;
}
//设置延迟函数(使用IO因子把setTimeout提纯)
function setFnTimeout(fn) {
    return IO.of(function () {
        return fn.timeoutID = setTimeout(function () {
            fn();
        }, 1000);
    });
}
//节流方法
/*
    1、先清除事件执行
    2、然后延迟1s执行事件
    3、多次1s内连续点击，会不断清除上一次的事件执行，故只会保留最后一次事件，实现节流
*/
function throttle(fn) {
    setFnTimeout(fn).flatMap(function (click) {
        clearFnTimeout(fn);
        click();
    });
}
