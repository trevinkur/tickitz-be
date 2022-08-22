const User = require("../model/Users.js")

module.exports = {
    getAllUser: async function(req,res) {
         
        try {
            const result = await User.get(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    getUserById: async function(req,res) {
         
        try {
            const result = await User.getId(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    addUser: async function(req,res) {
            try {
                const result = await User.add(req,res)
                return res.send(result)
            } catch(err) {
                res.status(err.status).send(err)
            }
    },
    
    updateUser: async function(req,res) {
        console.log("controller")
        try {
            const result = await User.update(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    removeUserById: async function(req,res) {
        try {
            const result = await User.removeById(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },
}