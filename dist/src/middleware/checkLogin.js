"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = void 0;
const checkLogin = (req, res, next) => {
    let { username, password } = req.body;
    if (username === 'admin' && password === '123') {
        next();
    }
    else {
        res.status(401).json({
            message: "Unauthorized",
        });
    }
};
exports.checkLogin = checkLogin;
//# sourceMappingURL=checkLogin.js.map