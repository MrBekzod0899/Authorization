import { createContext, useState } from 'react';
import './App.css';
import Login from './page/Login';
import Register from './page/Register';

const AuthContext=createContext({
  user:null,
  login:null,
  auth:true
})
function App() {
  const [auth, setAuth] = useState(false);
  const [user,setUser]=useState({
      firstName:'',
      lastName:'',
      phoneNumber:''
  })

  const login = (credentials) => {
    console.log('login', credentials);
    setUser(credentials);
    setAuth(true);
  }
  return (
    <AuthContext.Provider value={{user,login,auth}}> 
          {
            auth ? <Login/> : <Register/>
          }  
    </AuthContext.Provider>
    
  );
}

export default App;
