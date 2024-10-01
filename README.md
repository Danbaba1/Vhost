# Virtual Hosting with Express and vhost

This project demonstrates how to set up a virtual hosting environment using Express and vhost in TypeScript. It includes two examples: a basic virtual hosting setup and a user-specific subdomain setup.

## Prerequisites

- Node.js installed on your system
- TypeScript installed globally or as a dev dependency
- Basic knowledge of TypeScript and Express

## Getting Started

1. Clone the repository to your preferred folder on your PC:
   ```
   git clone https://github.com/Danbaba1/Vhost.git
   ```
   Alternatively, you can download the project manually and extract it to your desired location.

2. Navigate to the project directory:
   ```
   cd Vhost
   ```

3. Switch to the TypeScript branch:
   ```
   git checkout typescript
   ```

4. Install the required dependencies:
   ```
   npm install
   ```
   This will install all the necessary modules, including Express, vhost, TypeScript, ts-node, and nodemon.

## Running the Examples

The project includes npm scripts to run the TypeScript files directly using nodemon and ts-node, which allows for automatic reloading when you make changes to the files.

### Basic Virtual Hosting

To run the basic virtual hosting example:

1. Open a terminal and run:
   ```
   npm run dev:virtual
   ```
2. Open a web browser and navigate to:
   - `http://localhost:1337/`
   - `http://second.localhost:1337/`

Note: You may need to add `second.localhost` to your hosts file for the second URL to work properly.

### User-Specific Subdomains

To run the user-specific subdomain example:

1. Open a terminal and run:
   ```
   npm run dev:user
   ```
2. Open a web browser and navigate to:
   - `http://john-doe.localhost:1337/`
   - `http://jane-smith.localhost:1337/profile`
   - `http://alice-johnson.localhost:1337/update`

Replace the usernames in the URLs with any hyphenated names to see how it dynamically handles different users.

Note: You may need to add these subdomains to your hosts file for them to work properly.

## Understanding the Code

- `virtual-domains.ts` demonstrates a basic setup with two different virtual hosts.
- `user-subdomains.ts` shows how to create dynamic user-specific subdomains and routes.

Both files are written in TypeScript, providing type safety and better developer experience.

### Key Features

1. **Type-safe Express and vhost usage**: The code uses TypeScript to ensure type safety when working with Express and vhost.
2. **Dynamic subdomain handling**: The user-subdomain example demonstrates how to handle dynamic subdomains based on the hostname.
3. **Custom routing**: Both examples show how to set up custom routes for different virtual hosts or subdomains.
4. **Development with auto-reloading**: The npm scripts use nodemon and ts-node to automatically restart the server when changes are made to the TypeScript files.

Feel free to explore and modify the code to suit your needs!

## Additional Notes

- The provided npm scripts use nodemon and ts-node to run the TypeScript files directly, so you don't need to manually compile them.
- You can modify the TypeScript files and the server will automatically restart to reflect your changes.
- Make sure your `tsconfig.json` is properly configured for your development environment.
- If you need to make any changes to the npm scripts, you can find them in the `package.json` file.
