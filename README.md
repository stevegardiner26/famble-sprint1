# Famble

An app that allows people to gamble with no negative consequences.

## Development Setup

1. Ensure that you clone this repo and cd into it.
1. Ensure that you have at least node version 12 or higher installed and enabled.

Make sure to install a local instance of MONGO DB

Install Dependencies

  $ npm install

Run Development Server (Runs on Port 3000)

  $ npm run dev
# Famble

## About The Project

An app that allows people to gamble with no negative consequences.

### Built With

* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [Node.js](https://nodejs.org/en/docs/)
* [React](https://reactjs.org/docs/getting-started.html)
* [Requests](https://requests.readthedocs.io/en/master/)
* [Flask Socket-io](https://flask-socketio.readthedocs.io/en/latest/)
* [Flask SQLAlchemy](http://flask-sqlalchemy.pocoo.org/2.1/)
* [React Google Login Button](https://www.npmjs.com/package/react-google-login)

## Getting Started


### Prerequisites
* Flask (sudo optional)
```sh
[sudo] pip install flask
```

### Installation
1. Clone the repo
```sh
git clone 
```
2. Install the Prerequisites (See Above)
3. Install `npm` dependencies from `package.json`
```sh
npm install
```
4. Ensure your `.gitignore` contains the following:
```txt

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

Jay - jpr48@njit.edu
Steven -  
Vivek -
Pedro - 

Project Link: [https://github.com/](https://github.com/)

Heroku Link: [LINK](LINK)
