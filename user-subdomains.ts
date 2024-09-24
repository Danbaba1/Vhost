import express, { Express, IRouter, NextFunction, Request, Response } from 'express'
import vhost from 'vhost-ts'
const app: Express = express()

const users: IRouter = express.Router()
users.get('/', (req: Request, res: Response, next: NextFunction) => {
    const username = req
        .vhost.host[0]
        .split('-')
        .map(name => (
            name[0].toUpperCase() +
            name.slice(1)
        ))
        .join(' ')
    res.send(`Hello, ${username}`);
});

// Additional dynamic routes
users.get('/profile', (req: Request, res: Response, next: NextFunction) => {
    const username = req.vhost.host[0].split('-')[0];
    res.send(`Profile page for ${username}`);
});

users.get('/update', (req: Request, res: Response, next: NextFunction) => {
    // Extract the username from the virtual host
    const username = req.vhost.host[0].split('-')[0];
    
    // Send a response with the username
    res.send(`Update received for ${username}`);
});


app.use(vhost('*.localhost', users))

app.listen(
    1337,
    () => console.log('Web Server running on port 1337'),
)
