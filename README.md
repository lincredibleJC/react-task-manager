# React Task Manager

This is an implementation of a Project Manager in ReactJS done according to the specs [here](https://gist.github.com/aravindet/ce19c019b774794c4e23df5760e8cca5 "Zendesk Front-end SWE coding challenge").
I rarely program in javascript and have no prior experience in ReactJS prior to this, so do forgive my lack of code structure and overall polish in this repo.


Features successfully built we're looking for:

* [x] Entering text in the 'add project' input and hitting enter will add it as an item to the 'todo' list.
* [x] Three columns for 'Todo', 'In Progress', and 'Done' projects.
* [x] Projects should be draggable and sortable within the same column.
* [x] Projects can also be dragged between adjacent columns.
* [x] The total at the top of each column reflects the number of projects.
* [x] The global total reflects the the global sum of projects.

Things I would love to improve on if I had more time and a better understanding of how ReactJS works:

* Cleaner separation of components
* better data structure for representing data
* built in hosting and persistence of data (I do have some hardcoded sample data though)
* Better looking CSS
* Not relying on ReactJS video tutorials as heavily as I did

Steps to getting this running:

1. Run 'npm install' to download npm dependencies.
1. Run 'npm start' to get run the app in development mode. 

======

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
