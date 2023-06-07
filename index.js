const express = require('express')
const app = express()

app.use(express.json())
app.post('/post',function(req,res){res.send("running")})
app.listen(process.env.PORT)