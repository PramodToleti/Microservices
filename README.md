# Microservices Setup

This repository contains a set of microservices designed to create OpenAPIs using YAML and OpenAPI Generator Plus. These microservices provide simple CRUD (Create, Read, Update, Delete) operations on user data. To get started, follow the instructions below to set up and run the microservices locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (https://nodejs.org/) - Make sure you have a recent version installed.
- MongoDB - You need a running MongoDB instance or a MongoDB cluster URL for database operations.

## Setup Instructions

1. **Clone the Repository:** Start by cloning this repository to your local machine using the following command:

   ```bash
   https://github.com/PramodToleti/Microservices.git
   cd Microservices
   ```

2. **Install Dependencies**: Once you're inside the repository directory, install the required dependencies by running:

   ```bash
   npm install
   ```

3. **Generate TypeScript Code**: Use the following command to generate TypeScript code from OpenAPI specifications:

   ```bash
   npm run generate
   ```

4. **Configure MongoDB**: Create a .env file in the root directory of the repository and add your MongoDB cluster URL as follows:

   ```bash
   MONGO_URL=your-mongodb-cluster-url
   ```

5. **Run Microservices**: To start the microservices in development mode, execute the following command:
   ```bash
   npm run dev
   ```

## Usage

With the microservices up and running, you can now test the CRUD operations on user data using the OpenAPI specifications provided. You can explore and interact with the APIs using tools like Postman or Swagger UI.

## Contributing

If you'd like to contribute to this repository, feel free to fork the repository, make your changes, and submit a pull request. Make sure to follow the established coding standards and guidelines.

## Issues and Support

If you encounter any issues, feel free to open a new issue with detailed information about the problem you're facing.
