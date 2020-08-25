# S2BN Personal Project 

This project was completely built (voluntarily) by Laith Harb for an organization called **Science to Business Network**. I believe it encompasses all aspects of software development as it deals with both the frontend & backend, quality assurance, and deployment.

As I am applying for **Shopify's backend development internship** position, I will primarily detail what I've done in the backend, but I will still note some of the notable things I did in the frontend and deployment.

## The Server

The server of this application was built with **Node** and **Express**. The database used by **MongoDB**, where MongoDB Atlas was utlized as the cloud provider. Testing was completed with **Jest** and **Puppeeter**.

I will go through how I set up the following:

1. Authentication 
2. Communication with the Database
3. Payment Handling 
4. Testing
5. Input Validation 
6. Application Containerization

### Authentication 

In this application, I only wanted to authenticate internal members of the organization, rather than anybody that visits the website. This is because authenticated users have the ability to perform sensitive **CRUD** operations, such as creating events and viewing payments, that should by restricted to a few individuals.

As a result, I decided to take a **token-based** approach with **JSON Web Tokens** over **OAuth** with **passport.js**. OAuth would have been a more user friendly approach if we wanted to authenticate any user that visits the website, but may have been less useful if we wanted to filter for specific individuals. 

To only allow specific users to create accounts, users must submit an authentication code, along with their credentials, when signing up for an account

#### Signing up

