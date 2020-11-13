'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;

var _nestModel = require('../../model/nest-model.js');

var _nestModel2 = _interopRequireDefault(_nestModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
    // FIND ALL NECESSITIES
    _nestModel2.default.find({}, function (error, nests) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ nests: nests });
    });
}