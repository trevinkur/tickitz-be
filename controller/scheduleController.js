const Schedule = require("../model/Schedule.js")

module.exports = {
    getAllSchedule: async function(req,res) {
         
        try {
            const result = await Schedule.get(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    getScheduleByMovieId: async function(req,res) {
         
        try {
            const result = await Schedule.getByMovieId(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },


    addSchedule: async function(req,res) {
            try {
                const result = await Schedule.add(req,res)
                return res.send(result)
            } catch(err) {
                res.status(err.status).send(err)
            }
    },
    
    updateSchedule: async function(req,res) {
        try {
            const result = await Schedule.update(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    removeScheduleById: async function(req,res) {
        try {
            const result = await Schedule.removeById(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },


}