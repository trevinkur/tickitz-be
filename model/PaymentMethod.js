const db = require("../helper/db_connection")

module.exports = {
    get: function (req,res){
        return new Promise((resolve,reject) => {
            
            
            db.query(`SELECT * FROM payment_method 
            `,(err,results) => {
                if(err) {
                    reject({
                        message: 'server error',
                        status: 500,
                        detaiL: err
                    })
                } else {
                    resolve({
                        message: 'success',
                        status: 200,
                        data: results
                    })
                }

                
                
               
            } )
            
        })

    },
}