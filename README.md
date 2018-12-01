# Neighborhood Map Project

## About the project
- This is a single-page application that displays a map of Kolkata, populated with many markers/locations depicting neighbourhood restaurants, which can be filtered by the users and on clicking, their details will be displayed on the map.
- Google Maps API is used to generate the map, and the Foursquare API is used to fetch information such as address, distance etc.,to display when a marker is clicked.

## Features
- A Google Maps implemenation that shows you the nearest restaurants around Kolkata. It is a fully mobile-responsive progressive web-app, and is accessibility friendly.
- You can directly select the markers from the map, or by expanding the hamburger icon, and then by clicking on desired name of restaurant on the sidebar.
- The sidebar locations can be filtered simply by typing in the name of the restaurant.
- Choosing a location will display an info window, rich with information of the place, such as distance from the central point, address, type of restaurant etc.

## How to run the app
- You'll need [NodeJs](https://nodejs.org/en/) to run this app.
- Clone this [repository](https://github.com/sidinsomniac/Neigbourhood_Map) with the command `git clone https://github.com/sidinsomniac/Neigbourhood_Map.git` in your terminal.
- Install all dependencies in `package.json` by running the command `npm install` in your terminal.
- Finally, run the server with `npm start`. This will automatically open the app in your browser. If not, open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.
- This is called the _***Development Mode***_, and the service worker will not be registered in this mode, and no caching of this page will take place, i.e. this app will not work offline in this mode.
- Also, you can visit the live version of this app [here](https://sidinsomniac.github.io/Neigbourhood_Map/)

###  Then how do you run the app offline?
- Don't worry, service workers have been made to be available in _***Production Mode***_. You can do that by simply running the command `npm run build` in your terminal. This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- Navigate to the build folder, and Voila! You have your production ready build version of the code.

## Other available scripts
In the project directory, you can run:
#### `npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. 
Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Acknowledgement
This project was developed for the [Udacity](https://in.udacity.com/) FEND Nanodegree program, and was built using [React](https://reactjs.org/), [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial), and [FourSquare API](https://foursquare.com/). 

## Dependencies
This project was created using [NodeJS](https://nodejs.org/en/) as a tool, and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
