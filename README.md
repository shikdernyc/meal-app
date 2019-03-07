# meal-app

## Quickstart

### With Docker and Docker Compose

## For development:

1. Navigate to app root directory
2. Run `docker-compose up`

## For production

1. Navigate to app root directory
2. Run `docker-compose -f production.yml --build`

#### Without Docker

### Backend

Before you start, make sure you have python 3.6 installed

1. navigate to backend folder
2. install virtualenv: `sudo pip3 install virtualenv`
3. create virtual environment: `virtualenv venv`
4. access virtual environment: `source venv/bin/activate`
5. install project requirements: `pip3 install -r requirements.txt`
6. start backend server: `python3 setup`

### Frontend

Before you start, make sure you have node installed

1. navigate to frontend
2. installing dependencies: `npm install`
3. start backend server: `npm start`
