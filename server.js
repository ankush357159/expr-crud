const express = require('express')
const bodyParser = require('body-parser')
const PORT = 4000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())

app.get('/', (req,res)=> {
    res.json({"message": "Crud with ExpressJS"})
})

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})