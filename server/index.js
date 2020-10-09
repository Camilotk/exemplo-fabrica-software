const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');

const app = express()
const PORT = process.env.PORT || 5000

const db = require('./config/database')
db.authenticate().then(_ => console.log('Database connected...')).catch(err => console.log('Error: '+err))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", "*")
    app.use(cors());
    next();
})

app.use('/books', require('./routes/books'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));