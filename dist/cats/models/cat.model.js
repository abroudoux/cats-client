"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsSchema = void 0;
const mongoose = require("mongoose");
exports.CatsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
});
;
//# sourceMappingURL=cat.model.js.map