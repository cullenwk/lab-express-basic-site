const express = require('express')
const app = express()


app.use(express.static(__dirname + '/public'))

// routes 
app.get('/', function (req, res) {
  
    res.send('Hello World 你好👋');
  })

app.get('/home', function (req, res) {
  
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', function (req, res) {
  res.sendFile(__dirname + '/views/works.html')
})
 
app.listen(4500)
