require("dotenv").config();
let express = require("express");
let app= express();
const sequelize= require("./db");
let journal=require('./controllers/workoutcontroller');
let user=require("./controllers/usercontroller");


sequelize.sync();
app.use(require('./middleware/headers'))
app.use(express.json());


app.use("/workout", workout);
app.use('/user',user);
app.listen(3000, function() {
console.log('App is listening on port 3000');
});