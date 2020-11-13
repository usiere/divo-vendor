'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;

var _pendModel = require('../../model/pend-model');

var _pendModel2 = _interopRequireDefault(_pendModel);

var _nestModel = require('../../model/nest-model');

var _nestModel2 = _interopRequireDefault(_nestModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(req, res) {
    // GET NECESSITY BY ID
    _nestModel2.default.findOne({ _id: req.body.itemid }, function (error, pend_new) {
        if (error) {
            return res.status(505).json();
        }
        if (!pend_new) {
            return res.status(404).json();
        }

        var pendobj = pend_new.toObject();

        var pend = new _pendModel2.default({
            deli_time: req.body.deli_time,
            deli_addy: req.body.deli_addy,
            category: pendobj.category,
            itempic: pendobj.itempic,
            type: pendobj.type,
            item: pendobj.item,
            price: pendobj.price,
            size: pendobj.size,
            per: pendobj.per
        });
        console.log(pend);

        pend.save(function (error) {
            if (error) {
                return console.log(error);
            }
            return res.status(201).json();
        });
    }).select("-_id");
}