const userWithRoles = [
   { username: 'admin', password: 'admin', role: 'admin' },
   { username: 'test user', password: 'test', role: 'user' },
   { username: 'another admin', password: 'test', role: 'admin' },
   { username: 'alice', password: 'alice', role: 'user' },
  
    
]

    exports.authenticateUser = (username, password) => {
      const currentUser = userWithRoles.find(user => user.username === username && user.password === password);
      return currentUser;

    };

    exports.getUsers = () => {
       return fetch('https://webdev-neu-backend.herokuapp.com/user')
        .then(response => {
            return response.json()
        }).then(data => {
           return data;
        })
        .catch(error => {
            console.log('we encountered an error wile fetching users');
        })
    }

    exports.setRole = (role) => {
       return localStorage.setItem('role', role);
    }

    exports.getRole = () => {
        return localStorage.getItem('role');
    }
