# S2BN Personal Project 

This project was completely built (voluntarily) by Laith Harb for an organization called **Science to Business Network**. I believe it encompasses all aspects of software development as it deals with both the frontend & backend, quality assurance, and deployment.

As I am applying for **Shopify's backend development internship** position, I will primarily detail what I've done in the backend.
## The Server

The server of this application was built with **Node** and **Express**. The database used by **MongoDB**, where MongoDB Atlas was utlized as the cloud provider. Testing was completed with **Jest** and **Puppeeter**.

I will go through how I set up the following:

1. Folder Structure
2. Authentication 
3. Testing
4. Payment Handling 
5. Application Containerization

### Folder Structure 

I organized each component of my application into seperate folders housed in the root directory. I did this because it simplified the **containerization** of the application. This way, each directory gets a unique Dockerfile that creates its own image. In the root directory, all images were brought together in the **Dockerrun.aws.json** and the **docker-compose.yml** file. 

#### Server

The server is made up of 4 folders (config, database, middleware, routes), and 3 files (2 Dockerfiles, index.js). 

***Config Folder***

The config folder houses all the keys needed to run the application. As these keys are sensitive information, I didn't want to expose them to the public in any way. To do this, I created a **keys.js** file that checks whether we are in production or development. If we are in development, it exports the keys in the dev.js file, which contains all our development keys. This file is placed in our .gitignore file and is not commited to GitHub. If we are in production, it exports the keys in the prod.js file, which references each key to its respective environment variable.

