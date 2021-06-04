const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get("/",(req,res)=>{
    res.send(__dirname+"/index.html")
})

app.listen(process.env.PORT || 3000);