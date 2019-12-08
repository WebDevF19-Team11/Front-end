export default class LoginService {
    Url = "https://webdev-neu-backend.herokuapp.com/";

    constructor() {}

    login(username, password) {
        return fetch(this.Url + "api/login", {
            body: JSON.stringify({
                username: username,
                password: password,
                rememberMe: true
            }),
            headers: {
                'Content-Type': 'application/json' 
            },
            method:'POST'
        }).then(response => {
            return response.json()
        })
    }

}