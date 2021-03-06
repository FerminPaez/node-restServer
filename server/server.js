require("./config/config")

const { request } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parsepp application/json
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.json('Hello World');
})

app.get('/usuario',(req, res)=>{
    res.json('get Usuario');
})

app.post('/usuario',(req, res)=>{

    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok:false,
            mensaje:"El nombre es necesario"
        });
    } else {
        res.json({
            body
        });
    }

})

app.put('/usuario/:id',(req, res)=>{
    let id = req.params.id;
    res.json({
        id
    });
})

app.delete('/usuario',(req, res)=>{
    res.json('delete Usuario');
})

app.listen(process.env.PORT, ()=> console.log('escuchando puierto',process.env.PORT));