import {User} from "../Model/user";
import {ApolloError} from 'apollo-server-express'
import { ErrorCodes } from "../helper/error-codes";
import {JWT} from '../helper/Jwt';
import { Password } from "../shared/src/services/Password";


interface registrationInput {
  registerInput:{username:string, email:string, password:string}
}

interface loginingInput{
  registerInput:{email:string, password:string}
}

export default  {
    Mutation: {
        async registerUser(_:any, {registerInput:{username, email, password}}:registrationInput) {
          const olduser = await User.findOne({email});
          if(olduser){
            throw new ApolloError(`User with email ${email} already exists`, ErrorCodes.userExist);
          }

          const newuser = new User({username, email, password});

         const token = await JWT.getToken({username, email,id: newuser.id})
         newuser.token = token;
        const user = await newuser.save();

        return {
          id: user.id,
          username: user.username,
          email: user.email,
          token: user.token
        }
        },
        async loginUser(_:any, {registerInput:{email, password}}:loginingInput) {
          const user = await User.findOne({email});
          if(!user){
            throw new ApolloError(`Invalid user or password`, ErrorCodes.invalidCredentials);
          }
          
          const isValidPassword = Password.compare(user.password, password);
          if(!isValidPassword){
            throw new ApolloError(`Invalid user or password`, ErrorCodes.invalidCredentials); 
          }
          const token = await JWT.getToken({username:user.username, email:user.email,id: user.id})

          user.token = token;
          return {
            id: user.id,
            username: user.username,
            email: user.email,
            token: user.token
          }

        }
    },
    Query: {
        user: (_:any, {ID}:{ID:string}) => User.findById(ID)
    }
}