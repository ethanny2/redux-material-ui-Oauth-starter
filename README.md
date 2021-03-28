[![GitHub issues](https://img.shields.io/github/issues/ethanny2/redux-material-ui-Oauth-starter)](https://github.com/ethanny2/redux-material-ui-Oauth-starter/issues)  [![GitHub forks](https://img.shields.io/github/forks/ethanny2/redux-material-ui-Oauth-starter)](https://github.com/ethanny2/redux-material-ui-Oauth-starter/network) [![GitHub stars](https://img.shields.io/github/stars/ethanny2/redux-material-ui-Oauth-starter)](https://github.com/ethanny2/redux-material-ui-Oauth-starter/stargazers) [![GitHub license](https://img.shields.io/github/license/ethanny2/redux-material-ui-Oauth-starter)](https://github.com/ethanny2/redux-material-ui-Oauth-starter) [![Twitter Badge](https://img.shields.io/badge/chat-twitter-blue.svg)](https://twitter.com/ArrayLikeObj)

# Redux + Material UI + GoogleOauth Starter

## [https://redux-oauth.netlify.app/](https://redux-oauth.netlify.app/)

#### A starter template to help boostrap projects quickly with a reliable authentication solution

<p align="center">
  <img src="https://media4.giphy.com/media/OfAxWYWzJcKvuRDWKA/giphy.gif" alt="animated" />
</p>

## Prerequisites

- Familarity with React hooks and Redux
- Have NPM/Node installed
- Know about the concept of a component library in React (it's okay if you've never used one!)
- Know about the concepts of CSS in JS (also okay if never used before)
- A Google Cloud Platform account (free) and an OAuth 2.0 Client ID (also free, may require gmail account)

## Features


[Tuorial Series here!](https://dev.to/ethanny2/let-s-make-a-redux-material-ui-oauth-starter-template-pt-1-what-s-oauth-479j)
#### 1) Google Oauth authentication

- If you want to use Google services on behalf of a user (ex: You need the authenetication to interact with their Google photos API)
- If you want a small project where you don't necessarily want to keep track of user accounts yourself
- A more convenient/trusted way for users to login to your app
- Ability to persist login status via a key value in localStorage

#### 2) Redux Setup

- Redux setup with a store that includes an alert system, theme system and authentication

### 3) Theming and CSS-in-JS solution from Material UI

- Setup for you to build your own custom theme easily
- Detects user theme preferences and sets intial theme of app based on that

### 4) Mobile Responsive Navbar

- Works on all device widths with CSS-in-JS media queries
- Menu collapses on smaller widths to create dropdown

## Gotchas

##### Incognito Windows

- The Oauth login is made with the [react-google-login](https://www.npmjs.com/package/react-google-login) library. There is a know issue where this login will not work on incognito windows

##### JWT Expiration Time

- By default the returned JWT from the Google Oauth endpoint as an expiry time of 1hour, after which the user will need to re-sign in. If you want to setup some React code to automatically refresh the token see [this great article!](https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del)
