const router = require('express').Router();

const dishesController = require('../controllers/dishesController');

router.get(
    "/findPlatesByCategory/:id",
    dishesController.findDishes
)


module.exports = router