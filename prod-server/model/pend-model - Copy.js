'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pendSchema = new _mongoose2.default.Schema({
    category: String,
    itempic: String,
    type: String,
    item: String,
    price1: String,
    price2: String,
    size: String, /* should be an array */
    per: String,
    deli_time: String,
    deli_addy: String,
    inputer: String,
    Date: { type: Date, default: Date.now } //Date added
});
pendSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

exports.default = _mongoose2.default.model('pend', pendSchema);