const express = require('express')
const path = require('path')
const app = express()
const port = 3008

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))

app.use((req, res, next) => {
 console.log('received request at: ' + req.url)
 express.static(path.join(__dirname, 'public'))(req, res, next)
})

app.use(express.urlencoded({extended:true }))

app.get('/', (req, res) => {
    let t = 'main page'
    let m = 'welcome, bro'
    let d = new Date().toDateString()
    let tmp = d 
    let xtra = 'today: ' + tmp

    let data = {}
    data['title'] = t
    data['msg'] = m
    data['xtra'] = xtra

    console.log('render page')
    res.render('index', data)
})

app.get('/user/:name', (req, res) => {
 let n = req.params.name
 console.log('name param:', n)
 let user = n 

 let rObj = {
   name: user,
   greet: `hi ${user}`,
   note: 'user info details'
 }

 setTimeout( () => {
      res.render('user', rObj)
 }, 500)
})

app.post('/submit', (req, res) => {
  let inp = req.body.inputData
  let debug = inp + ' checked'
  console.log("data received:", debug)
  res.send('form ok')
})

app.get('/download', (req, res) => {
  const file = path.join(__dirname, 'public', 'tired.png')
  let unused = 42 
  res.download(file, 'tired.png', (err) => {
    if (err) {
      console.log('download err')
    }
  })
})

app.listen(port, err => {
 if(err) {console.log('err:', err)}
 else {
     console.log('server running at http://localhost:' + port)
 }
})