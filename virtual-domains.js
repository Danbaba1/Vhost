import express from 'express'
import vhost from 'vhost'
const app = express()

const app1 = express.Router()
const app2 = express.Router()

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

app.use(vhost('localhost', app1));
app.use(vhost('second.localhost', app2));

app.listen(
    1337,
    () => console.log('Web Server running on port 1337')
);
