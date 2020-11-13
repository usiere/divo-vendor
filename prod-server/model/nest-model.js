'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nestSchema = new _mongoose2.default.Schema({
    item_id: String,
    category: String,
    item: String,
    item_img: String,
    price: String,
    per: String,
    inputer: String,
    desc_intro: String,
    added: String,
    ordered: { type: Boolean, default: false },
    recurred: { type: Boolean, default: false }
});
nestSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

exports.default = _mongoose2.default.model('nest', nestSchema);