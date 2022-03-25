const express=require('express');

const transporter=require('./config/mail');

const userController=require('./controllers/user.controllers');

const app=express();

app.use(express.json());

app.use('/users',userController);

module.exports=app;