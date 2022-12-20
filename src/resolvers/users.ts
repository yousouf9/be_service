import {User} from "../Model/user";
import {ApolloError} from 'apollo-server-express'
import { ErrorCodes } from "../helper/error-codes";
import {JWT} from '../helper/Jwt';


interface registrationInput {
  registerInput:{username:string, email:string, password:string}
}

export default  {
    Mutation: {
        async registerUser(_:any, {registerInput:{username, email, password}}:registrationInput) {
          const olduser = await User.findOne({email});
          if(olduser){
            throw new ApolloError(`User with email ${email} already exists`, ErrorCodes.userExist);
          }

          const user = new User({username, email, password});

         const token = await JWT.getToken({username, email,id: user.id})
         
         user.token = token;

        }
    },
    Query: {
       // message: (_, {ID}) => Message.findById(ID)
    }
}