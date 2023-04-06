const express = require('express');

const Sequelize = require('sequelize');

const bodyParser= require('body-parser');

const cors= require('cors');

const sequelize= require('./backend/util/database');

const inventoryRoutes= require('./backend/routers/inventoryRoutes');

const app= express();
app.use(cors());
app.use(bodyParser.json({ extended:false }));

app.use('/update-quantity/:id/:qty',inventoryRoutes);
app.use('/',inventoryRoutes);

sequelize.sync()
.then((results)=>{
    app.listen(3000);
})
.catch((err)=>{console.log(err);});
