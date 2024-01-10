const multer = require('multer');
const router  = require("express").Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./static/uploads");

    },
    filename: ( req, file, cb) => {
        cb(null, file.originalname);

    }
});

const mystorage = multer({storage: storage});

router.post("/uploadfile", mystorage.single("myfile"),(req,res) => {
    res.status(200).json({status: "success"})
});

module.exports = router ;