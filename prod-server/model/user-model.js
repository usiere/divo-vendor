'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    divoid: String,
    email: String,
    name: String,
    address: String,
    district: String,
    city: String,
    phone1: String,
    phone2: String,
    Date: { type: Date, default: Date.now } //Date added
});
userSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

exports.default = _mongoose2.default.model('user', userSchema);