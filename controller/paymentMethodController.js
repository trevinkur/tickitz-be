const PaymentMethod = require("../model/PaymentMethod.js")

module.exports = {
    getAllPayment: async function(req,res) {
         
        try {
            const result = await PaymentMethod.get(req,res)
            return res.send(result)
        } catch(err) {
            res.status(err.status).send(err)
        }
    },

    
}