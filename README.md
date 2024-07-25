# mernStackTest

Repo for toolbox fullstack mern position. The repo is divided by folder, backend for the api and frontend for the webapp.

This app is configured to run with docker-compose, to run it using docker use the command
            ``` docker-compose up toolbox ```
this will run the app locally in localhost, as frontend will run on the port 8080 and the backend on the port 3023. A file named shared.env is included in this reposotory with the backend port listed as 3023 so requests can be made from the frontend successfully.

If you prefer to run them separately read the information bellow  

# Backend

The backend app runs on node v14.21.3 it accepts the port from the variable BACKEND_PORT in a .env file, if not .env file is found or there is no BACKEND_PORT on it, the server will run by default in the port 3000, the app is implemented using express and uses the package csv-parser to handle the csv files and axios to make api calls to the external api.

To run the app you must install the dependencies first with the command:
            ``` npm install ```
after that is done just run the command:
            ``` npm start ```
you can also run the test with:
            ``` npm test ```

You can make a request with the following curl:
            ``` curl --location 'http://localhost:3000/files/data' ```

# Frontend

The frontend app runs on node v16.20.0 it runs in the port 8080 and in order to make the requests to the backend it need a .env file containing the BACKEND_PORT variable, if no .env file is found or if the variable doesn't exists, the backend port will be defined as 3000 by default. The app is implemented using webpack, uses redux to store the information of the files received through the api.

To run the app you must install the dependencies first with the command:
            ``` npm install ```
after that is done just run the command:
            ``` npm start ```
