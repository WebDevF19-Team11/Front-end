export default class UserService {
    constructor() {
        this.state={
            userType :"A",
        }
    }
    static myInstance = null;
    Url = "https://webdev-neu-backend.herokuapp.com/";
    static getInstance() {
        if(UserService.myInstance == null) {
            UserService.myInstance = new UserService()
        }
        return this.myInstance
    }

    getUserType(){
        return this.state.userType;
    }
    
    logout(){
        this.state.userType = "G";
        console.log(this.state.userType)
    }


    findAllUsers =  () =>
        fetch(this.Url+"user")
            .then(response => response.json())
            
    deleteUser = (id)=>
        fetch(this.Url + "user/"+id,{
            method: 'DELETE'
            })

    createNewUser = (newUser) =>
        fetch(this.Url + "user", {
            body: JSON.stringify(newUser),
            headers: {
            'Content-Type': 'application/json' },
            method: 'POST'
            }).then(response =>response.json());
    
    // login APIs needed 

    
}