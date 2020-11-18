Heroku Link: [https://famble.herokuapp.com/](https://famble.herokuapp.com/)
# Famble
An app that allows people to gamble with no negative consequences.

### Built With

* [Node.js](https://nodejs.org/en/docs/)
* [React](https://reactjs.org/docs/getting-started.html)

## Contributions:

### Jay Rana - jpr48@njit.edu

- Landing page
- Bet modal 
- Linting and fixing frontend code
- Redirection based on login status

### Steven Gardiner - spg28@njit.edu 

- Helped setup MongoDB Schema
- Setup Base Application Structure
- Setup Persistent User State on Frontend
- Setup User Routes on Backend
- Setup Game Routes on Backend

### Vivek Sreenivasan - vns9@njit.edu
- Created User dashboard 
- Wrote wrapper functions to interact with API backend
- Linted backend/frontend code
- Researched potential APIs for sports data

### Pedro Ramos - par25@njit.edu
- Set up the MongoDB Schemas
- Set up Betting API along with the Betting Service
- Unit testing on the Backend
- Created the mockups

## Linting:

- Linebreak-Style: Every time it was fixed, it would somehow get reverted when pulled from Github. 
- Prop-Types: It was not working properly since I could not determine the type of props being passed. 
- No-undef: Browser localstorage was undefined but it was being used to store the login token
- No-underscore-dangle: '._id' needed to be accessed as userid for mongodb

## Getting Started


### Prerequisites
* Node (version >= 12)
* MongoDB

### Installation
1. Clone the repo
```sh
git clone 
```
2. Install the Prerequisites (See Above)
3. Install `npm` dependencies from `package.json`
```sh
$ npm install
```
4. Run the following on your local machine (Runs on port 3000):
```sh
$ npm run dev
```

### Note on Google Login Button
In order for the login to work, follow these steps:  
1. Copy your URL either from `Preview your running application` or from your Heroku deployment. 
2. Go to `https://console.developers.google.com/apis/credentials/oauthclient/<CLIENT_ID>?project=<PROJECT_NAME>` **(Replace <CLIENT_ID> and <PROJECT_NAME> with what you created in earlier steps)**
3. Under `URIs`, paste your URL and remove everything after the `.com` or whatever the end of your domain is.
4. Click `Save`

### Deploy via Heroku
1. Sign up for Heroku [http://heroku.com/](http://heroku.com/)
2. Install Heroku
```sh
npm install -g heroku
```
3. Login and create Heroku URL
```sh
heroku login -i
heroku create
```
4. Push your app to Heroku
```sh
git push heroku master
```
5. Navigate to your newly-created Heroku site
6. If you're still having trouble you can check Heroku's logs to see what is going on
```sh
heroku logs --tail
```
7. If you would like to manage your DB, run the following in your terminal:
```sh
heroku pg:psql
```

### Testing


## Contact

- Jay Rana - jpr48@njit.edu
- Steven Gardiner - spg28@njit.edu 
- Vivek Sreenivasan - vns9@njit.edu
- Pedro Ramos - par25@njit.edu

Project Link: [https://github.com/stevegardiner26/famble](https://github.com/stevegardiner26/famble)

Heroku Link: [https://famble.herokuapp.com/](https://famble.herokuapp.com/)
