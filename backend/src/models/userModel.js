const {Schema , model}  = require('mongoose');

const userSchema = new Schema({
    username:{type:String, required:true,min:3,max:20},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
     pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    // isAvatarImageSet:{
    //     type:Boolean,
    //     default:false
    // },
    // avatarImage:{
    //     type:String,
    //     default:''
    // }
},{
    timestamps:true
})

const User = model('User',userSchema)
module.exports = User