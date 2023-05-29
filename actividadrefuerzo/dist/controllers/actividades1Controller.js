"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejemploPost = exports.ejemploGet = void 0;
const usuarios = [
    {
        email: 'juan@google.com',
        password: '123456'
    },
    {
        email: 'felipe@google.com',
        password: '654321'
    },
    {
        email: 'ana@google.com',
        password: '123321'
    }
];
const ejemploGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.params;
    const usuario = usuarios.find((x) => x.email === email && x.password === password);
    if (!usuario) {
        res.status(401).json({
            usuario: '',
            msg: 'Credenciales erróneas'
        });
    }
    else {
        res.status(200).json({
            usuario,
            msg: 'Credenciales correctas'
        });
    }
});
exports.ejemploGet = ejemploGet;
const ejemploPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const usuario = usuarios.find((x) => x.email === email && x.password === password);
    if (!usuario) {
        res.status(401).json({
            usuario: '',
            msg: 'Credenciales erróneas'
        });
    }
    else {
        res.status(200).json({
            usuario,
            msg: 'Credenciales correctas'
        });
    }
});
exports.ejemploPost = ejemploPost;
//# sourceMappingURL=actividades1Controller.js.map