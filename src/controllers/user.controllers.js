const express=require('express');
const User=require('../models/user.model');
const transporter=require('../config/mail');
const path=require('path');
const router=express.Router();

router.get('/', async(req,res)=>{
    try {
        const page=+req.query.page || 1;
        const pagesize=+req.query.pagesize || 10;
        const skip=(page-1)*pagesize;
        const users= await User.find().skip(skip).limit(pagesize).lean().exec();
        const totalpage=Math.ceil((await User.find().countDocuments())/pagesize);
        console.log(totalpage);
        return res.status(200).send({users: users});
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post('/' , async(req,res)=>{
    try {
        const user= await User.create(req.body);
        transporter.sendMail({
            from: '"amazom@exapmle.com" <admin@amazon.com>', 
            to: user.email, 
            subject: "Your product is successfully created.", 
            text: "Hello sir/ma'a, your product is successfully created.", 
       

            alternatives: [
                {
                    contentType: 'text/html',
                    path: path.join(__dirname,'../user.mail.html')
                }
            ]
        });
        return res.status(201).send({message: 'Product created successfully'});

    } catch (error) {
        return res.status(500).send(error);
    }
    
});

module.exports=router;