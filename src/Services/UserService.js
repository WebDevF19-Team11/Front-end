export default class UserService {
    static myInstance = null;
    Url = "https://webdev-neu-backend.herokuapp.com/";
    static getInstance() {
        if(UserService.myInstance == null) {
            UserService.myInstance = new UserService()
        }
        return this.myInstance
    }

    findAllUsers =  () =>
        fetch(this.Url+"user")
            .then(response => response.json())
            
    deleteUser = (id)=>
        fetch(this.Url + "user/"+id,{
            method: 'DELETE'
            })
    

    
}