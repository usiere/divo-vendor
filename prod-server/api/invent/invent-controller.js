'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;
exports.create = create;
exports.show = show;

var _inventModel = require('../../model/invent-model');

var _inventModel2 = _interopRequireDefault(_inventModel);

var _nestModel = require('../../model/nest-model.js');

var _nestModel2 = _interopRequireDefault(_nestModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
    // FIND ALL NECESSITIES
    _inventModel2.default.find({}, function (error, invents) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ invents: invents });
    });
}

function create(req, res) {
    console.log('How are you');
    console.log(req.body.invent);
    var invent = new _inventModel2.default(req.body.invent);

    // invent.buyer = user.email;
    invent.added = (0, _moment2.default)(invent.added.format("MMM Do YY"));

    invent.save(function (error) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(201).json();
    });
}

function show(req, res) {
    // GET NECESSITY BY ID
    _inventModel2.default.findOne({ _id: req.params.id }, function (error, nest_new) {
        if (error) {
            return res.status(505).json();
        }
        if (!nest_new) {
            return res.status(404).json();
        }

        console.log(nest_new);

        console.log(nest_new);

        var nestobj = nest_new.toObject();
        var user = req.body.user;
        console.log(user);

        var nest = new _nestModel2.default({
            category: nestobj.category,
            divo_id: nestobj.divo_id,
            item: nestobj.item,
            per: nestobj.per,
            price: nestobj.price,
            range: nestobj.range,
            desc: nestobj.desc,
            item_img: nestobj.item_img,
            inputer: user,
            added: (0, _moment2.default)().format("MMM Do YY")

        });

        console.log('check this' + nest);

        nest.save(function (error) {
            if (error) {
                return console.log(error);
            }
            return res.status(201).json();
        });
    }).select("-_id");
}