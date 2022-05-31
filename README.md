# Memory Game

Game of thrones themed memory game made using React. Odin Project assignment.

[Live Demo](https://tomahawk-jupiter.github.io/memory-game/)

## React Hooks

There are examples of the useState and useEffect React hooks in App.js.

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
