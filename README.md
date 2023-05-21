# Project structure  
api/  
  ├── configs        # Config setting
  ├── controllers    # Controller layer  
  ├── models/        # Model layer with database entities  
  ├── routes/        # Express route handlers for all the   endpoints of the app  
  ├── services/      # service layer with the business logic  
  ├── utils/         # reused utils  
  ├── server.js      # Express(http-server) config  
build/               # Front-end build dist  
public/              # Front-end public asset path  
src/                 # Front-end React  
test/  
  ├── unit/          # all the unit tests of the app  
├── package.json     # main project configuration file  
├── .env             # Front-end test env  
├── .env.production  # Front-end prod env  
├── ...              # others config files (.gitignore,   jest.config, .sequelizerc, etc)


# Test
```
npm run test  
npm run test:coverage
```
  
# Deploy step
- Update sql connection info  
api/configs/db.js
- Update or remove CORS domain setting for Prod  
api/server.js
- Build prod website execute `npm run build.web`   
- Run service by `npm run start.server` then access the website   
http://localhost:3000/