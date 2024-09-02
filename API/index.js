const express = require('express')
var cors = require('cors')
const xlsx = require('xlsx');
const app = express()
app.use(cors())

let wb = xlsx.readFile('API.xlsx');
let ws = wb.Sheets['students'];
let ws1 = wb.Sheets['names'];
let students = xlsx.utils.sheet_to_json(ws);
let names = xlsx.utils.sheet_to_json(ws1);


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/students', function (req, res) {
    res.send(students);
})

app.get('/names', function (req, res) {
    res.send(names);
})


app.listen(1000)