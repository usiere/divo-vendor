'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.show = show;
exports.create = create;
exports.remove = remove;
exports.cout = cout;

var _orderModel = require('../../model/order-model');

var _orderModel2 = _interopRequireDefault(_orderModel);

var _coutModel = require('../../model/cout-model');

var _coutModel2 = _interopRequireDefault(_coutModel);

var _nestModel = require('../../model/nest-model');

var _nestModel2 = _interopRequireDefault(_nestModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function show(req, res) {
    // FIND ALL NECESSITIES
    _orderModel2.default.find({}, function (error, orders) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ orders: orders });
    });
}

function create(req, res) {
    // GET NECESSITY BY ID
    _nestModel2.default.findOne({ _id: req.body.itemid }, function (error, order_new) {
        if (error) {
            return res.status(505).json();
        }
        if (!order_new) {
            return res.status(404).json();
        }

        var orderobj = order_new.toObject();

        var order = new _orderModel2.default({
            category: orderobj.category,
            item: orderobj.item,
            divo_id: orderobj.divo_id,
            item_img: orderobj.item_img,
            price: orderobj.price,
            range: orderobj.range,
            per: orderobj.per,
            deli_time: req.body.deli_time,
            deli_addy: req.body.deli_addy,
            desc: orderobj.desc,
            inputer: req.body.user,
            qty: req.body.qty,
            date: (0, _moment2.default)().format("MMM Do YY")

        });

        order.save(function (error) {
            if (error) {
                return console.log(error);
            }
            return res.status(201).json();
        });
    }).select("-_id");
}

function remove(req, res) {
    _orderModel2.default.findOne({ _id: req.params.id }, function (error, order) {
        if (error) {
            return res.status(500).json();
        }
        if (!order) {
            return res.status(404).json();
        }

        _orderModel2.default.deleteOne({ _id: req.params.id }, function (error) {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

// Checkout

function cout(req, res) {
    _orderModel2.default.find({ inputer: req.params.id }, function (error, cout_new) {
        if (error) {
            return res.status(500).json();
        }
        if (!cout_new) {
            return res.status(404).json();
        }

        cout_new.forEach(function (cout_each) {
            console.log('check ip' + cout_each);

            var coutobj = cout_each.toObject();
            var cout = new _coutModel2.default({
                category: coutobj.category,
                item: coutobj.item,
                divo_id: coutobj.divo_id,
                item_img: coutobj.item_img,
                price: coutobj.price,
                range: coutobj.range,
                per: coutobj.per,
                deli_time: coutobj.deli_time,
                deli_addy: coutobj.deli_addy,
                desc: coutobj.desc,
                inputer: coutobj.inputer,
                qty: coutobj.qty,
                date: coutobj.date
            });

            cout.save(function (error) {
                if (error) {
                    return console.log(error);
                }
            });
        });

        _orderModel2.default.deleteMany({ inputer: req.params.id }, function (error) {
            if (error) {
                return res.status(505).json();
            }
            return res.status(204).json();
        });
    });
}