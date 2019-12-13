import React from 'react'
import { getUsers } from '../Services/UserService';
import { FaTrash } from 'react-icons/fa'

// let userService = UserService.getInstance();
export default class AdminUserControlPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users : [],
        }
    }
    componentDidMount(){
        this.getAllUsers();
    }
    getAllUsers(){
       getUsers().then(response => {
            this.setState({
                users: response,
              });
        });
    }

    deleteUser(userId){
        return null;
       // userService.deleteUser(userId).then(()=>{
        //    this.getAllUsers();
       // })
    }
    render() {
        return ( 
            <div className="container-fluid t11-container ">        
                <h1 className="t11-privacy-title"> Users</h1>  
                <div className="row d-flex justify-content-around">
                                        <div>
                                            User Id
                                        </div>
                                        <div>
                                            Name
                                        </div>
                                        <div>
                                            Username
                                        </div>
                                        <div>
                                            Delete user
                                        </div>
                                    </div>
                      {
                        this.state.users.map(user => 
                            <div key= {user.userId}>
                                <a href=""
                                className="list-group-item list-group-item-action">
                                    <div className="row d-flex justify-content-around">
                                        <div>
                                            {user.userId}
                                        </div>
                                        <div>
                                            {user.name}
                                        </div>
                                        <div>
                                            {user.username}
                                        </div>
                                        <div>
                                            <FaTrash 
                                            onClick={
                                                ()=>this.deleteUser(user.userId)
                                            }/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            )
                      }
            </div>
        );
    }

}