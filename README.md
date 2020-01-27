
## Octopus Energy

Single page web application using react (hooks) for creating a purchasable item to be displayed to a user who can change the number of items to purchase.

```
$ git clone git@github.com:jonnyacl/octopus.git
$ cd octopus
```

Then in the project directory, run:
```
$ yarn
$ yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```
$ yarn test
```

This runs the unit tests using jest.<br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes

- This app uses React. Redux has not been used as with React Hooks the same result can be achieved with useContext and useReducer
- Some styling has been implemented, but more would be done to truly conform to the designs.
- The graph in performance has no units and I couldn't work out what they would be, maybe luminosity vs efficiency for the different wattage bulbs??

#### Missing functionality
 - Not all components had unit tests written for them, the basic structure and process would be repeated given more time i.e. all components tested to render and all functionality given a unit test
 - A graphQL service would be implemented in api folder to load data for items and stored into the BasketReducer for global app state management
 - This would also then allow for state persistance in the reducer
 - Some better show more/less in Expandable would be implemented, again a CSS issue I did not get round to solving in time
 - Designed with mobile first CSS, started adding some changes for responsive desktop styling, but would implement more to look better on desktop