![image](https://user-images.githubusercontent.com/35265876/95662452-10d3f380-0b05-11eb-9d97-fff8d3e3e796.png)

***Database Folder***

The database folder houses just one file that is responsible both connecting to the MongoDB database and returning a db object used to execute all the necessary CRUD operations.

To connect and communicate with my database, I am using a **MongoDB driver** rather than a popular **ODM** like **Mongoose**. The reason for this was simply that I didn't understand much about databases at the time and thus I wanted to started with the basics rather than using a ODM that extracts alot of the syntax. I am happy I did it this way because I learned about how to communicate with your database, but it might be a good idea to refactor it to use Mongoose in the future.

![image](https://user-images.githubusercontent.com/35265876/95662397-a622b800-0b04-11eb-8e7c-d3f3c04aa813.png)

***Middleware Folder***

The middleware contains one middleware file that checks if the user is authenticated. This middleware is used to protect certain that require authentication to hit. For example, for someone to create an event they must hit the '/events' route. However, we don't just want anyone to have the ability to create event. Therefore, we use this middleware on the route to check if the user is authenticated. If they are not, it will throw an error before it processed to the route code. 

![image](https://user-images.githubusercontent.com/35265876/95781539-0435d380-0c9c-11eb-85aa-294ec3bc16ce.png)

The way that this middleware checks if the user is authenticated is looking if a token exists in the req.header["x-auth-header"]. This is set in the client by the function below. 

![image](https://user-images.githubusercontent.com/35265876/95663414-17666900-0b0d-11eb-84d6-07bb28df1488.png)

This function is being called upon mounting of the App component.

![image](https://user-images.githubusercontent.com/35265876/95663562-2ac60400-0b0e-11eb-9dd5-38a061117655.png)

***Route Folder***

The route folder contains the all the routes of the application seperate based on a common functionality. For instance, all the routes that are responsible for anything to do with the events is housed in the events.js file. Routes responsible for payments are in the payments.js file and routes responsible for authentication are in the auth.js file. All these routes are brough together in the index.js file in the root directory.

![image](https://user-images.githubusercontent.com/35265876/91347415-4c626a80-e7b0-11ea-8802-89638d290d72.png)

***index.js***

All of the applications logic is eventually imported into the index.js file as it is what ultimately starts the server.

### Authentication 

In this application, I only wanted to authenticate internal members of the organization, rather than anybody that visits the website. This is because authenticated users have the ability to perform sensitive **CRUD** operations, such as creating events and viewing payments, that should by restricted to a few individuals.

As a result, I decided to take a **token-based** approach with **JSON Web Tokens** over **OAuth** with **passport.js**. OAuth would have been a more user friendly approach if we wanted to authenticate any user that visits the website, but may have been less useful if we wanted to filter for specific individuals. 

#### Signing up

To only allow specific users to create accounts, users must submit an authentication code, along with their credentials, when signing up for an account

![image](https://user-images.githubusercontent.com/35265876/91337824-fa1a4d00-e7a1-11ea-8224-dbbb8287f126.png)

The authentication code is a random set of strings, unique characters, and numbers that is set as an **environment variable**.

The sign up route start at **line 66** in the /server/routes/auth.js directory. From **line 67 to line 90**, I am utilizing a package called express-validator to validate the users input. For instance, I ensure that the first name and last name fields are not empty and that the email input follows the format of an actual email. If any of these checks are not passed, I throw an error, and the preceeding code is not ran. The error message will also display on the client for the user to see.

![image](https://user-images.githubusercontent.com/35265876/91487763-46d25680-e87c-11ea-9da1-59d9cdee580c.png)

From **line 92 to 102**, I am manually checking if both the password and the confirmPassword match. If they don't, I throw the same error.

From **line 105 to 113**, I am checking if the provided authentication code matches the one in the environment variable. If it doesn't, the same error is  thrown.

From **line 115 to 128**, I am checking if the provided email is already in use. I am doing this by using the **.findOne()** method and passing in the provided email. If I get a non-null value, then that email is already associated with an account and thus we throw an error.

On **line 131**, I am hashing the password with a package called **bcrypt** before storing it in the database. This ensures that if someone breaches the database, those passwords will be encrypted.

From **line 134 to 141**, I am simply saving the newly created user into the users collection in the MongoDB database.

From **line 144 to 148**, I am creating a **JSON Web Token** with the email as the payload and then send it to the client. I am using an email because it should be unique across all users. This JWT will later be used to make authenticated requests.

#### Logging in

The logging in logic is very similar to the signing up logic so I won't dwell to much on it. The only main difference is that I am comparing the provided password with the hashed password that corresponds to the provided email. This comparison occurs between **line 44 to line 54**

### Payment Handling

Payment was handled via the **Stripe API**. The first route (starting on **line 9**), is responsible for creating the paymentIntent and communicating it with the Stripe API. If everything was handled correctly, the payment should be processed and completed.

The second route, starting on **line 27**, simply pushes the user into the appropriate event document. This way the administrators can see who is attending which event.

Integrating Stripe into my application was more of a frontend heavy procedure. I actually have a [YouTube series](https://www.youtube.com/watch?v=WROxEd__fNs&t=244s) that discuss how to do it. It applied the same process with this app.

### Testing 

In this project I tried my best to follow a **test-driven development** approach where I first write an automated test defining the desired results and then produce the code to make the test pass. However, as time became restricted and deadlines processed, I (regrettably) omitted testing all together. 

Following this omission, I learned how important testing an application really is. Whenever I worked on a new feature in the application, I would manually check if it works or not. If it does, then I would push the changes onto master and deploy my application.

However, in one case, I followed that procedure and it ended up breaking other parts of my application. I didn't notice this because the feature itself was working fine, and that was what I was focusing on. If I consistently wrote **unit tests** throughout the application, I would have been prompted of this error. 

Because of this experience, I intended to go back and write the tests I missed for every feature of in the application.

### Application Containerization

Before this application, I never worked with **Docker**. Typically when I wanted an application deployed, I'd either do it via **Heroku** or **Netlify**. For this application however, I wanted to dive into the world of **DevOps**, and thus I decided to use Docker and AWS instead. 

Each component of the application has both a **Dockerfile.dev** and a **Dockerfile** file. The Dockerfile.dev is used for development, and the Dockerfile is used for production. Once a new feature is completed and pushed onto the master branch, it is detected by **Travis**. Travis then runs all the tests to check if they pass. If they do, it starts to build the Docker images and then build them onto DockerHub. Once that is done, it redeploys the application on elastic beanstalk.
