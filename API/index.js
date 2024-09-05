const express = require('express');
var cors = require('cors');
require('dotenv').config();

const xlsx = require('xlsx');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 1000; // fata7et malaf .env w fini 7et b2albo 2aya port badi yeh bas 2ana ma ra7 7et chi la2an 2ana bas 3am 2elo la render.con 7et 2enta yalli badak yeh
// we get this from this link : https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/


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
let data = [
    {icon:'bi bi-android',title:'Android Devices',text:'Mauris velit elit, variuspus fringilla urna, quis mattis nisl dictum vitae. Donec non ultrices elit, ut euismod quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tellus sagittis, egestas justo quis, suscipit libero.'},
    {icon:'bi bi-apple',title:'apple Devices',text:'blablablsblsblsbld'},
    {icon:'bi bi-gear',title:'settings',text:'blablablsblsblsbld'},
    {icon:'bi bi-briefcase',title:'documents',text:'blablablsblsblsbld'}
]
let data1 = [
  {icon:'bi bi-android',title:'Android Devices',text:'Mauris velit elit, variuspus fringilla urna, quis mattis nisl dictum vitae. Donec non ultrices elit, ut euismod quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id tellus sagittis, egestas justo quis, suscipit libero.'},
  {icon:'bi bi-apple',title:'apple Devices',text:'blablablsblsblsbld'},
  {icon:'bi bi-gear',title:'settings',text:'blablablsblsblsbld'},
  {icon:'bi bi-briefcase',title:'documents',text:'blablablsblsblsbld'},
  {icon:'bi bi-briefcase',title:'documents',text:'blablablsblsblsbld'},
  {icon:'bi bi-briefcase',title:'documents',text:'blablablsblsblsbld'}
]

app.get('/services', function (req, res) {
    res.send(data)
  })
  app.get('/services1', function (req, res) {
    res.send(data1)
  })

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });


