var express = require('express');
const app = express();
const path = require('path');


const bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

let templatepath = path.join(__dirname,'./templates/form.html');


app.get('/',(req,res)=>{
    res.sendFile(templatepath)
})

app.post('/posting', (req, res) =>{
    let name = req.body.name;
    let email = req.body.email;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    res.send('form submitted successfully');
});

app.listen(5050, () =>{
    console.log('server is started');
});

