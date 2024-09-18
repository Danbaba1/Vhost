# Virtual Hosting with Express and vhost

This project demonstrates how to set up a virtual hosting environment using Express and vhost. It includes two examples: a basic virtual hosting setup and a user-specific domain setup.

## Prerequisites

- Node.js installed on your system
- Basic knowledge of JavaScript and Express

## Getting Started

1. Clone this repository or create a new directory for your project.

2. Initialize the project and install dependencies:
   ```
   npm init -y
   npm install express vhost
   ```

3. Create two files in your project directory:
   - `virtual-domains.js`
   - `user-domain.js`

4. Copy the provided code into each file.

## Running the Examples

### Basic Virtual Hosting

To run the basic virtual hosting example:

1. Open a terminal and run:
   ```
   node virtual-domains.js
   ```

2. Open a web browser and navigate to:
   - `http://localhost:1337/`
   - `http://second.localhost:1337/`

Note: You may need to add `second.localhost` to your hosts file for the second URL to work properly.

### User-Specific Domains

To run the user-specific domain example:

1. Open a terminal and run:
   ```
   node user-domain.js
   ```

2. Open a web browser and navigate to:
   - `http://john-doe.localhost:1337/`
   - `http://jane-smith.localhost:1337/profile`
   - `http://alice-johnson.localhost:1337/update`

Replace the usernames in the URLs with any hyphenated names to see how it dynamically handles different users.

Note: You may need to add these subdomains to your hosts file for them to work properly.

## Understanding the Code

- `virtual-domains.js` demonstrates a basic setup with two different virtual hosts.
- `user-domain.js` shows how to create dynamic user-specific subdomains and routes.

Feel free to explore and modify the code to suit your needs!
