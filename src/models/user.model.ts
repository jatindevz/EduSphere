import mongoose, { Schema , Document} from "mongoose";


export interface User extends Document {
    username : string;
    email : string;
    password : string;
    isVerified : boolean;
    verifycode : string;
    verifycodeexpire : Date;
    isSubscribtionisActive : boolean;
}


const userSchema : Schema<User> = new Schema({
    username : {
        type : String,
        required : [true, "Username is required"],
        unique : true
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        unique : true,
        match : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email address"
        ]
    },
    password : {
        type : String,
        required : [true, "Password is required"]
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    verifycode : {
        type : String,
        default : ""
    },
    verifycodeexpire : {
        type : Date,
        default : Date.now
    },
    isSubscribtionisActive : {
        type : Boolean,
        default : false
    }
}, {timestamps : true});

const User = mongoose.models.User as  mongoose.Model<User> || mongoose.model<User>("User", userSchema);

export default User;

