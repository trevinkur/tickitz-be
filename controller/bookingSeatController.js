const BookingSeat = require("../model/BookingSeat.js")

module.exports = {
    getAllBookingSeat: async function(req,res) {
         
        try {
            const result = await BookingSeat.get(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    addBookingSeat: async function(req,res) {
            try {
                const result = await BookingSeat.add(req,res)
                return res.send(result)
            } catch(err) {
                res.status(err.status).send(err)
            }
    },
    
    updateBookingSeat: async function(req,res) {
        try {
            const result = await BookingSeat.update(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    removeBookingSeatById: async function(req,res) {
        try {
            const result = await BookingSeat.removeById(req,res)
            return res.send(result)
        } catch(err) {
            res.status(404).send(err)
        }
    },
}