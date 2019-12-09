import { AbilityBuilder } from '@casl/ability'
import UserService from "../Services/UserService"
// change user type to get the appropriate changes
let userService = UserService.getInstance();

function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}

export default AbilityBuilder.define({ subjectName }, can => {
    //if user is Admin
    if(userService.getUserType() === "A"){
        can(['see'], 'adminPages')
        can(['see'], 'logout')
    }
    //if user is Guest
    if(userService.getUserType()  === "G"){
        can(['see'], 'login')
        can(['see'], 'register')
    }
    //if user is User
    if(userService.getUserType()  === "U"){
        can(['see'], 'offer')
        can(['see'], 'logout')
    }
})