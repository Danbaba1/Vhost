import express, { Express, Request, Response, NextFunction } from 'express';
import vhost from 'vhost';

const app: Express = express();

// Extend the default Request interface to include the vhost property
interface VhostRequest extends Request {
    vhost: {
        hostname: string;
        host: string;
        length: number;
        [index: number]: string;
    };
}

// Create a handler function for the vhost
const vhostHandler = (req: Request, res: Response, next: NextFunction) => {
    const vhostReq = req as VhostRequest;
    const fullHostname = vhostReq.vhost?.hostname || '';
    const hostname = fullHostname.replace(/\.localhost$/, '');

    // Route handling
    if (req.path === '/') {
        const username = hostname
            .split('-')
            .map(name => name.charAt(0).toUpperCase() + name.slice(1))
            .join(' ');
        res.send(`Hello, ${username}`);
    } else if (req.path === '/profile') {
        const username = hostname.split('-')[0].charAt(0).toUpperCase() + hostname.split('-')[0].slice(1);
        res.send(`Profile page for ${username}`);
    } else if (req.path === '/update') {
        const username = hostname.split('-')[0].charAt(0).toUpperCase() + hostname.split('-')[0].slice(1);
        res.send(`Update received for ${username}`);
    } else {
        next();
    }
};

// Use the vhost function with our handler, using explicit type casting
app.use(vhost('*.localhost', vhostHandler as any));

// Default route for non-matching requests
app.use((req: Request, res: Response) => {
    res.status(404).send('Not Found');
});

app.listen(1337, () => console.log('Web Server running on port 1337'));
