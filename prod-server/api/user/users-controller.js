'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;
exports.show = show;

var _userModel = require('../../model/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(req, res) {
    var user = new _userModel2.default(req.body);
    console.log(user);
    // invent.buyer = user.email;
    user.Date = (0, _moment2.default)(user.dueDate);

    user.save(function (error) {
        if (error) {
            return res.status(500).json();
        }
        return res.status(201).json();
    });
}

function show(req, res) {
    // GET NECESSITY BY ID
    _userModel2.default.findOne({ email: req.params.id }, function (error, user_main) {
        if (error) {
            return res.status(505).json();
        }
        if (!user_main) {
            return res.status(200).json({ user_main: 'none' });
        }
        return res.status(200).json({ user_main: user_main });
    });
}