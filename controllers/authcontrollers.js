const User = require("../models/User")


function errorHandler(err){
    console.log(err.message,err.code);

    if(err.code==11000){
        err.message="This email id is already exisit"
        return err;
    }
 return err;  
}



module.exports. home_get=(req,res)=>
    res.render('homepage')

module.exports. recipe_get=(req,res)=>
    res.render('recipespage')







module.exports. login_get=(req,res)=>
    res.render('login')

module.exports. signup_get=(req,res)=> 
    res.render('signup')


module.exports. signup_post= async  (req,res)=>{
    const { email,password }=   req.body
    
    try {
        const user= await User.create({email,password})
        console.log(user)
        res.status(200).json(user);
    }

    
    catch (err){
        const error=errorHandler(err);
    res.status(400).json({ error: err.message });


    };
}
    
    
    
module.exports. login_post=(req,res)=>{

        console.log(req.body)
        res.send("newlogin")
    
    }
       