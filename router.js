const router = require('express').Router();


const userRouter = require('./views/userRouter')
const dishRouter = require('./views/dishesRouter')

router.use(
    '/user', 
    userRouter
)

router.use(
    '/dishes',
    dishRouter
)


module.exports= router