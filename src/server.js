//packages 
const express = require('express');
const bodyParser = require('body-parser');

//modules
const sequelize = require('./db'); 
const routes = require('./router'); 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app); 

sequelize.sync().then(() => { 
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}).catch((error) => {
  console.error('Error initializing the database:', error);
});