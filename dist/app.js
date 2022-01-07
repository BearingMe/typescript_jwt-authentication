"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_1 = __importDefault(require("./middlewares/token"));
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get("/api", (req, res) => {
    res.json({
        message: "Hello World",
    });
});
app.post("/api/secret", token_1.default, (req, res) => {
    const authData = jsonwebtoken_1.default.verify(req.token, "secretkey");
    res.json({
        message: "Hello World",
        authData,
    });
});
app.post("/api/login", (req, res) => {
    // mock user
    const user = {
        username: "admin",
        password: "admin",
    };
    const token = jsonwebtoken_1.default.sign({ user }, "secretkey");
    res.json({ token });
});
app.listen(port, () => console.log(`Server started on port ${port}`));
