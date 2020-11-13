'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;
exports.index = index;
exports.remove = remove;

var _catModel = require('../../model/cat-model');

var _catModel2 = _interopRequireDefault(_catModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(req, res) {
    console.log(req.body);
    var cat = new _catModel2.default({
        name: req.body.cat_name,
        field: req.body.cat_field,
        desc: req.body.cat_desc,
        address: req.body.cat_address,
        phone: req.body.cat_phone,
        user: req.body.user,
        date: (0, _moment2.default)().format("MMM Do YY")

    });

    cat.save(function (error) {
        if (error) {
            return console.log(error);
        }
        return res.status(201).json({ cat: cat });
    });
}

function index(req, res) {
    // FIND ALL NECESSITIES
    _catModel2.default.find({}, function (error, cats) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ cats: cats });
    });
}

// deleting category

function remove(req, res) {
    _catModel2.default.findOne({ _id: req.params.id }, function (error, cat) {
        if (error) {
            return res.status(500).json();
        }
        if (!cat) {
            return res.status(404).json();
        }

        _catModel2.default.deleteOne({ _id: req.params.id }, function (error) {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}