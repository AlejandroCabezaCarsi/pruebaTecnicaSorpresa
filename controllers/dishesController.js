const { Dishes } = require('../models')

const dishesController = {}

dishesController.findDishes = async (req,res) => { 

    try {
        
        const buscaPlatos = await Dishes.findAll({
            where: { 
                categoy_id: req.params.id
            }
        })
        return res.status(200).json({
            busqueda: buscaPlatos
        })

    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }


}


module.exports = dishesController