export default class UserService {
    constructor() {
        this.state={
            userType :"G",
            user: ""
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

    setUser = (user) =>{
        this.state.user = user;
        this.state.userType = "U"   
 
    }

    getCurrentUser = () =>{
        return this.state.user;
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
            .then(response => {
                return response.json();
            })
            
    deleteUser = (id)=>
        fetch(this.Url + "user/"+id,{
            method: 'DELETE'
            })

    login = (username, pass)=>
        this.findAllUsers().then(
            response =>{
                let potUser;
                let users = [];
                users = response;
                users.forEach(
                    user =>{
                        if(user.username == username){
                            potUser = user;
                        }
                    }
                )
                if(potUser.pw == pass){
                    return potUser;
                }
                else{
                    return "error";
                }
            }
        )
        

    createNewUser = (newUser) =>
        fetch(this.Url + "user", {
            body: JSON.stringify(newUser),
            headers: {
            'Content-Type': 'application/json' },
            method: 'POST'
            }).then(resposne => {
                if(resposne.status == 200){
                    return "done"
                } else {
                    return "error"
                }
            });
    
    // login APIs needed 

    
}