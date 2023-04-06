const express = require('express');
const routes = express();
const inventoryController = require('../controllers/inventory')

routes.get('/',inventoryController.getInventoryDetails);

routes.post('/add-item',inventoryController.addInventoryItem);

routes.put('/update-quantity/:id/:qty',inventoryController.updateInventoryItem);

module.exports = routes;