const express=require("express");
const mongoose=require("mongoose");
const authRoutes = require('./routes/authroutes');


const app=express();
app.use(express.json());


app.use(express.static('public'));

app.set('view engine','ejs');


const DBURI='mongodb+srv://unni09103:eQkIv9G21h1qLj5t@cluster0.rutt2.mongodb.net/smoothie?retryWrites=true&w=majority'
 mongoose.connect(DBURI)

   .then((result)=>console.log("connected"))
   .catch((err)=>console.log(err))



app.use(authRoutes);




app.listen(3000,'localhost',(req,res)=>{
    console.log("listening for request")
})