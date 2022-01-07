"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ error: "No token provided" });
    }
    if (typeof token !== "undefined") {
        req.token = token;
        next();
    }
}
exports.default = verifyToken;
