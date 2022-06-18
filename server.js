const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dbConfig = require('./config/database.config')
const UserRoutes = require('./app/routes/User')

const PORT = 4000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())

app.get('/', (req,res)=> {
    res.json({"message": "Crud with ExpressJS"})
})
app.use('/user', UserRoutes)

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(()=> {
    console.log("Database connected successfully")
}).catch((err)=> {
    console.log("Count not connect to the databaase", err)
})



app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})