## Set up Express
```js
npm init -y // y says yes to all default options
npm install express@4.17.1 --save
```

## Create app file
```js
//create app.js
const express = require('express'); // use constant express to access all the methods and properties of the express module
```

## Create the server
```js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Running on localhost:3000')
});
```

## Installing nodemon
```js
npm install -g nodemon  
// make sure package.json is pointing to the correct entry file (normally you swap index.js for app.js)
//run the file by just typing
nodemon
```

## Installing and using EJS
```js
npm install ejs  
// inside app.js
app.set('view engine', 'ejs');     
```

## Setting up the root route
```js
app.get('/', (req, res) => {
  res.send('Hello world')
});
```

## Setting up views
```js
// create a file in /views/index.ejs
// in app.js
app.get('/', (req, res) => {
  res.render('index')
});
```

## Passing data into your ejs file
```js
// app.js
app.get('/', (req, res) => {
  res.render('index', {
    prompt: 'this is a test'
  })
});
```
```html
<!-- index.ejs -->
<h1>Who's in Space?</h1>
<p><%= prompt %></p>
```