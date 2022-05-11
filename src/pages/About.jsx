import './about.css'
import Header from '../comp/header/Header';
import Sidebar from '../comp/sidebar/Sidebar';

export default function About() {
  return (
    <>
        <Header />

        <div className="container about">
            <div className="contactMe">
                <div className="contactTitle">
                  <h1>Contact Me</h1>
                </div>
                
                <div className="contactContent">
                  <img src="images/me01.jpg" alt="me" />
                  <div className="contactText">
                    <h1>Juillet</h1>
                    <h2>salut.juilllet@gmail.com</h2>
                    <h2>여기엔 뭐를 쓰지</h2>
                  </div>
                </div>
                <div className="aboutMeContent">
                    <p>반짝거리는 걸 좋아합니다.</p>
                </div>
            </div>
            <Sidebar />
        </div>
    </>
  )
}
