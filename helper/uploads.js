const multer = require("multer")
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/")
    },
    filename: function (req, file, cb) {
        const uniqeSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
        cb(null, `${uniqeSuffix}-${file.originalname}`)
    }
})

const upload = multer({storage: storage})

module.exports = upload