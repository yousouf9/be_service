import { model } from "mongoose";
import { userSchema } from '../shared/src';
const User = model("User", userSchema);
export { User };
