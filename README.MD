# BACKEND CHALLENGE

Backend chanllenge for sneakers store

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/idangut/DrenvioChallenge.git

2. Install dependencies

    ```bash
    npm install
    npm i -g nodemon

## Configuration

1. Create a .env file in the root directory of the project.
2. Add the following environment variables to the .env file:

MONGODB_URI = mongodb://drenvio:<password>@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/AG_Challenge?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin

PORT = 4500

## Usage

1. Start the development server

     ```bash
     npm start

### Routes

    /products: Endpoint to retrieve products currently in stock.
    /price/{user_id}/{product_name}: Endpoint to get the price for a specific user and product.

### Dependencies

    Express: Web framework for Node.js
    Mongoose: MongoDB object modeling tool
    Cors: Middleware for enabling CORS in Express apps
    Dotenv: Load environment variables from a .env file
    Nodemon: Automatically restart server on file changes (development only)


2. Run tests

    ```bash
     npm run test

### Dependencies

    jest: Jest is a framework for testing JavaScript code.
    supertest: Using Supertest, we can test endpoints and routes on HTTP servers.
    cross-env: You can set environmental variables inline within a command using cross-env.

