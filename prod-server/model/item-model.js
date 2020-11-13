'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var itemSchema = new _mongoose2.default.Schema({

    img_upd1: String,
    img_upd2: String,
    img_upd3: String,
    item_name: String,
    item_price: String,
    item_size: String,
    item_stock: String,
    item_process: String,
    item_desc: String,
    user: String

});
itemSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

exports.default = _mongoose2.default.model('item', itemSchema);