# This is some starter code in React with Google Auth

# Getting Started

This README.md covers how to use the starter code at https://react-google-auth-starter.herokuapp.com/. I also have a video on how to use this starter code here! https://www.youtube.com/watch?v=XZceEXlYC1w&ab_channel=VincentTieu.

To get started, make sure you have node and npm installed. You can check that by running "node -v" and "npm -v" on your computer. If no versions of node or npm appear on your computer, you can download them here: https://nodejs.org/en/.

Next, clone the repo onto your machine.

The first thing to notice is a folder called src/ which contains index.js, App.js, components/, pages/, images/, etc. This is where all of your HTML, CSS, and Javascipt are written for your frontend app.

The second thing to notice is the "package.json" and "package-lock.json." "package.json" shows you how the React app is being configured. There is a section called "scripts" which are used to start, build, and format your app. "package-lock.json" manages npm, which stands for "Node package manager", to manage what are essentially all of the user libraries for the app. "package-lock.json" records what libraries are being added and ensures that all developers are using a similar developer environment.

By doing "npm install", a folder called "node_modules" will be installed to the repo's root directory so your machine will have all the libraries required to run the app.  Now try doing "npm run start" to run the application on your machine's "localhost:3000/".

# Adding Google Authentication

You should now have an instance of the app running on "localhost:3000/". Awesome! You may now be wondering why the app looks so bare-bones. You aren't even able to click on the "Profile" button without the app breaking. This is because Google Authentication's Client ID is not being loaded in yet.

You can check this by right clicking anywhere on the website and performing an "inspect." Then check the "console" tab. You should see an uncaught error regarding "client_id".

<img src="https://user-images.githubusercontent.com/46038043/114118579-dffb2e00-989d-11eb-8ffb-b53dd417a0b8.png" />

The next step to setup the "client_id" for your app in the ".env". Go to this link: https://console.cloud.google.com/apis/credentials and create a project. In the OAuth consent screen, you should set the user type to "external." Now go ahead to the "credentials" screen and add a new "OAuth Client ID."

**When adding an "OAuth Client ID," add it for a "web application" and remember to set the "Authorized JavaScript origins" and "Authorized redirect URIs" to "http://localhost:3000" and "https://localhost:3000".**

In your folder, copy a file called ".env.SAMPLE" into ".env". Finally add your "client_id" into your ".env" file and do "npm run start". You should now have the React app running locally on your computer!

# Deploying

Now that you have the .env file setup and your app is identical to https://react-google-auth-starter.herokuapp.com/, you are finally ready to deploy your app to the World Wide Web!

Go to https://www.heroku.com/, which is a **FREE** cloud platform to host your app to the web. Click create new project. Name it. Then go to the settings. In "Config Vars", add a key called "REACT_APP_AUTH_CLIENT_ID" with a key value of your "client_id". Make sure that you committed and pushed your changes onto your github repo. Link the github repo and deploy it.

**Remember to add the name of your website into "Authorized JavaScript origins" and "Authorized redirect URIs" of your OAuth consent screen!**

You are now done! Congratulations for sticking through to the end of the tutorial. Come to my office hours (Monday 4-5 PM PST) if you have any questions more related to the starter code / Google Authentication. For questions about general React and Heroku, I'm sure that anyone on the **awesome** teaching team would be happy to answer them.

# General Setup and Tips

The application is setup with Google Authentication, Private and Public Routing (how you change the url), and some basic HTML CSS page layouts. The application also includes some npm libraries located in package-lock.json called "prettier" and "react-bootstrap." <a href="https://prettier.io/">Prettier </a> is a code formatter, which you can use with the command "npm run format". <a href="https://react-bootstrap.github.io/">React-Bootstrap</a> is a frontend library used to setup some components like the nav bar for example.

In App.js, we can see how the routing takes place. The most important lines of the file is on lines 51-59. Everything else can be blackboxed for the most part. We have a switch tag with routes to a "Home", "Profile", and "404 Page Not Found" page. "Home" is a public route, meaning you don't have to login to view the information. "Profile" is a private page where you do have to log in to view the information. In both the "Home" and "Profile" pages, we have a layout which takes a parameter of "user" which is used to load the page.
