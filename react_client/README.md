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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm install --save react-router-dom` 

### `npm install --save redux react-redux`

### `npm install --save redux-form`

Generate a package.json file to install JSON Server library:
### `cd ..`
### `mkdir api`
### `cd api`
### `npm init`
### `npm install --save json-server`

Add db.json file
Modify package.json file: remove scripts (test...) and add scripts ("start": "json-server -p 3001 -w db.json")
### `npm start`

### `npm install --save axios redux-thunk`
For asyncronous requests

### `npm install --save lodash`
Librery (offers methods) used for simplify the managing of objects, arrays, etc.

Node.js implementation of RTMP(protocolo de transporte para llevar audio y video entre el codificador y la plataforma de streaming):
### `cd ..`
### `mkdir rtmpserver`
### `cd rtmpserver`
### `npm init`
### `npm install --save node-media-server`
Copy the code from https://www.npmjs.com/package/node-media-server, npm version, and paste it ina new file, index.js, in folder rtmpserver.
Modify package.json file: remove scripts (test...) and add scripts ("start": "node index.js")
### `npm start`
RTMP server receives streaming videos on port 1935, and make a video available on port 8000 for consumption


We need to make sure that all three servers are running for the project to work successfully!!!

Download OBS (Open Broadcaster Software es una aplicación libre y de código abierto para la grabación y transmisión de vídeo por internet (streaming)) from OBS Studio:

sudo apt-get install ffmpeg
sudo add-apt-repository ppa:obsproject/obs-studio
sudo apt-get update
sudo apt-get install obs-studio


### `npm install --save flv.js`