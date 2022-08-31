const Notif = require("../model/Notif")
const admin = require('firebase-admin');
// const serviceAccount = require('../tickitz-tr-firebase-adminsdk-nt69u-29a68ef479.json')

module.exports = {
    getNotifTransaction: async function (req, res) {
        try {
            const {title, cinema_name, tickets} = req.body
            if(!admin.apps.length) {
                admin.initializeApp({
                    credential: admin.credential.cert({
                        client_email: process.env.FIREBASE_CLIENT_EMAIL,
                        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                        project_id: process.env.FIREBASE_PROJECT_ID
                    })
                })
            }
            console.log(req.body)
            const user = await Notif.getUser(req,res)
            const response = await admin.messaging().sendToDevice(
                user[0].deviceToken, 
                {
                  data: {
                    user: user[0].first_name,
                    movie: title,
                    cinema: cinema_name,
                    tickets   
                  },
                },
                {
                  priority: 'high',
                },
              );
              console.log('notif terkirim')
            res.send(response)
        } catch(err) {
            console.log(err)
            res.status(err ? err.status ? err.status : 500 : 500).send(err)
        }
    },
    postNotifMulticast: async function (req, res) {
        try {
            const {title, body } =  req.body
            if(!admin.apps.length) {
                admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount)
                })
            }
            const tokens = await Notif.getAllUserToken(req,res)
            console.log(tokens)
            const response = await admin.messaging().sendMulticast({
                tokens,
                notification: {
                    title: title,
                    body: body 
                },
            },);
              console.log('notif terkirim')
            res.send(response)
        } catch(err) {
            console.log(err)
            res.status(err ? err.status ? err.status : 500 : 500).send(err)
        }
    } 
}