var express = require("express");
var app = express();

var router = express.Router();
var path = __dirname+'/views/';

router.use((req,res,next)=>{
    console.log('/'+req.method)
    next()
})

router.get('/',(req,res)=>{
    res.sendFile(path+'index.html');
})

router.get('/about',(req,res)=>{
    res.sendFile(path+'about.html');
})

router.get('/contact',(req,res)=>{
    res.sendFile(path+'contact.html');
})

app.use('/',router);

router.get('*',(req,res)=>{
    res.sendFile(path+'404.html');
})

app.listen(process.env.PORT||3000,()=>{
    console.log('listening at Port 3000')
})
