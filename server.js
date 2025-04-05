const express = require('express')
const app = express()

const PORT=3000
app.get('/', (req, res)=>{
    res.send("Hi! This is Lakshmi and Welcome to my Web Page!")
}) 

app.listen(PORT, ()=>{
    console.log(`Server running at Port:http://localhost:${PORT}`)
})