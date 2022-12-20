import {model}  from "mongoose";
import {userSchema, UserI} from '../shared/src'

const User = model<UserI>("User", userSchema);

export {User};

