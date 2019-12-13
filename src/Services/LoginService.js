export default class LoginService {
    Url = "https://webdev-team11-project-backend.herokuapp.com/";
    constructor() {}

    login(username, password) {
        return fetch(this.Url + "api/login", {
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json' 
            },
            method:'POST'
        }).then(response => { return response.json() });
    }

    getLoggedUser() {
        return fetch(this.Url + "user/" + localStorage.getItem("user"), {
            methos: 'GET'
        })
        .then(response => { return response.json() })
    }

}