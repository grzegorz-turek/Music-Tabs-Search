# Music Tab Search

## 1. To run project remotely (heroku): [ click here](https://music-tabs-search.herokuapp.com/)

## 2. To run project locally:
- clone repository
- install dependencies: `yarn install`  in root folder
- run in development mode: `yarn start`  in root folder, app will automatically be browsed at [http://localhost:3000](http://localhost:3000) or
- run in production mode: `yarn build`  in root folder: app will be build and bundled into `/build` folder so it is ready for deployment

## 3. Main technologies used in this app:
- create-react-app - for app frame creation
- React for UI building
- Sass for styling

## 4. CORS notice
Runing the app both locally or remotely you should not experience any CORS problems. If anyway you do, please edit ```.../src/containers/App.js``` file and uncomment line 24 and the part of the line 29 as described provided in that file. Then rerun ```yarn start``` or ```yarn build``` as described above.