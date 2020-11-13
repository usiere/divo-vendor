'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var catSchema = new _mongoose2.default.Schema({

    cat_id: String,
    name: String,
    desc: String,
    field: String,
    addy: String,
    phone: String,
    user: String,
    Date: { type: Date, default: Date.now } //Date added
});
catSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

exports.default = _mongoose2.default.model('cat', catSchema);