"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeControllers = void 0;
class HomeControllers {
    static async logIn(req, res) {
        res.status(200).json({
            message: "Login successfully!"
        });
    }
}
exports.HomeControllers = HomeControllers;
//# sourceMappingURL=home.controllers.js.map