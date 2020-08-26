# S2BN Personal Project 

This project was completely built (voluntarily) by Laith Harb for an organization called **Science to Business Network**. I believe it encompasses all aspects of software development as it deals with both the frontend & backend, quality assurance, and deployment.

As I am applying for **Shopify's backend development internship** position, I will primarily detail what I've done in the backend, but I will still note some of the notable things I did in the frontend and deployment.

## The Server

The server of this application was built with **Node** and **Express**. The database used by **MongoDB**, where MongoDB Atlas was utlized as the cloud provider. Testing was completed with **Jest** and **Puppeeter**.

I will go through how I set up the following:

1. Folder Structure
2. Authentication 
3. Communication with the Database
4. Payment Handling 
5. Testing
6. Input Validation 
7. Application Containerization

### Folder Structure 

I organized each component of my application into seperate folders housed in the root directory. I did this because it simplified the **containerization** of the application. This way, each directory gets a unique Dockerfile that creates its own image. In the root directory, all images were brought together in the **Dockerrun.aws.json** and the **docker-compose.yml** file. 

#### Server

The server is made up of 4 folders (config, database, middleware, routes), and 3 files (2 Dockerfiles, index.js). 

***index.js***

All of the applications logic is eventually imported into the index.js file as it is what ultimately starts the server.

***Config Folder***

The config folder houses all the keys needed to run the application. As these keys are sensitive information, I didn't want to expose them to the public in any way. To do this, I created a **keys.js** file that checks whether we are in production or development. If we are in development, it exports the keys in the dev.js file, which contains all our development keys. This file is placed in our .gitignore file and is not commited to GitHub. If we are in production, it exports the keys in the prod.js file, which references each key to its respective environment variable.

***Database Folder***

The database folder houses just one file that is responsible both connecting to the MongoDB database and returning a db object used to execute all the necessary CRUD operations.

To connect and communicate with my database, I am using a **MongoDB driver** rather than a popular **ODM** like **Mongoose**. The reason for this was simply that I didn't understand much about databases at the time and thus I wanted to started with the basics rather than using a ODM that extracts alot of the syntax. I am happy I did it this way because I learned about how to communicate with your database, but it might be a good idea to refactor it to use Mongoose in the future.

***Middleware Folder***

The middleware contains one middleware file that checks if the user is authenticated. This middleware is used to protect certain that require authentication to hit. For example, for someone to create an event they must hit the '/events' route. However, we don't just want anyone to have the ability to create event. Therefore, we use this middleware on the route to check if the user is authenticated. If they are not, it will throw an error before it processed to the route code. 

***Route Folder***

The route folder contains the all the routes of the application seperate based on a common functionality. For instance, all the routes that are responsible for anything to do with the events is housed in the events.js file. Routes responsible for payments are in the payments.js file and routes responsible for authentication are in the auth.js file. All these routes are brough together in the index.js file in the root directory.

![image](https://user-images.githubusercontent.com/35265876/91347415-4c626a80-e7b0-11ea-8802-89638d290d72.png)

### Authentication 

In this application, I only wanted to authenticate internal members of the organization, rather than anybody that visits the website. This is because authenticated users have the ability to perform sensitive **CRUD** operations, such as creating events and viewing payments, that should by restricted to a few individuals.

As a result, I decided to take a **token-based** approach with **JSON Web Tokens** over **OAuth** with **passport.js**. OAuth would have been a more user friendly approach if we wanted to authenticate any user that visits the website, but may have been less useful if we wanted to filter for specific individuals. 

#### Signing up

To only allow specific users to create accounts, users must submit an authentication code, along with their credentials, when signing up for an account

![image](https://user-images.githubusercontent.com/35265876/91337824-fa1a4d00-e7a1-11ea-8224-dbbb8287f126.png)

The authentication code is a random set of strings, unique characters, and numbers that is set as an **environment variable**.
