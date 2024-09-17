# Getting Ready with Vhost

Follow these steps to set up a virtual hosting environment using Express and vhost:

1. Initialize the project:
   Open a terminal and run:
   ```
   npm init
   ```

2. Install the necessary dependencies:
   ```
   npm install vhost express
   ```

3. Create a new file named `virtual-domains.js` in your project directory.

4. Open `virtual-domains.js` in your preferred code editor.

5. Initialize a new ExpressJS application.

6. Define two routers that you will use to run the mini application.

7. Add a route method to handle GET requests for path "/" in the first router.

8. Serve the first application under localhost and the second under second.localhost.

9. Listen on port 1337 for new connections.

10. Save the file.

11. Open a terminal and run:
    ```
    node virtual-domains.js
    ```

12. To see the result, in your web browser navigate to:
    - `http://localhost:1337/`
    - `http://second.localhost:1337/`

Note: You may need to add `second.localhost` to your hosts file for the second URL to work properly.

That's it! You now have a basic virtual hosting setup using Express and vhost.
