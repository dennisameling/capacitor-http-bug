const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/api-dummy', (req, res) => {
    console.log(req.headers)

    if (!req.headers.authorization) {
        res.status(401).send({ error: 'No Authorization header provided' })
        return
    }

    res.status(200).send({ data: 'Hello world!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})