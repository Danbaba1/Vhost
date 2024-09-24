"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vhost_ts_1 = __importDefault(require("vhost-ts"));
const app = (0, express_1.default)();
const app1 = express_1.default.Router();
const app2 = express_1.default.Router();
// Routes for app1
app1.get('/', (req, res, next) => {
    res.send('This is the main application.');
});
app1.get('/about', (req, res, next) => {
    res.send('About page for the main application.');
});
app1.get('/contact', (req, res, next) => {
    res.send('Contact page for the main application.');
});
// Routes for app2
app2.get('/', (req, res, next) => {
    res.send('This is a second application.');
});
app2.get('/info', (req, res, next) => {
    res.send('Info page for the second application.');
});
app2.get('/services', (req, res, next) => {
    res.send('Services page for the second application.');
});
app.use((0, vhost_ts_1.default)('localhost', app1));
app.use((0, vhost_ts_1.default)('second.localhost', app2));
app.listen(1337, () => console.log('Web Server running on port 1337'));
