# This is some starter code in React with Google Auth

# Getting Started

To get started, make sure you have node and npm installed. You can check that by running "node -v" and "npm -v" on your computer.
If no versions of node or npm appear on your computer, you can download them here: "https://nodejs.org/en/".

Next, clone the repo onto your machine.

The first thing to notice is a folder called src/ which contains index.js, App.js, components/, pages/, images/, etc. This is where all of your HTML, CSS, and Javascipt are written for your frontend app.

The second thing to notice is the "package.json" and "package-lock.json." "package.json" shows you how the React app is being configured. There is a section called "scripts" which are used to start, build, and format your app. "package-lock.json" manages npm, which stands for "Node package manager", to manage what are essentially all of the user libraries for the app. "package-lock.json" records what libraries are being added and ensures that all developers are using a similar developer environment.

By doing "npm install", a folder called "node_modules" will be installed to the repo's root directory so your machine will have all the libraries required to run the app.  Now try doing "npm run start" to run the application on your local machine's localhost:3000/.

# Adding Google Authentication

You should now have an instance of the app running on localhost:3000/. Awesome! You may now be wondering why the app looks so bare-bones. You aren't even able to click on the "Profile" button without the app breaking. This is because Google Authentication's Client ID is not being loaded in yet.

You can check this by right clicking anywhere on the website and performing an "inspect." Then check the "console" tab. You should see an uncaught error regarding "client_id".

Screen Shot 2021-04-08 at 7.03.52 PM![image](https://user-images.githubusercontent.com/46038043/114118187-361ba180-989d-11eb-8c7f-74aaebdd08c6.png)

The next step to setup the "client_id" for your app! TODO TODO TODO

# Deploying

Now that you have the .env file setup and your app is identical to "https://react-google-auth-starter.herokuapp.com/," you are finally ready to deploy your app to the World Wide Web! TODO TODO TODO

# How the App is Setup

The application is setup with Google Authentication, Private and Public Routing (how you change the url), and some basic HTML CSS page layouts. The application also includes some npm libraries located in package-lock.json called "prettier" and "react-bootstrap." <a href="https://prettier.io/">Prettier </a> is a code formatter, which you can use with the command "npm run format".<a href="https://react-bootstrap.github.io/">React-Bootstrap</a> is a frontend library used to setup some components like the nav bar for example.

In App.js, we can see how the routing takes place. The most important lines of the file is on lines 51-59. Everything else can be blackboxed for the most part. We have a switch tag with routes to a "Home", "Profile", and "404 Page Not Found" page. "Home" is a public route, meaning you don't have to login to view the information. "Profile" is a private page where you do have to log in to view the information. In both the "Home" and "Profile" pages, we have a layout which takes a parameter of "user" which is used to load the page.
