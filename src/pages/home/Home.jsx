import './home.css'
import Header from '../../comp/header/Header';
import Posts from '../../comp/posts/Posts';
import Sidebar from '../../comp/sidebar/Sidebar';

export default function Home() {
  return (
    <>
        <Header />
        <div className="container list">
            <div className="post">
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
            </div>
            <Sidebar />
        </div>
    </>
  )
}