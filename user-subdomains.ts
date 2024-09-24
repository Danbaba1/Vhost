import express, { Express, Request, Response, NextFunction, RequestHandler } from 'express';
import vhost from 'vhost';

const app: Express = express();

// Define a custom type for the vhost function
type CustomVhost = (hostname: string, handler: RequestHandler) => RequestHandler;

// Cast vhost to our custom type
const customVhost = vhost as unknown as CustomVhost;

// Update the VhostPopulation interface to match vhost's expectations
type VhostPopulation = string[] & {
    host: string;
    hostname: string;
};

// Extend the default Request interface to include the vhost property
interface VhostRequest extends Request {
    vhost: VhostPopulation;
}

// Create a request handler function
const handleVhostRequest: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const vhostReq = req as VhostRequest;
    const fullHostname = vhostReq.vhost?.hostname || '';
    const hostname = fullHostname.replace(/\.localhost$/, '');
    const username = hostname
        .split('-')
        .map(name => name.charAt(0).toUpperCase() + name.slice(1))
        .join(' ');
    res.send(`Hello, ${username}`);
};

// Use the custom vhost function
app.use(customVhost('*.localhost', handleVhostRequest));

app.listen(1337, () => console.log('Web Server running on port 1337'));
