'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;
exports.remove = remove;

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

function remove(req, res) {
    _nestModel2.default.findOne({ _id: req.params.id }, function (error, nest) {
        if (error) {
            return res.status(500).json();
        }
        if (!nest) {
            return res.status(404).json();
        }

        _nestModel2.default.deleteOne({ _id: req.params.id }, function (error) {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}