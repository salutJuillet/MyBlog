import './singlepost.css'
import { Link } from 'react-router-dom';

export default function SinglePost() {
  return (
    <div className="single">
        <div className="singlePostWrapper">
            <img src="images/post01.jpg" alt="post01" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Cookie: Look at my fancy boots!
                <div className="singlePostEdit">
                    <Link to="/Write" className="singlePostIcon">
                      <i className="fa-solid fa-pencil"></i>
                    </Link>
                    <Link to="/" className="singlePostIcon">
                    <i className="fa-solid fa-trash-can"></i>
                    </Link>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostDate">1 hour ago</span>
                <p>I bought this lovely cookie on my younger sister's birthday.</p>
                <p>I bought this lovely cookie on my younger sister's birthday.</p>
                <p>I bought this lovely cookie on my younger sister's birthday.</p>
            </div>
        </div>
    </div>
  )
}
