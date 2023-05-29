"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerActividades1 = void 0;
const express_1 = require("express");
const actividades1Controller_1 = require("../controllers/actividades1Controller");
exports.routerActividades1 = (0, express_1.Router)();
exports.routerActividades1.get('/ejemplo/:email/:password', actividades1Controller_1.ejemploGet);
exports.routerActividades1.post('/ejemplo', actividades1Controller_1.ejemploPost);
//# sourceMappingURL=routerActividades1.js.map