## Start project

Get a package.json :
```
npm init -y
```

Install webpack:
```
npm install webpack webpack-cli --save-dev
```

Add src js file and setup the html file in dist.

Create a webpack configuration file.

Install `npm install --save-dev webpack-dev-server` and add necessary configurations.

## Information

Making multiple modules/script allow the browser to execute only the needed ones and reduce the load.

### Add it to github pages

source : https://gist.github.com/cobyism/4730490

Add the dist folder to github

Then add a branch containing the dist folder :

`git subtree push --prefix dist origin gh-pages`

## Project ToDo

- [x] Make the landing page in index.js
- [x] Move the landing page to another file and import it in index.js
- [x] Create files/modules for each tab : landing, menu, contact.
- [x] Create the logic in index.js
