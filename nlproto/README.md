# Novum Linnaean Interactive Viewer

Prototype to search and explore documented artificial intelligence and machine learning algorithms by their taxonomy and known uses, with additional visibility on the current portfolio for investment and the technical mechanism for their function. The viewer is built in React and Redux and designed to function in any common web browser.

## Getting Started

To view the project from a localcopy in a web browser, only the files located in the dist folder need to be downloaded.

To further develop on the project, all files should be downloaded to your local development environment.

### Prerequisites

The interactive viewer is a self contained application in its current version, and only requires a modern web browser to view.

The development environment is built using the node package manager (npm) and grunt. Information on installing these tools on your specific platform can be found on:
[The NPM website](https://www.npmjs.com/get-npm)
[The Grunt website](https://www.npmjs.com/get-npm)

All node module dependencies are store in package.json and can be installed with

```
npm install
```


### Additional information

The interactive viewer prototype is built with just a handful of example algorithms, stored in an array in src/aiML.js and accessed through the functions defined in pseudoDB.js. In the production model, this will need to be replaced with an actual database and database connection.

A Name search function is also intended for the viewer. It has not yet been added due to time constraints. placeholder classes and elements have been placed in src/components/HomePage.js and src/components/NameSearch.js

## Running the tests

Because of the simplicity of the prototype, automated regression tests have not been included at this time. However the node modules for jest testing have been properly configured in package.json and Gruntfile.js
