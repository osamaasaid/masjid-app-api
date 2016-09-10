# masjid-app

- development: [http://masjid-app-dev.herokuapp.com/api/](http://masjid-app-dev.herokuapp.com/api/)
- production:  [http://masjid-app-prod.herokuapp.com/api/](http://masjid-app-prod.herokuapp.com/api/)

# Setup
- Make sure you have `node` and `npm` installed [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- Open your terminal and go to the directory where you pulled down the code
- Run `npm install`
- Run `npm start`

# Test
- Run `npm test`
- Run `npm run coverage` to view test coverage

## To deploy into development environment
- `git push heroku/masjid-app-dev development:master`
- This will deploy the development branch into the heroku/masjid-app-dev remote within it's master branch

## To deploy into production environment
- `git push heroku/masjid-app-prod master:master`
- This will deploy the master branch into the heroku/masjid-app-prod remote within it's master branch
