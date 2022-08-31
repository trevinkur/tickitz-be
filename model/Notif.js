const admin = require('firebase-admin/app');
const db = require('../helper/db_connection')
module.exports = {
    getUser: (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * from users WHERE user_id = ${req.params.id}`
            db.query(sql, (err, result) => {
                if(err) {
                    reject({
                        message: "Error",
                        status: 500,
                        detail: err
                    })
                } else {
                    resolve(result)
                }
     
            })            
        })
    },
    getBooking: function (req,res){
        const {status} = req.query
        return new Promise((resolve,reject) => {
            console.log("hello")
            db.query(`SELECT CONCAT(users.first_name, " ", users.last_name) AS fullname,
                SUM(booking_seat.price) AS totalPayment,
                COUNT(booking_id) as tickets,
                GROUP_CONCAT(booking_seat.seat) AS seat,
                cinema.cinema_name, cinema.cinema_logo,
                show_time.schedule_id, show_time.show_time,
                schedule.schedule, movies.title, booking.status AS status
                FROM booking
                JOIN booking_seat
                  ON booking.show_time_id = booking_seat.show_time_id AND booking.seat = booking_seat.seat
                JOIN show_time 
                  ON booking.show_time_id = show_time.show_time_id
                JOIN users
                  ON booking.user_id = users.user_id
                JOIN cinema
                  ON show_time.cinema_id = cinema.cinema_id
                JOIN schedule
                  ON show_time.schedule_id = schedule.schedule_id
                JOIN movies
                  ON schedule.movie_id = movies.movie_id 
                WHERE users.user_id = "${req.params.id}"
                AND booking.status = 'active' 
               ${status === 'history' ? `AND booking.status = 'active' OR booking.status='expired'` : status === 'in_cart' ? `AND booking.status ='in_cart'`: ''}
                GROUP BY users.user_id ${status === "history" ? ',booking.update_at' : ''}
                ${status === "history" ? 'ORDER BY booking.update_at DESC' : ''}
                ` , (err,result) => {
                if(err) {
                    console.log(err)
                        reject({
                            message: "ERROR, Server is down",
                            status: 500
                        })
                }
                resolve({
                    message: "SUCCESS",
                    status: 200,
                    data: result
                        
                })  
               
            })
        })

    },
    getAllUserToken: (req,res) => {
        return new Promise((resolve, reject) => {

            const sql = `SELECT deviceToken FROM users WHERE deviceToken != 'null'`
            db.query(sql, (err, result) => {
                if(err) {
                    reject({
                        message: "Error",
                        status: 500,
                        detail: err
                    })
                } else {
                    let data = result.map((item) => item.deviceToken)
                    resolve(data)
                }
            })
        })
    }
}