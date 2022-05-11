import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT MYSELF
            </span>
            <img src="images/me02.jpg" alt="about" />
            <p>반짝거리는 걸 좋아합니다. </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">
                CATEGORIES
            </span>
            <ul className="sidebarList">
              <li className="sidebarListItem">일상</li>
              <li className="sidebarListItem">취향</li>
              <li className="sidebarListItem">작품</li>
              <li className="sidebarListItem">희망</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">
                TAGS
            </span>
            <div className="tagList">
              <span className="tagListItem">바다</span>
              <span className="tagListItem">크리스마스</span>
              <span className="tagListItem">build_a_bear</span>
              <span className="tagListItem">Melbourne</span>
              <span className="tagListItem">닌텐도</span>
              <span className="tagListItem">일기</span>
              <span className="tagListItem">디저트</span>
              <span className="tagListItem">salut</span>
              <span className="tagListItem">공부</span>
              <span className="tagListItem">favorites</span>
            </div>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">
                FOLLOW ME
            </span>
            <div className="socialList">
                <i className="socialItem fa-brands fa-instagram-square"></i>            
                <i className="socialItem fa-brands fa-facebook-square"></i>
                <i className="socialItem fa-brands fa-twitter-square"></i>
                <i className="socialItem fa-brands fa-youtube-square"></i>
            </div>
        </div>



    </div>
  )
}
