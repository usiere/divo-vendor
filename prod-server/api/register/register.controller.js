'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;

var _stringUtil = require('../../utilities/string-util');

var _userModel = require('../../model/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// User Register
function index(req, res) {
    var validation = validateIndex(req.body);

    var user = new _userModel2.default({
        email: req.body.email,
        password: req.body.password,
        fullname: req.body.fullname
    });
    user.save(function (error) {
        if (error) {
            // Mongoose Error Code 11000 means validation failure (username taken)
            if (error.code === 11000) {
                return res.status(403).json({ message: 'Username is already taken' });
            }
            return res.status(500).json();
        }
        return res.status(201).json();
    });
}

function validateIndex(body) {
    var errors = '';
    if (_stringUtil.StringUtil.isEmpty(body.email)) {
        errors += 'Email is required. ';
    }
    if (_stringUtil.StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }
    if (_stringUtil.StringUtil.isEmpty(body.fullname)) {
        errors += 'Full name is required. ';
    }

    return {
        isValid: _stringUtil.StringUtil.isEmpty(errors),
        message: errors
    };
}