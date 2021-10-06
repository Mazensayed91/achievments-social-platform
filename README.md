# achievments-social-platform

- This project simulates a social platform that user can post, like, delete and write achievements
- This is a fullstack application built using MERN stack.

# Client Side:

## To run the client side:
- install all project dependencies with `npm install`
- start the development server with `npm start`

## Componenet Tree:

![image](https://user-images.githubusercontent.com/54520113/136267034-0926a8f4-0a59-4ea0-bc51-6165b1370777.png)
 
## Files
```
├── package.json # npm package manager file.
├── public
│   └── index.html # has the root element
└── src
    ├── App.css # Styles for your app..
    ├── App.js # This is the root of the app.
    ├── api # Contains the API file as a best practice.
    │   └── index.js # A JavaScript API for the backend. Instructions for the methods are below.
    ├── components # Contains the leveraged to build the UI.
    │   ├── Achievements.js # Represents a All the achievements.
    │       ├── Achievement.js # Represents one achievement.
    │   └── Auth.js # Represents auth view [signin-signup]
    │   └── Form.js # Represents form to add achievment
    │   └── Navbar.js # Represents the navbar of the entire app
    │   └── Home.js # Represents the grid listing the achievments
    │       ├── Input.js # Represents one input field.
    ├── images # Helpful images for the app.
    │   ├── achievement.png
    ├── redux # Views that are rendered based on the URL.
    │   ├── actions
    │       ├── achievement.js
    │       ├── auth.js
    │   ├── constants.js
    │   ├── reducers.js
    │       ├── achievement.js
    │       ├── auth.js
    │   
    ├── styles.css
    └── index.js # It is used for DOM rendering only.
```

# Server Side:


## To run the server side:
- install all project dependencies with `npm install`
- start the development server with `npm start`

## Files
```
├── package.json # npm package manager file.
├── public
│   └── index.html # has the root element
└── src
    ├── App.css # Styles for your app..
    ├── App.js # This is the root of the app.
    ├── middleware # Contains the middlewares.
    │   └── auth.js # auth middleware used to validate the auth of the current user before executing any action.
    ├── models # Contains the MongoDB models.
    │   ├── Achievements.js # Represents a All the achievements.
    │       ├── achievementModel.js # Represents the achievement schema.
    │       ├── userModel.js # Represents the user schema.
    │   └── Auth.js # Represents auth view [signin-signup]
    │   └── Form.js # Represents form to add achievment
    │   └── Navbar.js # Represents the navbar of the entire app
    │   └── Home.js # Represents the grid listing the achievments
    │       ├── Input.js # Represents one input field.
    ├── routes # contains all express routes.
    │   ├── achievements.js # contains all the routes for the achievments app
    │   ├── user.js # contains all the routes for the user app
    ├── controllers # Containts all the contollers of the app, aka. the logic of each api request (dealing with mongodb).
    │   ├── achievements.js
    │   ├── user.js
    │   ├── actions
    │       ├── achievement.js
    │       ├── auth.js
    └── index.js # It is used for app setup, express setup and mongodb setup.
```

## Backend Server
These are the methods you will need to perform necessary operations on the backend:

* [`getAchievements`](#getAchievements)
* [`createAchievement`](#createAchievement)
* [`updateAchievement`](#updateAchievement)
* [`deleteAchievement`](#deleteAchievement)
* [`likeAchievement`](#likeAchievement)


### `getAchievements`

Method Signature:

```js
getAchievements()
```

* Returns a Promise which resolves to a JSON object containing a collection of achievements objects.

### `createAchievement`

Method Signature:

```js
createAchievement(data)
```
* Returns a Promise which resolves to a JSON object containing the response data of the request


### `updateAchievement`

Method Signature:

```js
update(id, data)
```

* Returns a Promise which resolves to a JSON object containing the response data of the request

### `likeAchievement`

Method Signature:

```js
update(id)
```

* Returns a Promise which resolves to a JSON object containing the response data of the request

### `deleteAchievement`

Method Signature:

```js
deleteAchievement(id)
```


## Author: Mazen Sayed
