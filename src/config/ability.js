import { AbilityBuilder } from '@casl/ability'
// change user type to get the appropriate changes
let userType = "A";

function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}

export default AbilityBuilder.define({ subjectName }, can => {
    //if user is Admin
    if(userType == "A"){
        can(['see'], 'adminPages')
        can(['see'], 'logout')
    }
    //if user is Guest
    if(userType == "G"){
        can(['see'], 'login')
        can(['see'], 'register')
    }
    //if user is User
    if(userType == "U"){
        can(['see'], 'offer')
        can(['see'], 'logout')

    }
})