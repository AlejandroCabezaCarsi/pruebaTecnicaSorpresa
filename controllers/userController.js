const {Users} = require('../models')

const userController = {}

const bcrypt = require('bcrypt')

const jwt = require("jsonwebtoken");


userController.creaUsuario = async (req,res) => {

    const {email, username } = req.body

    const compruebaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!compruebaEmail.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Email not valid",
        });
    }

    

    try {

        const newUser = await Users.create({

        email: email,
        username: username,
        role_id: 2

    })

        return res.status(200).json({
            success: true,
            message: "User created",
            data: newUser,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Create user went wrong",
            error: error.message,
        });
    }
}


userController.loginUser = async (req,res) => {
    try {
        
        const {email,username} = req.body

        const buscaUsuario = await Users.findOne({
            where:{
                email: email,
                username: username
            }
        })

        const token = jwt.sign(
            {
              userId: buscaUsuario.id,
              roleId: buscaUsuario.roleId,
              email: buscaUsuario.email,
            },
            "cocacolaLight",
            {
              expiresIn: "8h",
            }
          );

        return res.status(200).json({
            success: true,
            message: "You logged well, del chill",
            token: token 
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Login  went wrong",
            error: error.message,
        });
    }
}





module.exports = userController