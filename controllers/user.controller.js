const path = require('path');
const users = require('../models/user.model')


exports.index = async (req, res)=> {
    res.sendFile(path.join(__dirname + '/../views/index.html') )
}

exports.store = async (req, res)=> {

    let {name, email} = req.body;
    let user = {name, email};
 
    users.push(user);
    res.status(201).json({
     success: true,
     users
    })
 }