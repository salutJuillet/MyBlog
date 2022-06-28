import './topbar.css'
import { Link } from 'react-router-dom';

export default function TopBar({isLoggedIn, setIsLoggedIn}) {
  const handleUserState = () => setIsLoggedIn(!isLoggedIn);

  
  return (
    <div className="top">
        <div className="container topInn">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-instagram-square"></i>
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-youtube-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="homeLink">home</Link></li>
                    <li className="topListItem"><Link to="/about">about</Link></li>
                    <li className="topListItem"><Link to="/list">list</Link></li>
                    <li className="topListItem"><Link to="/write">write</Link></li>
                    <li className="topListItem">
                      {
                        isLoggedIn? <Link to="/" onClick={handleUserState}>signout</Link> : 
                        (<span>
                          <Link to="/login">signin</Link>
                          {/* <Link to="/Settings" >SIGNUP</Link> */}
                        </span>)
                      }
                    </li>
              </ul>
            </div>
           <div className="topRight">
            {
              isLoggedIn ? <img src="images/myprofile.jpg" alt="치즈" className="topImg" /> : ''
            }
               <i className="topSearchIcon fas fa-search"></i>
           </div>
        </div>
    </div>
  )
}
