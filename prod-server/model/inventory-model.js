'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inventSchema = new _mongoose2.default.Schema({
    category: String,
    item: String,
    size: String,
    price: String,
    qty: String,
    brand: String,
    settime: String,
    itempic: String,
    Date: { type: Date, default: Date.now } //Date added
});
inventSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

exports.default = _mongoose2.default.model('invent', inventSchema);