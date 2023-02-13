const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")

module.exports.signup = async(req,res,next) =>{
    try {
        const {username,password,email} = req.body;
    const emailCheck = await UserModel.findOne({email})
    if(emailCheck){
        return res.json({message:"Email already registered",status:false})
    }
    const hashed = await bcrypt.hash(password,10)
      const newUser = await new UserModel({
        email,username,
        password:hashed
      }) ;
      await newUser.save();
    //   delete newUser.password;
        res.send({status:true,newUser}) 
    } catch (error) {
            res.send(error)
    }
}



