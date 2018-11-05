# Name of Application

This project is a relatively simple feedback form. From the main view, the user can enter their desired response and click next to continue through the form. The user also has the option to enter comments, and then submit the form. The data is stored in redux state throughout the form process, and is then submitted to a database upon completion. The admin page allows users to view the accumalated data in a table format, as well as delete any particular piece of data.

## Built With

React.js
React-Redux
Axios
React-Confirm-Alert
React-Router
PostgresQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [postgresQL](https://www.postgresql.org/download/)
- [postico](https://eggerapps.at/postico/) to interface with postgresQL

### Installing

Steps to get the development environment running.

1. Download this project.
2. `npm install`
3. `npm run client`
4. `npm run server`
5. Initiate postgresQL
6. Create database using sample data from data.sql file


### Completed Features

High level list of items completed.

- Feedback entered stored in redux state
- Redux state data retrieved by axios and sent to database 
- Redux state cleared upon submission for new form to be created
- Table displayed on admin page with option to delete feedback

### Next Steps

- I would like to have the radio buttons respond to corresponding keystrokes
- I would like to be able to go back in the form, and adjust state accordingly so the data still posts correctly


## Authors

* Jonathan Reckinger
* Instructors at Prime, for some really basic server code
