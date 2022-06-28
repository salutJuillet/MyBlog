import './login.css';
import Header from '../../comp/header/Header';
import { Link } from 'react-router-dom';


export default function LogIn({setIsLoggedIn}) {
  const handleLogin = () => setIsLoggedIn(true)

  return (
    <div className="login">
        <Header />

        <h1 className="loginTitle">Sign In</h1>
        <div className="loginBox">
            <div className="loginImg">
              <img src="images/login.png" alt="login" />
            </div>
            <form className="loginForm">
              <div className="loginInfo">
                <label>E-mail </label><input type="text" id="userEmail" />
                <label>Password </label><input type="password" id="userPass" />
              </div>

              <div className="btnBox">
                <button type="submit" className="submit-btn" onClick={handleLogin}>sign in</button>
              </div>
            </form>
            <h4 className="signup">Don't have an account? <Link to="/settings">Sign up</Link></h4>
        </div>
    </div>
  )
}
