# Memory Game

Game of thrones themed memory game made using React. Odin Project assignment.

[Live Demo](https://tomahawk-jupiter.github.io/memory-game/)

## contents

- [Overview](#overview)
- [Github Pages host](#github-pages-host)
- [Auto Deploy gh-pages](#auto-deploy-gh-pages)

## Overview

The boilerplate was generated with create-react-app.

The main React Component is in `App.js` and theres a sub component `Card` for putting each card together.

There is an array in `data.js` that contains data for each character card.

There is a function for shuffling the data array in `shuffle.js`.

There is a function in App that plays each round when the user clicks on the image of a Card.

A useEffect hook is used in the main App component to shuffle the Cards (the data array) on each render. It also checks to see if the game is won and displays the win message if so.

## Github Pages Host

This command will create a new branch for the build folder that can then be hosted on github pages:

    $ git subtree push --prefix build origin gh-pages

The homepage must be set in the package.json:

    "homepage": "https://tomahawk-jupiter.github.io/memory-game/"

Or to open index.html locally in browser set to:

    "homepage": "./"

NOTE - this must be in the package.json before running build for the static page to work when hosted on GitHub pages.

### Auto Deploy gh-pages

Use the gh-pages package.

This can be used to build the build folder and push it to the gh-pages branch. Doesn't require committing changes to the main branch first.

    $ npm i -D gh-pages

Scripts:

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

Deploy:

    $ npm run deploy

This should build the folder and push to the gh-pages branch.

It still works if the build folder is in the top level `.gitignore`.
