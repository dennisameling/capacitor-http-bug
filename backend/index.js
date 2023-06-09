const express = require('express')
var cors = require('cors')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()
const port = 3000

app.use(cors())

app.post('/profile', upload.single('file'), function (req, res, next) {
    console.log(req.file);

    if (!req.file) {
        return res.status(400).send({error: "No or invalid file provided"})
    }

    res.status(200).send({status: "OK"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})