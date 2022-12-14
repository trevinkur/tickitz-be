const ShowTime = require("../model/ShowTime.js")

module.exports = {
    getAllShowTime: async function(req,res) {
         
        try {
            const result = await ShowTime.get(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    getShowTimeByCinemaId: async function(req,res) {
         
        try {
            const result = await ShowTime.getByCinemaId(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },


    addShowTime: async function(req,res) {
            try {
                const result = await ShowTime.add(req,res)
                return res.send(result)
            } catch(err) {
                res.status(err.status).send(err)
            }
    },
    
    updateShowTime: async function(req,res) {
        try {
            const result = await ShowTime.update(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    updateShowTimeById: async function(req,res) {
        try {
            const result = await ShowTime.updateById(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    removeShowTimeById: async function(req,res) {
        try {
            const result = await ShowTime.removeById(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },


}