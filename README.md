# deploy step
1. Create table schema
sqls/task.sql
2. Update sql connection info
api/services/db.js
3. Update or remove CORS domain setting for Prod
api/server.js
4. build prod website execute `npm run build.web` 
5. run service by `npm run start.server` then access the website 
http://localhost:3000/