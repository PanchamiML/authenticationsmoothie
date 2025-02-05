const mongoose=require('mongoose');
const { isEmail }=require('validator');
const bcrypt=require('bcrypt');



const authSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true,"Please enter an email"],
        unique:true,
        lowercase:true,
        validate:[isEmail,"Please provide a valid email"]

    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
        minlength:[8,"The password should consist minimum of 8 characters"]
    }
})

authSchema.pre('save',async function(next){
    const salt= await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    next();

})

authSchema.statics.login= async function(email,password){
    const user=await this.findOne({email});
    if(user){
        const auth=await bcrypt.compare(password,user.password)
        if(auth){
            return user;
        }else{
            throw Error("Incorrect Password")
        }
    }else{
        throw Error("Incorrect email")
        
    }
}


const User=mongoose.model('users',authSchema);
module.exports=User;