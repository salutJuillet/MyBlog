import './settings.css'
import Header from '../../comp/header/Header';

export default function Settings() {
  return (
    <div className="settings">
        <Header />

        <h1 className="settingsTitle">Sign Up</h1>
        <div className="settingsBox">
            <form className="settingsForm">
              <div className="fileAttach">
                <div className="fileAttachImg"><img src="images/file attachment.jpg" alt="file attach" />
                    {/* <a href="https://www.flaticon.com/kr/free-icons/-" title="생강 빵 아이콘">생강 빵 아이콘  제작자: Freepik - Flaticon</a> */}
                </div>
                <label htmlFor="fileInput">
                  <i className="fa-solid fa-paperclip"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
              </div>

                <div className="userInfo">
                  <label>UserName </label><input type="text" id="userId" />
                  <label>E-mail </label><input type="text" id="userEmail" />
                  <label>Password </label><input type="password" id="userPass" />
                </div>

                <div className="btnBox">
                  <button type="submit" className="submit-btn">submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

// export default function Settings() {
//   return (
//     <div className="settings">
//         <div className="settingsWrapper">
//             <div className="settingTitle">
//                 <div className="settingsUpdateTitle">Update Your Account</div>
//                 <div className="settingsUpdateTitle">Delete Account</div>
//             </div>
//         </div>
        
//     </div>
//   )
// }
