import { Project } from "../models/projectModel.mjs";
import { User } from "../models/userModel.mjs";
import { emailRegex, userNameRegex } from "../utils/validator/validator.mjs";



// Login or Signup-------------------------------------------------------------------------------------------------------------------
export const userLogin= async(req,res)=>{
try {
const {UserName,email}= req.body;
if(!UserName && !email){
    // eslint-disable-next-line no-undef
    return res.status(statusCode.badRequest).json({message:'please enter required field',status:false});
}
if(!userNameRegex(UserName) && !emailRegex(email)){
    // eslint-disable-next-line no-undef
    return res.status(statusCode.badRequest).json({message:'please enter valid details ',status:false});
}
const userDetails = await User.findOne({ $or: [ { email: email },  { UserName: UserName }] });
  
if(!userDetails){
    const user= await User.create({ email: email, UserName: UserName});
return res.status(201).json({status:true, message:'user cretate successful', data: user});}
else {
if(userDetails.email===email && userDetails.UserName===UserName){
    return res.status(200).json({status:true, message:'welcome  '+userDetails.UserName, data: userDetails});
}else{
    return res.status(400).json({status:false,message:'user name and email are not matched'})
}

}
} catch (error) {
    res.status(500).josn({message:error.message,error:error})
}
};





export const getProjects = async(req,res)=>{
    try {
        let userId = req.params.userId; 
        const projects = await Project.find({ user: userId })
        .populate('user')
        .exec();
        return res.status(200).json({status:true, data:projects});
    } catch (error) {
        return res.status(500).json({message: error.message, status:false});
    }
};



