'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var praiseModel = {
	addpraise: function addpraise() {
		return new Promise(function (resolve, reject) {
			(0, _requestPromise2.default)('http://localhost/addPraise.php?operation=insert').then(function (result) {
				var info = JSON.parse(result);
				if (info.success) {
					resolve(info);
				} else {
					reject(info);
				}
			}).catch(function (err) {
				reject(err);
			});
		});
	},
	selectpraise: function selectpraise() {
		return new Promise(function (resolve, reject) {
			(0, _requestPromise2.default)('http://localhost/addPraise.php?operation=select').then(function (result) {
				if (result > 0) {
					resolve(result);
				} else {
					reject(result);
				}
			}).catch(function (err) {
				reject(err);
			});
		});
	}
};

exports.default = praiseModel;