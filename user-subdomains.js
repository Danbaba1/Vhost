"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vhost_ts_1 = __importDefault(require("vhost"));
const app = (0, express_1.default)();
const users = express_1.default.Router();
users.get('/', (req, res, next) => {
    const username = req
        .vhost.host[0]
        .split('-')
        .map(name => (name[0].toUpperCase() +
        name.slice(1)))
        .join(' '); 
    res.send(`Hello, ${username}`);
});
// Additional dynamic routes
users.get('/profile', (req, res, next) => {
    const username = req.vhost.host[0].split('-')[0];
    res.send(`Profile page for ${username}`);
});
users.get('/update', (req, res, next) => {
    // Extract the username from the virtual host
    const username = req.vhost.host[0].split('-')[0];
    // Send a response with the username
    res.send(`Update received for ${username}`);
});
app.use((0, vhost_ts_1.default)('*.localhost', users));
app.listen(1337, () => console.log('Web Server running on port 1337'));
