import './settings.css';
import Header from '../../comp/header/Header';


export default function Settings() {
  return (
    <div className="settings">
        <Header />

        <h1 className="settingsTitle">Sign In</h1>
        <div className="settingsBox">
            <form className="settingsForm">
                <label>ID </label><input type="" id="userId" />
                <label>Password </label><input type="password" id="userPass" />
            </form>
        </div>
    </div>
  )
}
