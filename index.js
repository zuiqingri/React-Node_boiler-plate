const express = require('express')
const app = express()
const port = 5000

const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost:27017/example?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',{
//     useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
// }).then(()=>console.log('MongoDB Connected...'))
//    .catch(err=>console.log(err))
   mongoose.connect('mongodb://localhost:27017/example?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
   .then(()=>console.log('MongoDB Connected...'))
   .catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})