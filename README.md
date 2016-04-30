# Watchtower
A Workflow Management Tool for Synthetic Biologists

### Setting up the environment 

#### NodeJS

1. [Install](https://nodejs.org/en/download/) the Node.JS binaries or the installer. 
2. If the install was successful the Node.JS CLI should be available to you. Check by firing up the terminal
  `node --version` should give the installed version. 
3. If the install was successful you should now have the **npm** which is Node's package manager. `npm --version` should confirm this. 
4. Clone this repo `git clone https://github.com/sngpranay/Watchtower.git`
5. Navigate to the Watchtower folder in the terminal and type in `npm install`
6. This should install all the depencies required to run the application. 
7. There should now be a node_modules folder in your root directory. 
8. In Watchtower/config/Repo.js and Watchtower/config/git_add.js make the changes listed in the comments (Your Github account). 

#### Mongodb

1. Install MongodB as instructed [here](https://docs.mongodb.org/v3.0/installation/).
2. To test type in `mongod` in your console.
3. This will application will be using two collections Users and Projects. 

### Run !

1. If all the steps were successful you should now be able to launch the application.
2. In the root directory type in `mongod` and in another terminal window type in `node app.js` from the root directory , fire up a browser and hit `http://localhost:3000/`
3. You should see the Watchtower homepage.
