const express = require('express');
const {readdirSync} = require('fs');
require('dotenv').config();
const port = process.env.PORT;


const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


readdirSync('./routes').map(routeFile => {    
    app.use('/api/user', require(`./routes/${routeFile}`) )   
})

app.use((req, res, next)=> {
    res.status('404').send('<h1>404 Not Found</h1>')
})



app.listen(port, ()=> {
    console.log(`Server Run Successfully at http://localhost:${port}`);
})