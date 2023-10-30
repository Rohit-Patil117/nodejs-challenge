# This is a Node.js Backend Developer Challenge

Developed a RESTful APIs using Node.js (Nest.js framework) for managing books.

## Installation of dependency packages

```bash
$ npm install

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## API endpoints and their usage

I have added the swagger documentation for this project.

## Swagger documentation URL

http://localhost:3000/docs

## Any decisions or assumptions

Yes, I have used the API_KEY for authentication and authorization for each API. We would need to pass this API_KEY with the header of the API.

## API_KEY

1ab2c3d4e5f61ab2c3d4e5f6

## Deployment process

I have deployed this Node.js APIs using the AWS EC2 instance.

## Deployed URL

http://3.84.137.19:3000/docs#/

## Deployment steps

## Step 1: Create AWS EC2 instance

Create a free tier AWS EC2 instance with t2.micro type.

## Step 2: Install NodeJS and NPM using nvm

Install node version manager (nvm) by typing the following at the command line.

```bash
sudo su -
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

```

Activate nvm by typing the following at the command line.

```bash
. ~/.nvm/nvm.sh

```

Use nvm to install the latest version of Node.js by typing the following at the command line.

```bash
nvm install node

```

Test that node and npm are installed and running correctly by typing the following at the terminal:

```bash
node -v
npm -v

```

## Step 3: Install Git and clone repository from GitHub

To install git, run below commands in the terminal window:

```bash
sudo apt-get update -y
sudo apt-get install git -y

```

Just to verify if system has git installed or not, please run below command in terminal:

```bash
git — version

```

This command will print the git version in the terminal.

Run below command to clone the code repository from Github:

```bash
git clone https://github.com/Rohit-Patil117/nodejs-challenge.git

```

Get inside the directory and Install Packages

```bash
cd nodejs-challenge
npm install

```

Start the application
To start the application, run the below command in the terminal:

```bash
npm run start

```
