const jwt =require('jsonwebtoken')

const jwtAuthMiddleware=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token){
        jwt.verify(token,'smoothie secret',(err,decodedToken)=>{
            if(err){
                res.redirect('/login')

            }else{
                console.log(decodedToken)
                next()
            }
        })
    }else{
        res.redirect('/login')
    }





}

module.exports={jwtAuthMiddleware}