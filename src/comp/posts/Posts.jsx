import './posts.css'
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <div className="posts">
        <img src="images/post01.jpg" alt="post01" className="postImg" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">일상</span>
            <span className="postCat">일상</span>
          </div>
          <p className="postTitle">
              <Link to="/Detail">
              Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi!
              </Link>
          </p>
          <span className="postDate">1 hour ago</span>
        </div>
        
        <hr />

    </div>
  )
}
