'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.show = show;

var _coutModel = require('../../model/cout-model');

var _coutModel2 = _interopRequireDefault(_coutModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function show(req, res) {
    // FIND ALL PAST ORDERS
    _coutModel2.default.find({}, function (error, couts) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ couts: couts });
    });
}