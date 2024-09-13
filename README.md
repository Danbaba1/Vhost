# Getting ready with Vhost
First, initialize the project by opening a terminal and run this following steps :
- Initialise a project using `npm init`
- Install the necessary dependencies `npm install vhost express`
- Create a new file named *virtual-domain.js*
- Initialise a new ExpressJS application
- Define two routers that you will use to run the mini application
- Add a route method to handle GET requests for path "/" in the first router
- Serve the first application under localhost and the second under *second.localhost:*
- Listen on port 1337 for new connections:
- Save the file
- Open a terminal and run: `node virtual-domains.js`
- To see the result, in your web browser navigate to: `http://localhost:1337/
http://second.localhost:1337/`
