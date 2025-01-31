const User = require("../models/User")
const jwt=require('jsonwebtoken');


const errorHandler = (err)=>{
    console.log(err.message,err.code);

    let errors={email:"",password:""}

    if(err.code===11000){
        errors.email="This email ID already exists"
        return errors;
    }
    if(err.message.includes("users validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        })
    }
 return errors;  
}

const actTime=5*24*60*60;

const createToken=(id)=>{
    return jwt.sign({id},'smoothie secret',{expiresIn:actTime})
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
        const token=createToken(user._id);
        res.cookie('jwt',token,{maxAge:actTime*1000})
        console.log(user)
        res.status(200).json({user:user._id});
    }

    
    catch (err){
        const errors=errorHandler(err);
    res.status(400).json({ errors});


    };
}
    
    
    
module.exports. login_post=(req,res)=>{

    const {email,password} = req.body;


        console.log({email,password})
        
       
    
    }
       