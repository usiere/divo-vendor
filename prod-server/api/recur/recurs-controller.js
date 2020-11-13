'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;

var _recurModel = require('../../model/recur-model');

var _recurModel2 = _interopRequireDefault(_recurModel);

var _nestModel = require('../../model/nest-model');

var _nestModel2 = _interopRequireDefault(_nestModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(req, res) {
    // GET NECESSITY BY ID
    _nestModel2.default.findOne({ _id: req.body.itemid }, function (error, recur_new) {
        if (error) {
            return res.status(505).json();
        }
        if (!recur_new) {
            return res.status(404).json();
        }

        var recurobj = recur_new.toObject();

        var recur = new _recurModel2.default({

            deli_time_weekly: req.body.deli_time_weekly,
            deli_time_custom1: req.body.deli_time_custom1,
            deli_time_custom2: req.body.deli_time_custom2,
            deli_time_custom3: req.body.deli_time_custom3,
            deli_time_custom4: req.body.deli_time_custom4,
            deli_addy1: req.body.deli_addy1,
            deli_addy_custom: req.body.deli_addy_custom,
            qty: req.body.qty,
            category: recurobj.category,
            itempic: recurobj.itempic,
            type: recurobj.type,
            item: recurobj.item,
            price: recurobj.price,
            size: recurobj.size,
            per: recurobj.per
        });
        console.log(recur);

        recur.save(function (error) {
            if (error) {
                return console.log(error);
            }
            return res.status(201).json();
        });
    }).select("-_id");
}