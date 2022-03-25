
const connectDB = require('./config/db');

const app=require('./index.js');


app.listen(6700, async(req,res)=>{
    try {
        await connectDB();
    } catch (error) {
        return res.send(error);
    }
    console.log("Listening on port 6700");

});